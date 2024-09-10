import style from "./App.module.css"
import Display from "./componnets/Display"
import Btn from "./componnets/Btn"
import { useState } from "react"

function App() {
  
  let [calval , setcalval]=useState("");
  const handlebtn = (btntext)=>{
    if(btntext==='c'){
      setcalval(" ")
    }
    else if(btntext==="="){
      const result=eval(calval);
      setcalval(result);
    }
    else{
      let newval = calval+btntext;
      setcalval(newval);
    }
  }
    
  
  // const onButtonClicked = (btnText) =>{ 
  //  if(btnText ==='c'){
  //   setCalVal("")
  //  }
  //  else if(btnText ==='='){
  //    const result = eval(calVal);
  //    setCalVal(result);
  //  }
  //  else{
  //   const newDisplayvalue = calVal + btnText;
  //   setCalVal(newDisplayvalue);
  //  }
  // }
 

  return (
   <div className={style.calculator}>
   <Display calval={calval} />
   <Btn handlebtn={handlebtn} />   
    </div>
  
  )
}

export default App
//yash Dixit
