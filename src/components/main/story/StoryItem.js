import styled from "styled-components";

const Container = styled.div`
    // margin: 0.5rem;
    div {
        width: auto;
        height: 293px;
        border-radius: 20px;
        box-shadow: 0.5px 0.5px 50px 10px #EFEFF1;
        margin-right: 70px;
    }
    h1 {
        font-size: 28px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        white-space: pre-line;
        margin-top: 1rem;
    }
`

function StoryItem(props) {
    return (
        <Container>
            <div>{props.img}</div>
            <h1>{props.title}</h1>
        </Container>
    );
}

export default StoryItem;