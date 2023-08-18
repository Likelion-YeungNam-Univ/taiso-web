import ResultItem from "./ResultItem";
import { styled } from "styled-components";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import PageAd from "./PageAd";
import { SearchFilter } from "components/filter";
import { IoSearchCircleSharp } from 'react-icons/io5';
import axios from 'axios';

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
	{ value: "0", name: '등록순' },
	{ value: "1", name: '인기순' },
	{ value: "2", name: '낮은가격순' },
	{ value: "3", name: '높은가격순' },
];

// 검색 창
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

    const handleSelect = (value) => {
        console.log(value);
        setSelected(value);
    }
    
    // 등록순 선택 박스
    const SelectBox = (props) => {
        return (
            <Select onChange={ e => setSelected(e.target.value)} defaultValue="0">
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </Select>
        );
    };

    const [page, setPage] = useState(1); // 페이지 설정
    const offset = (page - 1) * 9;

    const [search, setSearch] = useState(""); // search 설정
    const [lists, setLists] = useState([]); //ItemList
    const [currentPosts, setCurrentPosts] = useState([]); // 현재 post 설정

    const [selected, setSelected] = useState("0");

    async function getItem(sort) {
        const {data: response} = await axios.get(`http://175.45.194.50:8080/tire?sort=${sort}`,  { withCredentials: true });
        setLists(response);
        setCurrentPosts(response);
    }

    useEffect(() => {
        getItem(selected); 
    }, [selected]);

    const onSearch = (e) => {
        e.preventDefault();
        if (search === null || search === '') {
            setCurrentPosts(lists); // Show all Tires data
        } else {
            const filterData = lists.filter((tire) => // filter라는 기능, lists 안에 있는 원소를 하나하나 필터링을 하겠다! 
            // tire에 어떤 정보가 담기냐? 하나씩 넘어와서 이름이 중요한 게 아니다! 
                tire.name.toLowerCase().includes(search.toLowerCase())
            );
            setLists(filterData);
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
    };};    
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
                {/*<SearchReacommendBoard/>*/}
                <PageAd/>
                <Board>
                    <Top>
			            <h2>{lists.length}건의 검색결과</h2>
			            <SelectBox options={OPTIONS} defaultValue="등록순"></SelectBox>
		                </Top>
                <Container>
                    <Container className="item-container">
                        {currentPosts.slice(offset, offset + 9).map((tire) => (
                            <ResultItem  key={tire.id}
                            img={tire.imageUrl1} 
                            brand = {tire.brand.name}
                            width = "50px"
                            tirename = {tire.name1}
                            price = {tire.price}
                            keyword1 = {tire.carType}
                            keyword2 = {tire.season}
                            keyword3 = {tire.type}
                            keyword4 = {tire.tag}
                            color = "#E2BE45"
                            grade = {tire.rate} 
                            review = {tire.review_cnt}/>
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