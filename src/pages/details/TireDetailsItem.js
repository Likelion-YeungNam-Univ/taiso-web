import { styled } from "styled-components";
import { ReactComponent as TireDetails1 } from "assets/images/details/TireDetails1.svg";
import { ReactComponent as TireDetails2 } from "assets/images/details/TireDetails2.svg";
import { ReactComponent as TireDetails3 } from "assets/images/details/TireDetails3.svg";
import TireDetailsBoard from "./TireDetailsBoard";

const List = styled.div``




const TireDetailsItem = () => {
    return (
        <List>
            <TireDetailsBoard
                    title = {`상세 페이지`}
                    img1 = {<TireDetails1/>}
                    img2 = {<TireDetails2/>}
                    img3 = {<TireDetails3/>}
                    brandcolor = "#FF0000"
                    brand = "금호"
                    width = "70px"
                    color1 = "#E2BE45"
                    color2 = "#E0A991"
                    tirename = {`크루젠 HP71`}
                    keyword1 = {`사계절용`}
                    keyword2 = {`SUV`}
                    keyword3 = {`고급형`}
                    keyword4 = {`연비짱`}
                    keyword5 = {`MD 추천`}
                    price = {`132000`}
            />
        </List>
        
           
        
        
    );
}

export default TireDetailsItem;