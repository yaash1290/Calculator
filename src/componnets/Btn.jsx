import style from '../App.module.css'

function Btn({handlebtn}){

    const BtnName =['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
        <>
         <div className={style.btnC}>
        {BtnName.map((btn)=>{
         return <button className={style.btn} onClick={()=>handlebtn(btn)}>{btn}</button>
        })}
      </div>
        </>
    )
}


export default Btn;
//btn