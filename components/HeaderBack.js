import { Component } from 'react';
import Link from 'next/link';
import ReplyIcon from 'mdi-react/ReplyIcon';

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
      };
      textColor = {
        color: '#C0C0C0',
      };
    } else {
      textColor = {
        color: 'black',
      };
    }
    return (
      <div style={navBackground} className="navbar">
        <div>
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
        <div className="login">
          <Link href='/'>
            <ReplyIcon style={textColor} size={60}>insert_chart</ReplyIcon>
          </Link>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Play');
          @import url('https://fonts.googleapis.com/css?family=Poiret+One');

          .title {
            width: 80vw;
            padding-top: 10px;
            padding-left: 10px;
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
          .login {
            float: right;
            margin-right: 10vw;
          }
          .login h1{
            color: white;
          }
          .navbar {
            overflow: hidden;
            rgba(100, 100, 100, 0.1);
            min-height: 10vh;
            position: fixed; /* Set the navbar to fixed position */
            top: 0; /* Position the navbar at the top of the page */
            min-width: 100vw; /* Full width */
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
          @media (min-width: 320px) and (max-width: 480px) {
            .titleBox {
              display: flex;
              flex: 0.5;
              margin-top: 5vh;
              justify-content: center;
              width: 85%;
            }
            .title {
              width: 85%;
              padding-top: 20px;
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
              padding-top: 20px;
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
          }
          `}</style>
      </div>
    );
  }
}