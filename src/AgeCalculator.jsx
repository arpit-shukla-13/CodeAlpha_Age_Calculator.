import React, { useState } from 'react'
import '../src/AgeCalulator.css';

function AgeCalculator() {

  const [birth, setBirth] = useState('');
  let [Years ,setYears] = useState(0);
  let [Months ,setMonth] = useState(0);
  let [Days ,setDays] = useState(0);

  const getage = () =>{
    const today = new Date();
    const birthdate = new Date(birth);

    if(birth === '')
    {
      alert("please Enter Your Date of Birth");
    }
    else
    {
      let year = today.getFullYear() - birthdate.getFullYear();
    let month = Math.abs(today.getMonth() - birthdate.getMonth());
    let day = Math.abs(today.getDate() - birthdate.getDate());
    setYears(year);
    setMonth(month);
    setDays(day);
    }
  }
  return (
    <>
     <div className='cal-base'>
         <h2>AGE CALCULATOR</h2>
         <div className='main-box'>
          <h1>Enter Your Age</h1>
          <input type='date' onChange={(e)=>setBirth(e.target.value)} value={birth}/>
         </div>
         <div className='btn btn-primary  p-2 fs-5 button' onClick={getage}>Get Your Age</div>

         <div className='logo'><i className="fa-solid fa-user"></i>
         </div>
       <div className='box'>
       <span>Your are currently </span>
        <span>{Years} Years</span>
        <span>{Months} Months</span>
        <span>{Days} Days old</span>
       </div>

     </div>

     
    </>
  )
}

export default AgeCalculator
