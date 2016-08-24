/**
 * Created by qiyanzi on 16-8-22.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars
// import WorkItem from './WorkItem';
import WorkItem from '../../container/DoctorWorkItem';
class WorkList extends Component {

  componentWillMount() {
    this.props.workInit();
  }

  render() {
    let workspaceItems =  this.props.data ? this.props.data:[] ;

    return (
        <div className="work_list">
          {
            workspaceItems.map((v, k)=> (
              <WorkItem key={k}  msg_id={v._id} />
            ))
          }
        </div>
    );
  }
}
export default WorkList;
