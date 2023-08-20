import { styled } from "styled-components";
import HotItem from "./HotItem";
import { ReactComponent as Tire1 } from "assets/images/recommand/tires/kh_hp71.svg";
import { ReactComponent as Tire2 } from "assets/images/hot/tires/tire2.svg";
import { ReactComponent as Tire3 } from "assets/images/hot/tires/tire3.svg";

const List = styled.div`
    display: flex;
    height: 620px;
    width: 400px;
`
function HotList() {
    return (
        <List>
            <HotItem
                hot = "HOT"
                bestbackground = "#E2BE45"
                img = {<Tire1/>}
                brandcolor = "#FF0000"
                brand = "금호"
                width = "70px"
                tirename = {`크루젠 HP71`}
                p1 = {'마제스티 솔루스의 후속!'}
                p2 = { '승차감과 소음 모두 잡은 프리미엄 타이어'}
                keyword1 = {`사계절용`}
                keyword2 = {`승용차`}
                keyword3 = {`고급형`}
                color = "#E2BE45"
                grade = "4.9 (1,670)"
            />
            <HotItem
                none= "none"
                img={<Tire2/>} 
                brandcolor = "#FF0000"
                brand = "넥센"
                width = "70px"
                tirename = {`엔페라 AU5`}
                p1 = {'중대형 세단을 위한 '}
                p2 = { '최적의 승차감과 저소음 성능'}
                keyword1 = {`삼계절용`}
                keyword2 = {`승용차`}
                keyword3 = {`절약형`}
                color = "#03C75A"
                grade = "4.8 (1,948)"
            />
            <HotItem
                none= "none"
                img={<Tire3/>} 
                brandcolor = "#FF0000"
                brand = "한국"
                width = "70px"
                tirename = {`벤투스 S2 AS H462`}
                p1 = {'안락함과 정숙성, 고속 주행 성능 '}
                p2 = { '모두 갖춘 프리미엄 타이어'}
                keyword1 = {`겨울용`}
                keyword2 = {`겸용`}
                keyword3 = {`고급형`}
                color = "#03C75A"
                grade = "5 (622)"
            />
        </List>
    );
}

export default HotList;


