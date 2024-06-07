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
