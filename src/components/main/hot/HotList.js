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
                best = "BEST1"
                bestbackground = "#E2BE45"
                img = {<Tire1/>}
                brandcolor = "#FF0000"
                brand = "금호"
                // width = "36px"
                tirename = {`크루젠 HP71`}
                p1 = {'마제스티 솔루스의 후속!'}
                p2 = { '승차감과 소음 모두 잡은 프리미엄 타이어'}
                keyword1 = {`사계절용`}
                keyword2 = {`승용차`}
                keyword3 = {`고급형`}
                color = "#E2BE45"
                grade = "4.7 (2,165)"
            />
            <HotItem
                best = "BEST2"
                img={<Tire2/>} 
                brandcolor = "#FF0000"
                brand = "넥슨"
                width = "70px"
                tirename = {`익스트림 컨택트 DW506`}
                p1 = {'중대형 세단을 위한 '}
                p2 = { '최적의 승차감과 저소음 성능'}
                keyword1 = {`사계절용`}
                keyword2 = {`승용차`}
                keyword3 = {`고급형`}
                color = "#03C75A"
                grade = "4.7 (2,165)"
            />
            <HotItem
            best = "BEST3"
                img={<Tire3/>} 
                brandcolor = "#FF0000"
                brand = "한국"
                width = "70px"
                tirename = {`벤투스 S2 AS H462`}
                p1 = {'안락함과 정숙성, 고속 주행 성능 '}
                p2 = { '모두 갖춘 프리미엄 타이어'}
                keyword1 = {`사계절용`}
                keyword2 = {`승용차`}
                keyword3 = {`고급형`}
                color = "#03C75A"
                grade = "4.7 (2,165)"
            />
        </List>
    );
}

export default HotList;