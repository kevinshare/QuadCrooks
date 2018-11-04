import {Component} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import OverLay from '../components/OverLay';

export default class extends Component {
  render () {
    return (
      <div className="encompass">
        <h3 className="productsSelectTitle">
          Select Items
        </h3>
        <h3 className="productsSelectDropdown">
          Dropdown
        </h3>
        <div className="reserveLink">
          <Link href='/products'>
            <a className="productsSelectFinish">
              Reserve
            </a>
          </Link>
        </div>
      <style jsx>{`
        .encompass {
          background-color: white;
          top: 50%;
        }
        .reserveLink {
          margin-top: 20px;
          float: left;
        }
        .productsSelectTitle {
          font-family: 'Play', sans-serif;
          color: white;
          float: left;
          padding-left: 60px;
          padding-right: 60px;
        }
        .productsSelectDropdown {
          font-family: 'Play', sans-serif;
          color: white;
          float: left;
          padding-left: 60px;
          padding-right: 60px;
        }

        a.productsSelectFinish{
          color: black;
          float: left;
           padding:0.35em 1.0em;
           border:0.1em solid #FFFFFF;
           margin:0 0.8em 0.8em 0;
           border-radius:0.12em;
           box-sizing: border-box;
           text-decoration:none;
           font-family: 'Play', sans-serif;
           font-weight:600;
          font-size:20px;
           color:#FFFFFF;
           text-align:center;
           transition: all 0.6s;
        }
        a.productsSelectFinish:hover{
         color:#000000;
         background-color:#FFFFFF;
        }
        @media all and (max-width:30em){
         a.productsSelectFinish{
          display:block;
          margin:2em auto;
         }
        }
      `}</style>
      </div>
    )
  }
}