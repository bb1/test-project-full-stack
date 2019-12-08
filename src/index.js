import readFile from './utils/readFile';
import Location from './location/location';
import {newNode, newText} from './utils/dom-utils';
import './styles/style.scss';

const app = document.getElementById('root');

readFile('../data/testdaten.txt').then((content) => {
    // TODO: move to contacts component

    const contacts = content.split('\n\n').map(parseContact);
    console.debug(contacts);

    const locations = contacts
        .map(contact => new Location(contact))
        .map(loc => loc.getElement());
    const element = newNode({cssClasses: ['contacts']});
    locations.forEach(loc => element.appendChild(loc));

    app.appendChild(element);
});

function parseContact(contactString) {
    const contact = {
        name: '',
        lastName: '',
        street: '',
        streetNo: '',
        zip: '',
        city: '',
        state: '',
    }
    const arr = contactString.split('\n');
    const nameArr = arr[0].split(' ');
    const streetArr = arr[1].split(' ');
    const cityArr = arr[2].split(' ');
    contact.lastName = nameArr.pop();
    contact.name = nameArr.join(' ');
    contact.streetNo = streetArr.pop();
    contact.street = streetArr.join(' ');
    contact.zip = cityArr.shift();
    contact.city = cityArr.join(' ');

    return contact;
}