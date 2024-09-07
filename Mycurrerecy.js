import React, { useEffect, useState } from 'react'

const Mycurrerecy = () => {
const[amount,setAmount]=useState(0)
const[exchangeRate,setExchangeRate]=useState(0)
const[currencyFrom,setCurrencyFrom]=useState('USD')
const[currencyTo,setCurrencyTo]=useState('EUR')
const[convertedAmount,setConvertedAmount]=useState(0)

useEffect(()=>{
    async function fetching(){
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
        const data=await response.json()
        setExchangeRate(data.rates[currencyTo]);
    }
    fetching()
},[currencyFrom,currencyTo])

useEffect(()=>{
    setConvertedAmount(amount*exchangeRate)
},[amount , exchangeRate])


    return (
    <div>
        <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
        <select value={currencyFrom} onChange={(e)=>{setCurrencyFrom(e.target.value)}}>
            <option value="USD">american</option>
            <option value="EUR">European</option>
        </select>

        <select value={currencyTo} onChange={(e)=>{setCurrencyTo(e.target.value)}}>
            <option value="EUR">European</option>
            <option value="USD">american</option>
            
        </select>
        <p>{convertedAmount} {currencyTo}</p>
    </div>
  )
}

export default Mycurrerecy