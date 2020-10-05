import { row, col, css } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error('Метод toHTML повинен бути реалізований!!!');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = 'h1', styles } = this.options;

    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, imagestyles, alt = '' } = this.options;

    return row(
      `<img src=${this.value} alt="${alt}" style="${css(imagestyles)}"/>`,
      css(styles),
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const toHtml = this.value.map(col).join('');
    const { styles } = this.options;
    return row(toHtml, css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;

    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}
