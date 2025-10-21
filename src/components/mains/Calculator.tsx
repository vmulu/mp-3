import { useState } from "react";
import styled from 'styled-components'

export default function Calculator() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState("");
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
        const result = Number(a) + Number(b)
        setResult(String(result));
        doColor(result);
    }

    // subtraction
    function doSub() {
        const result = Number(a) - Number(b)
        setResult(String(result));
        doColor(result);
    }

    // multiplication
    function doMul() {
        const result = Number(a) * Number(b);
        setResult(String(result));
        doColor(result);
    }

    // division
    function doDiv() {
        const result = Number(a) / Number(b);
        setResult(Number(b) === 0
            ? String(NaN)
            : String(result));
        doColor(result);
     }

    // power
    function doPow() {
        let total = 1;
        for (let i = 0; i < Number(b); i++){
            total *= Number(a);
        }
        setResult(String(total));
        doColor(total);
    }

    // clearing results
    function doClear() {
        setA(String(0));
        setB(String(0));
        setResult(String(null));
        doColor(0);
    }

    return(
        <CalcDiv>
            <h2>
                Victoria's Mini Calculator Project
            </h2>

            {/* user inputs */}
            <label htmlFor="a"></label><input type="number" id="a" value={a} onChange={(e) => setA(e.target.value)}/>
            <label htmlFor="b" ></label><input type="number" id="b" value={b} onChange={(e) => setB(e.target.value)}/>

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
