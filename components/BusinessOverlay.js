import { Component } from 'react';
import Header from './HeaderBasic';
import { withStyles } from 'material-ui/styles';
import defaultPage from '../hoc/style';

// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <div className="page" >
          {this.props.children}
        </div>
        <style jsx>{`
          .panel {
            flex: 1;
            justify-content: center;
            align-items: center;
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
}

export default Layout;
