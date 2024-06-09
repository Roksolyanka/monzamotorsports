import {
  resetCustomSelects,
  updateFilterButtonState,
} from './updateFilterButton';
import { initializeModelSelect } from './customModels';
import {
  initializeCustomSelects,
  updateCustomSelectStyle,
} from './customSelect';
import { updateCustomSelect } from './updateCustomSelect';
import {
  initializeCustomSelectSort,
  updateCustomSelectStyleSort,
} from './customSelectSort';

document.addEventListener('DOMContentLoaded', function () {
  let filterItems = document.querySelectorAll('.filter-item select');

  initializeCustomSelects();
  initializeModelSelect();

  document.querySelectorAll('.styled-select').forEach(function (element) {
    updateCustomSelect(element);
    updateCustomSelectStyle(element.parentNode, element.value);
  });

  filterItems.forEach(function (filterItem) {
    filterItem.addEventListener('change', function () {
      updateFilterButtonState();
    });
  });

  initializeCustomSelectSort();
  document
    .querySelectorAll('.offers-styled-dropdown-sort')
    .forEach(function (element) {
      updateCustomSelectStyleSort(element.parentNode, element.value);
    });
  resetCustomSelects();
});
