import '../css/common.css';
import '../css/signin.css';


function SignIn(){
    return (
        <div id='Signin_wrap'>
            <div className="inner">
                <div className="signin_container">
                    <h1>안녕하세요 <span className="blue"> 성공일정</span>입니다. </h1>
                    <div className="signin_form">
                        <input type="text" placeholder="이메일" id="email" />
                        <input type="password" placeholder="비밀번호" id="password" />
                        <input type="button" value="로그인" id="signin" />
                        <div className="signup_btn"><a href='#'>회원가입</a></div>
                    </div>
                    {/* signin_form */}
                </div>
                {/* signin_container */}
            </div>
            {/* inner */}
        </div>
    );    
}

export default SignIn;