/* eslint-disable */
import { Component } from 'react';
import Link from 'next/link';
// import Panel from './Panel';
import { Resizable, ResizableBox } from 'react-resizable';
import $ from 'jquery';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
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
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
        minHeight: '50px',
        maxHeight: '180px',
      };
      textColor = {
        color: '#C0C0C0',
        verticalAlign: 'center'
      };
    } else {
      textColor = {
        color: 'black',
      };
    }

    return(
      <div style={navBackground} className="navbar">
        <div className="login">
          <Link href='/login'>
            <a style={textColor} className="button1">Login</a>
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
          {!this.state.isTop ? 
              <h3></h3>
            :
              <h3 className="navDescription"> QuadCrooks is the hub for finding the best local events, featuring worldwide foods.</h3> 
          }
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
            width: 40vw;
            cursor: pointer;
            padding-top: 10px;
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
            max-height: 40vh;
            min-height: 60px;
            left: 0;
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
              margin-top: 7%;
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
              argin-left: auto;
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
              margin-top: 10%;
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
            }
            .title {
              width: 85%;
              margin-top: -1%;
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
