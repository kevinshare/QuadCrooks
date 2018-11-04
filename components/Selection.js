/* eslint-disable */
import { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render () {
    console.log(this.props)
    let imageTitle = 
      <Grid item xs={12} style={{
            position: 'absolute',
            bottom: '0px',
            minWidth: '100%',
            backgroundColor: 'rgba(100, 100, 100, 0.3)',
            minHeight: '5%',
          }}>
        <h2 className="selectionName" style={{
            position: 'relative',
            fontSize: '15px',
            fontWeight: 100,
            letterSpacing: 0.5,
            float: 'left',
            left: 30,
            fontFamily: 'Play, sans-serif',
            color: 'rgba(225, 225, 225)'
          }}>
          {this.props.name}
        </h2>
      </Grid>           
    return (
      <Grid item className="selectionWrapper" 
        style={{minHeight: '10vh', width: '100%', cursor: 'pointer'}}
        onClick={() => this.props.handleClick(this.props.id)}
      >
          <Grid container direction="row">
            <Grid item xs={12} style={{position: 'relative'}}>
              <img 
                src={this.props.pic}
                height="100%"
                width="100%"
              />
                {imageTitle}
            </Grid>
          </Grid>


        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Play');
          .selectionWrapper {
            background-color: rgba(100, 100, 100, 0.05);
            min-height: 30vh;
            overflow: hidden;
          }
          .selectionName {
            font-family: 'Play', sans-serif;
          }
          @media all and (max-width:30em){
            a.selectButton{
            display:block;
            margin:1em auto;
           }
          }
        `}</style>
      </Grid>
    )
  }
}