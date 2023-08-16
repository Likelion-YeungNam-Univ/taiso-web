import styled from "styled-components";
import BigNews from "../../../assets/images/news/BigNews.png"

const Container = styled.div`
padding: 20px;
display:flex;
`
const Content = styled.div`
  margin-left: 10px; 
  margin-top: 10px; 
  margin=right:5px;
  p{
    color: var(--black-60, #444);
font-family: Noto Sans KR;
font-size: 17px;
font-style: normal;
font-weight: 200;
line-height: 180%;
    
  }
`;

const P = styled.span`
color: var(--black-60, #444);
font-family: Noto Sans KR;
font-size: 23px;
font-style: normal;
font-weight: 400;
line-height: 180%;
`

const Image = styled.img`
width: 840px;
height: 400px;
`



function HotNItem() {

    return (
        <Container>
            <Image src={BigNews} alt="BigCo Inc. logo" />
            <Content>
            <p> <P>한국타이어앤테크놀로지는</P>  <br/>
              레이싱 타이어를 독점 공급하는 이탈 
              리아 슈퍼카 브랜드 오토모빌리 람보르기니 주관 레이싱 대회 ‘람보르기니
              슈퍼 트로페오(Lamborghini
              Super Trofeo)’ 아시아 시리즈의 4
              라운드 경기가 오는 18일과 19일 양
              일간 강원도 인제 스피디움에서 개최된다고 14일 밝혔다. 이번 한국 대회
              는 글로벌 톱티어 국내 기업이 글로벌 슈퍼카 브랜드와의 파트너십을 위해
              쏟아온 노력의 성과로 ... 더보기</p>
            </Content>
        </Container>
    );
}

export default HotNItem;