/*eslint-disable*/
import { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import RaisedDiv from '@material-ui/core/Paper';
import StepperComponent from '../components/Stepper';
import SVG from '../components/SVG';

function getSteps() {
  return [
    {
      label: 'Select, then upload your Rules & Test Files', 
      content: '      ', 
      svg: <SVG type={"upload"}/>,
      buttonText: 'UPLOAD FILES',
    },
    {
      label: 'Run your Tests', 
      svg: <SVG type={"redo-alt"}/>,
      buttonText: 'RUN TESTS',
    },
    {
      label: 'Build and deploy your Rules!', 
      svg: <SVG type={"rocket"}/>,
      buttonText: 'DEPLOY',
    },
  ];
}


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    const steps = getSteps();
    return (
      <div>
        <RaisedDiv elevation={2}>

          {steps.map((step, index) => {
            return (
              <StepperComponent 
                index={index} 
                svg={step.svg} 
                label={step.label} 
                content={step.content}
                buttonText={step.buttonText}
              />
            )
          })}
        </RaisedDiv>
          <style jsx>{`
            .1 {
              width: 90%;
              background-color: black;
            }
          `}</style>
      </div>
    );
  }
}