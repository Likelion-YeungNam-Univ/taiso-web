import styled from "styled-components";
import { useState, forwardRef } from "react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

  
const SelectBox = styled.div`
    position: relative;
    width: 89px;
    padding: 3px ;
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

            {key: "25", value: "25%"},
            {key: "35", value: "35%"},
            {key: "45", value: "45%"},
            {key: "55", value: "55%"},
            {key: "65", value: "65%"},
            {key: "75", value: "75%"},
            {key: "85", value: "85%"}
];

const SectionWidth = forwardRef((props, ref) => {
    const [currentValue, setCurrentValue] = useState('편평비(%)');
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (selectedValue) => {
        setCurrentValue(selectedValue);
        setShowOptions(true); // Always show options when any option is selected
    };

    const resetFilter = () => {
        setCurrentValue('편평비(%)'); // Reset the current value
        setShowOptions(false); // Close the options
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
   
    
    
    
    
        
        
        
        
      
        
        
        