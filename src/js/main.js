import OFrame from './models/OFrame';
import { hoses, steel304, steel316, labor } from './views/base';
import { inputDataView, renderTotal } from './views/frameView';

/**
 * OFrame price calculator controller
 */
const calcOFramePrice = () => {
  const inputData = {
    numOfHoses: parseInt(inputDataView.hosesNum),
    outerWidth: parseInt(inputDataView.outerWidth),
    outerHeight: parseInt(inputDataView.outerHeight),
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
  frame.calcHosesPrice();
  // Calculate iron angle price
  frame.calcAngleIronPrice(steel.katownik);
  // Calculate profile and flat bar price
  frame.calcProfilePrice(steel.profil, steel.plaskownik);
  // Calculate tube, roll and nipple price
  frame.calcTubePrice(steel.rurka, steel.walek, steel.nypel);
  // Calculate labor price
  frame.calcLaborPrice(labor.robociznaBaza, labor.robociznaZaWaz);
};

const btn = document.querySelector('.calc-btn');

function refreshPage() {
  window.location.reload();
}

window.onload = renderTotal(30);

btn.addEventListener('click', e => {
  refreshPage();
  calcOFramePrice();
});
