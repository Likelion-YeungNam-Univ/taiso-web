import ResultItem from "./ResultItem";
import { styled } from "styled-components";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import { Tires } from "./Tires";
import PageAd from "./PageAd";
import SearchReacommendBoard from "./SearchRecommendBoard";
import { SearchFilter } from "components/filter";
import { IoSearchCircleSharp } from 'react-icons/io5';

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
const Nav = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`
const Board = styled.div`
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
const Search = styled.div`
    width: 1200px;
    height: 133px;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);
    display: flex;
    align-items: center;
    margin: 0 auto;
`
const Input = styled.input`
    width: 486px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 35px;
    border: 1px solid #6F6F6F;
    outline: none;
    font-size: 18px;
    /* letter-spacing: -.1px; */
    padding-left: 30px;
  

    &::placeholder {
        color: #6F6F6F;
        font-family: Noto Sans KR;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.36px;
        width: 381px;
        margin-left: 20px;
        padding: 0px;
};
`
const H1 = styled.h1`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const SearchBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

`
const IoSearch = styled(IoSearchCircleSharp)`
    position: absolute;
    margin-left: 460px;
    width: 37px;
    height: 37px;
    flex-shrink: 0;
`
const ResultList = () => {
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 9;

    const [search, setSearch] = useState("");
    const [lists, setLists] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);

    useEffect(() => {
        setLists(Tires);
        setCurrentPosts(Tires);
    }, []);

    const onSearch = (e) => {
        e.preventDefault();
        if (search === null || search === '') {
            setCurrentPosts(lists); // Show all Tires data
        } else {
            const filterData = Tires.filter((tire) =>
                tire.name.toLowerCase().includes(search.toLowerCase())
            );
            setCurrentPosts(filterData);
            setPage(1);
        }
        setSearch('');
    }

    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    const activeEnter = (e) => {
      if(e.key === "Enter") {
        onSearch(e);
    };
    };
    return (
        <div>
        <Search>
            <H1>타이어 검색</H1>
            <SearchBox>
                <Input type="text" placeholder="원하는 타이어 상품명을 검색해보세요."
                    onChange={onChangeSearch}
                    onKeyDown={(e) => activeEnter(e)}
                />
                <IoSearch onClick={e => onSearch(e)}/>
            </SearchBox>
       </Search>
        <Nav>
            <SearchFilter/>
            <div>
                <SearchReacommendBoard/>
                <PageAd/>
                <Board>
                    <Top>
			            <h2>32건의 검색결과</h2>
			            <SelectBox options={OPTIONS} defaultValue="등록순"></SelectBox>
		                </Top>
                <Container>
                    <Container className="item-container">
                        {currentPosts.slice(offset, offset + 9).map(({ id, image, brand, name, keyword1, keyword2, keyword3, keyword4, rate }) => (
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
                        total={lists.length}
                        limit={9}
                        page={page}
                        setPage={setPage}
                        />    
                    </footer>

                </Container>
                </Board>
            </div>
        </Nav>
    </div>
    );
}

export default ResultList;
