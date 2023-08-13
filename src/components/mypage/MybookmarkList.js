import styled from "styled-components";
import MybookmarkItem from "./MybookmarkItem";
import BookmarkImg from "../../assets/images/hot/tires/tire1.svg"

const List = styled.div`

`


function MybookmarkList() {
    return (
<List>
<MybookmarkItem>
    img = {<BookmarkImg/>}
    brand = {"금호"}
    tirename = {`크루젠 HP71`}
    tiretype = {"265/55/R19"}
</MybookmarkItem>
<MybookmarkItem>
img = {<BookmarkImg/>}
    brand = {"금호"}
    tirename = {`크루젠 HP71`}
    tiretype = {"265/55/R19"}
</MybookmarkItem>
<MybookmarkItem>
img = {<BookmarkImg/>}
    brand = {"금호"}
    tirename = {`크루젠 HP71`}
    tiretype = {"265/55/R19"}
</MybookmarkItem>
</List>
    );
    
}

export default MybookmarkList;