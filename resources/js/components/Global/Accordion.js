import React, { Fragment } from "react";
import styled from "styled-components";

import {
    AccordionSummary,
    Divider,
    Accordion,
    AccordionDetails,
    ListItem
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

    const AccordionUi = styled(Accordion)`
        width: 100%;
    `;

    const AccordionDetailsUi = styled(AccordionDetails)`
        flex-direction: column;
    `;

    const ListItemUi = styled(ListItem)`
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
    `;

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
