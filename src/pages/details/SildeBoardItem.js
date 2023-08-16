import { ReactComponent as Tire1 } from "assets/images/recommand/tires/kh_hp71.svg";
import { styled } from "styled-components";
import SlideBoard from "./SlideBoard";
const List = styled.div``

const SildeBoardItem = () => {
    return (
        <List>
            <SlideBoard
                img = {<Tire1/>}
                brandcolor = "#FF0000"
                brand = "금호"
                width = "70px"
                color1 = "#E2BE45"
                color2 = "#E0A991"
                tirename = {`크루젠 HP71`}
                price = {`132000`}
            />
    </List>
    );
};

export default SildeBoardItem;