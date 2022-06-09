import React  from 'react'

import './Table.scss'

function Table(props) {
    return (
        <div className='tableBg'>
            <table className='tableName'>
                <thead>
                    <tr>
                        {
                            props.column.map((elem)=>{
                                return(
                                    <th key={elem}> {elem}</th>
                                )
                            })
                        }
                      
                    </tr>
                </thead>
                <tbody>
                        {props.data}
                </tbody>
            </table>
        </div>
    )
}

export default Table
