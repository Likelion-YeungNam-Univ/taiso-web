import { styled } from "styled-components";

const Container = styled.div`
    width: 866px;
    height: 552px;
    background: white;
    border-radius: 20px;
    box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
    position: relative;

    h1 {
        position: absolute;
        left: 30px;
        top: 15px;
        font-size: 28px;
    }
`

const RegisterCar = () => {
    return (
        <Container>
            <h1>새 차량정보 등록</h1>
        </Container>
    );
}

export default RegisterCar;