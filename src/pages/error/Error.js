import {ReactComponent as ErrorImg} from "assets/images/error/fail.svg"
import { styled } from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    margin-top: 20px;

    p {
        font-size: 40px;
		font-family: 'IBM Plex Sans KR', sans-serif;
        text-align: center;
        font-weight: bold;
    }
`

const ImageBox = styled.div`
    width: 622.5px;
    height: 674.17px;
    margin: 0 auto;
`

const Margin = styled.div`
    margin-bottom: 5rem;
`

function Error() {
    return (
        <Container>
            <ImageBox><ErrorImg/></ImageBox>
            <p>404 : page not found</p>
            <p>준비 중입니다.</p>
            <Margin/>
        </Container>
    );
}

export default Error;