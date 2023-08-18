import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as MyFace } from "../../assets/images/mypage/Image.svg";
import { ReactComponent as Check } from  "../../assets/images/mypage/check.svg";
import axios from "axios";


const Container = styled.div`
  width: 279px;
  height: 610px;
  border-radius: 8px;
  background: #EFF0F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:5px;

`;

const Imagebox = styled.img`
  width: 142.64px;
  height: 142.64px;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SmallCheck = styled(Check)`
  // padding: 5px;
  width: 18px; /* 원하는 크기로 설정 */
  height: 18px; /* 원하는 크기로 설정 */
  margin-right: 5px;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.span`
margin-bottom:10px;
padding:5px;
h4{
    color: #484848;
text-align: center;
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
  p {    
    margin-bottom:5px;
    color: #03C75A;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 10px;
  border: 1px solid #484848;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
  margin-top:20px;
  
  &:hover {
    background-color: #02a65a;
  }
`;



const TitleContent = styled.span`
 display:flex;
 margin-right:10px;
`;

function MyProfile({sucessLogin}) {

  // const userName 
  // const userEmail
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [imageurl, setImageUrl] = useState('');

  axios({
    method: 'get',
    url: `http://www.tireso.co.kr:8080/auth/user-info/${sucessLogin}`,
  });

  const fetchData = useEffect(()=>{
    axios.get("http://www.tireso.co.kr:8080/auth/user-info")
  }, { withCredentials : true })
    .then((res)=>{
      setEmail(res.data.email);
      setName(res.data.name);
      setImageUrl(res.data.profileImageUrl);
     //console.log(res.data.email);
  }).catch((Error)=>{
      console.log(Error);
  })

  // axios.post('http://localhost:8080/join',
  //            {
  //              userId:userId,
  //              password:password,
  //              email:email
  //            })
  //   .catch(function(error) {
  //   console.log("실패");
  //   console.log(error);
  //   console.log(user);
  // });

  // const fetchData = useEffect(()=>{
  //   axios.get("http://www.tireso.co.kr:8080/auth/user-info")
  //   .then((res)=>{
  //     console.log(res);
  //     // setLists(response);
  //     // setCurrentPosts(response);
  //   }).catch((err)=>{
  //     console.log("err:"+err);
  //   })

  // },[])
    
    // { withCredentials: true }); 


// useEffect(() => {
//     getItem(selected); 
// }, [selected]);

  return (
    <Container>
      <Imagebox src= {imageurl}>
      </Imagebox>
      <Content>
        <Title>
          <h4>{name}</h4>
          <p>{email}</p>
        </Title>
        <Title>
       <TitleContent><SmallCheck/> <p>이메일 인증 완료</p></TitleContent>
       <TitleContent><SmallCheck /> <p>차량 정보 등록 완료</p></TitleContent>
        <TitleContent><SmallCheck/><p>타이어 사이즈 등록 완료</p></TitleContent>
        </Title>
        <Button>로그아웃</Button>
      </Content>
    </Container>
  );
}

export default MyProfile;
