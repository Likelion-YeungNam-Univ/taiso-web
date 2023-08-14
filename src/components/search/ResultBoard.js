import styled from 'styled-components';
import ResultList from './ResultList';

const Container = styled.div`
	width: 885px;
	/* height: auto; */
	height: auto;
	margin: 0 auto;
	box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
	border-radius: 18px;
`;

const Top = styled.div`
	width: 885px;
	display: flex;
	align-items: center;
	h2 {
		font-size: 20px;
		text-align: center;
		font-family: 'IBM Plex Sans KR', sans-serif;
		display: inline-block;
		margin-left: 20px;
		margin-top: 30px;
	}
`;
const Select = styled.select`
	width: 100px;
	height: 39px;
	border-radius: 10px;
	margin-left: 600px;
	margin-top: 30px;
	p {
		font-size: 14px;
		text-align: center;
	}
`;
const OPTIONS = [
	{ value: 'register', name: '등록순' },
	{ value: 'popular', name: '인기순' },
	{ value: 'lowprice', name: '낮은가격순' },
	{ value: 'highprice', name: '높은가격순' },
];

const SelectBox = (props) => {
	return (
		<Select>
			{props.options.map((option) => (
				<option value={option.value} defaultValue={props.defaultValue === option.value}>
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
				<SelectBox options={OPTIONS} defaultValue="등록순"></SelectBox>
			</Top>
			<ResultList/>
		</Container>
	);
};

export default ResultBoard;
