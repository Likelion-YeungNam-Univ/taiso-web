import { styled } from "styled-components";

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`
const TitleBox = styled.div`
    width: 100%;
    height: 133px;
    display: flex;
    align-items: center;
    
    h1 {
        color: #000;
        font-family: IBM Plex Sans KR;
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-right: auto;
    }
`
const ContentBox = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
`
const ImageBox = styled.div``

const ImageBoxUP = styled.div`
    width: 720px;
    display: flex;
`
const ImageBoxDown = styled.div`
    width: 720px;
`
const InnerBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    margin-left: 50px;

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
    margin-right: 8px;
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
const PriceContainer = styled.div`
    display: flex;
    align-items: center;

    h3{
        width: 187.673px;
        height: 32.657px;
        flex-shrink: 0;
        color: #000;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const Price = styled.div`
    display: flex;
    align-items: center;
    color: #323334;
    font-family: IBM Plex Sans KR;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    h4{
        color: #000;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 6px;
        margin-left: 3px;
    }
    h5 {
        color: #000;
        font-family: Roboto;
        font-size: 32px;
        font-style: normal;
        font-weight: 200;
        line-height: normal;
        margin-left: 10px;
    }
`
const GoShopping = styled.div`
    width: 360px;
    height: 47px;
    flex-shrink: 0;
    background: #323334;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 40px;

    p {
        color: #FFF;
        text-align: center;
        font-family: IBM Plex Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
       
    }
`
const DetailsBox = styled.div`
    border-radius: 7px;
    border: 1px solid #E6E6E6;
    width: 361px;
    height: 366px;
    flex-shrink: 0;
    margin-top: 40px;
`
const Box = styled.div`
    margin-top: 20px;
    color: #849A8E;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Helvetica;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.6px; /* 160% */
    
`
const Details = styled.div`
    margin-top: 35px;
    margin-left: 20px;
`
const Caution = styled.div`
    width: 741.661px;
    height: 124.764px;
    background: #F0EFED;
    margin-top: 40px;
    
    
`
const CautionText = styled.div`

    p {
        color: red;
        font-family: Helvetica;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 15px 50px;
    }

    h5 {
        color: #000;
        font-family: Helvetica;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.4;
        padding: 10px 50px;
    }
`

const TireDetailsBoard = (props) => {
    return (
        <Container>
            <TitleBox>
                <h1>{props.title}</h1>
            </TitleBox>
            <ContentBox>
                <ImageBox>
                    <ImageBoxUP>{props.img1} {props.img2}</ImageBoxUP>
                    <ImageBoxDown>{props.img3}</ImageBoxDown>
                    <Caution>
                        <CautionText>
                            <p>주의사항</p>
                            <h5>(주)타이소는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</h5>
                        </CautionText>
                        
                    </Caution>
                </ImageBox>
                <InnerBox>
                    <Brand width={props.width} height={props.height} color={props.brandcolor}>{props.brand}</Brand>
                    <h1>{props.tirename}</h1>
                    <KeywordContainer>
                        <Keyword>{props.keyword1}</Keyword>
                        <Keyword>{props.keyword2}</Keyword>
                        <Keyword>{props.keyword3}</Keyword>
                    </KeywordContainer>
                    <KeywordContainer>
                        <Keyword color={props.color1}>{props.keyword4}</Keyword>
                        <Keyword color={props.color2}>{props.keyword5}</Keyword>
                    </KeywordContainer>
                    <PriceContainer>
                        <h3>다나와* 기준 최저가<br/>(장착비 미포함)</h3>
                        <Price>{props.price}
                            <h4>원</h4>
                            <h5>~</h5>
                        </Price>
                    </PriceContainer>
                    <GoShopping>
                        <p>쇼핑몰로 바로 연결하기</p> 
                    </GoShopping>
                    <DetailsBox>
                        <Details>
                            <Box>
                                <p>제조회사 : OO타이어<br/>분류 : 타이어</p>
                            </Box>
                            <Box>
                                <p>에너지효율등급 : 4등급<br/>젖은노면통제력 : 등급</p>
                            </Box>
                            <Box>
                                <p>하중지수: 101<br/>속도지수 : v</p>
                            </Box>
                            <Box>
                                <p>UTQG 마모지수: 640<br/>UTQG 제동력 : 64A<br/>UTQG 내열성 : A</p>
                            </Box>
                        </Details>  
                    </DetailsBox>
                </InnerBox>
                
            </ContentBox>
        </Container>
    );
    
}

export default TireDetailsBoard;