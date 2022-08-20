import axios from 'axios';
import { url } from './common';

// 일정 조회


// 일정 CUD

// export function cudController(event){
//     const token = localStorage.getItem("x-access-token");
//     if(!token){
//         return;
//     }
//     const target = event.target;
//     const targetTagName = target.tagName;
//     const eventType = event.type;
//     const key = event.key;

//     // create 이벤트 처리
//     if(targetTagName === "INPUT" && key === "Enter"){
//         createTodo(event, token);
//         return;
//     }
//     // update 이벤트 처리
    
//     // 체크 박스
//     if(target.className === "todo_tone" && eventType === "click"){
//         updateTodoDone(event, token);
//         return;
//     }
//     // 컨텐츠 업데이트
//     const firstClassName = target.className.split(" ")[0];
//     console.log(target);
//     if(firstClassName === "todo_update" && eventType === "click"){
//         updateTodoContents(event, token);
//         return;
//     }

//     // delete 이벤트 처리
//     if(firstClassName === "todo_delete" && eventType === "click"){
//         deleteTodo(event, token);
//         return;
//     }


// }

// export async function createTodo(event, token){
//     const contents = event.target.value;
//     const type = event.target.closest(".matrix_item").id;
//     console.log(contents);
//     console.log(type);
//     if(!contents){
//         alert("내용을 입력해 주세요");
//         return false;
//     }

//     const config = {
//         method: "post",
//         url: url + "/todo",
//         headers: {"x-access-token": token},
//         data: {
//             contents: contents, 
//             type: type
//         },
//     }

//     try {
//         const res = await axios(config);
//         if(res.data.code !== 200){
//             alert(res.data.message);
//             return false;
//         }

//         // DOM 업데이트
//         readTodo();
//         event.target.value = "";
//     } catch (err) {
//         console.error(err);
//         return false;
//     }
// }

// export async function updateTodoDone(event, token){
//     const status = event.target.checked ? 'C' : 'A';
//     const todoIdx = event.target.closest(".list_item").id;

//     const config = {
//         method: "patch",
//         url: url + "/todo",
//         headers: {"x-access-token": token},
//         data: {
//             todoIdx: todoIdx, 
//             status: status
//         },
//     }

//     try {
//         const res = await axios(config);
//         if(res.data.code !== 200){
//             alert(res.data.message);
//             return false;
//         }

//         // DOM 업데이트
//         readTodo();
//         event.target.value = "";
//     } catch (err) {
//         console.error(err);
//         return false;
//     }
// }

// export async function updateTodoContents(event, token){
//     const contents = prompt("내용을 입력해 주세요.");
//     const todoIdx = event.target.closest(".list_item").id;

//     const config = {
//         method: "patch",
//         url: url + "/todo",
//         headers: {"x-access-token": token},
//         data: {
//             todoIdx: todoIdx, 
//             contents: contents
//         },
//     }

//     try {
//         const res = await axios(config);
//         if(res.data.code !== 200){
//             alert(res.data.message);
//             return false;
//         }

//         // DOM 업데이트
//         readTodo();
//         event.target.value = "";
//     } catch (err) {
//         console.error(err);
//         return false;
//     }
// }

// export async function deleteTodo(event, token){
//     const todoIdx = event.target.closest(".list_item").id;

//     const useConfirm = (message = null, onConfirm, onCancel) => {
//         if (!onConfirm || typeof onConfirm !== "function") {
//           return;
//         }
//         if (onCancel && typeof onCancel !== "function") {
//           return;
//         }
      
//         const confirmAction = () => {
//           if (window.confirm(message)) {
//             onConfirm();
//           } else {
//             onCancel();
//           }
//         };
      
//         return confirmAction;
//       };
    



//     if(!useConfirm){
//         return false;
//     }
//     const config = {
//         method: "delete",
//         url: url + "/todo/"+ todoIdx,
//         headers: {"x-access-token": token},
//     }

//     try {
//         const res = await axios(config);
//         if(res.data.code !== 200){
//             alert(res.data.message);
//             return false;
//         }

//         // DOM 업데이트
//         readTodo();
//     } catch (err) {
//         console.error(err);
//         return false;
//     }
// }


