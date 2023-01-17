# Form 객체 다루기 - Controlled & Uncontrolled Component    

## Controlled Component
> REACT가 상태 'state'를 컨트롤하는 컴포넌트

```
const ControlledExample = () => {
  // React State로 Value 관리
  const [first, setFirst] = useState("first");
  const [second, setSecond] = useState("second");

  const handleChangeFirst = (e) => {
    const val = e.target.value;
    setFirst(val);
  };

  const handleChangeSecond = (e) => {
    const val = e.target.value;
    setSecond(val);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("first 👉️", first);
    console.log("second 👉️", second);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} value={first} onChange={handleChangeFirst} />
      <input type={"text"} value={second} onChange={handleChangeSecond} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledExample;
```    

## Uncontrolled Component
> REACT가 상태 'state'를 컨트롤하지 않는 컴포넌트    
> (이 경우, DOM에 직접적으로 접근하거나, ref를 통한 접근 필요! -> React State로 관리되지 않음)

```
const UncontrolledExample = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("---Uncontrolled submit---");
    console.log("first 👉️", e.target.first.value);
    console.log("second 👉️", e.target.second.value);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name={"first"} type={"text"} defaultValue="first" />
      <input name={"second"} type={"text"} defaultValue="second" />
      <button type="submit">Submit</button>
    </form>
  );
};
```

<br />
_※ 출처_      
https://mygumi.tistory.com/419    
https://velog.io/@hanei100/React-ControlledUncontrolled-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8