import { styled } from "styled-components";

const Container = styled.div`
    width: 339px;
    height: 190px;
    border-radius: 20px;
    box-shadow: 0.5px 0.5px 15px 5px #EFEFF1;
    margin: 0.5rem;

    p {
        white-space: pre-line;
        font-size: 16px;
        margin-left: 20px;
    }
`
const Innerbox1 = styled.div`
    height: 100px;
    display: flex;
    display: flex;
    align-items: center;
    div {
        height: 70px;
        margin-left: 20px;
        display: flex;
        align-items: center;
    }
    h5 {
        font-size: 16px;
        margin-left: 2rem;
    }
`
function ReviewItem(props) {
    return (
        <Container>
            <Innerbox1>
                <div>{props.image}</div>
                <h5>{props.username}</h5>
            </Innerbox1>
            <p>{props.introduction}</p>
        </Container>
    );
}

export default ReviewItem;