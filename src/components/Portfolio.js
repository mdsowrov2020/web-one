import React,{Component} from 'react';
import {Footer} from '../components/Footer';
import {Portfolio_Banner_Left, Portfolio_Banner_Right, Portfolio_Content} from './Cards';
import {Portfolio_Banner_Left_Data, Portfolio_Banner_Right_Data, Portfolio_Content_Data} from './Data';
import $ from 'jquery';
import mixitup from 'mixitup';





export class Portfolio extends Component {

    componentDidMount(){
        var containerEl = document.querySelector('.project_main');

        var mixer = mixitup(containerEl);
        $('.filtering').on( 'click', '.control', function() {
    
            $(this).addClass('control-active').siblings().removeClass('control-active');
    
        });
    }


    render() {
        return (
            <>
       
       <section className="price_section py-5">
                    <div className="portfolio_banner"> 
                    <div className="container">
                        <div className="row justify-content-center portfolio_content">
                            <div className="col-lg-6">
                            {Portfolio_Banner_Left_Data.map((val)=>{
                                return(
                                    <Portfolio_Banner_Left
                                    
                                    heading = {val.heading}
                                    
                                    />
                                )
                            })}
                            </div>
                            <div className="col-lg-6">
                                {Portfolio_Banner_Right_Data.map((val)=>{
                                    return(
                                        <Portfolio_Banner_Right
                                        
                                        imgsrc = {val.imgsrc}
                                        
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                     </div>
                </section>
           <div className="portfolio_svg">
          
           <section className=" mt-5 portfolio_section">
           <svg className="portfolio_main_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,69.3C672,96,768,160,864,165.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
               <div className="container"> 
                <div className="row filtering text-center justify-content-center pb-3 my-3">
                     <ul className="filter_bg">
                         <li className="control mx-1 control-active" data-filter="all">All</li>
                         <li className="control mx-1" data-filter=".digital_marketing">Digital <span> Marketing</span></li>
                         <li className="control mx-1" data-filter=".data_science">Data<span>Science</span></li>
                         <li className="control mx-1" data-filter=".web">Web<span>Design</span></li>

      
                     </ul>
                 </div>
     
     
                 <div className="row project_main justify-content-center">
     
                    {Portfolio_Content_Data.map((val)=>{
                        return(
                            <Portfolio_Content 
                            
                            img_dm_one = {val.img_dm_one}
                            img_dm_two = {val.img_dm_two}
                            img_dm_three = {val.img_dm_three}
                            img_ds_one = {val.img_ds_one}
                            img_ds_two = {val.img_ds_two}
                            img_ds_three = {val.img_ds_three}
                            img_web_one = {val.img_web_two}
                            img_web_two = {val.img_web_two}
                            
                            />
                        )
                    })}
                     
                 </div>
     
     
               </div>
            </section>
           </div>
            </>
        )
    }
}
