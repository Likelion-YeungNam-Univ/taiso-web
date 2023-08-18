import { styled } from "styled-components";


const Container = styled.div`
    h1 {
        margin-top: 10px;
    }
      
`

const ContentBox = styled.div`
    width: 350px;
    height: 600px;
`
const ImageBox = styled.div`
    width: 350px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5E1E1;
    border-radius: 10px;
`
const InnerBox = styled.div`
    
    margin-top: 15px;
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
    box-shadow: 0px 11px 40px 0px rgba(112, 144, 176, 0.20);

`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;

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

function RecommandItem(props) {
    return (
        <Container>
            <ContentBox>
                <ImageBox>{props.img}</ImageBox>
                <InnerBox>
                    <Brand width={props.width} height={props.height} color={props.brandcolor}>{props.brand}</Brand>
                    <h1>{props.tirename}</h1>
                    <PriceContainer>
                        <Price>{props.price}
                            <h4>원</h4>
                            <h5>~</h5>
                        </Price>
                    </PriceContainer>
                </InnerBox>
            </ContentBox>
        </Container>
    );
    
}

export default RecommandItem;

