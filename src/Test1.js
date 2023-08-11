import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Button = styled.button`
    width: 30px;
    height: 30px;
`

const Test1 = () => {
    const movePage = useNavigate();

    function gotest2() {
        movePage('/test2');
    }
    return(
        <div>
            <Button onClick={gotest2}>test1</Button>
        </div>
    );
}

export default Test1;