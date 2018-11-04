/* eslint-disable */
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import EntryButtons from '../components/Entry';
import { withStyles } from 'material-ui/styles';
import Footer from '../components/Footer';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return(
      <div className="wrapper">
          <div>
            <Header className="navHeader"/>
          </div>
          <div className="spacer">
            <h3 className="desc"></h3>
          </div>
          <Footer />
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Play');
            .wrapper {
              background: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&s=dea3b438cb6e62d3e522e8e4886ec9a5&auto=format&fit=crop&w=1050&q=80");
              min-height: 100vh;
              background-size: 100%;
              background-repeat: no-repeat;
            }
            .spacer {
              margin-top: 30%;
              margin-left: auto;
              margin-right: 5vw;
              width: 35%;
              border-radius:0.5em;
            }
            .spacer h3{
              text-align: center;
              font-weight: 100;
              font-size: 18px;
              font-family: 'Play', sans-serif;
            }
            .navHeader {
              max-height: 20vh;
              z-index: 8;
            }
            .desc {
              background-color: rgba(225, 225, 225, 0.1);
              border-radius:0.5em;
            }
            @media (min-width: 1025px) and (max-width: 1280px) {
              .spacer {
                display: flex;
                flex: 1;
                margin-top: 64vh;
                justify-content: center;
                align-items: center;
              }
              .spacer h3{
                font-size: 13px;
                font-weight: 100;
                font-family: 'Play', sans-serif;
              }
            }
            @media (min-width: 768px) and (max-width: 1024px) {
              .spacer {
                display: flex;
                flex: 1;
                margin-top: 48vh;
                justify-content: center;
                align-items: center;
              }
              .spacer h3{
                font-size: 13px;
                font-weight: 100;
                font-family: 'Play', sans-serif;
              }            
            }
            @media (min-width: 481px) and (max-width: 767px) {
              .spacer {
                display: flex;
                flex: 1;
                margin-top: 40vh;
                justify-content: center;
                align-items: center;
              }
              .spacer h3{
                font-size: 13px;
                font-weight: 100;
                font-family: 'Play', sans-serif;
              }             
            }
            @media (min-width: 320px) and (max-width: 480px) {
              .spacer {
                display: flex;
                flex: 1;
                margin-top: 38vh;
                justify-content: center;
                align-items: center;
              }
              .spacer h3{
                font-size: 13px;
                font-weight: 100;
                font-family: 'Play', sans-serif;
              }
              .wrapper {
                background-size: 170%;
                background-repeat: no-repeat;
              }
            }
        `}</style>
      </div>
    );
  }
}

export default Index;
