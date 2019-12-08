import HtmlElement from '../html-element';
import Card from '../widget/card/card';
import {newText, newNode} from '../utils/dom-utils';

export default class Location extends HtmlElement {
    name;
    lastName;
    street;
    streetNo;
    zip;
    city;
    state;

    constructor({name, lastName, street, streetNo, zip, city, state}) {
        super();
        this.name = name;
        this.lastName = lastName;
        this.street = street;
        this.streetNo = streetNo;
        this.zip = zip;
        this.city = city;
        this.state = state;
    }

    getElement() {
        const headEl = newText(`${this.name} ${this.lastName}`);
        const streetNode = newNode({
            node: 'p',
            childEl: newText(`${this.street} ${this.streetNo}`)
        });
        const cityNode = newNode({
            node: 'p',
            childEl: newText(`${this.zip} ${this.city}`)
        });
        const stateNode = newNode({
            node: 'p',
            childEl: newText(`${this.state}`)
        });
        const contentEl = newNode();
        contentEl.appendChild(streetNode);
        contentEl.appendChild(cityNode);
        contentEl.appendChild(stateNode);
        return new Card({headEl, contentEl}).getElement();
    }
}