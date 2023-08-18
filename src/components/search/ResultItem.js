import { styled } from "styled-components";
import { useState } from "react";
import { ReactComponent as EmptyHeart } from "assets/images/search/emptylike.svg"
import { ReactComponent as FillHeart } from "assets/images/search/filllike.svg"
import { FaStar } from "react-icons/fa";

const Container = styled.div`
    width: 295px;
    height: 600px;
    h1 {
        font-size: 23px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 15px;
    }
    justify-content: center;
    margin-top: 50px;
`
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
        position: relative;
        top: 15px;
        left: 215px;
    }
    .emptyheart:hover {
        transform: scale(1.1);
    }
    .fillheart {
        width: 35px;
        height: 30px;
        color: red;
        cursor: pointer;
        position: relative;
        top: 15px;
        left: 215px;
    }
    .fillheart:hover {
        transform: scale(1.1);
    }
    margin: 0 auto;
    position: relative;
`
const TireImageBox = styled.img`
    width: 221px;
    height: 244px;
    margin: 0 auto;
    display: block;
`
const BottomBox = styled.div`
    width: 265px;
    height: 228px;
    margin: 0 auto;
    margin-top: 15px;
 
    p {
        font-size: 22px;
        font-family: 'IBM Plex Sans KR', sans-serif;
        display: flex;
        margin-left: 15px;
        p {
            color: grey;
            font-size: 15px;
            margin-top: 5px;
            margin-left: 5px;
        }
    }
`
const Brand = styled.span`
    width: ${props => props.width || "auto"};
    height: 39px;
    border-radius: 20px;
    font-size: 17px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    text-align: center;
    color: ${props => { 
    if (props.color === "한국") {
        return "#EC6608";
    } else if (props.color === "넥센") {
        return "#AD00FF";
    } else {
        return "#FF0000";
    }
    }};
    box-shadow: 0.5px 0.5px 40px 15px #EFEFF1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`
const KeywordContainer = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 5px;
    .rate {
        margin-top: 5px;
    }
    .star {
        margin-left: 10px;
    }

`
const Keyword = styled.div`
    width: 108px;
    height: 38px;
    background: ${props => props.color || "white"};
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid black;
    margin-right: 15px;
    margin: 0 auto;
`
const None = styled.div`
    width: 108px;
    height: 38px;
    background: white;
    font-size: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid white;
    margin-right: 15px;
    margin: 0 auto;
`
const Grade = styled.p`
    font-size: 24px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
