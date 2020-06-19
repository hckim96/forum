import React from 'react';

const About = () => {

    return(
        <div>
            <h1>6.17</h1>
            - allowed logout urls 에서 첫번째 url 로만 감. 06.17 ~ 
                <br></br>- logout 버튼 onclick 뒤에 window.location.href = '/' 로 대충해결함 (안됨)
            <br></br>- 갑자기 localhost 안됨, 127 0 0 1 은 되는데 http error 431 -- 브라우저 쿠키 삭제하니까 됨
            <br/> - !user 검사로 user. 에 접근가능 ( 왜인지는 모름) -- navbar 에  user nickname 표시함
            <h1>6.18</h1>
            <br></br> - latest posts 를 this.state 에서 넘기는 데 바로 슬라이스를 하려니까 setstate가 비동기라 업데이트전에 가져와서 오류가 나는거 같음
            그래서 posts 에다가 boolean 하나 더 넘겨서 거기안에서 posts 컴포넌트 안에서 잘랏더니 됨
            <br></br> -익명 글쓰기 추가함
            <br/> -e.preventdefault() 로 link 이벤트를 막을수있음 (익명 id pw 미입력시)
            
        </div>
    )
}

export default About;
