import styled from "styled-components";
import RecentItem from "./RecentItem";
import { ReactComponent as New1 } from "../../../assets/images/news/News.svg";
import { ReactComponent as New2 } from "../../../assets/images/news/News2.svg";
import { ReactComponent as New3 } from "../../../assets/images/news/News3.svg";
import { ReactComponent as New4 } from "../../../assets/images/news/News4.svg";
import { ReactComponent as New5 } from "../../../assets/images/news/News5.svg";
import { ReactComponent as New6 } from "../../../assets/images/news/News6.svg";
import { ReactComponent as New7 } from "../../../assets/images/news/News7.svg";
import { ReactComponent as New8 } from "../../../assets/images/news/News8.svg";


const List = styled.div`
    width: 300px;
    height: 176px;
    display: flex;
    justify-content: space-between;
    margin-bottom:200px;
    
    
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
                newsimg = {<New2/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
            <RecentItem
                newsimg = {<New3/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
            <RecentItem
                newsimg = {<New4/>}
                newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
                newsdate = {"1 Hour Ago"}
            />
        </List>
        <List>
        <RecentItem
            newsimg = {<New5/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
        <RecentItem
            newsimg = {<New6/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
        <RecentItem
            newsimg = {<New7/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
        <RecentItem
            newsimg = {<New8/>}
            newstitle = {"News Title Lorem Ipsum Dolor Sit Amet"}
            newsdate = {"1 Hour Ago"}
        />
    </List>
    </AllList>
    );
    
}

export default RecentList;