import { Button } from "antd";
import { styled } from "styled-components";
import FuelFilter from "./FuelFilter"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    width: 866px;
    height: 552px;
    background: white;
    border-radius: 20px;
    box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);

    h1 {
      color: #484848;
      font-family: IBM Plex Sans KR;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
`
const Form = styled.div`
margin-top:100px;
width: 866px;
height:552px;
`

const Input = styled.input`
margin: 0 auto;
width: 486px;
height: 40px;
  display: flex;
  margin-top:10px;
  padding-left:10px;
  border: 1px solid #ccc;
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
            <h1>새 차량정보 등록</h1>
            <Form>
              <Input placeholder="차량 등록 이름 예) 진우의 Main Car "
                value={carName}
              onChange={(e) => setCarName(e.target.value)}
              />
              <Input placeholder="차량 번호 예) 12가 3456"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              />
              <Input placeholder="제조사명 예) 현대"
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
              />
              <Input placeholder="모델명 예) 쏘렌토" 
              value={carModelName}
              onChange={(e) => setCarModelName(e.target.value)}
              />
              <FuelFilter></FuelFilter>
              <Btn>
                <StyledButton1 onClick={moveToMyPage}>취소하기</StyledButton1>
                <StyledButton2 onClick={handleSubmit}>등록하기</StyledButton2>
              </Btn>
            </Form>
        </Container>
    );
}

export default RegisterCar;