/* eslint-disable */
import React, { Component } from 'react';
import Draggable from 'react-draggable';



//VIDEO STUFF
import 'video.js/dist/video-js.min.css';
import 'videojs-record/dist/css/videojs.record.css';
import "./QuarkCamera.scss";

import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import Record from 'videojs-record/dist/videojs.record.js';
import VideoContent from './content';
//END VIDEO STUFF

import { Dialog, Paper, Button, DialogTitle, DialogContent,DialogContentText, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function PaperComponent(props) {
    return (
      <Draggable handle=".draggable-camera" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }


const theme = createMuiTheme({
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'transparent'
            },
        }
    }
});
  

class QuarkCamera extends Component {


    state = {
     open: false
    };

    handler = () => {
        this.setState({
            open: !this.state.open
        });
    };

    componentDidMount() {
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
            
        }
    }
    //className="qcam_container"
    render() {
        const { open } = this.state;
        const { show, showModal, handleClose, noOuterClose, fluid } = this.props
        return (
        <>
           <Button variant="outlined" color="primary" onClick={this.handler}> Open form dialog</Button>
           
           <ThemeProvider theme={theme}>
                <Dialog
                    open={open}
                    onClose={this.handler}
                    aria-labelledby="draggable-dialog-title"
                    PaperComponent={PaperComponent}
                    PaperProps={{
                        style: {
                          backgroundColor: 'black',
                          boxShadow: 'none',
                        },
                      }}
                    
                >
                    <DialogTitle style={{ cursor: 'move' }} className="draggable-camera" style={{"padding":"0"}} >
                        <IconButton aria-label="close" style={{"float":"left","color":"white"}}>
                            <h2>Take Photo</h2>
                        </IconButton>
                        <IconButton aria-label="close"  onClick={this.handler} style={{"float":"right","color":"white"}}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className="draggable-camera">
                        <VideoContent {...this.props} />
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.handler} color="primary"> Close</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </>
        );
    }
}

export default QuarkCamera;