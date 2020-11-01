import React, { Fragment } from "react";
import { AccordionSummary, Divider } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionUi, AccordionDetailsUi, ListItemUi } from "./styles";

const Acordion = ({ title, list }) => {
    const renderList = () =>
        list.map(item => (
            <Fragment key={item.id}>
                <Divider />
                <ListItemUi>
                    <small>{item.name}</small>
                    <small>{item.observation}</small>
                </ListItemUi>
            </Fragment>
        ));

    return (
        <AccordionUi disabled={!list.length}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <label> + {title}</label>
            </AccordionSummary>
            <AccordionDetailsUi>
                <ListItemUi>
                    <b>Nombre</b>
                    <b>Observación</b>
                </ListItemUi>
                {renderList()}
            </AccordionDetailsUi>
        </AccordionUi>
    );
};

export default Acordion;
