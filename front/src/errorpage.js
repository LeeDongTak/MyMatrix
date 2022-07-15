import styled from 'styled-components';

let errMessage = styled.div`
    text-align: center;
`;

function ErrorPage (){
    return (
        <errMessage>
            <errMessage>404 page</errMessage>
            <h3>없는 페이지 입니다. </h3>
        </errMessage>
    );
}

export default ErrorPage;