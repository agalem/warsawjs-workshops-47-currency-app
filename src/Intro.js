import React from 'react';

function clickHandler(event) {
    event.preventDefault();
    console.log("Hello from handler");
}

function  Button(props) {
    const { text } = props;

    return <button onClick={clickHandler}>{text}</button>
}

Button.defaultProps = {
    text: 'Hello'
};

function Intro() {
    return (
        <div>
            <Button text="Click me"/>
        </div>
    );
}

export default Intro;
