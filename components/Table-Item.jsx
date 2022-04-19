import React from 'react'
import "./Table-Item.css"
import { useSelector } from 'react-redux'

const TableItem = () => {

const data = useSelector((state) =>state.emp)
// console.log("employees",data)


    return (<>
        {data.map((employ) =>(<div className='main_box' key={employ.id} >
            <div>{employ.first_name}{" "}{employ.last_name} </div>
            <div>{employ.email}</div>
            <div>{employ.age}</div>
            <div>{employ.designation}</div>
            <div>{employ.salary}</div>
            
            <div>

            <button className='edited' >Edit/Update</button>
            <button className='deleted' >Delete</button>
            </div>
        </div>
        ))}
        </>
    )}

export default TableItem