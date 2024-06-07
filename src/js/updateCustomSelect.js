export function updateCustomSelect(element) {
  let selectWrapper = element.parentNode;
  let select = selectWrapper.querySelector('.styled-dropdown');
  let optionList = selectWrapper.querySelector('.option-list');

  select.textContent = element.querySelector('option').textContent;

  optionList.innerHTML = '';

  element.querySelectorAll('option').forEach(function (option) {
    let optionItem = document.createElement('div');
    optionItem.classList.add('option-item');
    optionItem.innerHTML = '<span>' + option.textContent + '</span>';
    optionItem.setAttribute('data-value', option.value);
    optionList.appendChild(optionItem);

    optionItem.addEventListener('click', function () {
      let chooseItem = this.getAttribute('data-value');
      element.value = chooseItem;
      select.textContent = this.querySelector('span').textContent;
      optionList.style.display = 'none';
      select.classList.remove('on');

      let event = new Event('change');
      element.dispatchEvent(event);
    });
  });

  if (element.disabled) {
    selectWrapper.classList.add('disabled');
  } else {
    selectWrapper.classList.remove('disabled');
  }
}
