import React from "react";

import SelectInput from '../../components/SelectInput'

import { Container, TitleContainer, Controller } from './styles';


interface IContentHeaderProps {
    title: string,
    lineColor: string,
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {


    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                {<h1>{title}</h1>}
            </TitleContainer>
            <Controller>
                {children}
            </Controller>
        </Container>
    );
}

export default ContentHeader;