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
    margin-bottom:150px;
`
const AllList = styled.div`
    
`

function RecentList() {
    return (
        <AllList>
        <List>
            <RecentItem
                newslink = {"https://www.yna.co.kr/view/AKR20230810100000051?input=1195m"}
                newsimg = {<New1/>}
                newstitle = {"넥센타이어·SBS, 맨시티 내한 기념 콘텐츠 제작 공개"}
                newsdate = {"1 시간 전"}
            />
            <RecentItem
                newslink = {"https://www.donga.com/news/Economy/article/all/20230810/120648735/2"}
                newsimg = {<New2/>}
                newstitle = {"한국타이어, 소외계층 아동 희망 나눔 캠프 진행"}
                newsdate = {"2 시간 전"}
            />
            <RecentItem
            newslink = {"https://newsis.com/view/?id=NISX20230731_0002396211&cID=10811&pID=10800"}
                newsimg = {<New3/>}
                newstitle = {"넥센타이어, 맨시티와 함께하는 어린이 풋볼 아카데미 성료"}
                newsdate = {"3 시간 전"}
            />
            <RecentItem
            newslink = {"http://theviewers.co.kr/View.aspx?No=2911275"}
                newsimg = {<New4/>}
                newstitle = {"전기차 덕에 ‘타이어 3사’ 쑥쑥…한국타이어, 오너 리스크 등 과제"}
                newsdate = {"3 시간 전"}
            />
        </List>
        <List>
        <RecentItem
        newslink = {"http://news.heraldcorp.com/view.php?ud=20230807000322"}
            newsimg = {<New5/>}
            newstitle = {"한국타이어 ‘아이온’, 폭스바겐 ID.4 캐나다 투어서 기네스 신기록"}
            newsdate = {"5시간 전"}
        />
        <RecentItem
        newslink = {" https://www.hankyung.com/economy/article/202307313885g"}
            newsimg = {<New6/>}
            newstitle = {"한국타이어, 휴가철 맞아 고속도로 휴게소 4곳서 무상점검"}
            newsdate = {"5 시간 전"}
        />
        <RecentItem
        newslink = {" https://newsis.com/view/?id=NISX20230724_0002388352&cID=10807&pID=10800"}
            newsimg = {<New7/>}
            newstitle = {"한국타이어 '수해지역 복구인력 지원' 나서…수제 간식 전달"}
            newsdate = {"6 시간 전"}
        />
        <RecentItem
        newslink = {"http://www.digitaltoday.co.kr/news/articleView.html?idxno=484530"}
            newsimg = {<New8/>}
            newstitle = {"베일에 가려졌던 사이버트럭 타이어 휠 포착"}
            newsdate = {"6 시간 전"}
        />
    </List>
    </AllList>
    );
    
}

export default RecentList;