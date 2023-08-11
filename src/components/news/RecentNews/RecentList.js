import styled from "styled-components";
import RecentItem from "./RecentItem";
import { ReactComponent as New1 } from "../../../assets/images/news/News1.svg";

const List = styled.div`
    display: flex;
    height: 620px;
    width: 400px;
`


function RecentList() {
    return (
        <List>
            <RecentItem
                img = {<New1/>}
            />
            <RecentItem
                img = {<New1/>}
            />
            <RecentItem
                img = {<New1/>}
            />
            <RecentItem
                img = {<New1/>}
            />
        </List>
    );
    
}

export default RecentList;