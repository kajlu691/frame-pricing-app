import OFrame from './models/OFrame';
import Manifold from './models/Manifold';
import {
  hoses,
  steel304,
  steel316,
  labor,
  addings,
  manifoldLabor,
} from './views/base';
import { inputDataView, renderFrameTotal } from './views/frameView';
import { maniInputDataView, renderManiTotal } from './views/manifoldView';

/**
 * Frame price calculator controller
 */
(function() {
  /**
   * OFrame price calculator controller
   * Calculates the price of one frame
   */
  const calcOFramePrice = () => {
    const inputData = {
      numOfHoses: inputDataView.hosesNum,
      outerWidth: inputDataView.outerWidth.replace(',', '.'),
      outerHeight: inputDataView.outerHeight.replace(',', '.'),
    };

    // Choose the right price of given hose type
    const hosesArr = Object.values(hoses);

    let hose;
    if (inputDataView.hoseType === 'airprax') {
      hose = 0;
    } else {
      hose = 1;
    }

    let steel;
    if (inputDataView.steelType === '304') {
      steel = steel304;
    } else {
      steel = steel316;
    }

    // Create new frame
    const frame = new OFrame(
      hosesArr[hose],
      parseInt(inputData.numOfHoses),
      parseFloat(inputData.outerWidth),
      parseFloat(inputData.outerHeight)
    );

    // Calculate hose price
    const hosePrice = frame.calcHosesPrice();
    // Calculate iron angle price
    const ironAnglePrice = frame.calcAngleIronPrice(steel.katownik);
    // Calculate profile and flat bar price
    const profilePrice = frame.calcProfilePrice(steel.profil, steel.plaskownik);
    // Calculate tube, roll and nipple price
    const tubePrice = frame.calcTubePrice(
      steel.rurka,
      steel.walek,
      steel.nypel
    );
    // Calculate labor price
    const laborPrice = frame.calcLaborPrice(
      labor.robociznaBaza,
      labor.robociznaZaWaz
    );

    const flatBar = frame.calcAdditionalBar(
      inputDataView.flatBar,
      steel.plaskownik
    );

    const total =
      hosePrice +
      ironAnglePrice +
      profilePrice +
      tubePrice +
      laborPrice +
      flatBar;
    return Math.ceil(total);
  };

  // Calculate the discount
  const discount = () => {
    const input = inputDataView.discount;
    const discountInFraction = 1 - input / 100;
    return discountInFraction;
  };

  window.onload = renderFrameTotal(
    calcOFramePrice(),
    inputDataView.quantity,
    discount()
  );

  inputDataView.btn.addEventListener('click', () => {
    window.location.reload();
  });
})();

/**
 * ---------------------------------------------------
 * Manifold price calculator controller
 * Calculates the price of one manifold
 * ---------------------------------------------------
 */

(function() {
  let hosesPrice;
  let profilePrice;
  let tubePrice;
  let laborPrice;

  const calcManifoldPrice = () => {
    const inputData = {
      numOfHoses: maniInputDataView.hosesNum,
      outerWidth: maniInputDataView.outerWidth.replace(',', '.'),
      hosesLength: maniInputDataView.hosesLength.replace(',', '.'),
    };

    // Choose the right price of given hose type
    const hosesArr = Object.values(hoses);

    let hose;
    if (maniInputDataView.hoseType === 'airprax') {
      hose = 0;
    } else {
      hose = 1;
    }

    let steel;
    if (maniInputDataView.steelType === '304') {
      steel = steel304;
    } else {
      steel = steel316;
    }

    // Create new manifold object
    const manifold = new Manifold(
      hosesArr[hose],
      parseFloat(inputData.hosesLength),
      parseInt(inputData.numOfHoses),
      parseFloat(inputData.outerWidth)
    );

    // Calculate hoses price
    hosesPrice = manifold.calcHosesPrice(
      addings.pret,
      addings.zatyczka,
      addings.opaska
    );
    // Calculate profile price
    profilePrice = manifold.calcProfilePrice(steel.profil, steel.plaskownik);
    // Calculate tube price
    tubePrice = manifold.calcTubePrice(steel.rurka, steel.nypel);
    // Calculate labor
    laborPrice = manifold.calcLaborPrice(
      manifoldLabor.robociznaBaza,
      manifoldLabor.robociznaZaWaz
    );

    const total = hosesPrice + profilePrice + tubePrice + laborPrice;

    return total;
  };

  // Calculate the discount
  const discount = () => {
    const input = maniInputDataView.discount;
    const discountInFraction = 1 - input / 100;
    return discountInFraction;
  };

  window.onload = renderManiTotal(
    calcManifoldPrice(),
    maniInputDataView.quantity,
    discount(),
    hosesPrice,
    profilePrice,
    tubePrice,
    laborPrice
  );

  maniInputDataView.calcBtn.addEventListener('click', () => {
    window.location.reload();
  });
})();
