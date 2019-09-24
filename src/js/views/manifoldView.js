export const maniInputDataView = {
  steelType: document.getElementById('mani-steel-type').value,
  hoseType: document.getElementById('mani-hose-type').value,
  hosesNum: document.getElementById('mani-hoses-num').value,
  hosesLength: document.getElementById('mani-hoses-length').value,
  outerWidth: document.getElementById('mani-width').value,
  quantity: document.getElementById('mani-quantity').value,
  discount: document.getElementById('mani-discount').value,
  calcBtn: document.getElementById('mani-calc-btn'),
};

const totalContainer = document.getElementById('mani-total');
const totalHosesContainer = document.getElementById('mani-total-hoses');
const totalManifoldsContainer = document.getElementById('mani-total-manifolds');

export const renderManiTotal = (
  total,
  quantity,
  discount,
  hosesTotal,
  profilePrice,
  tubeTotal,
  labor
) => {
  const manifoldPrice = Math.ceil(
    (profilePrice + tubeTotal + labor) * discount * quantity
  );
  const hosesPrice = Math.ceil(hosesTotal * discount * quantity);

  const markupTotal = `<h2>TOTAL: ${manifoldPrice + hosesPrice} ZŁ</h2>`;
  const markupHosesTotal = `<h2>Hoses TOTAL: ${hosesPrice} ZŁ</h2>`;
  const markupManifoldsTotal = `<h2>Manifolds TOTAL: ${manifoldPrice} ZŁ</h2>`;
  totalContainer.innerHTML = markupTotal;
  totalHosesContainer.innerHTML = markupHosesTotal;
  totalManifoldsContainer.innerHTML = markupManifoldsTotal;
};
