import styled from "styled-components";

    /**
    * Layout
     MainHeader
     SideBar
     Content
    */

export const GridLayout = styled.div`

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 'SideBar MainHeader' 'SideBar Content';

    height: 100vh;


`;