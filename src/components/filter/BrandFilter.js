import { styled } from "styled-components";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import cn from 'classnames';
import { useState,  forwardRef } from 'react';

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
const BrandFilter = forwardRef((props, ref) => { 
    const [isOpen, setIsOpen] = useState(false);
    const [checkedStates, setCheckedStates] = useState({
        kumho: false,
        nexen: false,
        korea: false,
    });

    const toggleCheckbox = (checkbox) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [checkbox]: !prevState[checkbox],
        }));
    };

    const resetFilter = () => {
        setCheckedStates({
            kumho: false,
            nexen: false,
            korea: false,
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
                <FilterBtn onClick={() => setIsOpen((prev) => !prev)}>
                    <Btntext>브랜드</Btntext>
                    <DownIcon>
                        {!isOpen ? (<AiOutlineDown/>) : (<AiOutlineUp/>)}
                    </DownIcon>
                </FilterBtn> 

                {isOpen && (
                    <ListItem>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.kumho })}
                                onClick={() => toggleCheckbox('kumho')}
                            >
                                {checkedStates.kumho ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('kumho')}>금호</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.nexen })}
                                onClick={() => toggleCheckbox('nexen')}
                            >
                                {checkedStates.nexen ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('nexen')}>넥센</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.korea })}
                                onClick={() => toggleCheckbox('korea')}
                            >
                                {checkedStates.korea ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('korea')}>한국</ItemText>
                        </Item>
                    </ListItem>
                )}
   
            </FilterBox>
        </Filter>
    );
});

export default BrandFilter;