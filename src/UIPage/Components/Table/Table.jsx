import React from 'react';


function Table(props) {

    return (
        <div>
            <table className="table  table-bordered text-center">
                <thead>
                    <tr>
                        {
                            props.header.map((elem, index) => {
                                return (
                                    <th key={index}>{elem}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.body ? props.body : "0"
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
