export function initializeCustomSelects() {
  document.querySelectorAll('.styled-select').forEach(function (element) {
    element.style.display = 'none';

    let selectWrapper = document.createElement('div');
    selectWrapper.classList.add('custom-select-wrapper');
    element.parentNode.insertBefore(selectWrapper, element);
    selectWrapper.appendChild(element);

    let select = document.createElement('div');
    select.classList.add('styled-dropdown');
    select.textContent = element.querySelector('option').textContent;
    selectWrapper.appendChild(select);

    let optionList = document.createElement('div');
    optionList.classList.add('option-list');
    selectWrapper.appendChild(optionList);

    element.querySelectorAll('option').forEach(function (option) {
      let optionItem = document.createElement('div');
      optionItem.classList.add('option-item');
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

        optionList.querySelectorAll('.option-item').forEach(function (item) {
          item.addEventListener('click', function () {
            let chooseItem = this.getAttribute('data-value');
            element.value = chooseItem;
            select.textContent = this.querySelector('span').textContent;
            optionList.style.display = 'none';
            select.classList.remove('on');

            updateCustomSelectStyle(element.parentNode, chooseItem);

            let event = new Event('change');
            element.dispatchEvent(event);
          });
        });
      } else {
        select.classList.remove('on');
        optionList.style.display = 'none';
      }
    });
  });
}

export function updateCustomSelectStyle(selectWrapper, selectedValue) {
  let select = selectWrapper.querySelector('.styled-dropdown');
  if (selectedValue) {
    select.style.borderColor = 'var(--brand-color)';
  } else {
    select.style.borderColor = '';
  }
}
