import styled from "styled-components";
import { useState, forwardRef } from "react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
  
const SelectBox = styled.div`
margin: 0 auto;
margin-top:8px;
    position: relative;
    width: 494px;
height: 40px;
    padding: 3px;
    align-self: center;
    border: 1px solid #ccc;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;
const Label = styled.label`
    font-size: 13px;
    margin-left: 4px;
    text-align: center;
`;
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
    // color: #fefefe;
`;
const Option = styled.li`
    font-size: 14px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    // color: #000;
    &:hover {
    background-color: rgb(233, 233, 233);
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    // background-color: rgb(233, 233, 233);
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
    const [currentValue, setCurrentValue] = useState('언로 타입');
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
   
    
    
    
    
        
        
        
        
      
        
        
        