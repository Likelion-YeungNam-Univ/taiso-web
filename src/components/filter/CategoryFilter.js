import { styled } from "styled-components";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useState, forwardRef } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import cn from 'classnames';


const Filter = styled.div`
    width: 306px;

`
const FilterBox = styled.div``

const FilterBtn = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const Btntext = styled.div`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const DownIcon = styled.div`
    display: flex;
    width: 23px;
    height: 23px;
    padding: 0px 4.792px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-left: auto;
`
const ListItem = styled.ul`
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);
    background: #FFF;
`

const Item = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: rgb(233, 233, 233);
        border-radius: 10px;
    }
`

const Checkbox = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  
`

const ItemText = styled.div`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 30px;
`

const CategoryFilter = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedStates, setCheckedStates] = useState({
        high: false,
        middle: false,
        low: false,
    });

    const toggleCheckbox = (checkbox) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [checkbox]: !prevState[checkbox],
        }));
    };

    const resetFilter = () => {
        setCheckedStates({
            high: false,
            middle: false,
            low: false,
        });
    };

    if (ref) {
        ref.current = {
            resetFilter: resetFilter
        };
    }

    return (
        <Filter>
            <FilterBox>
                <FilterBtn onClick={()=> setIsOpen((prev) => !prev)}>
                    <Btntext>유형</Btntext>
                    <DownIcon>
                        {!isOpen ? (<AiOutlineDown/>) : (<AiOutlineUp/>)}
                    </DownIcon>
                    
                </FilterBtn> 

                {isOpen && (
                    <ListItem>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.high })}
                                onClick={() => toggleCheckbox('high')}
                            >
                                {checkedStates.high ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('high')}>고급형</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.middle })}
                                onClick={() => toggleCheckbox('middle')}
                            >
                                {checkedStates.middle ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('middle')}>가성비</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.low })}
                                onClick={() => toggleCheckbox('low')}
                            >
                                {checkedStates.low ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('low')}>절약형</ItemText>
                        </Item>
                    </ListItem>
                )}
   
            </FilterBox>
            
        </Filter>
    );
});

export default CategoryFilter;