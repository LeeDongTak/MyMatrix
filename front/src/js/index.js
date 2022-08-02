import {url} from './common';
import axios from 'axios';
import { useState } from 'react';

setHeader();

export async function setHeader(){
    // 로컬 스토리지에 토큰 존재여부 검사
    const token = localStorage.getItem("x-access-token");
    
    // 토큰이 없다면 signed에 hidden 클레스 붙이기
    if(!token){
        return;
    }
    const cnofig = {
        method:"get",
        url: url +"/jwt",
        headers: {
            "x-access-token": token,
        }
    }
    const res = await axios(cnofig);
    if(res.data.code !== 200){
        console.log("잘못된 토큰입니다. ");
        return;
    }

    const nickname = res.data.result.nickname;
    
    
    // 토큰이 있다면 unsiged에 hidden클레스 붙이기
}


