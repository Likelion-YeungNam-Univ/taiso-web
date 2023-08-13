import ResultItem from "./ResultItem";
import { styled } from "styled-components";
import { ReactComponent as Tire1 } from "assets/images/recommand/tires/kh_hp71.svg";

const Container = styled.div`
    width: 853px;
`

const ResultList = () => {
    return (
        <Container>
            <ResultItem 
                img={<Tire1/>} 
                brandcolor = "#FF0000"
                brand = "금호"
                width = "50px"
                tirename = {`크루젠 HP71`}
                keyword1 = {`사계절용`}
                keyword2 = {`SUV`}
                keyword3 = {`고급형`}
                keyword4 = {`연비짱`}
                color = "#E2BE45"
                grade = "4.7 (2,165)"/>
        </Container>
    );
}

export default ResultList;
