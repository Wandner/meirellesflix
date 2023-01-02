import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";

const Main = styled.main`
    background-color:var(--background-primary);
    color: var(--white);
    flex:1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`

const PageDefault = ({ children }) => {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default PageDefault