import { useEffect, useState } from "react";

function CountDown(){
    const [count, setCount] = useState(10)
    useEffect(()=>{
        // setTimeout(() => {
        //     setCount(count - 1)
        // },1000)
        
            let timeID = setInterval(()=>{
                if(count>0){
                    setCount(prev => prev - 1)
                }
            },1000)
            return() => {
                clearInterval(timeID)
            }
        },[count])
    console.log(count)
    
    if(count === 0){
            alert("Time's up")
            // return() => {
            //     clearInterval(timeID)
            // }
        }
    return(
        <>
        <p >Count dowm from {count}</p>
        </>
    )
}
export default CountDown