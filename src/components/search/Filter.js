import { styled } from "styled-components";
import { GrPowerReset } from 'react-icons/gr';
import WeatherFilter from "./WeatherFilter";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import TypeFilter from "./TypeFilter";
import SizeFilter from "./SizeFilter";
import { useRef } from 'react';

const Filter = styled.div`
    width: 306px;
`
const Filterheader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:100px;
`
const H2 = styled.h2`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const Reset = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`
const ResetIcon = styled(GrPowerReset)`
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    margin-right: 13px;
`
const H3 = styled.h3`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const SearchFilter = () => {

    const { search } = useLocation();
    const navigate = useNavigate();

    const [cardList, setCardList] = useState([]);
    const [clickedCheckList, setClickedCheckList] = useState([]);

    const getCardListData = useCallback(async () => {
        const res = await fetch(
          `http://www.tireso.co.kr:8080/tire${search}`
        );
     
        const data = await res.json();
     
        setCardList(data.result);
      }, [search]);

      useEffect(() => {
        getCardListData();
      }, [getCardListData]);
     
      const makeQueryString = () => {
        const queryString = clickedCheckList
          .map(({ id, content, sortType }) => {
            return sortType === 'brand' || sortType === 'types'
              ? `${sortType}_id=${parseInt(id) + 1}`
              : `${sortType}=${content}`;
          })
          .map((item, idx) => {
            return idx === 0 ? item : '&' + item;
          })
          .join('');
     
        navigate(`?${queryString}`);
      };
     
      const handleCheckList = (e, content, idx, sort_type) => {
        e.target.checked
          ? setClickedCheckList([
              ...clickedCheckList,
              { id: idx, content, sortType: sort_type },
            ])
          : setClickedCheckList(
              clickedCheckList.filter(list => list.content !== content)
            );
      };

    return (
        <Filter>
            <Filterheader>
                <H2>필터</H2>   
                <Reset>
                    <ResetIcon/>
                    <H3>필터 초기화</H3>
                </Reset>
            </Filterheader>
        


        </Filter>
    );
};

const FILTER_CATEGORYS = [
    {
      sort_type: 'brand',
      title: '브랜드',
      contents: [
        '금호',
        '넥센',
        '한국',
      ],
    },
];

export default SearchFilter;

