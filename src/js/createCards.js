import { cars } from './cars';

const offersWrapper = document.querySelector('.offers-wrapper-card');

export function createCards(filteredCars = cars) {
  offersWrapper.innerHTML = '';
  filteredCars.forEach(car => {
    const card = document.createElement('div');
    card.classList.add('offers-card', 'card', 'col', 'p-0');

    if (car.isSold) {
      card.classList.add('offers-sold-card');
      card.dataset.sold = 'true';
    } else {
      card.dataset.sold = 'false';
    }

    card.innerHTML = `
            <div class="position-relative">
                <img
                    src="${car.img.src}"
                    srcset="${car.img.srcset}"
                    width="295"
                    height="200"
                    class="offers-img-car card-img-top"
                    alt="Car Image"
                />
                 ${
                   car.isSold
                     ? '<div class="offers-sold-car-overlay">SOLD</div>'
                     : ''
                 }
            </div>
            <div class="offers-wrapper-information-car card-body">
                <div class="offers-wrapper-title-car row row-cols-2 m-0">
                    <p class="offers-year-car col-3 p-0">${car.year}</p>
                    <h6 class="offers-title-car card-title col-auto p-0">
                        ${car.make} ${car.model}
                    </h6>
                </div>
                <p class="offers-characteristics-car card-text">
                    ${car.mileage} km | ${car.transmission} | ${car.fuelType}
                </p>
                <h5 class="offers-price-car">$${car.price}</h5>
            </div>
        `;

    offersWrapper.appendChild(card);
  });
}

createCards();
