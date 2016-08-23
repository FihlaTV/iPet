/**
 * Created by qiyanzi on 16-8-22.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import WorkItem from './WorkItem';

class WorkList extends Component {

  componentWillMount() {
    this.props.workInit();
  }

  render() {
    let workspaceItems =  this.props.data ? this.props.data:[] ;
    return (
        <div>
          {
            workspaceItems.map((v, k)=> (
              <WorkItem key={k} talk={v.talk} />
            ))
          }
        </div>
    );
  }
}
export default WorkList;
