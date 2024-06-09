import { cars } from './cars.js';
import { createCards } from './createCards.js';
import { updateModelOptions } from './customModels.js';
import { resetCustomSelects } from './updateFilterButton.js';

document.addEventListener('DOMContentLoaded', () => {
  const yearSelect = document.getElementById('yearSelect');
  const makeSelect = document.getElementById('makeSelect');
  const modelSelect = document.getElementById('modelSelect');
  const trimSelect = document.getElementById('trimSelect');
  const mileageSelect = document.getElementById('mileageSelect');
  const filterButton = document.getElementById('btnFilterCars');
  const totalCarsSpanBtn = document.getElementById('totalCars');
  const availableCheckbox = document.getElementById('available');
  const sortSelect = document.getElementById('sortSelect');

  totalCarsSpanBtn.textContent = cars.length;

  function filterAndSortCars() {
    let filteredCars = [...cars];

    const selectedYear = yearSelect.value;
    const selectedMake = makeSelect.value;
    const selectedModel = modelSelect.value;
    const selectedTrim = trimSelect.value;
    const selectedMileage = mileageSelect.value;
    const showAvailableOnly = availableCheckbox.checked;

    if (selectedYear) {
      filteredCars = filteredCars.filter(car => car.year == selectedYear);
    }

    if (selectedMake) {
      filteredCars = filteredCars.filter(car => car.make == selectedMake);
      updateModelOptions(selectedMake);
    } else {
      updateModelOptions();
    }

    if (selectedModel) {
      filteredCars = filteredCars.filter(car => car.model == selectedModel);
    }

    if (selectedTrim) {
      filteredCars = filteredCars.filter(car => car.fuelType == selectedTrim);
    }

    if (selectedMileage) {
      filteredCars = filteredCars.filter(car => {
        const mileage = car.mileage;
        switch (selectedMileage) {
          case '1':
            return mileage < 30000;
          case '2':
            return mileage >= 30000 && mileage <= 40000;
          case '3':
            return mileage >= 40001 && mileage <= 50000;
          case '4':
            return mileage >= 50001 && mileage <= 60000;
          case '5':
            return mileage >= 60001 && mileage <= 70000;
          case '6':
            return mileage >= 70001 && mileage <= 80000;
          case '7':
            return mileage >= 80001 && mileage <= 90000;
          case '8':
            return mileage >= 90001 && mileage <= 100000;
          case '9':
            return mileage > 100000;
          default:
            return true;
        }
      });
    }

    if (showAvailableOnly) {
      filteredCars = filteredCars.filter(car => !car.isSold);
    }

    const selectedSortOption = sortSelect.value;

    switch (selectedSortOption) {
      case 'Publication date (ascending)':
        filteredCars.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return new Date(b.date) - new Date(a.date);
        });
        break;
      case 'Publication date (descending)':
        filteredCars.sort((a, b) => {
          if (a.isNew && !b.isNew) return 1;
          if (!a.isNew && b.isNew) return -1;
          return new Date(a.date) - new Date(b.date);
        });
        break;
      case 'Price (ascending)':
        filteredCars.sort((a, b) => a.price - b.price);
        break;
      case 'Price (descending)':
        filteredCars.sort((a, b) => b.price - a.price);
        break;
      case 'Mileage (ascending)':
        filteredCars.sort((a, b) => a.mileage - b.mileage);
        break;
      case 'Mileage (descending)':
        filteredCars.sort((a, b) => b.mileage - a.mileage);
        break;
      case 'Performance (ascending)':
        filteredCars.sort((a, b) => a.year - b.year);
        break;
      case 'Performance (descending)':
        filteredCars.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }

    createCards(filteredCars);
  }

  yearSelect.addEventListener('change', filterAndSortCars);
  makeSelect.addEventListener('change', filterAndSortCars);
  modelSelect.addEventListener('change', filterAndSortCars);
  trimSelect.addEventListener('change', filterAndSortCars);
  mileageSelect.addEventListener('change', filterAndSortCars);
  availableCheckbox.addEventListener('change', filterAndSortCars);

  filterButton.addEventListener('click', () => {
    yearSelect.value = '';
    makeSelect.value = '';
    modelSelect.innerHTML = '<option value="" selected>Model</option>';
    trimSelect.value = '';
    mileageSelect.value = '';
    availableCheckbox.checked = false;

    filterAndSortCars();
    resetCustomSelects();
  });

  sortSelect.addEventListener('change', filterAndSortCars);

  filterAndSortCars();
});
