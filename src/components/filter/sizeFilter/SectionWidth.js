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
                {key: "125", value: "125mm"},
                {key: "135", value: "135mm"},
                {key: "145", value: "145mm"},
                {key: "155", value: "155mm"},
                {key: "165", value: "165mm"},
                {key: "175", value: "175mm"},
                {key: "185", value: "185mm"},
                {key: "195", value: "195mm"},
                {key: "205", value: "205mm"},
                {key: "215", value: "215mm"},
                {key: "225", value: "225mm"},
                {key: "235", value: "235mm"},
                {key: "245", value: "245mm"},
                {key: "255", value: "255mm"},
                {key: "265", value: "265mm"},
                {key: "275", value: "275mm"},
                {key: "285", value: "285mm"},
                {key: "295", value: "295mm"},
                {key: "305", value: "305mm"},
                {key: "315", value: "315mm"},
                {key: "325", value: "325mm"},
                {key: "335", value: "335mm"},
                {key: "345", value: "345mm"},
                {key: "355", value: "355mm"},
    ];

    const SectionWidth = forwardRef((props, ref) => {
        const [currentValue, setCurrentValue] = useState('단면폭(mm)');
        const [showOptions, setShowOptions] = useState(false);
    
        const handleOnChangeSelectValue = (selectedValue) => {
            setCurrentValue(selectedValue);
            setShowOptions(true); 
        };
    
        const resetFilter = () => {
            setCurrentValue('단면폭(mm)'); 
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
   
    
    
    
    
        
        
        
        
      
        
        
        