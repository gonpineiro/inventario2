import React from "react";
import AddIcon from "@material-ui/icons/Add";
import TocIcon from "@material-ui/icons/Toc";

import {
    LayoutContainer,
    TitleContainer,
    Title,
    ContainerBody,
} from "./styles";

const SubLayout = ({ children, title, changeForm }) => {
    return (
        <LayoutContainer className="container">
            <div className="row-grid">
                <TitleContainer className="shadow">
                    <Title>{title}</Title>
                    <AddIcon onClick={() => changeForm("create")} />
                    <TocIcon onClick={() => changeForm("table")} />
                </TitleContainer>
                <ContainerBody className="shadow">{children}</ContainerBody>
            </div>
        </LayoutContainer>
    );
};

export default SubLayout;
