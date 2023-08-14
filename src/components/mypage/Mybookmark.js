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
margin-bottom:20px;
`
const Content = styled.div`
 display:flex;
 margin-top:10px;
`
const OutContent = styled.div`
width:1200px;
h1{
  border-bottom: 1px solid #e0e0e0; /* 밑줄 추가 */
}
`
const InnerContent = styled.div`
margin-left:15px;
`

const Title = styled.div`
margin-left:15px;
p{
color: #484848;
font-family: IBM Plex Sans KR;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

// const PageTitle = styled.div`
// width: 1200px;
// height: 133px;
// `

function Mybookmark() {
    return (
      <Container className="a">
        <OutContent className="b">
        <h1> 마이 페이지 </h1>
        <Content className="c">
        <MyProfile className="d"/>
        {/* <Content> */}
        <InnerContent className="e">
        <Title><p>만나서 반갑습니다, 진우님!</p></Title>
             <Mycar className="f"/>
              <MybookmarkBoard className="g"/>
        </InnerContent>
         </Content> 
         </OutContent>
       </Container>
      // </OutContent>
    );
  }

export default Mybookmark;