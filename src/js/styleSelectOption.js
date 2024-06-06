document.addEventListener('DOMContentLoaded', () => {
  const selectElements = document.querySelectorAll('.custom-select');
  const carsButton = document.getElementById('btnFilterCars');

  function checkSelects() {
    let anySelected = false;
    selectElements.forEach(select => {
      if (select.value !== '') {
        anySelected = true;
      }
    });
    return anySelected;
  }

  selectElements.forEach(select => {
    select.addEventListener('change', () => {
      if (select.value) {
        select.classList.add('selected');
      } else {
        select.classList.remove('selected');
      }

      if (checkSelects()) {
        carsButton.disabled = false;
      } else {
        carsButton.disabled = true;
      }
    });
  });
});
