import React from "react";
import { MDBDataTable } from "mdbreact";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

const Table = ({ rows, columns, bringOne, bringOneDelete, stateForm }) => {
    const addActions = () => {
        if (stateForm) {
            const array = [];
            rows.map(item => {
                item.action = (
                    <>
                        <Tooltip title={"Editar " + item.id} placement="top">
                            <EditIcon onClick={() => bringOne(item.id)} />
                        </Tooltip>
                        <Tooltip title={"Borrar" + item.id} placement="top">
                            <DeleteIcon
                                onClick={() => bringOneDelete(item.id)}
                            />
                        </Tooltip>
                        <Tooltip title={"Detalle" + item.id} placement="top">
                            <InfoIcon
                                onClick={() => bringOne(item.id, "details")}
                            />
                        </Tooltip>
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
