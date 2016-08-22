/**
 * Created by weihang on 16-8-18.
 */
import { connect } from 'react-redux';
import Content from '../components/index_components/index_content';
import  {loginTodo}  from '../actions';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=>({
  loginTodo:(data)=>{
    dispatch(loginTodo(data));
  }
});
const LoginView = connect(mapStateToProps,mapDispatchToProps)(Content);
export default LoginView;