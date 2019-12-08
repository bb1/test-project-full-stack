import readFile from './utils/readFile';
import Location from './location/location';
import './styles/style.scss';

const app = document.getElementById('root');

readFile('../data/testdaten.txt').then((content) => {
    const contacts = content.split('\n\n').map(parseContact);
    console.debug(contacts);

    const locations = contacts.map(contact => new Location(contact).getElement());
    const element = newNode({cssClasses: ['locations']});
    locations.forEach(loc => element.appendChild(loc));

    // const element = document.createElement('pre');
    // element.appendChild(document.createTextNode(content));

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