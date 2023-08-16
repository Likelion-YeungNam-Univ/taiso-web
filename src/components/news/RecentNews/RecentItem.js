import styled from "styled-components";

const Container = styled.div`
    border-radius: 8px;
    padding: 15px;
`

const Title = styled.div`
text-align: center;
width: 270px;
color: var(--black-80, #121221);
font-family: Playfair Display;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom:10px;
margin-top:10px;
`
const Date = styled.span`
p{
    color: var(--black-20, #949494);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top : 10px;
    padding-left: 10px;
}
`

function RecentItem(props) {
    return (
        <Container>
           {props.newsimg}
            <Title>{props.newstitle}</Title>
            <Date><p>{props.newsdate}</p></Date>
        </Container>
    );
    
}

export default RecentItem;