import { ReactComponent as Person1 } from "assets/images/review/person1.svg";
import { ReactComponent as Person2 } from "assets/images/review/person2.svg";
import { ReactComponent as Person3 } from "assets/images/review/person3.svg";
import { ReactComponent as Person4 } from "assets/images/review/person4.svg";
import { ReactComponent as Person5 } from "assets/images/review/person5.svg";
import { ReactComponent as Person6 } from "assets/images/review/person6.svg";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

const List = styled.div`
    width: 1136px;
    height: 450px;
    display: flex;
    flex-flow: wrap;
    margin-left: 3rem;
    align-content: center;
`

function ReviewList() {
    return (
        <List>
            <ReviewItem 
                image = {<Person1/>}
                username = "Scarlett Howard"
                introduction = {`Consequat incididunt ex dolor \n excepteur tempor magna deserunt. \n Laboris nostrud aute deserunt elit `}
            />
            <ReviewItem
                image = {<Person2/>}
                username = "Scarlett Howard"
                introduction = {`Consequat incididunt ex dolor \n excepteur tempor magna deserunt. \n Laboris nostrud aute deserunt elit `}
            />
            <ReviewItem
                image = {<Person3/>}
                username = "Scarlett Howard"
                introduction = {`Consequat incididunt ex dolor \n excepteur tempor magna deserunt. \n Laboris nostrud aute deserunt elit `}
            />
            <ReviewItem
                image = {<Person4/>}
                username = "Scarlett Howard"
                introduction = {`Consequat incididunt ex dolor \n excepteur tempor magna deserunt. \n Laboris nostrud aute deserunt elit `}
            />
            <ReviewItem
                image = {<Person5/>}
                username = "Scarlett Howard"
                introduction = {`Consequat incididunt ex dolor \n excepteur tempor magna deserunt. \n Laboris nostrud aute deserunt elit `}
            />
            <ReviewItem
                image = {<Person6/>}
                username = "Scarlett Howard"
                introduction = {`Consequat incididunt ex dolor \n excepteur tempor magna deserunt. \n Laboris nostrud aute deserunt elit `}
            />
        </List>
    );
}

export default ReviewList;