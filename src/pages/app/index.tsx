import './style.scss';

const { useEffect } = React;

const { Button } = antd;

function App() {
  useEffect(() => {
    console.log(document.getElementsByClassName('home-container'));
  }, []);
  return (
    <div className="test-app" styleName="home-container">
      <Button type="primary">测试</Button>
    </div>
  );
}

export default App;
