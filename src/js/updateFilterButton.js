import { updateCustomSelectStyle } from './customSelect';

export function updateFilterButtonState() {
  let filterItems = document.querySelectorAll('.offers-filter-item select');
  let btnFilterCars = document.getElementById('btnFilterCars');
  let selectedFilter = false;

  filterItems.forEach(function (filterItem) {
    if (filterItem.value !== '') {
      selectedFilter = true;
    }
  });

  if (selectedFilter) {
    btnFilterCars.disabled = false;
  } else {
    btnFilterCars.disabled = true;
  }
}

export function resetCustomSelects() {
  document
    .querySelectorAll('.offers-custom-select-wrapper')
    .forEach(function (wrapper) {
      let originalSelect = wrapper.querySelector('.offers-styled-select');
      let styledDropdown = wrapper.querySelector('.offers-styled-dropdown');
      let optionList = wrapper.querySelector('.offers-option-list');

      styledDropdown.classList.remove('on');
      optionList.style.display = 'none';

      styledDropdown.textContent =
        originalSelect.querySelector('option').textContent;

      updateCustomSelectStyle(wrapper, originalSelect.value);
    });
  updateFilterButtonState();

  const modelSelect = document.getElementById('modelSelect');
  if (modelSelect) {
    modelSelect.disabled = true;
    const modelWrapper = modelSelect.closest('.offers-custom-select-wrapper');
    if (modelWrapper) {
      modelWrapper.classList.add('disabled');
    }
  }
}
