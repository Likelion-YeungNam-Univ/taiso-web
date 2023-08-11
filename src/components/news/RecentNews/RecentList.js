import styled from "styled-components";
import RecentItem from "./RecentItem";
import { ReactComponent as New1 } from "../../../assets/images/news/News.svg";

const List = styled.div`
width: 300px;
height: 176px;
    display: flex;
    justify-content: space-between;
    margin-bottom:150px;
`
const AllList = styled.div`
    
`

function RecentList() {
    return (
        <AllList>
        <List>
            <RecentItem
                newsimg = {<New1/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
            <RecentItem
                newsimg = {<New1/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
            <RecentItem
                newsimg = {<New1/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
            <RecentItem
                newsimg = {<New1/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
        </List>
        <List>
        <RecentItem
            newsimg = {<New1/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
        <RecentItem
            newsimg = {<New1/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
        <RecentItem
            newsimg = {<New1/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
        <RecentItem
            newsimg = {<New1/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
    </List>
    </AllList>
    );
    
}

export default RecentList;