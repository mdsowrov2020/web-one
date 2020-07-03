import React, { Component } from 'react';
import {Card_Five, Card_Six, Card_Seven, Home_Banner_Left, Home_Banner_Right} from './Cards';
import {Sdata_Five, Sdata_Seven, Sdata_Six, Home_Banner_Left_Data, Home_Banner_Right_Data} from './Data';
import {Link} from 'react-router-dom';
import {Footer} from '../components/Footer';


export const Home = () => {
    

    return(
    
        <div>
            <section className="banner_svg">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                    {Home_Banner_Left_Data.map((val ,index)=>{
                          return(

                              <Home_Banner_Left
                              key ={index}
                              heading = {val.heading}
                              title = {val.title}
                              pera = {val.pera}

                              
                              />
                          )
                      })};
                    </div>

                    
                        <div className="col-lg-6">
                        {Home_Banner_Right_Data.map((val, index)=>{
                          return(
                              <Home_Banner_Right
                              key = {index}
                              imgsrc = {val.imgsrc}
                              
                              />
                          )
                      })}
                        </div>
                     
                     
                    </div>
                </div>
               
                
            </section>

            {/* Second content start */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                            <div className="header_text">
                            <h2>What are you looking for?</h2>
                            <p>With powerful video, digital strategy with customize analytics reach bigger and newer audience and get more business!</p>
                        </div>
                            </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        {Sdata_Five.map((val, index) =>{
                            return(
                                <Card_Five
                                key = {index}
                                imgsrc = {val.imgsrc}
                                title ={val.title}
                                pera = {val.pera}
                                />
                            )
                        })}
                    </div>

                </div>
            </section>

            <section className="py-5 choose_main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #ee0c81 " fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>           
                 <div className="choose_inner_main">
                    
                    <div className="container">
                        <div className="row justify-content-center text-center ">
                            <div className="col-lg-6">
                                <div className="header_text custom_choose_header">
                                    <h2>Why choose us?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center pt-5">
                            {Sdata_Six.map((val, index)=>{
                                return(
                                    <Card_Six
                                    key = {index}
                                    imgsrc = {val.imgsrc}
                                    title ={val.title}
                                    pera = {val.pera}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="  #ee0c81  " 
                fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,
                138.7C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,
                960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </section>

            {/* =========================team part start===================== */}
            <section className="py-5 team_bg">
                <div className="container">
                <div className="row justify-content-center text-center pb-5">
                            <div className="col-lg-6">
                            <div className="header_text">
                            <h2>Our team</h2>
                        </div>
                            </div>
                    </div>
                    <div className="row justify-content-center">
                        {Sdata_Seven.map((val,index) =>{
                            return(
                                <Card_Seven
                                key = {index}
                                imgsrc = {val.imgsrc}
                                title ={val.title}
                                links_tw = {val.links_tw}
                                links_fb = {val.links_fb}
                                links_in = {val.links_in}
                                links_ln = {val.links_ln}
                                />
                            )
                        })}
                    </div>
                </div>
               
                <Footer/>
            </section>
           
        </div>
    
)
}


