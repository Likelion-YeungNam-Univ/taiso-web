import { styled } from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { ReactComponent as EmptyHeart } from "assets/images/search-result/emptylike.svg"
import { ReactComponent as FillHeart } from "assets/images/search-result/filllike.svg"
import { FaStar } from "react-icons/fa";

const Container = styled.div`
    width: 295px;
    height: 550px;
    h1 {
        font-size: 23px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 15px;
    }
    justify-content: center;
`
const ImageBox = styled.div`
    width: 265px;
    height: 322px;
    border-radius: 20px;
    background: #E5E1E1;
    .emptyheart {
        width: 35px;
        height: 30px;
        color: gray;
        cursor: pointer;
        transition: transform 300ms ease;
    }
    .emptyheart:hover {
        transform: scale(1.1);
    }
    .fillheart {
        width: 35px;
        height: 30px;
        color: red;
        cursor: pointer;
    }
    .fillheart:hover {
        transform: scale(1.1);
    }
    margin: 0 auto;
`
const ImageInnerBox = styled.div`
    width: 221px;
    height: 244px;
`
const BottomBox = styled.div`
    width: 265px;
    height: 228px;
    background-color: blue;
    margin: 0 auto;
`
const Brand = styled.div`
    width: ${props => props.width || "auto"};
    height: 39px;
    border-radius: 20px;
    font-size: 17px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    text-align: center;
    color: ${props => props.color || "black"};
    box-shadow: 0.5px 0.5px 60px 10px #EFEFF1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const KeywordContainer = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 5px;
`
const Keyword = styled.div`
    width: 108px;
    height: 38px;
    background: ${props => props.color || "white"};
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid black;
    margin-right: 15px;
    margin: 0 auto;
`
const Grade = styled.h1`
    font-size: 24px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
function RecommandItem(props) {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    }

    return (
        <Container>
            <ImageBox>
                <ImageInnerBox>{props.img}</ImageInnerBox>
                {like ? (
                    <FillHeart className="fillheart" onClick={toggleLike} />
                ) : (
                    <EmptyHeart className="emptyheart" onClick={toggleLike}/>
                )}
            </ImageBox>
            <BottomBox>
            <Brand width={props.width} height={props.height} color={props.brandcolor}>{props.brand}</Brand>
            <h1>{props.tirename}</h1>
            <KeywordContainer>
                <Keyword>{props.keyword1}</Keyword>
                <Keyword>{props.keyword2}</Keyword>
            </KeywordContainer>
            <KeywordContainer>
                <Keyword>{props.keyword3}</Keyword>
                <Keyword color={props.color}>{props.keyword4}</Keyword>
            </KeywordContainer>
            <KeywordContainer>
                <FaStar color="#E2BE45" size="30"/>
                <Grade>{props.grade}</Grade>
            </KeywordContainer>
            </BottomBox>
        </Container>
    );
}

export default RecommandItem;
