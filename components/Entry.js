import { Component } from 'react';
import Link from 'next/link';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return( 
      <div className="entryButtons">
        <Link href='/gallery'>
          <a className="button1">Gallery</a>
        </Link>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Play');
        .entryButtons {
          display: flex;
          flex: 0.5;
          justify-content: center;
          align-items: center;
        }
        a.button1 {
          vertical-align: center;
          padding:0.10em 0.8em;
          margin:1 0.1em 0.1em 1;
          margin-top: 15px;
          border-bottom:0.1em solid rgba(100, 100, 100, 0.2);
          border-radius:0.6em;
          box-sizing: border-box;
          text-decoration:none;
          font-family: 'Play', sans-serif;
          font-size: 30px;
          font-weight: 100;
          color:black;
          text-align:center;
          transition: all 0.6s;
        }
        a.button1:hover{
          color:black;
          background-color: rgba(125, 100, 100, 0.98);
        }
        @media all and (max-width:30em){
          a.button1{
            display:block;
            margin:0.4em auto;
          }
        }
        @media (min-width: 481px) and (max-width: 767px) {
          a.button1 {
            font-size: 20px;
          }         
        }
        @media (min-width: 320px) and (max-width: 480px) {
          a.button1 {
            font-size: 20px;
          }
        }
    `}</style>
      </div>
    );
  }
};
