import React, {useEffect, useState} from 'react'

export default function FunctionalComponent() {
    /*
        state는 직접 수정하지 말기! 항상 `setState` 통해 업데이트 진행
        또, setState를 통한 state 업데이트는 비동기적일 수 있음 (시간이 소요되며 꼭 순차적으로 완료되는 것이 아님)
    */
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date())
    };

    useEffect(() => {
        const interval = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
      <div>
        <h1>Hello, world! It's Functional Component</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
}
