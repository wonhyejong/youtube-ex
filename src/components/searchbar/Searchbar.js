import React from "react";
import './searchbar.css';
import { useRef } from "react";
function Searchbar(props){
    const inputRef=useRef();
    /* enter 클릭시 호출공통 함수 */
    const searchfnc = () =>{
        const value=inputRef.current.value ; // input의 value 값을 가져온다.
        props.searchResult(value);
    }
    
    /* 서치버튼 클릭시 호출될 함수 */
    const inputclick = () =>{
        searchfnc();
    }
    /* 인풋박스에 enter 시 호출될 함수 */
    const inputEnter = (e) =>{
        if(e.key === 'Enter'){
            searchfnc();
        }
    }
    return(
        <div className="searchArea">
            <div className="logoarea">
                <h1><img src="/images/logo.png" alt="youtube" className="logoimg" /></h1>
            </div>
            <div className='searachInputarea'>
                <input
                    type="search" placeholder="검색" 
                    className="searchInput" 
                    onKeyPress={inputEnter} 
                    ref={inputRef} 
                />
                <button className="searchbtn" onClick={inputclick}>
                    <img src="/images/searchicon.png" alt="search"/>
                </button>
            </div>
            <div className="topMenuarea">
                <button className="gridmenubtn">
                    <img src="/images/gridmenuicon.png" alt="topmenu" />
                </button>
            </div>
        </div>
    )
}
export default Searchbar;
