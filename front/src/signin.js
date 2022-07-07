import './css/signin.css'

function SignIn(){
    return (
        <div>
            <div className="inner">
                <div className="signin_container">
                    <h1><span className="blue">안녕하세요.</span> 성공일정입니다. </h1>
                    <div className="signin_form">
                        <input type="text" placeholder="이메일" id="email" />
                        <input type="password" placeholder="비밀번호" id="password" />
                        <input type="button" value="로그인" id="signin" />
                        <div className="signup_container">
                            <a href="#" id="sinup">회원가입</a>
                        </div>
                        {/* <!-- signup_container --> */}
                    </div>
                    {/* <!-- signin_form --> */}
                </div>
                {/* <!-- signin_container --> */}
            </div>
            {/* <!-- inner --> */}
        </div>
    );    
}

export default SignIn;