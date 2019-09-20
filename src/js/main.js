import OFrame from './models/OFrame';
import { hoses, steel304, steel316, labor } from './views/base';
import { inputDataView, renderTotal } from './views/frameView';

/**
 * OFrame price calculator controller
 * Calculates the price of one frame
 */
const calcOFramePrice = () => {
  const inputData = {
    numOfHoses: parseInt(inputDataView.hosesNum),
    outerWidth: parseFloat(inputDataView.outerWidth),
    outerHeight: parseFloat(inputDataView.outerHeight),
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
    inputData.numOfHoses,
    inputData.outerWidth,
    inputData.outerHeight
  );

  // Calculate hose price
  const hosePrice = frame.calcHosesPrice();
  // Calculate iron angle price
  const ironAnglePrice = frame.calcAngleIronPrice(steel.katownik);
  // Calculate profile and flat bar price
  const profilePrice = frame.calcProfilePrice(steel.profil, steel.plaskownik);
  // Calculate tube, roll and nipple price
  const tubePrice = frame.calcTubePrice(steel.rurka, steel.walek, steel.nypel);
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

const btn = document.querySelector('.calc-btn');

window.onload = renderTotal(
  calcOFramePrice(),
  inputDataView.quantity,
  discount()
);

btn.addEventListener('click', () => {
  window.location.reload();
});
