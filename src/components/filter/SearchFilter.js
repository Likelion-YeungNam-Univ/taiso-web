import { styled } from "styled-components";
import { GrPowerReset } from 'react-icons/gr';
import WeatherFilter from "./WeatherFilter";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import TypeFilter from "./TypeFilter";
import SizeFilter from "./SizeFilter";
import { useRef } from 'react';

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

    const brandFilterRef = useRef(); 
    const typeFilterRef = useRef(); 
    const weatherFilterRef = useRef(); 
    const CategoryFilterRef = useRef(); 
    const SizeFilterRef = useRef(); 
    // brandFilterRef를 useRef로 생성
        // ... 나머지 필터 ref들도 생성
    
    const resetAllFilters = () => {
        brandFilterRef.current.resetFilter();
        typeFilterRef.current.resetFilter();
        weatherFilterRef.current.resetFilter();
        CategoryFilterRef.current.resetFilter();
        SizeFilterRef.current.resetFilter();
        // brandFilterRef를 통해 resetFilter 호출
            // ... 나머지 필터들의 resetFilter 호출
    };

    return (
        <Filter>
            <Filterheader>
                <H2>필터</H2>   
                <Reset  onClick={resetAllFilters}>
                    <ResetIcon/>
                    <H3>필터 초기화</H3>
                </Reset>
            </Filterheader>
            <BrandFilter ref={brandFilterRef}/>
            <TypeFilter ref={typeFilterRef}/>
            <WeatherFilter ref={weatherFilterRef}/>
            <CategoryFilter ref={CategoryFilterRef}/>
            <SizeFilter ref={SizeFilterRef}/> 
        </Filter>
    );
};

export default SearchFilter;

