import { styled } from "styled-components";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useRef, useState, forwardRef } from "react";
import SectionWidth from "./sizeFilter/SectionWidth";
import SideBySide from "./sizeFilter/SideBySide";
import Inch from "./sizeFilter/Inch";
import SizeFooter from "./sizeFilter/SizeFooter";



const Filter = styled.div`
    width: 306px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);

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
    display: flex;
    align-self: center;
    padding: 0;
`

const Item = styled.li`
    position: relative;
    list-style: none;
    padding: 3px;
    cursor: pointer;
   
`
const SizeFilter = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const sectionWidthRef = useRef();
    const sideBySideRef = useRef();
    const inchRef = useRef();

    const resetFilter = () => {
       
    if (sectionWidthRef.current && sectionWidthRef.current.resetFilter) {
        sectionWidthRef.current.resetFilter();
    }
    if (sideBySideRef.current && sideBySideRef.current.resetFilter) {
        sideBySideRef.current.resetFilter();
    }

    if (inchRef.current && inchRef.current.resetFilter) {
        inchRef.current.resetFilter();
    }

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
                    <Btntext>사이즈</Btntext>
                    <DownIcon>
                        {!isOpen ? (<AiOutlineDown/>) : (<AiOutlineUp/>)}
                    </DownIcon>
                </FilterBtn> 

                {isOpen && (
                    <ListItem>
                        <Item>
                            <SectionWidth ref={sectionWidthRef} />
                        </Item>
                        <Item>
                            <SideBySide ref={sideBySideRef} />
                        </Item>
                        <Item>
                            <Inch ref={inchRef} />
                        </Item>
                    </ListItem>
                )}
                {isOpen && (
                    <SizeFooter/>
                )}
            </FilterBox>
        </Filter>
    );
});

export default SizeFilter;

