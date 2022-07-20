import styled from 'styled-components';

let errMessage = styled.div`
    text-align: center;
    
`;

function ErrorPage (){
    return (
        <errMessage>
            <h1>404 page</h1>
            <h3>없는 페이지 입니다. </h3>
        </errMessage>
    );
}

export default ErrorPage;