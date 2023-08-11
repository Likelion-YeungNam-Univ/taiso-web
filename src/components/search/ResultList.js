import ResultItem from "./ResultItem";
import { styled } from "styled-components";
import { ReactComponent as Tire1 } from "assets/images/recommand/tires/kh_hp71.svg";

const Container = styled.div`
    width: 853px;
`

const ResultList = () => {
    return (
        <Container>
            <ResultItem img={<Tire1/>}/>
        </Container>
    );
}

export default ResultList;