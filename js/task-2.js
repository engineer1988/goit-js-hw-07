const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const gallery = document.querySelector('.gallery');

const body = document.querySelector('body');
body.style.marginLeft = '0px';
body.style.marginRight = '0px';

const markup = images
  .map(
    technology =>
      `<li class="gallery-item"><img class="image" src=${technology.url} alt=${technology.alt} width="360" height="300"/></li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

const item = document.querySelectorAll('.gallery-item');

const markup1 = item.forEach(
  element =>
    (element.style = `list-style-type: none;     width: calc((100% - 48px) / 3);
  `)
);

gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.rowGap = '48px';
gallery.style.columnGap = '24px';
gallery.style.margin = '0px';
gallery.style.padding = '100px 156px';

const image = document.querySelectorAll('.image');
const markup2 = image.forEach(
  element =>
    (element.style = `display: block;     max-width: 100%;
  `)
);
