import { styled } from "styled-components";
import RecommandItem from "./RecommandItem";
import { ReactComponent as Tire1 } from "assets/images/recommand/tires/kh_hp71.svg";
import { ReactComponent as Tire2 } from "assets/images/recommand/tires/ct_dw506.svg";
// import { ReactComponent as Kumho } from "assets/images/recommand/brand/Kumho.svg";
// import { ReactComponent as Continental } from "assets/images/recommand/brand/Continental.svg";

const List = styled.div`
    display: flex;
    height: 448px;
`

function RecommandList() {
    return (
        <List>
            <RecommandItem 
                title = {`“시끄럽던 금쪽이 SUV 완치,\n사실상 오은영 박사급 타이어”`} 
                img = {<Tire1/>}
                brandcolor = "#FF0000"
                brand = "금호"
                width = "70px"
                tirename = {`크루젠 HP71`}
                keyword1 = {`사계절용`}
                keyword2 = {`SUV`}
                keyword3 = {`고급형`}
                keyword4 = {`연비짱`}
                color = "#E2BE45"
                grade = "4.7 (2,165)"
            />
            <RecommandItem
                title = {`“차종, 계절을 초월한 특수부대급\n전천후 프리미엄 타이어”`} 
                img={<Tire2/>} 
                brandcolor = "#FFA500"
                brand = "컨티넨탈"
                width = "116px"
                tirename = {`익스트림 컨택트 DW506`}
                keyword1 = {`사계절용`}
                keyword2 = {`승용·SUV`}
                keyword3 = {`고급형`}
                keyword4 = {`가심비`}
                color = "#03C75A"
                grade = "4.7 (2,165)"
            />
        </List>
    );
}

export default RecommandList;