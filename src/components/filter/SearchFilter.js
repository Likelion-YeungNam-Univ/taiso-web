import { styled } from "styled-components";
import { GrPowerReset } from 'react-icons/gr';
import WeatherFilter from "./WeatherFilter";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import TypeFilter from "./TypeFilter";
import SizeFilter from "./SizeFilter";


const Filter = styled.div`
    width: 306px;

`
const Filterheader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:100px;
`
const H2 = styled.h2`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const Reset = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`
const ResetIcon = styled(GrPowerReset)`
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    margin-right: 13px;
`
const H3 = styled.h3`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const SearchFilter = () => {

    return (
        <Filter>
            <Filterheader>
                <H2>필터</H2>   
                <Reset>
                    <ResetIcon/>
                    <H3>필터 초기화</H3>
                </Reset>
            </Filterheader>
            <BrandFilter/>
            <TypeFilter/>
            <WeatherFilter/>
            <CategoryFilter/>
            <SizeFilter/>
        </Filter>
    );
};

export default SearchFilter;