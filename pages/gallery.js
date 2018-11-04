/* eslint-disable */
import { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Head from 'next/head';
import Selection from '../components/Selection';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Header from '../components/HeaderBasic';
import axios from 'axios';

function getModalStyle(windowSmall) {
  const top = 0;
  const left = 0;
  if (windowSmall === true) {
    return {
      backgroundColor: 'white',
      marginTop:'40vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: '60vh',
      maxWidth: '80vw',
      alignSelf: 'center',
      justifyContent: 'center',
      verticalAlign: 'center'
    };
  } else {
    return {
      backgroundColor: 'white',
      marginTop:'30vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: '50vh',
      maxWidth: '40vw',
      alignSelf: 'center',
      justifyContent: 'center',
      verticalAlign: 'center'
    };
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: '',
      loaderFontSize: '20px',
      data: [],
      small: false,
      width: 0,
      height: 0,
      length: 6,
      size: 12,
      hasMore: true,
      indexCall: 0,
      open: false,
      modalContent: {},
    };
    this.loadFunc = this.loadFunc.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateLength = this.updateLength.bind(this);
    this.resize = this.resize.bind(this);
    this.updateModalOpen = this.updateModalOpen.bind(this);
  }
  componentDidMount() {
    console.log("MOUNTED")
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.loadFunc(this.state.length, this.updateLength);
  }
  componentDidUpdate() {
    console.log("UPDATED AGAIN")
  }
  updateModalOpen(id) {
    this.setState({
      open: !this.state.open,
    }, () => {
      if (this.state.open) {
        axios.get('/api/select/id', { 
            params: { id: id }
        }).then(response => {
          this.setState({
            modalContent: response.data.data,
          })
        })
      } 
    })
  }
  updateWindowDimensions() {
    console.log("updating", this.state.width)
    this.setState({ width: window.innerWidth, height: window.innerHeight }, () => {
      if (this.state.width < 650) {
        this.setState({
          small: true,
        }, () => {
          if (this.state.small === true) {
            this.setState({
              size: 12,
            }, () => {
              this.resize();
            })
          } else {
            this.setState({
              size: 4,
            }, () => {
              this.resize();
            })
          }
        })
        console.log("UPDATED TO SHORTER PAGE", this.state.small)    
      } else if (this.state.width > 650) {
        this.setState({
          small: false,
        }, () => {
          if (this.state.small === true) {
            this.setState({
              size: 12,
            }, () => {
              this.resize();
            })
          } else {
            this.setState({
              size: 4,
            }, () => {
              this.resize();
            })
          }
        });
        console.log("UPDATED TO LONGER PAGE", this.state.small)    
      }
    });
  }
  updateLength() {
    this.setState({
      length: this.state.length + 6,
    })
  }
  loadFunc(length, cb) {
    const renderSelections = [];
    axios.get('/api/photos').then(response => {
      this.setState({data: response.data.images.rows}, () => {
        for (let i = 0; i < length; i += 1) {
          if (this.state.data[i]) {
            renderSelections.push(
              <Grid item xs={this.state.size}>
                <Grid container direction="column" style={{minHeight: '20vh'}}>
                    <Selection                 
                      id={this.state.data[i].id}
                      name={this.state.data[i].name}
                      pic={this.state.data[i].photo}
                      handleClick={this.updateModalOpen}
                    />
                </Grid>
              </Grid>
            );
          } else {
            this.setState({
              hasMore: false,
              selections: renderSelections,
            }, () => {
              cb();
            })
            break;
          }
        }
        this.setState({
          selections: renderSelections,
        }, () => {
          cb();
        }) 
      });
    })
  }
  resize() {
    console.log(this.state.selections, this.state.selections.length)
    const renderSelections = [];
    for (let i = 0; i < this.state.selections.length; i += 1) {
      renderSelections.push(
        <Grid item xs={this.state.size}>
          <Grid container direction="column" style={{minHeight: '20vh'}}>
              <Selection 
                id={this.state.data[i].id}
                name={this.state.data[i].name}
                pic={this.state.data[i].photo}
                handleClick={this.updateModalOpen}
              />
          </Grid>
        </Grid>
      );
    }
    this.setState({
      selections: renderSelections,
    });
  }
  render() {
    let imageTitle = 
      <Grid item xs={12} style={{
            position: 'absolute',
            bottom: '0px',
            minWidth: '100%',
            backgroundColor: 'rgba(100, 100, 100, 0.4)',
            minHeight: '20%',
          }}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <h2 style={{
                position: 'relative',
                fontSize: '15px',
                fontWeight: 100,
                letterSpacing: 0.5,
                float: 'left',
                left: 30,
                fontFamily: 'Play, sans-serif',
                color: 'rgba(225, 225, 225)'
              }}>
              {this.state.modalContent.name}
            </h2>
            <style jsx>{`
              @import url('https://fonts.googleapis.com/css?family=Play');
            `}</style>
          </Grid>
          <Grid item xs={12}>
            <h2 style={{
                position: 'relative',
                fontSize: '15px',
                fontWeight: 100,
                letterSpacing: 0.5,
                float: 'left',
                left: 30,
                fontFamily: 'Play, sans-serif',
                color: 'rgba(225, 225, 225)'
              }}>
              {this.state.modalContent.description}
            </h2>
            <style jsx>{`
              @import url('https://fonts.googleapis.com/css?family=Play');
            `}</style>
          </Grid>
        </Grid>
      </Grid>      
    return (
      <Grid item>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} className="pics" style={{marginTop: '40vh', zIndex: '1'}}>
            <Grid container direction="column" align="center"
              style={{
                minWidth: '100%',
                zIndex: '1'
              }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={() => this.loadFunc(this.state.length, this.updateLength)}
                hasMore={this.state.hasMore}
                initialLoad={false}
                loader={
                <div className="loader" key={0} 
                    style={{
                      marginTop: '30%',
                      fontSize: `${this.state.loaderFontSize}`,
                      fontWeight: '10px',
                      verticalAlign: 'center',
                      textAlign: 'center',
                    }}>Loading Images...
                </div>}
              >
                <Grid container spacing={24} direction="row" style={{maxWidth: '80vw', zIndex: '1'}}>
                  {this.state.selections}
                </Grid>
              </InfiniteScroll>
            <style jsx global>{`
              .wrapper {
                background: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&s=dea3b438cb6e62d3e522e8e4886ec9a5&auto=format&fit=crop&w=1050&q=80");
                min-height: 100vh;
                background-size: 100%;
                background-repeat: no-repeat;
              }
              body {
                background-color: rgb(192,192,192, 0.1);
              }
            `}</style>
            </Grid>
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.updateModalOpen}
          
        >
          <Grid container direction="column" style={getModalStyle(this.state.small)}>
            <Grid item style={{backgroundColor: 'white'}}>
              <Grid container direction="row" style={{position: 'relative'}}>
                <Grid item xs={12} style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alginSelf: 'center',
                  minHeight: '100%'
                }}>
                  <img 
                    src={this.state.modalContent.photo}
                    height="100%"
                    width="100%"
                  />
                </Grid>
                {imageTitle}
              </Grid>
            </Grid>
          </Grid>
        </Modal>

      </Grid>
    );
  }
};

