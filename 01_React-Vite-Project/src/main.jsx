import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const userName = 'Kendrick Lamar'

const reactElement = {
    type: 'a',
    props: {
        href: "www.google.com",
        target: 'Homepage'
    },
    children: 'Click Me to Visit GOOGLE Hompage'
};

const newElement = (
  <a href="www.google.com">Click Me</a>
)

//basic structure of a react element
const anotherReactElement = React.createElement(
  'a',
  {href: "www.google.com", target: '_blank'},
  'Click Me to visit Google',
  userName   //this is how variables store in reactElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
    // newElement
    // anotherReactElement
    <App />

)
