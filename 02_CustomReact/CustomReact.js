function CustomRender(ReactElement, container) {
    

    // Not good pratice as every time we need to create the setAttritube
    /*
    const domElement = document.createElement(ReactElement.type)
    // console.log(domElement)
    domElement.innerHTML = ReactElement.children
    // console.log(domElement.innerHTML);
    domElement.setAttribute('href', ReactElement.props.href)
    domElement.setAttribute('target', ReactElement.props.target)

    container.appendChild(domElement)
    */


    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children

    for (const prop in ReactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, ReactElement.props[prop])
    }

    container.appendChild(domElement)
    
    console.log(ReactElement.type)
}


const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const MainContainer = document.querySelector('#root')

CustomRender(ReactElement, MainContainer)


