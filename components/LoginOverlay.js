import { Component } from 'react';
import Link from 'next/link';
import Button from 'material-ui/RaisedButton';
import Header from './HeaderBack';
import Panel from './Panel';


// const layoutStyle = {
//   border: '1px solid green',
//   width: '600px',
// };

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

    if (typeof window !== 'undefined') {
      const $ = require('jquery');
    }
  }
  render() {
    return(
      <div>
        <div>
          <Header className="navHeader"/>
        </div>
        <div className="hider">
          <div className="greyBar"></div>
        </div>
        <div className="panel">
          <Panel />
          <div className="submit">
            <Link href='/business'>
              <Button className="buttonLogin">Submit</Button>
            </Link>
          </div>
        </div>
        <div className="page" >
          {this.props.children}
        </div>

        <style jsx>{`
          .panel {
            flex: 1;
            margin-top: 30vh;
            margin-left: 28vw;
          }
          .submit {
            margin-left: 13vw;
          }
        `}</style>
      </div>
    );
  }
};
