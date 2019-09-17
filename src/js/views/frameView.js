export const inputDataView = {
  frameType: document.getElementById('frame-type').value,
  steelType: document.getElementById('steel-type').value,
  hoseType: document.getElementById('hose-type').value,
  hosesNum: document.getElementById('hoses-num').value,
  outerWidth: document.getElementById('outer-width').value,
  outerHeight: document.getElementById('outer-height').value,
};

const totalContainer = document.querySelector('.total');

export const renderTotal = total => {
  const markup = `<h2>TOTAL: ${total} ZŁ</h2>`;
  totalContainer.innerHTML = markup;
};
