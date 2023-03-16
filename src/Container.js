import React, {useState} from 'react'

function Container() {
    const [counter, setCounter] = useState(0);
    const classes = ['straight', 'inverted'];
    const [isInverted, setInverted] = useState(false)

    function handleClick() {
        setCounter(counter + 1);
        setInverted(!isInverted);
    }

    return (
        <div className={classes[+isInverted]}>
            {counter}
            <input type="button" onClick={handleClick} value="increment"/>
        </div>
    );
}

export default Container;
