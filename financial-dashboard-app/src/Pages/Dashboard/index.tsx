import React from "react";

import ContentHeader from '../../components/ContentHeader'
import SelectInput from "../../components/SelectInput";

import { Container } from './styles';

const Dashboard: React.FC = () => {


    const options = [
        { value: 'teste', label: 'teste' },
        { value: 'teste', label: 'teste' },
        { value: 'teste', label: 'teste' }
    ]


    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#FFFF">
                <SelectInput options={options} onChange={() => { }} />
            </ContentHeader>
        </Container>

    )
}

export default Dashboard;