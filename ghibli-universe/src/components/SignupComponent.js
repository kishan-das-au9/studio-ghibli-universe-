import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';

const burl="http://localhost:5000/api/auth/register";

class SignupComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }
    handleChangeRole = (event) => {
        // console.log(event.target.value);
        this.setState({role:event.target.value})
    }
    handleSubmit =() => {
        console.log(this.state)
        fetch(burl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(
            
            this.props.history.push('/LoginComponent'))
    }
    topFunction=() =>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  render() {
    return (
    //   <div className="float" style={{float:'right', display:'flex', flexWrap:'wrap'}}>
    //   <div style={{margin: "80px 0px 0px 1110px" }}>
    //   {/* <div className="container" style={{ width: "250px", height: "75px", margin: "80px 0px 0px 930px", padding: '20px 0px 30px 40px ', backgroundColor: '#666633', borderRadius: '10px', display: 'flex'}} > */}
    //       <NavLink to= './LoginComponent'><button className="btn btn-success" style={{ marginRight: '10px', backgroundColor: '#2b250f', color: '#cccdb4' }}>LOGIN </button></NavLink>
    //       <NavLink to= './'><button className="btn btn-success" style={{backgroundColor: '#2b250f', color: '#cccdb4' }} > SIGNUP</button></NavLink>
          
    //     </div>
    //   <div className="container" style={{ width: "400px", margin: "3px 0px 100px 900px" }}>
    //     <div className="panel panel-danger" style={{
    //       backgroundColor: '#3d361c', borderRadius: '10px', padding: '15px', color:'#cccdb4'
    //     }} >

    //       <h3 > Signup </h3>
    //       <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>


    //       <div className="panel-body">
    //         <div className="form-group">
    //           <label className="control-label">Name</label>
    //           <input type="text" name="name" value={this.state.name} className="form-control"
    //             required onChange={this.handleChangeName}  />
    //         </div>
    //         <div className="form-group">
    //           <label className="control-label">Email</label>
    //           <input type="text" name="email" value={this.state.email} className="form-control"
    //             required onChange={this.handleChangeEmail}  />
    //         </div>
    //         <div className="form-group">
    //           <label className="control-label">Password</label>
    //           <input type="password" name="password" value={this.state.password} className="form-control"
    //              onChange={this.handleChangePassword} required />
    //         </div>
    //         <button className="btn btn-success" onClick={this.handleSubmit}>Signup</button>
    //       </div>
    //     </div>

    //   </div>
    // </div>
<div style={{ background:'linear-gradient(90deg, #3c3b3f 0%,#605c3c 100% )', fontFamily: 'Lora'}}>

<div class="container"><br></br>
  <div class="row">

    <div class="col"><h2>Welcome to Studio Ghibli Universe</h2></div>

    <div class="col">

       <div style={{textAlign:'right'}}>
      
           <NavLink to= './LoginComponent'><button className="btn"  style={{ margin:'10px',backgroundColor: '#2b250f', color: '#cccdb4',display:'inline-block'}}>LOGIN </button></NavLink>
          <NavLink to= './'><button className="btn " style={{backgroundColor: '#2b250f', color: '#cccdb4', display:'inline-block'}} > SIGNUP</button></NavLink>
          
         </div>
         </div>



    </div>

    <div className="row">
    <div className="col-xs-7 col-sm-6 col-lg-8">
    <img src={'https://wallpaperaccess.com/full/244846.jpg'} alt="Logo" width='100%' style={{borderRadius:'10px'}}/>
    <br></br><br></br><h3>Make your Studio Ghibli Account and watch the latest anime movies from our collection.</h3><br></br></div>

    <div class="col-xs-5 col-sm-6 col-lg-4" style={{  textAlign:'right'}}>

    <div className="sub-col" >
    <div className="panel panel-danger" style={{
            backgroundColor: '#3d361c', borderRadius: '10px', padding: '15px', color: '#cccdb4', display:'inline-block'
          }}>

          <h3 > Signup </h3>
          <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>


          <div className="panel-body">
            <div className="form-group">
              <label className="control-label">Name</label>
              <input type="text" name="name" value={this.state.name} className="form-control"
                required onChange={this.handleChangeName}  />
            </div>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input type="text" name="email" value={this.state.email} className="form-control"
                required onChange={this.handleChangeEmail}  />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input type="password" name="password" value={this.state.password} className="form-control"
                 onChange={this.handleChangePassword} required />
            </div>
            <button className="btn btn-info" onClick={this.handleSubmit}>Signup</button>
           </div>
         </div>

      </div>
     </div>






    </div>
    <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>

    <div class="row">
    <div className="col-xs-5 col-sm-6 col-lg-4">
    
      <img src={'https://images.saymedia-content.com/.image/t_share/MTc2MjQ0MzQ1NjQ3OTMyODQx/studio-ghibli-movies-and-films-on-netflix.jpg'} alt="Logo" width='300px' style={{borderRadius:'5px', border:'3px solid #2b250f'}}/>
    </div>
    <div className="col-xs-7 col-sm-6 col-lg-8 "  >
    <br></br><br></br><br></br><br></br>
      <h3>Lookout for the highest rated movies, learn in detail about your favorite movies, characters, locations and vehicles</h3>
      <button className="btn btn-info" onClick={this.topFunction}>Get Started</button>
    </div>
  </div>
  <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>


  <div class="row">
    <div className="col-xs-7 col-sm-6 col-lg-8">
    <br></br><br></br><br></br><br></br>
      
      <h3>Buy the wearables of your favorite choice and feel yourself elevated!</h3>
      <button className="btn btn-info" onClick={this.topFunction} >Get Started</button>
    </div>
    <div className="col-xs-5 col-sm-6 col-lg-4 " style={{textAlign:'right'}} >
    <img src={'https://vip.socio-corp.jp/wp-content/uploads/sites/3/2020/06/gt-100.png?w=640'} alt="Logo" width='320px' style={{borderRadius:'5px', border:'3px solid #2b250f'}}/>
    
    
    </div>
    
    
  </div>
  <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>


  <div class="row">
    <div className="col-xs-5 col-sm-6 col-lg-4 ">
    
    <img src={'https://i.pinimg.com/originals/bf/10/7e/bf107eb77bd29b93111a86306a2dac7e.png'} alt="Logo" width='300px' style={{borderRadius:'5px', border:'3px solid #2b250f'}}/><br></br><br></br>
      
    </div>
    <div className="col-xs-7 col-sm-6 col-lg-8"  >
    <br></br><br></br>
    
    <h3>Collect Exclusive Action figures of your favorite character and brighten up your place and ofcourse your mood!</h3>
    <button className="btn btn-info" onClick={this.topFunction} >Get Started</button><br></br>
    </div>
    
    
  </div>
  <br></br>
  </div>
  </div>
 



    )
  }
}



export default SignupComponent;