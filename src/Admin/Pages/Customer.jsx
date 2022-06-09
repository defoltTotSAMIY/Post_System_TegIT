import React from "react";
import Table from "../Component/Table/Table";

function TableData() {
    return <></>;
}

function Customer() {
    const column = [
        "id",
        "name",
        "lastName",
        "number",
        "email",
        "address",
        "created_at",
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Table column={column} data={<TableData />} />
                </div>
            </div>
        </div>
    );
}

export default Customer;
