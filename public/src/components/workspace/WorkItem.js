/**
 * Created by ritter on 16-8-23.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class WorkItem extends Component {
  render() {
    let {talk} = this.props;
    return (
        <div>
          {talk[talk.length-1].isQuestion ? <pre>{talk[talk.length-1].msg}</pre> : ''}
        </div>
    );
  }
}
export default WorkItem;
