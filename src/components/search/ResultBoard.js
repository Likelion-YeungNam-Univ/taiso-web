import styled from "styled-components";
import ResultList from "./ResultList";

const Container = styled.div`
    width: 853px;
    height: auto;
    margin: 0 auto;
`

const Top = styled.div`
    width: 853px;
    display: flex;
    h2 {
        font-size: 20px;
        text-align: center;
        font-family: 'IBM Plex Sans KR', sans-serif;
        margin-right: 38rem;
    }
`
const Select = styled.select`
    width: 100px;
    height: 39px;
    border-radius: 10px;
    p {
        font-size: 14px;
        text-align: center;
    }
`
const OPTIONS = [
	{ value: "register", name: "등록순" },
	{ value: "popular", name: "인기순" },
	{ value: "lowprice", name: "낮은가격순" },
    { value: "highprice", name: "높은가격순" },
];

const SelectBox = (props) => {
	return (
		<Select>
			{props.options.map((option) => (
				<option
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
};

const ResultBoard = () => {
    return (
        <Container>
            <Top>
                <h2>32건의 검색결과</h2>
                <SelectBox classname="select" options={OPTIONS} defaultValue="등록순"></SelectBox>
            </Top>
            <ResultList/>
        </Container>
    );
};

export default ResultBoard;