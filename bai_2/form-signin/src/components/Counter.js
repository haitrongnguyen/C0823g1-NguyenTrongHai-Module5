import { useState } from "react"

function Counter(){
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const handleCount1 = () => {
        setCount1(count1+1)
    }
    const handleCount2 = () => {
        setCount2(count2+2)
    }
    return(
        <>
        <p>Count: {count1}</p>
        <button onClick={handleCount1}>Add 1</button>
        <p>Count: {count2}</p>
        <button onClick={handleCount2}>Add 2</button>
        </>
    )
}
export default Counter;