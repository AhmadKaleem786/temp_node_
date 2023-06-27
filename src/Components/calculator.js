import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const HC = (e) => {
        if (e.target.name === 'del'){
            setResult(result.slice(0,-1));
        }
        else{
            setResult(result.concat(e.target.name));
        }
    }

    const ES = () => {
        const r = result.replace("%", "*100/")
        try{
            setResult(eval(r).toString());
        }

        catch (error){
            setResult("Enter valid expression");
        }
    }

    const CS = () => {
        setResult('');
    }

    const hell = "rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

    return(
        <div className = {hell}>
            <label>
                <input className = {hell} type='text' value={result} /><br /><br />
            </label>

            <button className = {hell} name = "C" onClick={ CS }>C</button><button className = {hell} name = "%" onClick={ HC }>%</button><button name = "del" className = {hell} onClick={ HC }>del</button><button name = "/" className = {hell} onClick={ HC }>/</button><br />
            <button className = {hell} name = "7" onClick={ HC }>7</button><button className = {hell} name = "8" onClick={ HC }>8</button><button className = {hell} name = "9" onClick={ HC }>9</button><button className = {hell} name = "*" onClick={ HC }>x</button><br />
            <button className = {hell} name = "1" onClick={ HC }>1</button><button className = {hell} name = "2" onClick={ HC }>2</button><button className = {hell} name = "3" onClick={ HC }>3</button><button className = {hell} name = "+" onClick={ HC }>+</button><br />
            <button className = {hell} name = "00" onClick={ HC }>00</button><button className = {hell} name = "0" onClick={ HC }>0</button><button className = {hell} name = "." onClick={ HC }>.</button><button className = {hell} name = "=" onClick={ ES }>=</button><br />

        </div>


    )
}

export default Calculator;