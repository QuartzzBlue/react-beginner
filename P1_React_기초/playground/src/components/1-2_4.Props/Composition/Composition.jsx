import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

//rfc 쳤을 때 기본 리액트 function component 스니펫 불러옴
export default function Composition() {
  return (
    <div>
      {/* Componenet 합성 
          컴포넌트들로 새로운 컴포넌트 생성*/}
      <Welcome name="Jimmy" />
      <Welcome name="Tommy" />
    </div>
  )
}
