/* eslint-disable */
import Head from 'next/head';
import Header from '../components/HeaderBasic';
import AutoComplete from 'material-ui/AutoComplete';
import { withStyles } from 'material-ui/styles';
import defaultPage from '../hoc/style';
import ProductCreator from '../components/ProductCreator';


// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
    
//   },
// });

class Business extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      open: false,
    };
  }
  render() {
    return(
      <div className="wrapper">
        <div>
          <Header />
        </div>
        <div className="creatorBox" >
          <ProductCreator />
        </div>
          <style jsx>{`
            .wrapper {
              position: relative;
            }
            .creatorBox {
              position: relative;
              margin-top: 30vh;
              margin-left: 10vw;
            }
          `}</style>
      </div>
    );
  }
}

export default defaultPage(Business);
