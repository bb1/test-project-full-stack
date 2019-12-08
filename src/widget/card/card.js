import HtmlElement from '../../html-element';
import newNode from '../../utils/dom-utils';

const CARD_CLASS_LIST = ["card-head", "card-content", "card-footer"];

export default class Card extends HtmlElement {
    headEl;
    contentEl;
    footerEl;

    constructor({headEl, contentEl, footerEl}) {
        super();
        this.headEl = headEl;
        this.contentEl = contentEl;
        this.footerEl = footerEl;
    }

    getElement() {
        const element = document.createElement('div');
        [this.headEl, this.contentEl, this.footerEl].map((el, idx) => {
            return el ? newNode({childEl: el, cssClasses: [CARD_CLASS_LIST[idx]]}) : null;
        }).filter(el => !!el).forEach(el => element.appendChild(el));

        return element;
    }
}