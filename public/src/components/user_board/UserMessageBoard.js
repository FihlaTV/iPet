/**
 * Created by zhangyiru on 16-8-16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import MsgItem from './MsgItem';

class UserMessageBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    let userId = '47b2c7b9d8e1ecbf54300011';
    let doctorId = '57b2c7b9d8e1ecbf54300000';
    this.props.messageInit(userId, doctorId);
  }

  handleClick() {
    let user_input = this.refs.message.value.trim();
    if (user_input, this.props.messages.id) {
      this.props.addUserMsg(user_input, this.props.messages.id);
    }

    this.refs.message.value = '';
  }

  render() {
    let talk = this.props.messages.talk ? this.props.messages.talk : [];
    return (
        <div>
          <div id="left" className="col-sm-4 text-left">
            <div id="intro">
              <p>医生信息</p>
              <image src=""/>
              <ul>
                <li>姓名</li>
                <li>医龄</li>
                <li>E-mail:1234567892@q.com</li>
                <li>任职医院：三医院</li>
              </ul>
            </div>
            <p className="data"></p>
          </div>
          <div id="right" className="col-sm-8">
            <div className="all_message" ref="history">
              {
                talk.map((v, k)=>(
                    <MsgItem key={k + 1} isQuestion={v.isQuestion} msg={v.msg}></MsgItem>
                ))
              }
            </div>
            <textarea id="sendMessage" ref="message"></textarea><br/>
            <input type="button" onClick={this.handleClick.bind(this)} value="提交"/>
            <input type="button" value="结束对话"/>
          </div>
        </div>
    );
  }
}

export default UserMessageBoard;



