import readFile from './utils/readFile';
import './styles/style.scss';

const app = document.getElementById('root');

readFile('../data/testdaten.txt').then((content) => {
    const element = document.createElement('pre');
    element.appendChild(document.createTextNode(content));

    app.appendChild(element);
});
