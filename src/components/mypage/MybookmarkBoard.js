import styled from "styled-components";
import MybookmarkList from "./MybookmarkList";

const Container = styled.div`
width: 866px;
height: 330px;
`


function MybookmarkBoard() {
    return (
       <Container>
            <MybookmarkList></MybookmarkList>
       </Container>
    );
    
}

export default MybookmarkBoard;