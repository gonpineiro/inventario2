import styled from "styled-components";
import Select from "react-select";
import {
    Accordion,
    AccordionDetails,
    ListItem
} from "@material-ui/core";

export const borderGrey = `1px solid rgba(197, 191, 191, 0.4)`;

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-height: ${({ height }) => height};
    padding: 7px;
    border: ${borderGrey};
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
`;

export const FormRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    padding: 0 10px;
`;

export const AccordionUi = styled(Accordion)`
           width: 100%;
       `;

export const AccordionDetailsUi = styled(AccordionDetails)`
    flex-direction: column;
`;

export const ListItemUi = styled(ListItem)`
           display: grid !important;
           grid-template-columns: 1fr 1fr !important;
       `;

export const EmError = styled.em`
    font-size: 85%;
    color: #e33422;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    margin-left: auto;
`;

export const Input = styled.input`
    background: transparent;
    width: 100%;
    height: calc(1.6em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.6;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`;

export const ReactSelect = styled(Select)`
    width: 100%;
    background: transparent;
`;

export const ContainerDetailButton = styled.div`
    display: flex;
    padding: 10px;
    margin-top: auto;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 45%;
`;
