import './css/common.css';
import './css/header.css';
import './css/jumbotron.css';
import './css/matrix.css';
import './css/footer.css';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ErrorPage from './pages/errorpage';
import { Routes,Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { url } from './js/common';
import axios from 'axios';




function App() {
    // 패이지를 이동하기 위한 hook
    const navigate = useNavigate();
    
  return (
    <div className="App">
        <Header  navigate={navigate} />

        <Routes>
            <Route path="/" element={<Matrix />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
    </div>
  );
}

// Header
function Header(props){

    // 유저의 닉네임
    const [nickName, setNickName] = useState('');
    // 토큰 검사를 위한 true/false
    let [nickNameBoolean, setNickNameBoolean] = useState(false);

    async function setHeader(){
        // 로컬 스토리지에 토큰 존재여부 검사
        const token = localStorage.getItem("x-access-token");
        
        // 토큰이 없다면
        if(!token){
            setNickNameBoolean(false);
            return;
        }
        const cnofig = {
            method:"get",
            url: url +"/jwt",
            headers: {
                "x-access-token": token,
            }
        }
        try {
            const res = await axios(cnofig);
            if(res.data.code !== 200){
                console.log("잘못된 토큰입니다. ");
                setNickNameBoolean(false);
                return;
            } else {
                // 토큰이 있다면
                setNickNameBoolean(true);
                setNickName(res.data.result.nickname);
            }
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
       setHeader();  
    });
    
    function logOut(){
        setNickNameBoolean(false);
        localStorage.removeItem("x-access-token");
        props.navigate('/');
    }
    useEffect(() => {
        logOut();  
     },[]);

    return (
        <div id='header'>
            <div className="inner">
                <div className="header_container">
                    <div className="title" onClick={()=>{ props.navigate('/') }}>
                        <a href="#">성공일정</a>
                    </div>
                    {/* <!-- title --> */}
                    <div className="sign_container">
                            <div className="unsigned" style={{display : nickNameBoolean === true ?"none": "flex"}} >
                                <div className="sign_in" onClick={()=>{ props.navigate('/signin') }}><a href="#">로그인</a></div>
                                <div className="sign_up" onClick={()=>{ props.navigate('/signup') }}><a href="#">회원가입</a></div>
                            </div>
                            {/* unsigned  */}
                            <div className="signed" style={{display : nickNameBoolean === true ?"block": "none"}} >
                                <div className="dropdown">
                                    <div className="dropdown_button">
                                        안녕하세요 <span className="nickname">{nickName}</span>님
                                        <i className="fa-solid fa-caret-down"></i>
                                    </div>
                                    {/* dropdown_button */}
                                    <div className="dropdown_content">
                                        <button id="sign_out" onClick={logOut} >로그아웃</button>
                                    </div>
                                    {/* dropdownn_content */}
                                </div>
                                {/* dropdown */}
                            </div>
                            {/* signed */}
                    </div>
                    {/* sign_container */}
                </div>
                {/* header_container */}
            </div>
        </div>
    );
}

// matrix
function Matrix(){
  return(
    <div id='main'>
        <div className="inner"> 
            <div className="jumbotron_container">
                <div className="jumbotron_item_main">
                    <div className="jumbotron_item_main_message">
                        <p>내시간을 제대로 쓰고 싶다면,</p>
                        <h1>아이젠하워 메트릭스</h1>
                    </div>
                    <div className="jumbotron_item_main_image"></div>
                </div>
                {/* jumbotron_item_main */}
                <div className="jumbotron_item_sub">
                    <p>긴급성과 중요도를 기준으로 시간관리를 하고,</p>
                    <p>일의 우선순위를 배문하는 방법입니다. </p>
                </div>
                {/* jumbotron_item_sub */}
            </div>
            {/* jumbotron_container */}

            <div className="matrix_container">
                <div className="matrix_item" id="decide">
                    <div className="matrix_item_header">
                        <div className="matrix_title">📅 계획을 세워서 해야할 일</div>
                        <input type="text" className="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* matrix_item_header */}
                    <ul className="matrix_item_list">
                    </ul>
                    {/* matrix_item_list */}
                </div>
                {/* matrix_item decide */}
                <div className="matrix_item" id="do">
                    <div className="matrix_item_header">
                        <div className="matrix_title">🏃🏃 지금 해야할 일</div>
                          <input type="text" className="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* matrix_item_header */}
                    <ul className="matrix_item_list">
                    </ul>
                    {/* matrix_item_list */}
                </div>
                {/* matrix_item do */}
                <div className="matrix_item" id="delegate">
                    <div className="matrix_item_header">
                        <div className="matrix_title">🏦 급하지만 중요도가 낮은일</div>
                        <input type="text" className="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* matrix_item_header */}
                    <ul className="matrix_item_list">
                    </ul>
                    {/* matrix_item_list */}
                </div>
                {/* matrix_item delegate */}
                <div className="matrix_item" id="delete">
                    <div className="matrix_item_header">
                        <div className="matrix_title">🏌 최후순위</div>
                        <input type="text" className="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* matrix_item_header */}
                    <ul className="matrix_item_list">
                    </ul>
                    {/* matrix_item_list */}
                </div>
                {/*  matrix_item delete */}
                <span className="importance">중요도</span>
                <span className="urgency">긴급성</span>
            </div>
            {/* matrix_container */}
        </div>
    </div>
  );
}

// footer
function Footer(){
  return (
    <div id='footer'>
        <div className="inner">
            <div className="footer_container">
                <div className="author">개발자 : 홍길동</div>
                <div className="author_email">demmey@demmey.com</div>
            </div>
        </div>
    </div>
  );
}




export default App;
