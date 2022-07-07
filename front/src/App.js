import './css/header.css';
import './css/jumbotron.css';
import './css/matrix.css';
import './css/footer.css';
import SignIn from './signin';
import { Link,Route,Switch } from 'react-router-dom';




function App() {
  return (
    <div className="App">
        <Header />

        <Switch>
            <Route exact path="/" basename=""s>
                <Matrix />
            </Route>
            <Route path="/signin">
                <SignIn/>
            </Route>
        </Switch>

        <Footer />
    </div>
  );
}

// Header
function Header(){
  return (
    <div>
        <div className="inner">
            <div className="header_container">
                <div className="title">
                    <a href="#">성공일정</a>
                </div>
                {/* <!-- title --> */}
                <div class="sign_container">
                    <div className="unsigned">
                        <Link to={'/signin'}>
                            <div className="sign_in"><a href="#">로그인</a></div>
                        </Link>
                        <div className="sign_up"><a href="#">회원가입</a></div>
                    </div>
                    {/* <!-- unsigned --> */}
                    <div className="signed hidden">
                        <div className="dropdown">
                            <div className="dropdown_button">
                                안녕하세요 <span className="nickname">홍길동</span>님
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            {/* <!-- dropdown_button --> */}
                            <div className="dropdown_content">
                                <button id="sign_out">로그아웃</button>
                            </div>
                            {/* <!-- dropdownn_content --> */}
                        </div>
                        {/* <!-- dropdown --> */}
                    </div>
                    {/* <!-- signed --> */}
                </div>
                {/* <!-- sign_container --> */}
            </div>
            {/* <!-- header_container --> */}
        </div>
    </div>
  );
}

// matrix
function Matrix(){
  return(
    <div>
        <div className="inner">
            <div className="jumbotron_container">
                <div className="jumbotron_item_main">
                    <div className="jumbotron_item_main_message">
                        <p>내시간을 제대로 쓰고 싶다면,</p>
                        <h1>아이젠하워 메트릭스</h1>
                    </div>
                    <div className="jumbotron_item_main_image"></div>
                </div>
                {/* <!-- jumbotron_item_main --> */}
                <div className="jumbotron_item_sub">
                    <p>긴급성과 중요도를 기준으로 시간관리를 하고,</p>
                    <p>일의 우선순위를 배문하는 방법입니다. </p>
                </div>
                {/* <!-- jumbotron_item_sub --> */}
            </div>
            {/* <!-- jumbotron_container --> */}

            <div class="matrix_container">
                <div class="matrix_item" id="decide">
                    <div class="matrix_item_header">
                        <div class="matrix_title">📅 계획을 세워서 해야할 일</div>
                        <input type="text" class="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* <!-- matrix_item_header --> */}
                    <ul class="matrix_item_list">
                    </ul>
                    {/* <!-- matrix_item_list --> */}
                </div>
                {/* <!-- matrix_item decide --> */}
                <div class="matrix_item" id="do">
                    <div class="matrix_item_header">
                        <div class="matrix_title">🏃🏃 지금 해야할 일</div>
                          <input type="text" className="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* <!-- matrix_item_header --> */}
                    <ul class="matrix_item_list">
                    </ul>
                    {/* <!-- matrix_item_list --> */}
                </div>
                {/* <!-- matrix_item do --> */}
                <div class="matrix_item" id="delegate">
                    <div class="matrix_item_header">
                        <div class="matrix_title">🏦 급하지만 중요도가 낮은일</div>
                        <input type="text" class="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* <!-- matrix_item_header --> */}
                    <ul className="matrix_item_list">
                    </ul>
                    {/* <!-- matrix_item_list --> */}
                </div>
                {/* <!-- matrix_item delegate --> */}
                <div className="matrix_item" id="delete">
                    <div className="matrix_item_header">
                        <div className="matrix_title">🏌 최후순위</div>
                        <input type="text" className="matrix_input" placeholder="입력 후 Enter를 눌러주셔요."/>
                    </div>
                    {/* <!-- matrix_item_header --> */}
                    <ul className="matrix_item_list">
                    </ul>
                    {/* <!-- matrix_item_list --> */}
                </div>
                {/* <!-- matrix_item delete --> */}
                <span className="importance">중요도</span>
                <span className="urgency">긴급성</span>
            </div>
            {/* <!-- matrix_container --> */}
        </div>
    </div>
  );
}

// footer
function Footer(){
  return (
    <div>
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
