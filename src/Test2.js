import { useNavigate } from "react-router-dom";

const Test2 = () => {
    const movePage = useNavigate();

    function gomain() {
        movePage('/');
    }
    return(
        <div>
            <button onClick={gomain}>test2</button>
        </div>
    );
}

export default Test2;