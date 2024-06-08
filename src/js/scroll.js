document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('a[href="#offers"]')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#offers').scrollIntoView({
        behavior: 'smooth',
      });
    });
});
