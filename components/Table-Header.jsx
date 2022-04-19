import React from 'react'
import TableItem from './Table-Item'
import "./Table.css"

const Table = () => {

    return (
        <>
        <span className="heading">Employee Records </span>
        <button>+ADD</button>
        <button className="reset-btn">RESET</button>
       
        <div className='showbox'>
            <div className='HeadingTab'>
                <div>Full Name</div>
                <div>Email</div>
                <div>Age</div>
                <div>Designation</div>
                <div>Salary</div>
                <div>Buttons</div>
            </div>
        </div>

            
        </>
    )
}

export default Table