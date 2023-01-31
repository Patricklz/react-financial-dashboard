import React, { useMemo, useCallback, useState, useEffect } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content, Filters } from './styles';
import { useParams } from "react-router-dom";

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from "../../utils/formatDate";

export interface IRouteParams {
    match?: {
        params: {
            type: string;
        }
    }
}

interface Idata {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {

    const [data, setData] = useState<Idata[]>([])
    const { type } = useParams();




    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#e90e0e';
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);


    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' }
    ];

    const years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 }
    ];

    useEffect(() => {

        const response = listData.map(item => {
            return {
                id: String(Math.random() * listData.length),
                title: item.description,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frenquency,
                dataFormatted: formatDate(item.date),
                tagColor: '#4E41F0'
            }
        })
        setData(response)
    }, [])


    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>


            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted} />
                    ))
                }

            </Content>

        </Container>
    )
}

export default List;