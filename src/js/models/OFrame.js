// This class represents O-type frame
export default class OFrame {
  constructor(hoseType, numOfHoses, outerWidth, outerHeight) {
    this.hoseType = hoseType;
    this.numOfHoses = numOfHoses;
    this.outerWidth = outerWidth;
    this.outerHeight = outerHeight;
  }

  calcHosesPrice() {
    // Hoses are always 2.5 cm shorter than outer height of frame
    return (this.hoseType * this.outerHeight - 1.08) * this.numOfHoses;
  }

  calcAngleIronPrice(angleIron) {
    return (
      this.outerWidth * angleIron + (this.outerHeight * 2 - 0.05) * angleIron
    );
  }

  // Calculate ss steel profile price and add two 3cm flat bars for each side
  calcProfilePrice(profile, flatBar) {
    return this.outerWidth * profile + flatBar * 0.05;
  }

  calcAdditionalBar(condition, flatBar) {
    if (condition) {
      return this.outerWidth * flatBar;
    }
    return 0;
  }

  calcTubePrice(tube, roll, nipple) {
    return this.numOfHoses * (0.03 * tube + 0.03 * roll) + nipple;
  }

  calcLaborPrice(basePrice, pricePerHose) {
    return basePrice + this.numOfHoses * pricePerHose;
  }
}
