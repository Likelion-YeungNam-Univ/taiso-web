import styled from "styled-components";

const Container = styled.div`
    border-radius: 8px;
    padding: 15px;
    position: relative;
`

const Title = styled.div`

    width: 270px;
    height: 80px;
    color: var(--black-80, #121221);
    font-family: Playfair Display;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom:10px;
    margin-top:10px;
    margin-left: 1px;
`
const P = styled.div`
   
    color: var(--black-20, #949494);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;

`
const Img = styled.div``


function RecentItem(props) {

// const onMove = useNavigate();

//   const moveToLink1 = () => {
//     onMove("https://www.yna.co.kr/view/AKR20230810100000051?input=1195m");
//   }

    return (
        <Container>
            <Img>
                <a href={props.newslink}>{props.newsimg}</a>
            </Img>
             <Title>{props.newstitle}</Title>
            <P>{props.newsdate}</P>
        </Container>
    );
    
}

export default RecentItem;