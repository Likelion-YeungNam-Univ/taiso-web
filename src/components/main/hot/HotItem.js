import { styled } from "styled-components";
import { FaStar } from "react-icons/fa";

const Container = styled.div`
width: 368px;
    // padding: 0.5rem;
    border-radius: 20px;
    margin-right: 20px;
    //margin: 1 auto;
    box-shadow: 0.5px 0.5px 20px 10px #EFEFF1;
`
const ImageBox = styled.div`    
    display: flex;
     margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 300px;
`
const ContentBox = styled.div`
 width: 368px;
 height: 400px;
    margin: 0 auto;
`
const TitleBox = styled.div`
padding-bottom:10px;
    h1 {
        font-size: 27px;
        text-align: center;
        font-family: 'IBM Plex Sans KR', sans-serif;
        margin-left: 10px;
    }
`
const InnerBox = styled.div`
    h4 {
        font-size: 1rem;
        font-family: 'IBM Plex Sans KR', sans-serif;
        text-align: center;
    }
    p{
        font-size: 1.2rem;
        font-family: 'IBM Plex Sans KR', sans-serif; 
        text-align: center;
        margin: 5px 5px 20px 5px;
    }
`
const KeywordContainer = styled.div`
     display: flex;
  padding-top:10px;
     padding-bottom:20px;
     padding-left: 5px;
`
const Keyword = styled.div`
    width: 100px;
    height: 38px;
    background: ${props => props.color || "white"};
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    text-align: center;
    border-radius: 20px;
    border: 2px solid black;
    margin-left: 11px;
`
const Grade = styled.h1`
 margin-left: 8px;
    font-size: 24px;
    font-family: 'IBM Plex Sans KR', sans-serif;
`

function HotItem(props) {
    return (
        <Container>
            {props.brand}
             <ImageBox>{props.img}</ImageBox>
            <ContentBox>
                <TitleBox>
                {/* {props.brand} */}
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