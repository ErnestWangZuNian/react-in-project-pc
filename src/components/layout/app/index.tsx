import Layout from './layout';
import style from './style.scss';

function App (props) {
  return (
    <div className={style["app-container"]}>
      <Layout {...props} />
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;
