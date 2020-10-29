import React from "react";
import { MDBDataTable } from "mdbreact";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

const Table = ({ rows, columns, bringOne, bringOneDelete, stateForm }) => {
    const addActions = () => {
        if (stateForm) {
            const array = [];
            rows.map(item => {
                item.action = (
                    <>
                        <EditIcon onClick={() => bringOne(item.id)} />
                        <DeleteIcon onClick={() => bringOneDelete(item.id)} />
                        <InfoIcon
                            onClick={() => bringOne(item.id, "details")}
                        />
                    </>
                );
                array.push(item);
            });
            return array;
        }
        return rows;
    };

    const data = {
        columns,
        rows: addActions()
    };

    return <MDBDataTable striped bordered data={data} />;
};

export default Table;
