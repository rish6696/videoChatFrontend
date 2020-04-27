import React from 'react';
import NavBar from './NavBar'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div class="card bg-dark text-white rounded-0">
                    <img style={{height:'100%'}} src={require('./images/hero.jpg')} alt="Card image" />
                    <div class="card-img-overlay container" style={{textAlign:'center'}}>
                        <div className='row' >
                            <div style={{fontSize:'50px',fontWeight:'bold'}} className='col' >
                                Your Class is Just a Click Away....
                            </div>
                        </div>  

                        <div className='row' >
                            <div style={{fontSize:'30px',fontWeight:'bold'}} className='col' >
                                Learn About Easy Class in two minutes!
                            </div>
                        </div>   

                        <div className='row justify-content-center' >
                           <button  style={{color:'white'}} type="button" class="text-center btn btn-outline-light">Watch Video</button>
                        </div>                   
                    </div>
                </div>
              
            </div>
        )
    }
}


export default App;


