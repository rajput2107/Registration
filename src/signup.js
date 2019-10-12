import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './signup.css';

export default class Signup extends React.Component{
  
    constructor(props){
        super(props);

        this.state={
            RegNo:'',
            ChasisNo:'',
            Username:'',
            Email:'',
            Password:'',
            ConfirmPassword:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  
    
    
 validateForm() {
        return (
          this.state.Email.length > 0 &&
          this.state.Password.length > 0 &&
          this.state.Password === this.state.ConfirmPassword
        );
      }  

    
    
    
    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

  
  
  
  
  
  
  
  
    render(){  
    return(
    <div className="App">
        <div className="App__Aside"></div>

        <div className="App__Form">

            <form className="FormTitle" onSubmit={this.handleSubmit}>
                <Router>
                
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign Up</NavLink>
                    </div> 
                    
                </Router>

                <div className="form-content">
                <h2 >Create Your Account</h2>

                <p><input required placeholder="Registration Number" type="text" className="form-control" name="RegNo" value={this.state.RegNo} onChange={this.handleChange}></input></p>


                <p><input required placeholder="Chasis Number" type="text" className="form-control" name="ChasisNo" value={this.state.ChasisNo} onChange={this.handleChange}></input></p>


                <p><input required placeholder="Username" tyep="text" className="form-control" name="Username" value={this.state.Username} onChange={this.handleChange}></input></p>


                <p><input  required placeholder="Email" type="Email" className="form-control" name="Email" value={this.state.Email} onChange={this.handleChange}></input></p>
                
                
                <p><input required placeholder="Password" type="Password" className="form-control" name="Password" value={this.state.Password} onChange={this.handleChange}></input></p>


                <p><input required placeholder="Confirm Password" type="Password" className="form-control" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange}></input></p>

                <input type="Submit" disabled={!this.validateForm()} value="Create Account" class="btn btn-primary btn-lg btn-block"></input>
                </div>

            
            </form> 
        
        
        </div>
    </div>
    );
  }
}
