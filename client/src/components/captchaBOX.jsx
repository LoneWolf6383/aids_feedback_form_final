import { loadCaptchaEnginge,LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React, { Component } from 'react'
export default class CaptchaBOX extends Component {
    constructor() {
        super();
        this.state = {
            verified: false,
        };
      }
    componentDidMount () {
        loadCaptchaEnginge(4,'rgba(185,190,202,1)'); 
    };
    doSubmit = () => {
        let user_captcha_value = document.getElementById('user_captcha_input').value;
        if (validateCaptcha(user_captcha_value, false) === true) {
            this.props.onChange(true)
            this.setState({verified:true})
        }
        else {
            this.setState({verified:false})
            this.props.onChange(false)
        }
    };
    render() {
    return (
        <div>
           <div className="container">
                <div className="form-group" style={{display:'flex'}}>
                    <div className="col mt-3">
                        <LoadCanvasTemplateNoReload />
                    </div>
                    <div className="col mt-3">
                        <div className='field' style={{marginLeft:'10px',height:'35px'}}>
                            <input
                                placeholder="Captcha" 
                                id="user_captcha_input"
                                name="user_captcha_input"
                                type="text" 
                                style={{width:'100%',marginLeft:'10px'}}
                                />
                        </div>
                    </div>
                    <div className="col mt-3" style={{padding:'0px 10px'}}>
                        <div>
                            <button
                                style={{zoom:'90%'}}
                                class="btn btn-primary"
                                onClick={() => this.doSubmit()}
                            >Verify
                            </button>
                        </div>
                    </div>                  
                </div>
           </div>
       </div>);
  }
}
