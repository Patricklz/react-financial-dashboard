import React from "react";

import {Container, ToogleLabel, ToogleSelector} from './styles';

const Toogle: React.FC = () => (
    <Container>
        <ToogleLabel>Light</ToogleLabel>
        <ToogleSelector 
        checked 
        uncheckedIcon={false}
        checkedIcon={false} 
        onChange={() => {}}/>
        <ToogleLabel>Dark</ToogleLabel>
    </Container>

);

export default Toogle;