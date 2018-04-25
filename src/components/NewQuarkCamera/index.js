//export {default} from './components/NewQuarkCamera';
import React, { Component } from 'react';
import NewQuarkCamera from './components/NewQuarkCamera'
const videoJsOptions = {
    controls: false,
    width: 320,
    height: 480,
    fluid: false,
    bigPlayButton: false,
    controlBar: {
        volumePanel: false
    },
    plugins: {
        record: {
            audio: false,
            video: true,
            maxLength: 10,
            displayMilliseconds: false,
            debug: true
        }
    }
  };
  var setting = {
        instance:"123",
        title: "Cheese!",
        watermark: "Drinna",
        addWatermarkDate: true,
        backgroundColor: "#000000",
        enableAudio: true,
        enableVideo: true,
        imageOutputFormat: "image/png",
        imageOutputQuality: 0.92,
        maxVideoLength: 10,
        readQrEnabled: false,
        debug: true,
        translations: {
            close_button: "Close",
            take_photo: "Take photo"
        },
      
        on: function(message, callback){
            if( typeof callback == "function"){
                if(message == "beforeClose"){
                    callback.call(this);
                    alert("beforeClose");
                }
                if(message == "afterClose"){
                    callback.call(this);
                }
                if(message == "afterSnap"){
                    callback.call(this);
                }
                if(message == "afterVideoRecord"){
                    callback.call(this);
                }
            }
        }
};
class IndexComponent extends Component{
    state = {
        open: false
       };
   
       handler = () => {
     //      alert(this.state.open);
           this.setState({
               open: !this.state.open
           });

       };
    render(){
        const {open} = this.state;
        return(
            <>
                <button onClick={this.handler}>OpenCamera</button>
                {open && <NewQuarkCamera onClose={this.handler} {...videoJsOptions} componentSetting={setting} />}
            </>
        )
    }
}

export default IndexComponent;