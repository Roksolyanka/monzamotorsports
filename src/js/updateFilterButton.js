import { updateCustomSelectStyle } from './customSelect';

export function updateFilterButtonState() {
  let filterItems = document.querySelectorAll('.filter-item select');
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
    .querySelectorAll('.custom-select-wrapper')
    .forEach(function (wrapper) {
      let originalSelect = wrapper.querySelector('.styled-select');
      let styledDropdown = wrapper.querySelector('.styled-dropdown');
      let optionList = wrapper.querySelector('.option-list');

      styledDropdown.classList.remove('on');
      optionList.style.display = 'none';

      styledDropdown.textContent =
        originalSelect.querySelector('option').textContent;

      updateCustomSelectStyle(wrapper, originalSelect.value);
    });
}
