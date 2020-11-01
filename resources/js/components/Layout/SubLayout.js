import React from "react";
import AddIcon from "@material-ui/icons/Add";
import TocIcon from "@material-ui/icons/Toc";
import Tooltip from "@material-ui/core/Tooltip";
import {
    LayoutContainer,
    TitleContainer,
    Title,
    ContainerBody
} from "./styles";

const SubLayout = ({ children, title, changeForm }) => {
    return (
        <LayoutContainer className="container">
            <div className="row-grid">
                <TitleContainer className="shadow">
                    <Title>{title}</Title>
                    <Tooltip title="Crear" placement="bottom">
                        <AddIcon onClick={() => changeForm("create")} />
                    </Tooltip>
                    <Tooltip title="Tabla" placement="bottom">
                        <TocIcon onClick={() => changeForm("table")} />
                    </Tooltip>
                </TitleContainer>
                <ContainerBody className="shadow">{children}</ContainerBody>
            </div>
        </LayoutContainer>
    );
};

export default SubLayout;
