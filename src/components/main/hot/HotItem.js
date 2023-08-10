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
const TitleBox = styled.span`
    /* padding-bottom:10px; */
    display:flex;
    align-items: center;
    h1 {
        font-size: 27px;
        text-align: center;
        font-family: 'IBM Plex Sans KR', sans-serif;
        margin-left: 10px;
    
    }
    p{
    display: inline;
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left:13px;
    margin-bottom: 10px;
  
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
    padding-bottom:px;
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
    display: flex;
    align-items: center;
    justify-content: center;
`
const Grade = styled.h1`
    margin-left: 8px;
    font-size: 24px;
    font-family: 'IBM Plex Sans KR', sans-serif;
`
const Brand = styled.span`
    width: 67px;
    height: 30px;
    display: inline-flex;
    padding: 5px 5px 5px 5px;
    margin-left: 15px;
    margin-bottom:10px;
    color: #F00;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: #FFF;
    border: 1px;
    box-shadow: 0px 5px 20px 0px #999;
    font-family: 'IBM Plex Sans KR', sans-serif;
    align-items: center;
`
const Best = styled.p`
    width: 103px;
    height: 38px;
    display: inline-flex;
    padding: 5px 5px 5px 5px;
    margin-bottom:10px;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 18px 0px 18px 18px;
    background: ${props => props.bestbackground || "#E2BE45"};
    border: 1px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    align-items: center;
    font-size: 20px;
`
function HotItem(props) {
    return (
        <Container>
            {/* {props.brand} */}
            <Best>{props.best}</Best>
             <ImageBox>{props.img}</ImageBox>
            <ContentBox>
                <TitleBox>
                <Brand>{props.brand}</Brand>
                <p>{props.tirename}</p>
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