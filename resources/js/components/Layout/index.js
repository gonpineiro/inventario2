import React, { useState } from "react";
import {
    AppBar,
    AppUser,
    AppGrid,
    Nav,
    NavTitle,
    Hr,
    LinkTitle
} from "./styles";

const Layout = props => {
    const [layout, setLayout] = useState(1);

    const userNav = () => (
        <Nav>
            <NavTitle>Host de usuarios</NavTitle>
            <Hr />
            <LinkTitle to="/computadoras" activeClassName="is-active">
                Computadoras
            </LinkTitle>
            <LinkTitle to="/impresoras" activeClassName="is-active">
                Impresoras
            </LinkTitle>
            <LinkTitle to="/telefonos" activeClassName="is-active">
                Telefonia
            </LinkTitle>
            <Hr />
            <NavTitle>Perifericos</NavTitle>
            <Hr />
            <LinkTitle to="/mouses" activeClassName="is-active">
                Mouse
            </LinkTitle>
            <LinkTitle to="/teclados" activeClassName="is-active">
                Teclados
            </LinkTitle>
            <LinkTitle to="/monitores" activeClassName="is-active">
                Monitores
            </LinkTitle>
            <Hr />
            <NavTitle>Networking</NavTitle>
            <Hr />
            <LinkTitle to="/isp" activeClassName="is-active">
                Modems / ISP
            </LinkTitle>
            <LinkTitle to="/routers" activeClassName="is-active">
                Router
            </LinkTitle>
            <LinkTitle to="/switchs" activeClassName="is-active">
                Switch
            </LinkTitle>
            <LinkTitle to="/aps" activeClassName="is-active">
                Access Points
            </LinkTitle>
            <Hr />
            <NavTitle>CCTV</NavTitle>
            <Hr />
            <LinkTitle to="/camaras" activeClassName="is-active">
                Camaras
            </LinkTitle>
            <LinkTitle to="/dvr" activeClassName="is-active">
                DVR / NVR
            </LinkTitle>
        </Nav>
    );

    const adminNav = () => (
        <Nav>
            <NavTitle>Usuarios</NavTitle>
            <Hr />
            <LinkTitle to="/usuarios" activeClassName="is-active">
                Listado
            </LinkTitle>
            <LinkTitle to="/roles" activeClassName="is-active">
                Roles
            </LinkTitle>
            <LinkTitle to="/permisos" activeClassName="is-active">
                Permisos
            </LinkTitle>

            <Hr />
            <NavTitle>Dispositivos</NavTitle>
            <Hr />
            <LinkTitle to="/marcas" activeClassName="is-active">
                Marcas
            </LinkTitle>
            <LinkTitle to="/modelos" activeClassName="is-active">
                Modelos
            </LinkTitle>
            <LinkTitle to="/tipos" activeClassName="is-active">
                Tipos
            </LinkTitle>

            <Hr />
            <NavTitle>Gestion</NavTitle>
            <Hr />
            <LinkTitle to="/clientes" activeClassName="is-active">
                Clientes
            </LinkTitle>
            <LinkTitle to="/departamentos" activeClassName="is-active">
                Departamentos
            </LinkTitle>
            
            <Hr />
            <NavTitle>Usuarios Host</NavTitle>
            <Hr />
            <LinkTitle to="/usuarios_host" activeClassName="is-active">
                Listado
            </LinkTitle>
            <LinkTitle to="/routers" activeClassName="is-active">
                Fichas de entrega
            </LinkTitle>
        </Nav>
    );

    return (
        <>
            <AppBar>
                <AppUser onClick={() => setLayout(!layout)}>User</AppUser>
            </AppBar>
            <AppGrid>
                {layout && userNav()}
                {!layout && adminNav()}
                {props.children}
            </AppGrid>
        </>
    );
};

export default Layout;
