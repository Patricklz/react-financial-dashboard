import React, { useMemo } from "react";

import emojis from "../../utils/emojis";
import Toogle  from "../Toogle/";

import { Container, Profile, Welcome, Username } from './styles';

const MainHeader: React.FC = () => {

const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice];

    }, []);

    return (
        <Container>
            <Toogle />
            <Profile>
                 <Welcome>Olá, {emoji}</Welcome>
                 <Username>Patrick</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;