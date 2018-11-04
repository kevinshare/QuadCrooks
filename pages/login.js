/* eslint-disable */
import { Component } from 'react';
import Link from 'next/link';
import Button from 'material-ui/RaisedButton';
import defaultPage from '../hoc/style';
import Header from '../components/HeaderBasic';
import TextField from 'material-ui/TextField';
import Router from 'next/router';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handler = this.handler.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }

  handler() {
    if (this.state.username === '0' && this.state.password === '1') {
      Router.push({
        pathname: '/business',
      });
    } else {
      alert('Invalid Credentials');
    }
  }

  handleTextFieldChange(value, type) {
    if (type === 1) {
      this.setState({ username: value });
    }
    if (type === 2) {
      this.setState({ password: value });
    }
  }

  render() {
    return(
    <div className="loginWrapper">
      <div>
        <Header className="navHeader"/>
      </div>
      <div className="loginSection">
        <div className="input">
          <TextField
            floatingLabelText="Username"
            underlineShow={true}
            multiLine={false}
            rowsMax={1}
            onChange={(event, newValue) => this.handleTextFieldChange(newValue, 1)}
            value={this.state.username}
            style={{ 
              width: 160,
              marginLeft: 30
             }}
            floatingLabelStyle={{ 
              fontSize: '18px',
              fontFamily: 'Play, sans-serif',
            }}
            labelStyle={{ 
              fontSize: '15px',
              fontFamily: 'Play, sans-serif',
            }}
          />
        </div>
        <div className="input">
          <TextField
            floatingLabelText="Password"
            underlineShow={true}
            multiLine={false}
            rowsMax={1}
            onChange={(event, newValue) => this.handleTextFieldChange(newValue, 2)}
            value={this.state.password}
            style={{ width: 160 }}
            floatingLabelStyle={{ 
              fontSize: '18px',
              fontFamily: 'Play, sans-serif',
            }}
            labelStyle={{ 
              fontSize: '15px',
              fontFamily: 'Play, sans-serif',
            }}
          />
        </div>
        <div className="submit">
          <Button onClick={this.handler} className="buttonLogin">
            <p style={{
              fontFamily: 'Play, sans-serif',
              marginTop: 0,
              marginBottom: 0
            }}>Submit</p>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Play');
        .loginSection {

          display: flex;
          margin-top: 50vh;
          justify-content: center;
          align-items: center;
        }
        .submit {
          position: absolute;
          display: flex;
          top: 80%;
          justify-content: center;
          align-items: center;          
        }
        .input {
          padding-left: 20px;
          min-width: 18vw;
        }
      `}</style>
    </div>
    );
  }
}
export default defaultPage(Login);
