import React, {useState} from 'react';
import classes from './Counter.module.scss';
const Counter = () => {
    const [inc, setInc] = useState(0)

    const increment = () => {
        setInc(inc + 1)
    }

    return (
        <div className={classes.btn}>
            <h1>{inc}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;