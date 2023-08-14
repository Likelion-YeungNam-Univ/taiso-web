import ResultItem from "./ResultItem";
import { styled } from "styled-components";
import Pagination from "./Pagination";
import { useState } from "react";
import { Tires } from "./Tires";

const Container = styled.div`
    width: 885px;

    .item-container {
        display: flex;
        flex-flow: wrap;
        align-content: space-around;
    }

    footer {
        margin-top: 150px;
        
    }
`

const ResultList = () => {
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 9;

    return (
        <Container>
            <Container className="item-container">
                {Tires.slice(offset, offset + 9).map(({ id, image, brand, name, keyword1, keyword2, keyword3, keyword4, rate }) => (
                    <ResultItem  key={id}
                    img={image} 
                    brandcolor = "#FF0000"
                    brand = {brand}
                    width = "50px"
                    tirename = {name}
                    keyword1 = {keyword1}
                    keyword2 = {keyword2}
                    keyword3 = {keyword3}
                    keyword4 = {keyword4}
                    color = "#E2BE45"
                    grade = {rate} />
                ))}
            </Container>

            <footer>
                <Pagination
                total={Tires.length}
                limit={9}
                page={page}
                setPage={setPage}
                />    
            </footer>
        </Container>
    );
}

export default ResultList;
