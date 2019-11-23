import React from 'react';
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { authorizeUser } from '../../actions/auth';

const Login = (props) => {
    const {authorizeUser, loginUrl} = props;
    return (
        <LoginForm onSubmit={value => submitLogin(value, authorizeUser, loginUrl)}/>
    );
}

const submitLogin = ( loginData, authorizeUser, loginUrl ) => {
    const login = loginData.email;
    const password = loginData.password;
    const redirectAfterLogin = '/';
    authorizeUser( loginUrl, login, password, redirectAfterLogin )
};

const mapStateToProps = state => ({
    loginUrl: state.routes.login,
    token: state.auth.access_token,
});

const mapActionsToProps = dispatch => ({
    authorizeUser: (loginUrl, login, password, redirectAfterLogin) => dispatch(authorizeUser(loginUrl, login, password, redirectAfterLogin))
});

export default connect(mapStateToProps,mapActionsToProps)(Login);

// class Login extends Component {
//
//     state = {
//         email: '',
//         password: ''
//     };
//
//     submitLoginForm = e => {
//         e.preventDefault();
//         const { location, loginUrl, authorizeUser } = this.props;
//         const {email,password} = this.state;
//         // const redirectAfterLogin = location.state.back || '/';
//         const redirectAfterLogin = '/';
//
//         authorizeUser(loginUrl, email, password, redirectAfterLogin)
//
//         //DUCKS
//     };
//
//     handleInputChange = e => {
//         const name = e.target.name;
//         const value = e.target.value;
//
//         this.setState({
//             [name]: value
//         })
//     };
//
//     render(){
//         const {email,password} = this.state;
//         return (
//             <Form className="my-2" onSubmit={this.submitLoginForm}>
//                 <FormGroup row>
//                     <Label for="exampleEmail" sm={3}>Email</Label>
//                     <Col sm={9}>
//                         <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
//                                value={email} onChange={this.handleInputChange}/>
//                     </Col>
//                 </FormGroup>
//                 <FormGroup row>
//                     <Label for="examplePassword" sm={3}>Password</Label>
//                     <Col sm={9}>
//                         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"
//                                value={password} onChange={this.handleInputChange}/>
//                     </Col>
//                 </FormGroup>
//                 <FormGroup check row>
//                     <Col sm={{ size: 10, offset: 2 }}>
//                         <Button>Submit</Button>
//                     </Col>
//                 </FormGroup>
//             </Form>
//         );
//     }
// }
//
//
// const mapStateToProps = state => ({
//     loginUrl: state.routes.login
// });
//
// const mapActionsToProps = dispatch => ({
//     authorizeUser: (loginUrl,email,password,redirectAfterLogin) => dispatch(authorizeUser(loginUrl,email,password,redirectAfterLogin))
// });
//
// export default connect(mapStateToProps,mapActionsToProps)(Login);



