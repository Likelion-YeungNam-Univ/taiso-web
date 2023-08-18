import { styled } from "styled-components";
import { MyProfile, RegisterCar } from "components";


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
 margin-bottom:10px;
`
const OutContent = styled.div`
width:1200px;
margin-top:30px;
margin-bottom:30px;

h1{
  border-bottom: 1px solid #e0e0e0; /* 밑줄 추가 */
  padding:10px;
  margin-bottom:10px;
}
`
const InnerContent = styled.div`
margin-left:15px;
padding:10px;
`

function RegisterCarPage() {
  
    return (
      <Container>
        <OutContent>
        <h1> 마이 페이지 </h1>
        <Content>
        <MyProfile />
        <InnerContent>
            <RegisterCar/>
        </InnerContent>
         </Content> 
         </OutContent>
       </Container>
      // </OutContent>
    );
  }

export default RegisterCarPage;