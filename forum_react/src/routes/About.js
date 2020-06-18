import React from 'react';

const About = () => {

    return(
        <div>
            allowed logout urls 에서 첫번째 url 로만 감. 06.17 ~ 
                <br></br>- logout 버튼 onclick 뒤에 window.location.href = '/' 로 대충해결함 (안됨)
            <br></br>갑자기 localhost 안됨, 127 0 0 1 은 되는데 http error 431 -- 브라우저 쿠키 삭제하니까 됨
            <br/> !user 검사로 user. 에 접근가능 ( 왜인지는 모름) -- navbar 에  user nickname 표시함
        </div>
    )
}

export default About;
