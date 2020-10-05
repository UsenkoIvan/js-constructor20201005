import { block } from '../utils';
import { TitleBlock, TextBlock } from './blocks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('beforeend', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [block('Text'), block('Title')].join('');
  }

  add(e) {
    e.preventDefault();
    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    const newBlock =
      type === 'Text'
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles });

    this.update(newBlock);

    e.target.value.value = '';
    e.target.styles.value = '';
  }
}
