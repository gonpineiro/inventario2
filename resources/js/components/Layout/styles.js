import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const AppBar = styled.nav`
    width: 100%;
    height: 56px;
    background-color: #3f51b5;
    color: #e2e4ed;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    font-size: 14px;
    font-weight: 500;
`;

export const AppUser = styled.div`
    margin-left: auto;
    line-height: 56px;
    width: 50px;
`;

export const AppGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`;

export const Nav = styled.nav`
    border-right: 1px solid #ccc;
    height: 100vh;
`;

export const NavTitle = styled.p`
    text-align: center;
    font-weight: bold;
`;

export const Hr = styled.hr`
    width: 100%;
    margin-left: 0;
    border-top: 1px solid #ccc;
`;

export const LinkTitle = styled(LinkRouter)`
    display: block;
    width: 80%;
    text-decoration: none;
    height: 36px;
    line-height: 36px;
    color: black;
    padding-left: 10px;
    transition: padding-left 0.5s, background-color 0.5s;
    :hover {
        padding-left: 15px;
        background-color: #ddd;
    }
`;
