export function newText(string) {
    return document.createTextNode(string);
}

export function newNode({node = 'div', childEl, cssClasses = []}) {
    const div = document.createElement(node);
    if (childEl)
        div.appendChild(childEl);
    cssClasses.forEach(clazz => div.classList.add(clazz));
    return div;
}
