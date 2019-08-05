import page from '../../components/page';
import  React from 'react';
import { Button } from 'antd';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  render() {
    return (
      <div>
        <Button type="primary">这是demo界面</Button>
      </div>
    );
  }
}
export default Demo;
