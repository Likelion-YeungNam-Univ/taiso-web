import { styled } from "styled-components";
import { ReactComponent as DescriptionTire } from "assets/images/details/DescriptionTire.svg";

const DescriptionBox = styled.div``;

const DescriptionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    p {
        color: #979797;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: 50px;
    }
`;

const P = styled.span`
    color: black;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const DescriptionImage = styled.div`
    display: flex; /* Add this line to make the content flex items */
    align-items: center; /* Vertically center align the content */
    justify-content: center; /* Horizontally center align the content */
    width: 1200px;
    margin: 0 auto;
`;

const Description = () => {
    return (
        <DescriptionBox>
            <DescriptionBar>
                <p><P>Description</P></p>
                <p>Details</p>
                <p>Reviews(0)</p>
            </DescriptionBar>
            <DescriptionImage>
                <DescriptionTire/>
            </DescriptionImage>
        </DescriptionBox>
    );
};

export default Description;
