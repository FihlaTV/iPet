/**
 * Created by ritter on 16-8-23.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class WorkItem extends Component {
  render() {
    let {talk} = this.props;
    return (
        <div className="work_talk">
          {talk[talk.length - 1].isQuestion ?
              <div className="work_item">{talk[talk.length - 1].msg}
              </div> : null}
              <div className="reply_board">
                <input className="input_reply"/>
                <button className="reply">回复</button>
              </div>

        </div>
    );
  }
}
export default WorkItem;
