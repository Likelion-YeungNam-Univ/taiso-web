import styled from "styled-components";
import { ReactComponent as FooterLogo } from "assets/images/logo/FooterLogo.svg";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';

const Foot = styled.div`
    background: #2D2926;
    width: 100%;
    height: 476px;
    /* position: fixed;    
    bottom: 0;
    left:0;  */
    font-family: 'Noto Sans KR', sans-serif;
    position:absolute; 
    /* margin-top: 800px; */
`
const Inner = styled.div`
    padding-right: 300px;
    padding-left: 300px;
    
`

const Inner1 = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 150px;

    .social {
        color: #FFFFFF;
        margin-left: auto;
        font-size: 34px;
        display: flex;
        align-items: center;
    };
    
`
const Inner2 = styled.div`
    font-size: 15px;
    color: #9F9F9F;
    margin-top: 40px;

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin-top: 20px;
    }
    
    li::after {
        content: "|";
        float: right;
        margin-right: 3px;
        margin-left: 3px;
    }

    li:last-child::after {
        content: "";
    }

    .footer-info3 {
        margin-top: 20px;
    }
`

const Footer = () => {
    return (
        <Foot>
            <Inner>
                <Inner1>
                    <div className="footer-logo">
                        <FooterLogo/>
                    </div>
                    <div className="social">
                        <BiLogoFacebook/>
                        <AiOutlineInstagram/>
                    </div>
                </Inner1>
                <Inner2>
                    <div className="footer-info1">
                        <p >고객행복센터 1670 - 6250&emsp;&emsp;오전 10시 ~ 오후 5시</p>
                    </div>
                    <div className="footer-info2">
                        <ul className="footer-info2-list">
                            <li className="footer-info2-text">이용약관</li>
                            <li className="footer-info2-text">개인정보 처리방침</li>
                            <li className="footer-info2-text">소비자 분쟁해결 기준</li>
                            <li className="footer-info2-text">사업자 정보확인</li>
                        </ul>
                    </div>
                    <div className="footer-info3">(주) 타이소는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</div>
                </Inner2>
            </Inner>
        </Foot>
    );
};

export default Footer;