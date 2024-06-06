document.addEventListener('DOMContentLoaded', function () {
  const makeSelect = document.getElementById('makeSelect');
  const modelSelect = document.getElementById('modelSelect');

  const models = {
    Honda: ['Civic', 'Accord', 'Fit'],
    Kia: ['Cerato', 'Forte', 'Sportage'],
    Toyota: ['Highlander', 'Camry', 'Venza'],
    Volkswagen: ['Tiguan', 'Amarok', 'T-Cross'],
    Lexus: ['RX', 'NX', 'RC'],
    Hyundai: ['Elantra', 'Accent', 'Sonata'],
    Mercedes: ['GLE-Class', 'C-Class', 'E-Class'],
  };

  makeSelect.addEventListener('change', function () {
    const selectedMake = this.value;
    modelSelect.innerHTML = '<option value="">Model</option>';

    if (selectedMake) {
      modelSelect.disabled = false;
      models[selectedMake].forEach(function (model) {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    } else {
      modelSelect.disabled = true;
    }
  });
});
