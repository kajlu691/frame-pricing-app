import OFrame from './OFrame';

export default class HFrame extends OFrame {
  calcAngleIronPrice(angleIron) {
    return this.outerWidth * angleIron;
  }

  calcMidRoll(midRoll) {
    return (this.outerWidth - 0.025) * midRoll;
  }
}
