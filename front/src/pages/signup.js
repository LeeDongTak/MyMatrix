import { useEffect, useState } from 'react';
import '../css/common.css';
import '../css/signup.css';
import styled from 'styled-components';


function SignUp(props){

    // 이메일
    const [inuptEmail,setinuptEmail] = useState('');
    const [emailBloolean, setEmailBoolean] = useState(false);
    
    // 비밀번호
    const [inputPassword,setinputPassword] = useState('');
    const [passwordBloolean, setPasswordBoolean] = useState(false);

    // 비밀번호 확인 
    const [inputPasswordConfirm,setinputPasswordConfirm] = useState('');
    const [passwordConfirmBloolean, setPasswordConfirmBoolean] = useState(false);

    // 닉네임
    const [inputNickname,setinputNickname] = useState('');
    const [nicknameBloolean, setNicknameBoolean] = useState(false);

    // 이메일 형식 검사
    function isValidEmail(event){
        const emailReg = 
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(!inuptEmail){
            return false;
        } else if(!emailReg.test(inuptEmail)){
            setEmailBoolean(true);
            return false;
        }else{
            setEmailBoolean(false);
            return true;
        }
    }
    useEffect(()=>{
        isValidEmail();
    },[inuptEmail]);

    // 비밀번호 형식 검사
    function isValidPassword(){
        const passwordReg = 
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        if(!inputPassword){
            return false;
        }else if(!passwordReg.test(inputPassword)){
            setPasswordBoolean(true);
            return false;
        }else{
            setPasswordBoolean(false);
            return true;
        }
    }
    useEffect(()=>{
        isValidPassword();
    },[inputPassword]);
    

 
    // 비밀번호 확인 검사
    function isValidPasswordConfirm(event){
        
        if(!inputPasswordConfirm){
            return false;
        }else if(inputPassword !== inputPasswordConfirm){
            setPasswordConfirmBoolean(true);
            return false;
        }
        else{
            setPasswordConfirmBoolean(false);
            return true;
        }
    }
    useEffect(()=>{
        isValidPasswordConfirm();
    },[inputPasswordConfirm]);

    // 닉네임 형식 검사
    function isValidNickname(event){
        if(!inputNickname){
            return false;
        }else if(inputNickname.length < 2 || inputNickname.length > 10){
            setNicknameBoolean(true);
            return false;
        }else{
            setNicknameBoolean(false);
            return true;
        }
    }
    useEffect(()=>{
        isValidNickname();
    },[inputNickname]);


    return (
        <div id='Signup_wrap'>
            <div className="inner">
                <div className="signup_container">
                    <h1>안녕하세요 <span className="blue"> 성공일정</span>입니다. </h1>
                    <div className="signup_form">
                        {/* 이메일 */}
                        <input type="text" placeholder="이메일" id="email" onChange={(e)=>{setinuptEmail(e.target.value)}} />
                        {
                           emailBloolean === true
                            ? <div className="email_message message">
                                이메일 형식으로 입력해 주세요
                            </div>
                            : <div className="email_message message" style={{visibility : "hidden"}}>
                                이메일 형식으로 입력해 주세요
                            </div>
                        }
                     
                        {/* 페스워드 */}
                        <input type="password" placeholder="비밀번호" id="password" onChange={(e)=>{setinputPassword(e.target.value)}} />
                        {
                           passwordBloolean === true
                            ? <div className="password_message message">
                                영문, 숫자, 특수문자(!@$%^*)조함 8자 이상으로 입력
                            </div>
                            : <div className="password_message message" style={{visibility : "hidden"}}>
                                영문, 숫자, 특수문자(!@$%^*)조함 8자 이상으로 입력
                            </div>
                        }
                        
                        {/* 페스워드 확인 */}
                        <input type="password" placeholder="비밀번호확인" id="password_confirm" onChange={(e)=>{setinputPasswordConfirm(e.target.value)}} />
                        {
                           passwordConfirmBloolean === true
                            ? <div className="password_confirm_message message">
                                비밀번호가 맞지 않습니다. 
                            </div>
                            : <div className="password_confirm_message message" style={{visibility : "hidden"}}>
                                비밀번호가 맞지 않습니다. 
                            </div>
                        }

                        {/* 닉네임 */}
                        <input type="text" placeholder="닉네임" id="nickname" onChange={(e)=>{setinputNickname(e.target.value)}} />
                        {
                           nicknameBloolean === true
                            ? <div className="nickname_message message">
                                한글 or 영어 2 ~ 10자로 설정해주세요.
                            </div>
                            : <div className="nickname_message message" style={{visibility : "hidden"}}>
                                한글 or 영어 2 ~ 10자로 설정해주세요.
                            </div>
                        }
                        
                        <input type="button" value="회원가입" placeholder="회원가입" id="signup" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;