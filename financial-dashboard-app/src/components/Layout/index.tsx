import React from "react";

import { GridLayout } from './styles';

import MainHeader from "../MainHeader";
import SideBar from "../SideBar";
import Content from "../Content";

const Layout: React.FC = ({ children }) => {
    return (
        <GridLayout>
            <MainHeader />
            <SideBar />
            <Content> 
                { children }
            </Content>
        </GridLayout>
    );
}

export default Layout;