function RecommandItem(props) {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    }

    return (
        <Container>
            <ImageBox>
                {like ? (
                    <FillHeart className="fillheart" onClick={toggleLike} />
                ) : (
                    <EmptyHeart className="emptyheart" onClick={toggleLike}/>
                )}
                <TireImageBox src={props.img} alt=""></TireImageBox>
            </ImageBox>
            <BottomBox>
            <Brand width={props.width} height={props.height} color={props.brand}>{props.brand}</Brand>
            <h1>{props.tirename}</h1>
            <p>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<p>원~</p></p>
            <KeywordContainer>
                <Keyword>{props.keyword1}</Keyword>
                <Keyword>{props.keyword2}</Keyword>
            </KeywordContainer>
            <KeywordContainer>
                <Keyword>{props.keyword3}</Keyword>
                {props.keyword4 === null ? <None>{props.keyword4}</None> : <Keyword color={props.color}>{props.keyword4}</Keyword>}
            </KeywordContainer>
            <KeywordContainer className="rate">
                <FaStar className="star" color="#E2BE45" size="30"/>
                <Grade>{props.grade}</Grade>
                <Grade>({props.review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</Grade>
            </KeywordContainer>
            </BottomBox>
        </Container>
    );
}

export default RecommandItem;

// import { styled } from "styled-components";
// import { useState } from "react";
// import { ReactComponent as EmptyHeart } from "assets/images/search/emptylike.svg"
// import { ReactComponent as FillHeart } from "assets/images/search/filllike.svg"
// import { FaStar } from "react-icons/fa";

// const Container = styled.div`
//     width: 295px;
//     height: 620px;
//     position: relative;
//     h1 {
//         font-size: 23px;
//         font-family: 'IBM Plex Sans KR', sans-serif;
//         margin-top: 5px;
//         margin-bottom: 5px;
//         margin-left: 10px;
//     }
//     justify-content: center;
//     margin-top: 50px;
// `
// const ImageBox = styled.div`
//     width: 265px;
//     height: 322px;
//     border-radius: 20px;
//     background: #E5E1E1;
//     .emptyheart {
//         width: 35px;
//         height: 30px;
//         color: gray;
//         cursor: pointer;
//         transition: transform 300ms ease;
//         position: relative;
//         top: 15px;
//         left: 215px;
//     }
//     .emptyheart:hover {
//         transform: scale(1.1);
//     }
//     .fillheart {
//         width: 35px;
//         height: 30px;
//         color: red;
//         cursor: pointer;
//         position: relative;
//         top: 15px;
//         left: 215px;
//     }
//     .fillheart:hover {
//         transform: scale(1.1);
//     }
//     margin: 0 auto;
//     position: relative;
// `
// const TireImageBox = styled.img`
//     width: 221px;
//     height: 244px;
//     margin: 0 auto;
//     display: block;
// `
// const BottomBox = styled.div`
//     width: 265px;
//     height: 228px;
//     background-color: blue;
//     margin: 0 auto;
//     margin-top: 15px;

 
//     p {
//         font-size: 22px;
//         font-family: 'IBM Plex Sans KR', sans-serif;
//         display: flex;
//         margin-left: 15px;
//         p {
//             color: grey;
//             font-size: 15px;
//             margin-top: 5px;
//             margin-left: 5px;
//         }
//     }
// `
// const Brand = styled.span`
//     width: ${props => props.width || "auto"};
//     height: 39px;
//     border-radius: 20px;
//     font-size: 17px;
//     font-family: 'IBM Plex Sans KR', sans-serif;
//     text-align: center;
//     color: ${props => { 
//     if (props.color === "한국") {
//         return "#EC6608";
//     } else if (props.color === "넥센") {
//         return "#AD00FF";
//     } else {
//         return "#FF0000";
//     }
//     }};
//     box-shadow: 0.5px 0.5px 40px 15px #EFEFF1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: 10px;
// `
// const KeywordContainer = styled.div`
//     display: flex;
//     margin: 0 auto;
//     margin-top: 5px;

//     .rate {
//         margin-top: 5px;
//     }
//     .star {
//         margin-left: 10px;
//     }

// `
// const Keyword = styled.div`
//     width: 108px;
//     height: 38px;
//     background: ${props => props.color || "white"};
//     font-size: 20px;
//     font-family: 'IBM Plex Sans KR', sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 20px;
//     border: 2px solid black;
//     margin-right: 15px;
//     margin: 0 auto;
// `
// const None = styled.div`
//     width: 108px;
//     height: 38px;
//     background: white;
//     font-size: 20px;
//     font-family: 'IBM Plex Sans KR', sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 20px;
//     border: 2px solid white;
//     margin-right: 15px;
//     margin: 0 auto;
// `
// const Grade = styled.p`
//     font-size: 24px;
//     font-family: 'IBM Plex Sans KR', sans-serif;
//     margin-left: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const BottomBox = styled.div`
//     width: 265px;
//     height: 228px;
//     margin: 0 auto;
//     margin-top: 15px;
//     p {
//          font-size: 22px;
//         font-family: 'IBM Plex Sans KR', sans-serif;
//         display: flex;
//         /* margin-left: 15px; */
//         p {
//             color: grey;
//             font-size: 15px;
//             margin-top: 5px;
//             margin-left: 0px;
//        }
//     }
// `;

// const Key = styled.div`
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     margin-top: 300px;
// `;

// function RecommandItem(props) {
//     const [like, setLike] = useState(false);

//     const toggleLike = () => {
//         setLike(!like);
//     }

//     return (
//         <Container>
//             <ImageBox>
//                 {like ? (
//                     <FillHeart className="fillheart" onClick={toggleLike} />
//                 ) : (
//                     <EmptyHeart className="emptyheart" onClick={toggleLike}/>
//                 )}
//                 <TireImageBox src={props.img} alt=""></TireImageBox>
               
//             </ImageBox>
//             <BottomBox>
//                 <Brand width={props.width} height={props.height} color={props.brand}>{props.brand}</Brand>
//                     <h1>{props.tirename}</h1>
//             <Key>  
//                 <p>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<p>원~</p></p>
//             <KeywordContainer>
//                 <Keyword>{props.keyword1}</Keyword>
//                 <Keyword>{props.keyword2}</Keyword>
//             </KeywordContainer>
//             <KeywordContainer>
//                 <Keyword>{props.keyword3}</Keyword>
//                 {props.keyword4 === null ? <None>{props.keyword4}</None> : <Keyword color={props.color}>{props.keyword4}</Keyword>}
//             </KeywordContainer>
//             <KeywordContainer className="rate">
//                 <FaStar className="star" color="#E2BE45" size="30"/>
//                 <Grade>{props.grade}</Grade>
//                 <Grade>({props.review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</Grade>
//             </KeywordContainer>
//             </Key>
//             </BottomBox>
//         </Container>
//     );
// }

// export default RecommandItem;

