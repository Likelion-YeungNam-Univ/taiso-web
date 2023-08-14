
// import { styled } from "styled-components";
// import SearchReacommendItem from "./SearchRecommendItem";

// import { Tires } from "./Tires";

// const Container = styled.div`
//     width: 885px;

//     .item-container {
//         display: flex;
//         flex-flow: wrap;
//         align-content: space-around;
//     }

 
// `

// const SearchReacommendList = () => {
  

//     return (
//         <Container>
//             <Container className="item-container">
//                 {Tires.slice().map(({ id, image, brand, name, keyword1, keyword2, keyword3, keyword4, rate }) => (
//                     <SearchReacommendItem key={id}
//                     img={image} 
//                     brandcolor = "#FF0000"
//                     brand = {brand}
//                     width = "50px"
//                     tirename = {name}
//                     keyword1 = {keyword1}
//                     keyword2 = {keyword2}
//                     keyword3 = {keyword3}
//                     keyword4 = {keyword4}
//                     color = "#E2BE45"
//                     grade = {rate} />
//                 ))}
//             </Container>

        
//         </Container>
//     );
// }

// export default SearchReacommendList;

import { styled } from "styled-components";
import SearchReacommendItem from "./SearchRecommendItem";
import { Tires } from "./Tires";

const Container = styled.div`
    width: 885px;

    .item-container {
        display: flex;
        flex-flow: wrap;
        align-content: space-around;
    }
`;

const SearchReacommendList = () => {
    const filteredTires = Tires.slice(0, 3); // Filtering Tires array to include only first 3 elements

    return (
        <Container>
            <div className="item-container">
                {filteredTires.map(({ id, image, brand, name, keyword1, keyword2, keyword3, keyword4, rate }) => (
                    <SearchReacommendItem
                        key={id}
                        img={image} 
                        brandcolor="#FF0000"
                        brand={brand}
                        width="50px"
                        tirename={name}
                        keyword1={keyword1}
                        keyword2={keyword2}
                        keyword3={keyword3}
                        keyword4={keyword4}
                        color="#E2BE45"
                        grade={rate}
                    />
                ))}
            </div>
        </Container>
    );
}

export default SearchReacommendList;
