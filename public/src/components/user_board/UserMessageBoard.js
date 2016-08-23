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
    this.props.getUserId(this.props.doctor_id);
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

    );
  }
}

export default UserMessageBoard;



