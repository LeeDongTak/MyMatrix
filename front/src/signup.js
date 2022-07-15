import './css/signup.css';
import './css/header.css';
import './css/footer.css';


function SignUp(){
    return (
        <div>
            <div class="inner">
                <div class="signup_container">
                    <h1>안녕하세요 <span class="blue"> 성공일정</span>입니다. </h1>
                    <div class="signup_form">
                        <input type="text" placeholder="이메일" id="email" />
                        <div class="email_message message">
                            이메일 형식으로 입력해 주세요
                        </div>
                        <input type="password" placeholder="비밀번호" id="password" />
                        <div class="password_message message">
                            영문, 숫자, 특수문자(!@$%^*)조함 8자 이상으로 입력
                        </div>
                        <input type="password" placeholder="비밀번호확인" id="password_confirm" />
                        <div class="password_confirm_message message">
                            바말번호가 맞지 않습니다. 
                        </div>
                        <input type="text" placeholder="닉네임" id="nickname" />
                        <div class="nickname_message message">
                            한글 or 영어 2 ~ 10자로 설정해주세요.
                        </div>
                        <input type="button" value="회원가입" placeholder="회원가입" id="signup" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;