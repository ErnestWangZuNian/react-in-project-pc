import './style.scss';

const { useEffect } = React;

function App() {
  useEffect(() => {
    console.log(document.getElementsByClassName('home-container'));
  }, []);
  return <div styleName="homeContainer">11111</div>;
}

export default App;
