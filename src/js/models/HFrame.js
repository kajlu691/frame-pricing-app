import OFrame from './OFrame';

export default class HFrame extends OFrame {
  calcHosesPrice() {
    // Hoses are always 2.5 cm shorter than outer height of frame (1.08 is the price for 2.5cm of diffuser)
    return (this.hoseType * this.outerHeight - 1.08) * this.numOfHoses;
  }

  calcAngleIronPrice(angleIron) {
    return this.outerWidth * angleIron;
  }

  calcMidRoll(midRoll) {
    return (this.outerWidth - 0.025) * midRoll;
  }
}
