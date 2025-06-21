function renderElement(reactElement, Container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
      domElement.setAttribute(prop, reactElement.props.prop);
    }

    Container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "www.google.com",
        target: 'Homepage'
    },
    children: 'Click Me to Visit GOOGLE Hompage'
};

const mainContainer = document.getElementById('root');
renderElement(reactElement, mainContainer);