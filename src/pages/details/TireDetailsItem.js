// import { styled } from "styled-components";
// import { ReactComponent as TireDetails1 } from "assets/images/details/TireDetails1.svg";
// import { ReactComponent as TireDetails2 } from "assets/images/details/TireDetails2.svg";
// import { ReactComponent as TireDetails3 } from "assets/images/details/TireDetails3.svg";
// import TireDetailsBoard from "./TireDetailsBoard";

// const List = styled.div``




// const TireDetailsItem = () => {
//     return (
//         <List>
//             <TireDetailsBoard
//                     title = {`상세 페이지`}
//                     img1 = {<TireDetails1/>}
//                     img2 = {<TireDetails2/>}
//                     img3 = {<TireDetails3/>}
//                     brandcolor = "#FF0000"
//                     brand = "금호"
//                     width = "70px"
//                     color1 = "#E2BE45"
//                     color2 = "#E0A991"
//                     tirename = {`크루젠 HP71`}
//                     keyword1 = {`사계절용`}
//                     keyword2 = {`SUV`}
//                     keyword3 = {`고급형`}
//                     keyword4 = {`연비짱`}
//                     keyword5 = {`MD 추천`}
//                     price = {`132000`}
//             />
//         </List>
        
           
        
        
//     );
// }

// export default TireDetailsItem;

import { styled } from "styled-components";
import { ReactComponent as TireDetails1 } from "assets/images/details/TireDetails1.svg";
import { ReactComponent as TireDetails2 } from "assets/images/details/TireDetails2.svg";
import { ReactComponent as TireDetails3 } from "assets/images/details/TireDetails3.svg";
import TireDetailsBoard from "./TireDetailsBoard";
import { useState, useEffect } from "react";
import axios from 'axios';

const List = styled.div``

const TireDetailsItem = ({id}) => {

    const [lists, setLists] = useState([]); //ItemList
    const [currentPosts, setCurrentPosts] = useState([]); // 현재 post 설정


    async function getItem() {
        const {data: response} = await axios.get(`http://www.tireso.co.kr:8080/tire/${id}`,  { withCredentials: true });
        setLists(response);
        //setCurrentPosts(response);
    }
    console.log(lists)

    useEffect(() => {
        getItem(); 
    }, []);

    return (
        <List>
                <TireDetailsBoard
                    id = {lists.id}
                    title = {`상세 페이지`}
                    img1 = {lists.imageUrl1}
                    img2 = {lists.imageUrl2}
                    img3 = {lists.imageUrl3}
                    brandcolor = "#FF0000"
                    brand = {lists.brand}
                    width = "70px"
                    color1 = "#E2BE45"
                    color2 = "#E0A991"
                    tirename = {lists.name1}
                    keyword1 = {lists.season}
                    keyword2 = {lists.carType}
                    keyword3 = {lists.type}
                    keyword4 = {lists.tag}
                    keyword5 = {`MD 추천`}
                    price = {lists.price}
                    />
        </List>
           
    );
}

export default TireDetailsItem;