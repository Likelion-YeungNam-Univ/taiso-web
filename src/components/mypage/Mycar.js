import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";

const Container = styled.div`
width: 279px;
height: 566px;
`

const Title = styled.div`
p{
    color: #484848;
font-family: IBM Plex Sans KR;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline;
}
`

const Keyword = styled.div`
margin-left:15px;
p{
    color: #000;
font-family: IBM Plex Sans KR;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

const MainCarContent = styled.div`
width: 846px;
height: 72px;
border-radius: 25px;
border: 3px solid #03C75A;
background: #FFF;
display:flex;
align-items:center;
`
const AddCarContent = styled.div`
width: 846px;
height: 72px;
border-radius: 25px;
border: 2px solid #000;
background: #FFF;
display:flex;
align-items:center;
`

const Button  = styled.button`
width: 25px;
height: 25px;
padding: 2.083px;
border:none;
background-color: white;
margin-left:15px;
`


function Mycar() {
    return (
      <Container>
        <Title>
            <p>내 차량 정보 관리</p>
        </Title>
        <MainCarContent>
            <Keyword><p>진우의 Main Car</p></Keyword>
            <Keyword><p>24나 777</p></Keyword>
        </MainCarContent>
        <AddCarContent>
            <Button><PlusCircleOutlined/></Button>
            <Keyword><p>새 차량 정보 등록하기</p></Keyword>
        </AddCarContent>
      </Container>
    );
    
}

export default Mycar;