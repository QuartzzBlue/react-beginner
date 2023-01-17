# JSX   

## 1. JSX (Javascript Xml) 소개
=> 말 그대로 Javascript에 XML을 추가하여 확장한 문법    

> JSX는 리액트로 개발 시 주로 사용됨, WHY?     
> React 애플리케이션을 쉽게 작성할 수 있기 때문에

<br />

## 2. JSX의 장점
1. __가독성 가독성 가독성!__
    ```js 
        // JSX 사용
        const element = (
            <h1 className="greeting">
                Hello, world!
            </h1>
        )

        // JSX 사용 X
        const element = React.createElement(
            'h1',
            { className: 'greeting' },
            'Hello, world!'
        )
    ```
2. __오류 검사 가능__     
    브라우저 실행 시 Babel을 사용하여 자바스크립트 형태의 코드로 변환되는데, 이 때 오류 검사 가능

<br />

## 3. 주의해야 할 JSX 문법

1. 


[JSX - 리액트 공식 문서](https://ko.reactjs.org/docs/introducing-jsx.html)
<br />
<br />

