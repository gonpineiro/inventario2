import React from "react";

import { ContainerDetailButton, Button } from "./styles";

const ContainerButton = props => {
    const { save, cancel, stateForm, styleOk, styleCancel } = props;
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
