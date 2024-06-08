import { cars } from './cars';
import { updateCustomSelect } from './updateCustomSelect';
import { updateFilterButtonState } from './updateFilterButton';

let makeSelect = document.getElementById('makeSelect');
let modelSelect = document.getElementById('modelSelect');

export function initializeModelSelect() {
  makeSelect.addEventListener('change', function () {
    const selectedMake = this.value;
    modelSelect.innerHTML = '<option value="">Model</option>';

    if (selectedMake) {
      const models = [
        ...new Set(
          cars.filter(car => car.make === selectedMake).map(car => car.model)
        ),
      ];
      models.forEach(function (model) {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    } else {
      modelSelect.disabled = true;
    }

    updateCustomSelect(modelSelect);
    updateFilterButtonState();
  });
}

export function updateModelOptions(selectedMake = '') {
  const modelSelect = document.getElementById('modelSelect');
  modelSelect.innerHTML = '<option value="" selected>Model</option>';

  if (selectedMake) {
    const models = [
      ...new Set(
        cars.filter(car => car.make === selectedMake).map(car => car.model)
      ),
    ];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
    modelSelect.disabled = false;
  } else {
    modelSelect.disabled = true;
  }
}


