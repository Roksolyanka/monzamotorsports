import volkswagenTiguanImg from '../assets/images/volkswagen-tiguan.jpg';
import volkswagenTiguanImg2x from '../assets/images/volkswagen-tiguan-2x.jpg';
import toyotaHlXLEImg from '../assets/images/toyota-highlander-xle.jpg';
import toyotaHlXLEImg2x from '../assets/images/toyota-highlander-xle-2x.jpg';
import lexusRXLuxuryImg from '../assets/images/lexus-rx-luxury.jpg';
import lexusRXLuxuryImg2x from '../assets/images/lexus-rx-luxury-2x.jpg';
import toyotaHlLEImg from '../assets/images/toyota-highlander-le.jpg';
import toyotaHlLEImg2x from '../assets/images/toyota-highlander-le-2x.jpg';
import hyundaiElantraImg from '../assets/images/hyundai-elantra.jpg';
import hyundaiElantraImg2x from '../assets/images/hyundai-elantra-2x.jpg';
import mercedesGLEImg from '../assets/images/mercedes-benz.jpg';
import mercedesGLEImg2x from '../assets/images/mercedes-benz-2x.jpg';
import toyotaVenzaImg from '../assets/images/toyota-venza.jpg';
import toyotaVenzaImg2x from '../assets/images/toyota-venza-2x.jpg';
import lexusRXSportImg from '../assets/images/lexus-rx-fsport.jpg';
import lexusRXSportImg2x from '../assets/images/lexus-rx-fsport-2x.jpg';

export const cars = [
  {
    make: 'Volkswagen',
    model: 'Tiguan',
    year: 2019,
    mileage: 19855,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 34888,
    img: {
      src: volkswagenTiguanImg,
      srcset: `
        ${volkswagenTiguanImg} 1x,
        ${volkswagenTiguanImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander XLE',
    year: 2014,
    mileage: 69000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 27875,
    img: {
      src: toyotaHlXLEImg,
      srcset: `
        ${toyotaHlXLEImg} 1x,
        ${toyotaHlXLEImg2x} 2x
      `,
    },
    isNew: true,
    isSold: false,
  },
  {
    make: 'Lexus',
    model: 'RX 350 LUXURY',
    year: 2017,
    mileage: 39850,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 38775,
    img: {
      src: lexusRXLuxuryImg,
      srcset: `
        ${lexusRXLuxuryImg} 1x,
        ${lexusRXLuxuryImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander LE AWD',
    year: 2016,
    mileage: 104000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 23728,
    img: {
      src: toyotaHlLEImg,
      srcset: `
        ${toyotaHlLEImg} 1x,
        ${toyotaHlLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Hyundai',
    model: 'Elantra',
    year: 2017,
    mileage: 95000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 11788,
    img: {
      src: hyundaiElantraImg,
      srcset: `
        ${hyundaiElantraImg} 1x,
        ${hyundaiElantraImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Mercedes-Benz',
    model: 'GLE-Class',
    year: 2016,
    mileage: 59800,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 38878,
    img: {
      src: mercedesGLEImg,
      srcset: `
        ${mercedesGLEImg} 1x,
        ${mercedesGLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Venza AWD XLE',
    year: 2015,
    mileage: 99000,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 18620,
    img: {
      src: toyotaVenzaImg,
      srcset: `
        ${toyotaVenzaImg} 1x,
        ${toyotaVenzaImg2x} 2x
      `,
    },
    isNew: false,
    isSold: true,
  },
  {
    make: 'Lexus',
    model: 'RX 350 F-SPORT',
    year: 2016,
    mileage: 86000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 34888,
    img: {
      src: lexusRXSportImg,
      srcset: `
        ${lexusRXSportImg} 1x,
        ${lexusRXSportImg2x} 2x
      `,
    },
    isNew: true,
    isSold: false,
  },
  {
    make: 'Volkswagen',
    model: 'Tiguan',
    year: 2019,
    mileage: 19855,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 34888,
    img: {
      src: volkswagenTiguanImg,
      srcset: `
        ${volkswagenTiguanImg} 1x,
        ${volkswagenTiguanImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander XLE',
    year: 2014,
    mileage: 69000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 27875,
    img: {
      src: toyotaHlXLEImg,
      srcset: `
        ${toyotaHlXLEImg} 1x,
        ${toyotaHlXLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Lexus',
    model: 'RX 350 LUXURY',
    year: 2017,
    mileage: 39850,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 38775,
    img: {
      src: lexusRXLuxuryImg,
      srcset: `
        ${lexusRXLuxuryImg} 1x,
        ${lexusRXLuxuryImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander LE AWD',
    year: 2016,
    mileage: 104000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 23728,
    img: {
      src: toyotaHlLEImg,
      srcset: `
        ${toyotaHlLEImg} 1x,
        ${toyotaHlLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Volkswagen',
    model: 'Tiguan',
    year: 2019,
    mileage: 19855,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 34888,
    img: {
      src: volkswagenTiguanImg,
      srcset: `
        ${volkswagenTiguanImg} 1x,
        ${volkswagenTiguanImg2x} 2x
      `,
    },
    isNew: true,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander XLE',
    year: 2014,
    mileage: 69000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 27875,
    img: {
      src: toyotaHlXLEImg,
      srcset: `
        ${toyotaHlXLEImg} 1x,
        ${toyotaHlXLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Lexus',
    model: 'RX 350 LUXURY',
    year: 2017,
    mileage: 39850,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 38775,
    img: {
      src: lexusRXLuxuryImg,
      srcset: `
        ${lexusRXLuxuryImg} 1x,
        ${lexusRXLuxuryImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander LE AWD',
    year: 2016,
    mileage: 104000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 23728,
    img: {
      src: toyotaHlLEImg,
      srcset: `
        ${toyotaHlLEImg} 1x,
        ${toyotaHlLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Hyundai',
    model: 'Elantra',
    year: 2017,
    mileage: 95000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 11788,
    img: {
      src: hyundaiElantraImg,
      srcset: `
        ${hyundaiElantraImg} 1x,
        ${hyundaiElantraImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Mercedes-Benz',
    model: 'GLE-Class',
    year: 2016,
    mileage: 59800,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 38878,
    img: {
      src: mercedesGLEImg,
      srcset: `
        ${mercedesGLEImg} 1x,
        ${mercedesGLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Venza AWD XLE',
    year: 2015,
    mileage: 99000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 18620,
    img: {
      src: toyotaVenzaImg,
      srcset: `
        ${toyotaVenzaImg} 1x,
        ${toyotaVenzaImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Lexus',
    model: 'RX 350 F-SPORT',
    year: 2016,
    mileage: 86000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 34888,
    img: {
      src: lexusRXSportImg,
      srcset: `
        ${lexusRXSportImg} 1x,
        ${lexusRXSportImg2x} 2x
      `,
    },
    isNew: true,
    isSold: false,
  },
  {
    make: 'Volkswagen',
    model: 'Tiguan',
    year: 2019,
    mileage: 19855,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    price: 34888,
    img: {
      src: volkswagenTiguanImg,
      srcset: `
        ${volkswagenTiguanImg} 1x,
        ${volkswagenTiguanImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
  {
    make: 'Toyota',
    model: 'Highlander XLE',
    year: 2014,
    mileage: 69000,
    transmission: 'Automatic',
    fuelType: 'Gas',
    price: 27875,
    img: {
      src: toyotaHlXLEImg,
      srcset: `
        ${toyotaHlXLEImg} 1x,
        ${toyotaHlXLEImg2x} 2x
      `,
    },
    isNew: false,
    isSold: false,
  },
];
