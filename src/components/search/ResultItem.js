import { styled } from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const ImageBox = styled.div`
    width: 265px;
    height: 322px;
    border-radius: 20px;
    background: #E5E1E1;
`
const ImageInnerBox = styled.div`
    width: 221px;
    height: 244px;
`

function RecommandItem(props) {
    return (
        <>
            <ImageBox>
                <ImageInnerBox>{props.img}</ImageInnerBox>
            </ImageBox>
        </>
    );
    
}

export default RecommandItem;