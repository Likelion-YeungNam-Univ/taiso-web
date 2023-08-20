import styled from "styled-components";
import { useState, forwardRef } from "react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
  
const SelectBox = styled.div`
    margin: 0 auto;
    margin-top:8px;
    position: relative;
    width: 480px;
    height: 40px;
    padding: 3px;
    align-self: center;
    border: 1px solid #ccc;
    cursor: pointer;
`
const Label = styled.label`
    font-size: 13px;
    margin-left: 7px;
    padding-top:5px;
    text-align: center;
    color: var(--black, #272727);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Helvetica;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const SelectOptions = styled.ul`
    margin-top: 5px;
    list-style: none;
    top: 18px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: auto;
    max-height: ${(props) => (props.show ? "none" : "0")};
    padding: 0;
    border-radius: 8px;
`
const Option = styled.li`
    font-size: 14px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    &:hover {
    background-color: rgb(233, 233, 233);
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    border-radius: 12px;
    margin-top: 5px;
`
const DownIcon =styled.div`
    margin-left: auto;
    margin-top: 5px;
`
const optionData =[
    {key: "1", value: "휘발유"},
    {key: "2", value: "경유"},
           
];

const FuelFilter = forwardRef((props) => {
    const [currentValue, setCurrentValue] = useState('연료 타입');
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (selectedValue) => {
        setCurrentValue(selectedValue);
        setShowOptions(true); 
    };

    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Header>
                <Label>{currentValue}</Label>
                <DownIcon>
                        {!showOptions? (<BiChevronDown/>) : (<BiChevronUp/>)}
                </DownIcon>
            </Header>
            <SelectOptions show={showOptions}>
                {optionData.map((data) => (
                    <Option
                        key={data.key}
                        value={data.value}
                        onClick={() => handleOnChangeSelectValue(data.value)}
                    >
                        {data.value}
                    </Option>
                ))}
            </SelectOptions>
        </SelectBox>
    );
});

export default FuelFilter;
   
    
    
    
    
        
        
        
        
      
        
        
        