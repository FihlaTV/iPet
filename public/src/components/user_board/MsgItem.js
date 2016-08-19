/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
class MsgItem extends Component {
    render() {
        let {isQuestion, msg} = this.props;

        if (isQuestion === undefined) {
            return (<span></span>);
        }

        return (
            <div>
                <pre >{isQuestion ? '问' : '答'}:{msg}</pre>
            </div>
        );
    }
}
export default MsgItem;
