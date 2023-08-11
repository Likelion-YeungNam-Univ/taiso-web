import styled from "styled-components";
import HotNItem from "./HotNItem";
import { ReactComponent as BigNews } from "../../../assets/images/news/BigNews.svg";
import { ReactComponent as Newscontent } from "../../../assets/images/news/NewsContent.svg";

const List = styled.div`
width: 1300px;
height: 400px;
display: flex;
justify-content: space-between;
`

function HotNList() {
    return (
        <List>
            <HotNItem
                newsimg = {<BigNews/>}
                newscontent = {<Newscontent/>}
            />
        </List>
    );
    
}

export default HotNList;