import React, { useMemo } from 'react'
import "./App.css";
import "./BMI.css"


function App() {


  const [height, setHeight] = React.useState(180);
  const [weight, setWeight] = React.useState(70);


  function onWeightChange(event) {
    setWeight(event.target.value);
  } 


  function onHeightChange(event) {
    setHeight(event.target.value);
  }


  const output = useMemo(()=>{
    const calculateHeight = (height/100);
  
   return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[weight,height])




  return (
    <>
      <h1>Project 4: BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>
            Weight: {weight} Kg
        </p>
        <input 
           className='input-slider'
           type="range"
           step="1"
           min="40"
           max="200"
           onChange={onWeightChange}
           />

           <p className='slider-output'>
              Height: {height} cm
           </p>
           <input 
             className='input-slider'
              type="range"
              min="140"
              max="220"
              onChange={onHeightChange}
             />
      </div>

      <div className='output-section'>
         <p>your BMI is</p>
         <p className='output'>{output}</p>
      </div>
    </>
  )
}

export default App;
