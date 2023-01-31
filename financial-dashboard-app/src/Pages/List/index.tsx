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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getUTCMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getUTCFullYear()));


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
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
        { value: 6, label: 'Junho' },
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro' },
        { value: 11, label: 'Novembro' },
        { value: 12, label: 'Dezembro' }
    ];

    const years = [
        { value: 2020, label: 2020 },
        { value: 2021, label: 2021 },
        { value: 2022, label: 2022 },
        { value: 2023, label: 2023 }
    ];

    useEffect(() => {
        const filteredDates = listData.filter(item => {
            const date = new Date(item.date);
            const day = date.getUTCDate();
            const month = String(date.getUTCMonth() + 1);
            const year = String(date.getUTCFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredDates.map(item => {
            return {
                id: String(Math.random() * new Date().getMilliseconds() + item.amount),
                title: item.description,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frenquency,
                dataFormatted: formatDate(item.date),
                tagColor: '#4E41F0'
            }
        })
        setData(formattedData)
    }, [listData, monthSelected, yearSelected])


    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
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