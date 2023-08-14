import styled from "styled-components";
import { useState, forwardRef } from "react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

  
const SelectBox = styled.div`
    position: relative;
    width: 89px;
    padding: 3px;
    border-radius: 12px;
    align-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    color: #fefefe;
`;
const Option = styled.li`
    font-size: 14px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    color: #000;
    &:hover {
    background-color: rgb(233, 233, 233);
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(233, 233, 233);
    border-radius: 12px;
    margin-top: 5px;
`
const DownIcon =styled.div`
    margin-left: auto;
    margin-top: 5px;
`
const optionData =[

            {key: "10", value: "10인치"},
            {key: "11", value: "11인치"},
            {key: "12", value: "12인치"},
            {key: "13", value: "13인치"},
            {key: "14", value: "14인치"},
            {key: "15", value: "15인치"},
            {key: "16", value: "16인치"},
            {key: "17", value: "17인치"},
            {key: "18", value: "18인치"},
            {key: "19", value: "19인치"},
            {key: "20", value: "20인치"},
            {key: "21", value: "21인치"},
            {key: "22", value: "22인치"},
            {key: "23", value: "23인치"},
            {key: "24", value: "24인치"},
            {key: "25", value: "25인치"},
            {key: "26", value: "26인치"},
            {key: "27", value: "27인치"},
            {key: "28", value: "28인치"}
           
];

const SectionWidth = forwardRef((props, ref) => {
    const [currentValue, setCurrentValue] = useState('휠 지름(인치)');
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (selectedValue) => {
        setCurrentValue(selectedValue);
        setShowOptions(true); 
    };

    const resetFilter = () => {
        setCurrentValue('휠 지름(인치)'); 
        setShowOptions(false); 
    };

    if (ref) {
        ref.current = {
            resetFilter: resetFilter
        };
    }

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

export default SectionWidth;
   
    
    
    
    
        
        
        
        
      
        
        
        