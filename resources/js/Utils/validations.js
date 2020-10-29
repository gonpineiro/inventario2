import React from "react";
/* import { Title } from "../../logistica/components/styles/styles"; */

export const DetailsDelete = str => str === "details" || str === "delete";

export const CreateDetailsDeleteEdit = str =>
    str === "create" || str === "details" || str === "delete" || str === "edit";

export const CreateDetailsDeleteEditInfo = str =>
    str === "create" ||
    str === "details" ||
    str === "delete" ||
    str === "edit" ||
    str === "info";

export const InfoArticle = str => str === "info" || str === "article";
/* 
export const handleFormTitle = str => {
    if (str === "create") return <Title>Agrega</Title>;
    if (str === "details") return <Title>Detalle</Title>;
    if (str === "edit") return <Title>Modificar</Title>;
    if (str === "delete") return <Title>Borrar</Title>;
}; */

export const handleContentTitle = (str, title) => {
    if (
        str === "create" ||
        str === "details" ||
        str === "edit" ||
        str === "delete" ||
        str === "info"
    )
        return title;

    if (str === "article") return "Artículos";
};
