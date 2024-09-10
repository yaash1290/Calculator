import style from '../App.module.css'


function Display({calval}){
    return(
        <>
         <input className={style.display} type="text" value={calval} readOnly/>
        </>
    )
}

export default Display
//display