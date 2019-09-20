// This class represents stainless steel manifold
export default class Manifold {
  constructor(hoseType, hoseLength, numOfHoses, width) {
    this.hoseType = hoseType;
    this.hoseLength = hoseLength;
    this.numOfHoses = numOfHoses;
    this.width = width;
  }

  calcHosesPrice(rod, plug, band) {
    return (
      this.hoseType * this.hoseLength * this.numOfHoses +
      this.hoseLength * rod * this.numOfHoses +
      plug +
      band
    );
  }

  calcProfilePrice(profile, flatBar) {
    return this.width * profile + flatBar * 0.05;
  }

  calcTubePrice(tube, nipple) {
    return this.numOfHoses * (0.03 * tube) + nipple;
  }

  calcLaborPrice(basePrice, pricePerHose) {
    return basePrice + this.numOfHoses * pricePerHose;
  }
}
