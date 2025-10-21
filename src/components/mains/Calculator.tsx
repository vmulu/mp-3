import { useState } from "react";
import styled from 'styled-components'

export default function Calculator() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState<number | null>(null);
    const [textColor, setTextColor] = useState("white");


    const ResultDiv = styled.div`
        color: ${textColor}
    `;

    const CalcDiv = styled.div`

        background-color: lightpink;
        color: white;
        text-align: center;
        margin: 0 auto;

        button{
            background-color: #A53860;
            margin-top: 10px;
        }
    `;

    // neg number changing
    function doColor(result: number) {
        if (result < 0) {
          setTextColor("red");
        } else {
          setTextColor("white");
        }
      }

    // addition
    function doAdd() {
        const result = a + b
        setResult(result);
        doColor(result);
    }

    // subtraction
    function doSub() {
        const result = a - b
        setResult(result);
        doColor(result);
    }

    // multiplication
    function doMul() {
        const result = a * b;
        setResult(result);
        doColor(result);
    }

    // division
    function doDiv() {
        const result = a / b;
        setResult(b === 0
            ? NaN
            : result);
        doColor(result);
     }

    // power
    function doPow() {
        let total = 1;
        for (let i = 0; i < b; i++){
            total *= a;
        }
        setResult(total);
        doColor(total);
    }

    // clearing results
    function doClear() {
        setA(0);
        setB(0);
        setResult(null);
        doColor(0);
    }

    return(
        <CalcDiv>
            <h2>
                Victoria's Mini Calculator Project
            </h2>

            {/* user inputs */}
            <label htmlFor="a"></label><input type="number" id="a" value={a} onChange={(e) => setA(Number(e.target.value))}/>
            <label htmlFor="b" ></label><input type="number" id="b" value={b} onChange={(e) => setB(Number(e.target.value))}/>

            {/* buttons */}
            <button onClick={doAdd}>+</button>
            <button onClick={doSub}>-</button>
            <button onClick={doMul}>*</button>
            <button onClick={doDiv}>/</button>
            <button onClick={doPow}>**</button>
            <button onClick={doClear}>Clear</button>

            <ResultDiv>
                {/* return results */}
                <h3>Result: {result}</h3>
            </ResultDiv>
        </CalcDiv>

    )
}
