import React, { useState } from "react";

import styles from "./investment.module.css"
const Investment =(props)=>{
const [inputValues, setInput]= useState({
    "current-saving": 0,
    "yearly-contribution": 0,
    "expected-return": 0, 
    duration: 0
});

const submitHandler=(event)=>{
    event.preventDefault();
   props.calculate(inputValues);

}

const resetHandler=()=>{
 setInput("")
}

const inputChangeHandler =(input,value)=>{
  setInput((prevValue)=>{
    return {
        ...prevValue,
        [input]: value
    }
  })

}

return (
    <form onSubmit={submitHandler} className={styles['form']} >
    <div className={styles['input-group']}>
      <p>
        <label htmlFor="current-savings">Current Savings (₹)</label>
        <input type="number" value={inputValues['current-saving']} id="current-savings" onChange={(event)=>{return inputChangeHandler("current-saving",event.target.value)}} />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
        <input type="number" value={inputValues['yearly-contribution']} id="yearly-contribution" onChange={(event)=>{return inputChangeHandler("yearly-contribution",event.target.value)}} />
      </p>
    </div>
    <div className={styles['input-group']}>
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" value={inputValues["expected-return"]} id="expected-return" onChange={(event)=>{return inputChangeHandler("expected-return",event.target.value)}}  />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" value={inputValues["duration"]} id="duration" onChange={(event)=>{return inputChangeHandler("duration",event.target.value)}}/>
      </p>
    </div>
    <p className={styles['actions']}>
        <button onClick={ resetHandler} type="reset" className={styles['buttonAlt']} >
          Reset
        </button>
        <button type="submit" className={styles['button']} >
          Calculate
        </button>
      </p>
  </form>
)
}

export default Investment;