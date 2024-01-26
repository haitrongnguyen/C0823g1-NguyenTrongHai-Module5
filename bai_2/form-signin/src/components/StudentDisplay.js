import { Component } from "react";

const students = [
    {
        id: 1,
        name: 'A',
        age : 18,
        adress: 'Ha Noi'
    },
    {
        id: 2,
        name: 'B',
        age : 18,
        adress: 'Ha Noi'
    },
    {
        id: 3,
        name: 'C',
        age : 18,
        adress: 'Ha Noi'
    },
    {
        id: 4,
        name: 'D',
        age : 18,
        adress: 'Ha Noi'
    }
  ]

class StudentDisplay extends Component{
    render(){
        return(
            <table>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Adress</th>
                </tr>
                {students.map((student,index)=>(
                    <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.adress}</td>
                    </tr>
                ))}
            </table>
        )
    }
}
export default StudentDisplay;