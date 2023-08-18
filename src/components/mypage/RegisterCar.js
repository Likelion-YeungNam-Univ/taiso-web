import { Button } from "antd";
import { styled } from "styled-components";
import FuelFilter from "./FuelFilter"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
padding:5px;
    width: 880px;
    height: 552px;
    background: white;
    border-radius: 20px;
    box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
`

const Title = styled.div`
padding-left:30px;
h4 {
  margin-top:30px;
  color: #484848;
  font-family: IBM Plex Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
`

const Btn = styled.div`
text-align: right;
margin-top:30px;
margin-right: 100px;
`

const StyledButton1 = styled(Button)`
width:64px;
height:40px;
padding: 8px;
align-items: center;
text-align: center;
border-radius: 32px;
color: #111;
background: #FFF;
box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
font-family: IBM Plex Sans KR;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right:10px;
`;

const StyledButton2 = styled(Button)`
width:64px;
height:40px;
padding: 8px;
align-items: center;
text-align: center;
border-radius: 32px;
background: #111;
color: #FFF;
box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
font-family: IBM Plex Sans KR;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Content = styled.span`
display:flex;
border: 1px solid #ccc;
width: 486px;
height: 40px;
margin: 0 auto;
margin-bottom: 10px;
`
const Font = styled.div`
height: 26px;
padding:3px;
padding-left:5px;
p{
  padding:5px;
  color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Helvetica;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 25.6px; 
}
`
const Form = styled.div`
margin-top:80px;
width: 866px;
height:552px;
`

const Input = styled.input`
width: 350px;
height: 26px;
padding:7px;
border: none;

  // border: 1px solid #ccc;
`



const RegisterCar = () => {


  const [carName, setCarName] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModelName, setCarModelName] = useState("");


  const onMove = useNavigate();

  const moveToMyPage = () => {
    onMove("/mypage");
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://b737-220-81-51-23.ngrok-free.app/usr/member/mypage", {
        carName,
        carNumber,
        carBrand,
        carModelName
      });

      console.log(response.data); // 서버에서 받은 응답 출력
      moveToMyPage();

      // 다음 동작 수행
      // 예: 다른 페이지로 이동
    } catch (error) {
      console.error("오류 발생:", error);
      // 오류 처리
    }

  };

  useEffect(()=>{
    handleSubmit();
  }, []);

//   async function postMyInformation(){
//     {
//       const {data: response} = axios.post("url", {
//         carName:'',
//         carNumber:'',
//         carBrand:'',
//         carModelName:'',
//         oilType:''
//         })
//         .then(function (response) {
//             // response  
//         }).catch(function (error) {
//             // 오류발생시 실행
//         })
//         console.log(response);
   
// }

    return (
        <Container>
           <Title><h4>새 차량정보 등록</h4></Title>
            <Form>
              <Content>
              <Font>
              <p>차량 등록 이름</p>
              </Font>
              <Input placeholder="예) 진우의 Main Car "
                value={carName}
              onChange={(e) => setCarName(e.target.value)} />
              </Content>
              <Content>
              <Font>
              <p>차량 번호</p>
              </Font>
              <Input placeholder="예) 12가 3456"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              />
              </Content>
              <Content>
              <Font>
              <p>제조사명</p>
              </Font>
              <Input placeholder="예) 현대"
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
              />
              </Content>
              <Content>
              <Font>
              <p>모델명</p>
              </Font>
              <Input placeholder="예) 쏘렌토" 
              value={carModelName}
              onChange={(e) => setCarModelName(e.target.value)}
              />
              </Content>
              <FuelFilter></FuelFilter>
              <Btn>
                <StyledButton1 onClick={moveToMyPage}>취소</StyledButton1>
                <StyledButton2 onClick={moveToMyPage}>등록</StyledButton2>
              </Btn>
            </Form>
        </Container>
    );
}

export default RegisterCar;