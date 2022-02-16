import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Tabweb=()=>{
    return(
        <>
        <div className="container main_wrapper">
            <div className="row">
                <div className="my-3 text-center justify-content-around col-md-12 d-flex">
                    <div className="my-4 col-md-3 ">
                    <div className="col-md-12 card_wrapper">
                            <div className="col-md-12 card_image">
                            
                                <img src="./BSN.png" alt="card-1" className='img-fluid rounded-3' />
                                <div className="col-md-12 overlay">
                                    <div className="col-md-12 eyeicon">
                                        <VisibilityIcon fontSize='large' onClick={()=> window.open('https://www.breathingsciencenetwork.com/bsn/','_blank')}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-3 pb-1 text-justify col-md-12 card_title">
                                <h2>Breathing Science Network</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="my-4 col-md-3 card_wrapper">
                    <div className="col-md-12">
                            <div className="col-md-12 card_image">
                            
                                <img src="./fogsiyuva.png" alt="card-1" className='img-fluid rounded-3' />
                                <div className="col-md-12 overlay">
                                    <div className="col-md-12 eyeicon">
                                        <VisibilityIcon fontSize='large' onClick={()=> window.open('https://fogsiwestzonal2022.com/','_blank')}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-3 pb-1 text-justify col-md-12 card_title">
                                <h2>FOGSI West Zonal</h2>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 col-md-3 card_wrapper">
                        <div className="col-md-12">
                            <div className="col-md-12 card_image">
                            
                                <img src="./mobile.jpg" alt="card-1" className='img-fluid rounded-3' />
                                <div className="col-md-12 overlay">
                                    <div className="col-md-12 eyeicon">
                                        <VisibilityIcon fontSize='large' onClick={()=> window.open('https://www.Linkedin.com','_blank')}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-3 pb-1 text-justify col-md-12 fs-6">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}
export default Tabweb