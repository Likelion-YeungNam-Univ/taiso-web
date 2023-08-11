import styled from "styled-components";

const Container = styled.div`
border-radius: 8px;
padding: 20px;
display:flex;
// margin-right: 10px;
`
const Image = styled.div`
margin-top:10px;
  margin-left: 35px; /* 여백을 추가할 부분 */
`;

function HotNItem(props) {
    return (
        <Container>
           {props.newsimg}
           <Image>{props.newscontent}</Image>
        </Container>
    );
}

export default HotNItem;