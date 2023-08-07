import { styled } from "styled-components";
import { FaStar } from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border-radius: 20px;
    margin-right: 2rem;
    box-shadow: 0.5px 0.5px 50px 10px #EFEFF1;
`
const ImageBox = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentBox = styled.div`
      height: 30%;
`
const TitleBox = styled.div`
width: 100%; 
display: flex;
margin-left: 10px;
    h1 {
        font-size: 32px;
        white-space: pre-line;
        text-align: center;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`
const InnerBox = styled.div`
height:40%;
text-align: center;
    h4 {
        font-size: 1.5rem;
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
    p{
        font-size: 1rem;
        font-family: 'IBM Plex Sans KR', sans-serif; 
    }
`
const KeywordContainer = styled.div`
    display: flex;
    margin: 20px 5px 10px 5px ;
`
const Keyword = styled.div`
    width: 108px;
    height: 38px;
    background: ${props => props.color || "white"};
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    text-align: center;
    border-radius: 20px;
    border: 2px solid black;
    margin-right: 10px;
`
const Grade = styled.h1`
    margin-left: 5px;
    font-size: 24px;
    font-family: 'IBM Plex Sans KR', sans-serif;
`

function HotItem(props) {
    return (
        <Container>
             <ImageBox>{props.img}</ImageBox>
            <ContentBox>
                <TitleBox>
                {props.brand}
                 <h1>{props.tirename}</h1>
                </TitleBox>
                 <InnerBox>
                 <p>{props.p1}<br/>{props.p2}</p>
                    <KeywordContainer>
                        <Keyword>{props.keyword1}</Keyword>
                        <Keyword>{props.keyword2}</Keyword>
                        <Keyword>{props.keyword3}</Keyword>
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

export default HotItem;