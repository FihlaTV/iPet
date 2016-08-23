/**
 * Created by ritter on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class Head extends Component {
  render() {
    return (
      <div className="head">
          <img className='login-logo' src='images/login_images/ipetlogo.png'/>
          <span className='wareName'> </span>
        <div className="headLeft">
          <img className="logo" src="/images/login_images/ipetlogo.png" alt="iPet logo" />
          <span className="logoName">宠物之家</span>
        </div>
        <div className="headRight">
          {/*<img src="images/cat.png" className="head_pet" alt=""/>*/}
          <span className="userImage">
            <img src="/images/dog.jpg" alt="用户头像"/>
          </span>
          <span className="logIn">注销</span>
        </div>
      </div>
    );
  }
}
export default Head;