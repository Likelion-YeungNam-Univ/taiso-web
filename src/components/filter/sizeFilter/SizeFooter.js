import { styled } from "styled-components";
import { AiFillQuestionCircle } from 'react-icons/ai';
import { ImArrowRight2 } from 'react-icons/im';


const Footer = styled.div`
    margin-top: 10px;
    width: 282px;
`

const Text = styled.div`
    display:flex;
    align-items: center;
`

const H4 = styled.h4`
    color: #6F6F6F;
    font-family: IBM Plex Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
`

const QuestionIcon = styled(AiFillQuestionCircle)`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: #9F9F9F;
`
const Button = styled.button`
    display: inline-flex;
    padding: 6px 16px 7px 16px;
    justify-content: center;
    align-items: center;
    gap: 7px;
    border-radius: 32px;
    border: 1px solid #000;
    background: #ED6F63;
    margin-top: 20px;
`
const P =styled.p`
    color: #FFF;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const ButtonIcon = styled(ImArrowRight2)`
    width: 9.75px;
    height: 9.166px;
    flex-shrink: 0;
    color: #FFF;
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

const SizeFooter = () => {
    return (
        <Footer>
            <Text>
                <H4>내 타이어 사이즈가 궁금하다면</H4>
                <QuestionIcon/>
            </Text>
            <Btn>
                <Button onClick={""}>
                    <P>차종 등록하고 사이즈 불러오기</P>
                    <ButtonIcon/>
                </Button>
            </Btn>
         
        </Footer>
    );
};

export default SizeFooter;