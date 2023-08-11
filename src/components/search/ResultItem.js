import { styled } from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const ImageBox = styled.div`
    width: 265px;
    height: 322px;
    border-radius: 20px;
    background: #E5E1E1;

    .emptyheart {
        width: 35px;
        height: 30px;
        color: gray;
        cursor: pointer;
        transition: transform 300ms ease;
    }

    .emptyheart:hover {
        transform: scale(1.1);
    }

    .fillheart {
        width: 35px;
        height: 30px;
        color: red;
        cursor: pointer;
    }
`

const ImageInnerBox = styled.div`
    width: 221px;
    height: 244px;
`

function RecommandItem(props) {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    }

    return (
        <>
            <ImageBox>
                <ImageInnerBox>{props.img}</ImageInnerBox>
                {like ? (
                    <AiFillHeart className="fillheart" onClick={toggleLike} />
                ) : (
                    <AiOutlineHeart className="emptyheart" onClick={toggleLike} />
                )}
            </ImageBox>
        </>
    );
}

export default RecommandItem;
