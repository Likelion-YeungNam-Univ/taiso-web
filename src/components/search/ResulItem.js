import { styled } from "styled-components";
import { FaStar } from "react-icons/fa";

const ImageBox = styled.div`
    width: 265px;
    height: 322px;
    border-radius: 10px;
`
const ImageInnerBox = styled.div`
`

function RecommandItem(props) {
    return (
        <>
            <ImageBox>
                <ImageInnerBox/>
            </ImageBox>
        </>
    );
    
}

export default RecommandItem;