import image from './assets/e55230d2770cc7f362a8318d464af171.png';
import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  ColumnsBlock,
} from './classes/blocks';

export const model = [
  new TitleBlock('Конструктор сайтів на чистому JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),

  new ImageBlock(image, {
    styles: {
      display: 'flex',
      padding: '2rem 0',
      'justify-content': 'center',
    },
    imagestyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Image',
  }),

  new ColumnsBlock(
    [
      'Застосунок на чистому JS без використання бібліотек',
      'JS - це просто, інтересно.',
      'Навчись створювати UI своїми руками',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    },
  ),

  new TextBlock(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolorem facere beatae eum est atque.',
    {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold',
      },
    },
  ),
];
