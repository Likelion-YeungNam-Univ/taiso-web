import styled from "styled-components";
import MybookmarkItem from "./MybookmarkItem";
import React from "react";
import { ReactComponent as BookmarkImg } from "../../assets/images/hot/tires/tire1.svg"

const List = styled.div`
display:flex;
margin-top: 10px;
justify-content: center;
`
function MybookmarkList() {
    return (
<List>
<MybookmarkItem
    img = {<BookmarkImg/>}
    brand = "금호"
    tirename = "크루젠 HP71"
    tiretype = "265/55/R20"
/>
<MybookmarkItem
img = {<BookmarkImg/>}
    brand = "한국"
    tirename = "솔루스 TA51"
    tiretype = "285/45/R19"
/>
<MybookmarkItem
img = {<BookmarkImg/>}
    brand = "한국"
    tirename = "벤투스 H462"
    tiretype = "275/55/R21"
/>
</List>
    );
    
}

export default MybookmarkList;