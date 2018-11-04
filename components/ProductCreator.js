/* eslint-disable */
import { Component } from 'react';
import Button from 'material-ui/RaisedButton';
import Link from 'next/link';
import AutoComplete from 'material-ui/AutoComplete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Settings from 'mdi-react/SettingsIcon';
import Add from 'mdi-react/ImageIcon';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import { withStyles } from 'material-ui/styles';
import defaultPage from '../hoc/style';
import axios from 'axios';
import styles from '../littleStyles/menuBar';
import ReactLoading from 'react-loading';

const style = {
  marginRight: '20vh',
};

class ProductCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      open: false,
      image: '',
      description: '',
      selectedFile: null,
      id: 0,
      name: '',
      loading: false
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.submitImage = this.submitImage.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }
  componentDidMount() {
    // this.updateCount();

  }
  handleUpdateInput(ST) {
    this.setState({
      searchText: ST,
    });
  }
  updateCount() {
    axios.get('/api/photos/amount')
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ id: res.data + 1 });
    });
  }
  handleToggle(type) {
    if (type === 1) {
      this.setState({ open: !this.state.open });
    } else {
      console.log("Invalid Toggle")
    }
  }
  handleTextFieldChange(value, id) {
    if (id === 0) {
      this.setState({
        name: value,
      }); 
    } else {
      this.setState({
        description: value,
      });     
    }
  }
  submitImage(name) {
    if (this.state.selectedFile !== null) {
      this.setState({ 
        loading: true 
      });
      axios.get('/api/select', { 
        params: { name: name }
      }).then((response) => {
        console.log(response)
        if (response.data.exists === undefined || response.data.error) {
          console.log(this.state.selectedFile, this.state.description);
          const postObj = new FormData();
          postObj.append('file', this.state.selectedFile);
          postObj.append('filename', this.state.selectedFile.name);
          postObj.append('name', this.state.name);
          postObj.append('description', this.state.description);
          axios.post('/api/photos/save', postObj)
          .then(res => {
            this.setState({ 
              selectedFile: null,
              image: null,
              name: '',
              description: '',
              loading: false,
            });
          });          
        } else {
          alert('name already used, type something unique');
          return;
        }
      });
    } else {
      alert('You must add a file to save.')
    }
    
  }
  deleteImage(name) {
    axios.post('/api/delete', { name: name }).then(response => {
      if (response) {
        alert('Image deleted');
        this.setState({
          selectedFile: null,
          image: null,
          name: '',
          description: '',
          loading: false,  
        })
      } else {
        alert('Not deleted maybe this image doesn\'t exist')
      }
    })
  }
  fileChangedHandler(event) {
    const allowedImports = ['image/jpeg', 'image/png', 'image/jpg', 'image/tiff', 'image/gif'];
    const file = event.target.files[0];
    const name = file.name;
    const postObj = new FormData();
    postObj.append('file', file);
    postObj.append('name', name);
    if (allowedImports.includes(file.type)) {
      axios.post('/api/photo', postObj).then((response) => {
          this.setState({ image: `http://localhost:3000/${response.data.data.image}` });
      });
      this.setState({selectedFile: file});
    } else {
      alert('File not added. Please select an image.');
    }
  }
  render() {
    return (
        <div className="wrapCreateInput">

          <div className="headerBar">
              <div className="currentPageTitle">
                  <h2>Image Uploader</h2>
              </div>
          </div>
          <div className="name">
            <TextField
              floatingLabelText="Name"
              underlineShow={true}
              onChange={(event, newValue) => this.handleTextFieldChange(newValue, 0)}
              value={this.state.name}
              style={{ width: 300 }}
              floatingLabelStyle={{ 
                fontSize: '20px',
                fontFamily: 'Play, sans-serif',
              }}
              multiLine={true}
              rowsMax={2}
            />
          </div>
          <div className="description">
            <TextField
              floatingLabelText="Description"
              underlineShow={true}
              onChange={(event, newValue) => this.handleTextFieldChange(newValue, 1)}
              value={this.state.description}
              style={{ width: 300 }}
              floatingLabelStyle={{ 
                fontSize: '20px',
                fontFamily: 'Play, sans-serif',
              }}
              multiLine={true}
              rowsMax={2}
            />
          </div>
          <div className="selectedImage">
              {this.state.image ?
                <img
                    width="240px"
                    height="240px"
                    src= {this.state.image}
                >
                </img>
              : 
                <div
                  className="emptyPic"
                />
              }
          </div>
          <div className="addImageButton">
            <FloatingActionButton 
                component="label"
                backgroundColor="black" 
                mini={true}
                onClick={(e) => this.upload.click() }>
                <Add />
                <input 
                  ref={(ref) => this.upload = ref}
                  style={{ display: 'none' }}
                  type="file"
                  onChange={(e) => this.fileChangedHandler(e)}/>
            </FloatingActionButton>
          </div>
          {this.state.loading === false ?
            <div className="submit">           
              <Button
                containerElement='label'
                onClick={() => this.submitImage(this.state.name)}
                backgroundColor="black"
                labelColor="white"
                buttonStyle={{ textColor: 'white' }}
                label="Save"  
              >
              </Button>
            </div>
            :
            <div className="loader">
             <ReactLoading type={"balls"} color="#000" height={'10%'} width={'10%'} />
            </div>
          }
          <div className="delete">
              
                <Button
                  containerElement='label'
                  onClick={() => this.deleteImage(this.state.name)}
                  backgroundColor="black"
                  labelColor="white"
                  buttonStyle={{ textColor: 'white' }}
                  label="Delete"
                  
                >

                </Button>
          </div>

        <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Play');

        .wrapCreateInput {
            position: relative;
            overflow: auto;
            min-height: 60vh;
            min-width: 60vw;
            max-height: 60vh;
            max-width: 60vw;
            border-radius: 4px;
            background-color: rgba(225, 225, 225, 0.2);
            -moz-box-shadow:    inset 0 0 6px #C0C0C0;
            -webkit-box-shadow: inset 0 0 6px #C0C0C0;
            box-shadow:         inset 0 0 6px #C0C0C0;
        }
        .selectedImage {
            position: absolute;
            top: 30%;
            left: 60%;
            min-width: 200px;
            min-height: 200px;  
            font-family: 'Play', sans-serif;
        }
        .currentPageTitle {
            position: relative;
            margin-top: -1.5vh;
            margin-left: 5vw;
        }
        .headerBar {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.9);
            max-height: 8vh;
            min-width: 60vw;
            border-radius: 4px;
        }
        .description {
          position: absolute;
          top: 40%;
          left: 10%;
        }
        .name {
          position: absolute;
          top: 20%;
          left: 10%;
        }
        .currentPageTitle h2 {
            position: relative;
            letter-spacing: 3px;
            font-weight: 100;
            -webkit-text-shadow: 1px 1px 3px 3px #ccc;
            color: white;
            font-family: 'Play', sans-serif;
        }
        .emptyPic {
          min-width: 240px;
          min-height: 240px;   
          background-color: rgba(0, 0, 0, 0.05);
        }
        .submit {
          position: absolute;
          top: 80%;
          left: 20%;
          font-family: 'Play', sans-serif;
        }
        .loader {
          background-color: 'red';
          margin-top: 40%;
          margin-left: 22%;
          font-family: 'Play', sans-serif;
          z-index: 20;
        }
        .delete {
          position: absolute;
          top: 80%;
          left: 37%;
          font-family: 'Play', sans-serif;
        }
        .addImageButton {
          position: absolute;
          top: 80%;
          left: 10%;
        }
        `}</style>
      </div>
    );
  }
}
export default defaultPage(ProductCreator);

// -webkit-transform: rotate(90deg);
// -moz-transform: rotate(90deg);
// -o-transform: rotate(90deg);
// -ms-transform: rotate(90deg);
// transform: rotate(90deg);
