/* eslint-disable */

import { Component } from 'react';
import Link from 'next/link';
import ReplyIcon from 'mdi-react/ReplyIcon';
import $ from 'jquery';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      hover: false,
      width: 0,
      height: 0,
      iconSize: 60,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight }, () => {
      if (this.state.width < 700) {
        this.setState({
          iconSize: 40,
        })
      } else if (this.state.width > 700) {
        this.setState({
          iconSize: 60,
        })        
      }
    });
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }
  render() {
    
    let navBackground;
    let titleColor;
    let textColor;
    if (this.state.hover) {
      titleColor = {
        color: 'black',
      };
    } else {
      titleColor = {
        color: '#C0C0C0',
      };
    }
    if (!this.state.isTop) {
      navBackground = {
        backgroundColor: 'rgba(100, 100, 100, 0.9)',
      };
      textColor = {
        color: '#C0C0C0',
      };
    } else {
      textColor = {
        color: 'black',
      };
    }
    return(
      <div style={navBackground} className="navbar">
        <div className="login" style={{marginRight: '4px'}}>
          <Link href='/'>
            <a>
              <ReplyIcon className="icon" style={textColor} size={this.state.iconSize}>insert_chart</ReplyIcon>
            </a>
          </Link>
        </div>
        <div className="titleBox">
          <Link href='/'>
            <h1
              style={titleColor} 
              className="title"
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              S S S S
            </h1>
          </Link>
        </div>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Play');
          @import url('https://fonts.googleapis.com/css?family=Poiret+One');
            .navDescription {
              overflow: hidden;
              margin-left: auto;
              margin-right: auto;
              width: 55%;
              overflow: hidden;
              font-family: 'Play', sans-serif;
              font-weight: 100;
              box-shadow: 2px 1px 1px rgba(100, 100, 100, 0.1);
              border-bottom:0.1em solid rgba(100, 100, 100, 0.1);
              border-radius:0.5em;
            }
            .navDescription h3{
              text-align: center;
              font-weight: 100;
              font-size: 18px;
              font-family: 'Play', sans-serif;
            }
          .title {
            text-shadow: 2px 2px 5px rgba(100, 100, 100, 0.3);
            width: 50vw;
            cursor: pointer;
            padding-top: 10px;
            padding-left: 20px;
            letter-spacing: 20px;
            font-weight: 100;
            font-size: 80px;
            font-family: 'Poiret One', cursive;
            transition: all 1.0s;
          }
          .title:hover {
            color:#C1C1C1;
          }
          .titleBox {
            margin: auto;
            width: 30%;
          }
          .login h1{
            color: white;
          }
          .navbar {
            rgba(100, 100, 100, 0.1);
            width: 100%;
            max-height: 22vh;
            min-height: 22px;
            left: 0;
            z-index: 20;
            position: fixed; /* Set the navbar to fixed position */
            top: 0; /* Position the navbar at the top of the page */
            transition: all 1.0s;
          }
            /* Links inside the navbar */
          .navbar a {
            font-family: 'Play', sans-serif;
            display: block;
            color: black;
            text-align: center;
            text-decoration: none;
            float: right;
          }
            /* Change background on mouse-over */
          .navbar a:hover {
            background: rgba(100, 100, 100, 0.1);
            color: black;
          }
          a.button1{
            padding:0.35em 1.2em;
            margin:0 0.3em 0.3em 0;
            border-radius:0.6em;
            box-sizing: border-box;
            text-decoration:none;
            font-family:'Roboto',sans-serif;
            font-weight:300;
            font-size: 30px;
            text-align:center;
            transition: all 0.6s;
          }
          a.button1:hover{
            color:#f2f2f2;
            background-color:white;
          }
          @media all and (max-width:30em){
            a.button1{
              display:block;
              margin:0.4em auto;
            }
          }
          @media (min-width: 1025px) and (max-width: 1280px) {
            .titleBox {
              display: flex;
              flex: 0.5;
              justify-content: center;
              align-items: center;
              width: 57%;
              margin-left: 27%;
            }
            .title {
              width: 77%;
              margin-top: 4%;
              letter-spacing: 20px;
              font-weight: 100;
              font-size: 80px;
              font-family: 'Poiret One', cursive;
              transition: all 1.0s;
            }
            a.button1 {
              margin:0 0.3em 0.3em 0;
              font-size: 25px;
            }
            .navDescription {
              overflow: hidden;
              margin-left: auto;
              margin-right: 20%;
              width: 720px;
              vertical-align: middle;
              overflow: hidden;
              font-family: 'Play', sans-serif;
              font-weight: 100;
              border-bottom:0.1em solid rgba(100, 100, 100, 0.1);
              border-radius:0.5em;
            }           
  
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .titleBox {
              display: flex;
              flex: 0.5;
              justify-content: center;
              align-items: center;
              width: 57%;
              margin-left: 23%;
            }
            .title {
              width: 77%;
              margin-top: 9%;
              letter-spacing: 20px;
              font-weight: 100;
              font-size: 65px;
              font-family: 'Poiret One', cursive;
              transition: all 1.0s;
            }
            a.button1 {
              margin:0 0.3em 0.3em 0;
              font-size: 25px;
            }
            .navDescription {
              font-size: 17px;
              margin-top: -1%;
              margin: auto;
              width: 640px;
            }
          }
          @media (min-width: 481px) and (max-width: 767px) {
            .titleBox {
              display: flex;
              flex: 0.5;
              justify-content: center;
              align-items: center;
              width: 69%;
              margin-left: 26%;
            }
            .title {
              width: 400px;
              margin-top: 8%;
              letter-spacing: 20px;
              font-weight: 100;
              font-size: 40px;
              font-family: 'Poiret One', cursive;
              transition: all 1.0s;
            }
            a.button1 {
              margin:0 0.3em 0.3em 0;
              font-size: 15px;
            }
            .navDescription {
              vertical-align: center;
              margin: auto;
              font-size: 12px;
              margin-top: -1%;
              width: 460px;
            }
          }
          @media (min-width: 320px) and (max-width: 480px) {
            .titleBox {
              display: flex;
              flex: 0.5;
              justify-content: center;
              width: 85%;
              margin-top: 15%;
            }
            .title {
              width: 85%;
              margin-top: 3%;
              letter-spacing: 20px;
              font-weight: 100;
              font-size: 46px;
              font-family: 'Poiret One', cursive;
              transition: all 1.0s;
            }
            a.button1 {
              margin:0 0.3em 0.3em 0;
              font-size: 15px;
            }
            .navDescription {
              font-size: 10px;
              margin-top: -1%;
              margin: auto;
              width: 380px;
            }
          }
          @media (min-width: 0px) and (max-width: 319px) {
            .titleBox {
              display: flex;
              flex: 1;
              margin-top: 30vh;
              justify-content: center;
              align-items: center;
            }
            .title {
              width: 300px;
              letter-spacing: 20px;
              font-weight: 100;
              font-size: 40px;
              font-family: 'Poiret One', cursive;
              transition: all 1.0s;
            }
            a.button1 {
              margin:0 0.3em 0.3em 0;
              font-size: 20px;
            }
            .navDescription {
              font-size: 11px;
              
            }
          }
           
          `}</style>
      </div>
    );
  }
}
