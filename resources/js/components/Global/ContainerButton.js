import React from "react";
import styled from "styled-components";

const ContainerButton = props => {
    const { save, cancel, stateForm, styleOk, styleCancel } = props;

    const ContainerDetailButton = styled.div`
        display: flex;
        padding: 10px;
        margin-top: auto;
        justify-content: space-between;
    `;

    const Button = styled.button`
        width: 45%;
    `;

    return (
        <ContainerDetailButton>
            <Button
                onClick={save}
                className={styleOk}
                disabled={stateForm === "details"}
            >
                Aceptar
            </Button>
            <Button onClick={() => cancel("table")} className={styleCancel}>
                Cancelar
            </Button>
        </ContainerDetailButton>
    );
};

export default ContainerButton;
