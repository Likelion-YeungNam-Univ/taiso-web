import styled from 'styled-components';
import SearchReacommendList from './SearchRecommendList';

const Container = styled.div`
	width: 885px;
	height: auto;
    border-radius: 18px;
    box-shadow: 0px 16px 40px 0px rgba(112, 144, 176, 0.20);
    margin-left: 5px;
`;

const Top = styled.div`
	width: 885px;
	display: flex;
	margin-top: 20px;
    margin-left: 20px;
	h2 {
		color: #000;
        text-align: center;
        font-family: IBM Plex Sans KR;
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
	}
`;






const SearchReacommendBoard = () => {
	return (
		<Container>
			<Top>
				<h2>타이소 MD 추천</h2>
			</Top>
			<SearchReacommendList/>
		</Container>
	);
};

export default SearchReacommendBoard;
