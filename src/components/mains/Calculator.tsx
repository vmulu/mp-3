import { useState } from "react";

export default function Calculator() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);

    // addition
    function doAdd() {
        setResult(a + b);
    }

    // subtraction
    function doSub() {
        setResult(a - b);
    }

    // multiplication
    function doMul() {
        setResult(a * b);
    }

    // division
    function doDiv() {
        setResult(a / b);
    }

    // power
    function doPow() {
        let total = 1;
        for (let i = 0; i < b; i++){
            total *= a;
        }
        setResult(total);
    }

    // clearing results
    function doClear() {
        setA(0);
        setB(0);
        setResult(0);
    }

    return(
        <div id="calc">
            <h2>
                Victoria's Mini Calculator Project
            </h2>

            <label htmlFor="a"> </label><input id="a"/>
            <label htmlFor="b"> </label><input id="b"/>

            {/* buttons */}
            <button onClick={doAdd}>+</button>
            <button onClick={doSub}>-</button>
            <button onClick={doMul}>*</button>
            <button onClick={doDiv}>/</button>
            <button onClick={doPow}>**</button>
            <button onClick={doClear}>Clear</button>

            {/* return results */}
            result
        </div>

    )
}