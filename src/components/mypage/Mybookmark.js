import { styled } from "styled-components";
import MybookmarkBoard from "./MybookmarkBoard"
import Mycar from "./Mycar"
import MyProfile from "./Myprofile";
import axios from "axios";
import { useState } from "react";

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
    margin-top: 30px;
    margin-bottom: 30px;
    
h1{
    padding:10px;
    border-bottom: 1px solid #e0e0e0; /* 밑줄 추가 */
}
`
const InnerContent = styled.div`
    margin-left:15px;
    padding:8px;
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
function Mybookmark() {
  const [sucessLogin, setSucessLogin] = useState('')

  axios({
    method: 'get',
    url: 'http://www.tireso.co.kr:8080/auth',
  }, { withCredentials : true })
    .then((Response)=>{
      console.log(Response.data);
      setSucessLogin(Response.data);

  }).catch((Error)=>{
      console.log(Error);
  })

  const [name, setName] = useState('');

  axios({
    method: 'get',
    url: `http://www.tireso.co.kr:8080/auth/user-info/${sucessLogin}`,

  }, { withCredentials : true })
    .then((res)=>{
      setName(res.data.name);
  }).catch((Error)=>{
      console.log(Error);
  })

    return (
      <Container className="a">
        <OutContent className="b">
        <h1> 마이 페이지 </h1>
        <Content className="c">
        <MyProfile className="d" sucessLogin={sucessLogin}/>
        <InnerContent className="e">
        <Title><p>만나서 반갑습니다, {name}님!</p></Title>
             <Mycar className="f"/>
              <MybookmarkBoard className="g"/>
        </InnerContent>
         </Content> 
         </OutContent>
       </Container>
    );
  }

export default Mybookmark;