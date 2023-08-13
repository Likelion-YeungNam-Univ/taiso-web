import { styled } from "styled-components";
import MybookmarkBoard from "./MybookmarkBoard"
import Mycar from "./Mycar"
import MyProfile from "./Myprofile";

const Container = styled.div`
display:flex;
flex-Direction: row; 
width:1168px;
margin: 0 auto;
justify-content: space-between;
`
const Content = styled.div`
flex-Direction: column;
`
const Title = styled.div`
margin-top:5px;
p{
color: #484848;
font-family: IBM Plex Sans KR;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

const PageTitle = styled.div`
width: 1200px;
height: 133px;
`

function Mybookmark() {
    return (
      <Container>
         <PageTitle><h1>마이페이지</h1></PageTitle>
        <MyProfile/>
        <Content>
        <Title><p>만나서 반갑습니다, 진우님!</p></Title>
            <Mycar/>
            <MybookmarkBoard/>
        </Content> 
      </Container>
    );
  }

export default Mybookmark;