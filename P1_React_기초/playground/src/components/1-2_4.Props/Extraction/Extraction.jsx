import React from 'react'
function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Avatar(props) {
    // 컴포넌트 추출
    // 유의미한 값들로 새로운 컴포넌트 생성
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name} />
    )
  }

  function Comment(props) {
    // 컴포넌트 추출
    // 유의미한 값들로 새로운 컴포넌트 생성
    return (
      <div className="Comment">
        <div className="UserInfo">
         <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  
export default function Extraction(props) {
    return (
        <Comment date={comment.date} text={comment.text} author={comment.author} />
    );
}
