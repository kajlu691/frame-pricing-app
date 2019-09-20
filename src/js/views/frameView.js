export const inputDataView = {
  frameType: document.getElementById('frame-type').value,
  steelType: document.getElementById('steel-type').value,
  hoseType: document.getElementById('hose-type').value,
  hosesNum: document.getElementById('hoses-num').value,
  outerWidth: document.getElementById('outer-width').value,
  outerHeight: document.getElementById('outer-height').value,
  quantity: document.getElementById('quantity').value,
  discount: document.getElementById('discount').value,
  flatBar: document.getElementById('flat-bar').checked,
};

const totalContainer = document.getElementById('frame-total');

export const renderTotal = (total, quantity, discount) => {
  const markup = `<h2>TOTAL: ${total * quantity * discount} ZŁ</h2>`;
  totalContainer.innerHTML = markup;
};
