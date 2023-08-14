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

const WeatherFilter = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedStates, setCheckedStates] = useState({
        summer: false,
        winter: false,
        threeseasons: false,
        fourseasons: false
    });

    const toggleCheckbox = (checkbox) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [checkbox]: !prevState[checkbox],
        }));
    };

    const resetFilter = () => {
        setCheckedStates({
            summer: false,
            winter: false,
            threeseasons: false,
            fourseasons: false
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
                    <Btntext>계절</Btntext>
                    <DownIcon>
                        {!isOpen ? (<AiOutlineDown/>) : (<AiOutlineUp/>)}
                    </DownIcon>
                    
                </FilterBtn> 

                {isOpen && (
                    <ListItem>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.summer })}
                                onClick={() => toggleCheckbox('summer')}
                            >
                                {checkedStates.summer ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('summer')}>여름용</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.winter })}
                                onClick={() => toggleCheckbox('winter')}
                            >
                                {checkedStates.winter ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('winter')}>겨울용</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.threeseasons })}
                                onClick={() => toggleCheckbox('threeseasons')}
                            >
                                {checkedStates.threeseasons ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('threeseasons')}>삼계절용</ItemText>
                        </Item>
                        <Item>
                            <Checkbox
                                className={cn('checkbox', { checked: checkedStates.fourseasons })}
                                onClick={() => toggleCheckbox('fourseasons')}
                            >
                                {checkedStates.fourseasons ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </Checkbox>
                            <ItemText onClick={() => toggleCheckbox('fourseasons')}>사계절용</ItemText>
                        </Item>
                    </ListItem>
                )}
   
            </FilterBox>         
        </Filter>
    );
});
export default WeatherFilter;