/**
 * Created by ritter on 16-8-23.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars
class WorkItem extends Component {
  render() {
    let {talk} = this.props;
    return (
        <div>
          <div>{talk}</div>
        </div>
    );
  }
}
export default WorkItem;
