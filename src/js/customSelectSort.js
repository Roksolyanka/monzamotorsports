export function initializeCustomSelectSort() {
  document.querySelectorAll('.offers-sort-select').forEach(function (element) {
    element.style.display = 'none';

    let selectWrapper = document.createElement('div');
    selectWrapper.classList.add('offers-custom-select-wrapper-sort');
    element.parentNode.insertBefore(selectWrapper, element);
    selectWrapper.appendChild(element);

    let select = document.createElement('div');
    select.classList.add('offers-styled-dropdown-sort');
    select.textContent = element.querySelector('option').textContent;
    selectWrapper.appendChild(select);

    let optionList = document.createElement('div');
    optionList.classList.add('offers-option-list-sort');
    selectWrapper.appendChild(optionList);

    element.querySelectorAll('option').forEach(function (option) {
      let optionItem = document.createElement('div');
      optionItem.classList.add('offers-option-item-sort');
      optionItem.innerHTML = '<span>' + option.textContent + '</span>';
      optionItem.setAttribute('data-value', option.value);
      optionList.appendChild(optionItem);
    });

    optionList.style.display = 'none';

    select.addEventListener('click', function () {
      let isOpen = select.classList.contains('on');
      if (!isOpen) {
        select.classList.add('on');
        optionList.style.display = 'block';

        let selectedValue = element.value;

        optionList
          .querySelectorAll('.offers-option-item-sort')
          .forEach(function (item) {
            if (item.getAttribute('data-value') === selectedValue) {
              item.style.display = 'none';
            } else {
              item.style.display = 'block';
            }
          });
      } else {
        select.classList.remove('on');
        optionList.style.display = 'none';
      }
    });

    optionList
      .querySelectorAll('.offers-option-item-sort')
      .forEach(function (item) {
        item.addEventListener('click', function () {
          let chooseItem = this.getAttribute('data-value');
          element.value = chooseItem;
          select.textContent = this.querySelector('span').textContent;
          optionList.style.display = 'none';
          select.classList.remove('on');

          updateCustomSelectStyleSort(element.parentNode, chooseItem);

          let event = new Event('change');
          element.dispatchEvent(event);
        });
      });
  });
}

export function updateCustomSelectStyleSort(selectWrapper, selectedValue) {
  let select = selectWrapper.querySelector('.offers-styled-dropdown-sort');
  if (selectedValue) {
    select.style.color = 'var(--brand-color)';
  }
}
