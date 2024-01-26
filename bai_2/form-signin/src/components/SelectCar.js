import { useState } from "react"

function SelectCar(){
    const carList = ["Mec","BMW","Audi"]
    const colorList = ["Black","White","Green"]
    const [selectCar, setSelectCar] = useState({car: "Mec",color:"Black"})
    const handleChange = (value) => {
        setSelectCar(prev => {
            return{
                car : value,
                color : prev.color
            }
        })
    }
    const handleChangeColor = (value) => {
        setSelectCar(prev => {
            return {
                color : value,
                car : prev.car
            }
        })
    }
    return(
        <>
        <h1>Select your car</h1>
        <div>Select a car 
            <select onChange={(event) => handleChange(event.target.value)}>
                {carList.map((car) => (
                    <option key={car} value={car}>{car}</option>
                ))}
            </select>
        </div>
        <div>Select a car 
            <select onChange={(event) => handleChangeColor(event.target.value)}>
                {colorList.map((color) => (
                    <option key={color} value={color} >{color}</option>
                    ))}
                    {console.log(selectCar.color)}
            </select>
        </div>
        <p>Your car {selectCar.car} {selectCar.color}</p>
        </>
    )
}
export default SelectCar;