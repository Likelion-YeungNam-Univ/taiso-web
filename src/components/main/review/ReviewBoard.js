import { ReactComponent as Review } from "assets/images/review/ReviewIcon.svg";
import styled from "styled-components";
import ReviewList from "./ReviewList";

const Title = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    h1 {
        padding: 1rem;
        font-size: 40px;
        font-weight: 600;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`;
const ReviewIcon = styled(Review)`
    margin-left: 2rem;
`;
const Nav = styled.div`
    width: 1136px;
    height: 650px;
    left: 50%;
    margin: 0 auto;
`
const Button = styled.button`
    width: 176px;
    height: 45px;
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    background: white;
    border-radius: 30px;
    border: 2px solid black;
    margin-left: 13rem;
    margin-top: 1.5rem;
`
const Discription = styled.p`
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    white-space: pre-line;
    margin-left: 20px;
`
const ReviewContents = styled(ReviewList)`
    margin-left: 10rem;
`
function ReviewBoard() {
    return (
        <Nav>
            <Title>
                <ReviewIcon/>
                <div>
                    <h1>타이어 후기는 타이소 커뮤니티에서</h1>
                    <Discription>
                    누적 회원 접속 수 54,233,230회에 빛나는<br/>
                    온라인 최대 규모 타이어 정보 공유 커뮤니티에서<br/>
                    타이어 구매에 대한 조언을 받을 수 있습니다.
                    </Discription>
                </div>
                <Button>후기 더보기 +</Button>
            </Title>
            <ReviewContents/>
        </Nav>
    );
}

export default ReviewBoard;