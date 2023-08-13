import styled from "styled-components";

const Container = styled.div`
width: 237px;
height: 256px;
`
const Imagebox = styled.div`
width: 128px;
height: 155px;
`
const TitleBox = styled.div`

`
const Brand = styled.div`
width: 67px;
    height: 30px;
    display: inline-flex;
    padding: 5px 5px 5px 5px;
    margin-left: 15px;
    margin-bottom:10px;
    color: #F00;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: #FFF;
    border: 1px;
    box-shadow: 0px 5px 20px 0px #999;
    font-family: 'IBM Plex Sans KR', sans-serif;
    align-items: center;
`

function MybookmarkItem(props) {
    return (
    <Container>
           <Imagebox>{props.img}</Imagebox>
           <TitleBox>
                <Brand>{props.brand}</Brand>
                <p>{props.tirename}</p>
            </TitleBox>
           {props.tiretype}
    </Container>
    );
    
}

export default MybookmarkItem;