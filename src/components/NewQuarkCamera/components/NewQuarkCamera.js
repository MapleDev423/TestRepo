/* eslint-disable */
import React, { Component } from 'react';
import Draggable from 'react-draggable';

//VIDEO STUFF
import 'video.js/dist/video-js.min.css';
import 'videojs-record/dist/css/videojs.record.css';


import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import Record from 'videojs-record/dist/videojs.record.js';
import VideoContent from './content';
//END VIDEO STUFF
import "./style.scss";

class NewQuarkCamera extends Component {
       
    
        componentDidMount() {

        }
        
        // destroy player on unmount
        componentWillUnmount() {
            if (this.player) {
                this.player.dispose();       
            }

            this.props.componentSetting.on("beforeClose",()=>{
                console.log('beforeClose');
            })
        }
        
        render(){
            let isPhone = false;
            console.log(screen.width)
            if(screen.width < 700) //? is this phone
                isPhone = true;
            return(
                <>
                {!isPhone &&<Draggable>
                    <div className="Camera" style={{backgroundColor:`${this.props.componentSetting.backgroundColor}`}}> 
                        <div className="CameraTitle" style={{cursor:'move'}}>
                            <span style={{color:'white',padding:'15px',display:'flex',justifyContent:'center'}}>{this.props.componentSetting.title}</span>
                            <span style={{color:'white',right:'10px',top:'10px',position:'absolute'}} onClick={this.props.onClose}>X</span>
                        </div>
                        <div className="CameraContent">
                            <VideoContent {...this.props} />
                        </div>
                        <div className="CameraTool">
                        </div>
                    </div>
                </Draggable>
                }
                {
                    isPhone && <div className="Camera" style={{backgroundColor:`${this.props.componentSetting.backgroundColor}`}}> 
                    <div className="CameraTitle" style={{cursor:'move'}}>
                        <span style={{color:'white',padding:'15px',display:'flex',justifyContent:'center'}}>{this.props.componentSetting.title}</span>
                        <span style={{color:'white',right:'10px',top:'10px',position:'absolute'}} onClick={this.props.onClose}>X</span>
                    </div>
                    <div className="CameraContent">
                        <VideoContent {...this.props} />
                    </div>
                   
                </div>

                }
                </>
            )
        }

}
export default NewQuarkCamera;