import { styled } from "styled-components";
import { FaStar } from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    padding: 0.5rem;
    border-radius: 20px;
    margin-right: 2rem;
    box-shadow: 0.5px 0.5px 50px 10px #EFEFF1;
`
const TitleBox = styled.div`
    height: 25%;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 32px;
        white-space: pre-line;
        text-align: center;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`
const ContentBox = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
`
const ImageBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InnerBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    margin-top: 30px;

    & > * {
        margin: 5px 0;
    }
    
    h1 {
        font-size: 1.5rem;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`
const KeywordContainer = styled.div`
    display: flex;
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
`
const Grade = styled.h1`
    font-size: 24px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Brand = styled.div`
    width: ${props => props.width || "auto"};
    height: 45px;
    border-radius: 20px;
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    text-align: center;
    color: ${props => props.color || "black"};
    box-shadow: 0.5px 0.5px 60px 10px #EFEFF1;
    display: flex;
    justify-content: center;
    align-items: center;
`
function RecommandItem(props) {
    return (
        <Container>
            <TitleBox>
                <h1>{props.title}</h1>
            </TitleBox>
            <ContentBox>
                <ImageBox>{props.img}</ImageBox>
                <InnerBox>
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
                </InnerBox>
            </ContentBox>
        </Container>
    );
    
}

export default RecommandItem;