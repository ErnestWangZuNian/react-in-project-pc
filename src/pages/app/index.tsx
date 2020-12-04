import style from './style.scss';

const { useEffect } = React;

const { Button } = antd;

function App() {
  useEffect(() => {
    console.log(document.getElementsByClassName('home-container'));
  }, []);
  return (
    <div className={`${style["home-container"]} home-container`}>
      1111
      <Button type="primary">测试</Button>
    </div>
  );
}

export default App;
