import React, { Component } from 'react';
import {
  Card_Five,
  Card_Six,
  Card_Seven,
  Home_Banner_Left,
  Home_Banner_Right,
} from './Cards';
import {
  Sdata_Five,
  Sdata_Seven,
  Sdata_Six,
  Home_Banner_Left_Data,
  Home_Banner_Right_Data,
} from './Data';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <section className='mobile_height d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 order-1 order-lg-1 d-flex align-items-center '>
              {Home_Banner_Left_Data.map((val, index) => {
                return (
                  <Home_Banner_Left
                    key={index}
                    heading={val.heading}
                    title={val.title}
                    pera={val.pera}
                  />
                );
              })}
            </div>

            <div className='col-lg-6 order-2 order-lg-2'>
              {Home_Banner_Right_Data.map((val, index) => {
                return <Home_Banner_Right key={index} imgsrc={val.imgsrc} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Second content start */}
      <section className='py-5 home_second_section'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-6'>
              <div className='header_text'>
                <h2>What are you looking for?</h2>
                <p>
                  With powerful video, digital strategy with customize analytics
                  reach bigger and newer audience and get more business!
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-5'>
            {Sdata_Five.map((val, index) => {
              return (
                <Card_Five
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  pera={val.pera}
                />
              );
            })}
          </div>
        </div>
      </section>

      <div>
        <section className='choose_main'>
          <div className='choose_inner_main'>
            <div className='container'>
              <div className='row justify-content-center text-center '>
                <div className='col-lg-6'>
                  <div className='header_text custom_choose_header'>
                    <h2>Why choose us?</h2>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center pt-5'>
                {Sdata_Six.map((val, index) => {
                  return (
                    <Card_Six
                      key={index}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      pera={val.pera}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center text-center pb-5'>
            <div className='col-lg-6'>
              <div className='header_text'>
                <h2>Our team</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {Sdata_Seven.map((val, index) => {
              return (
                <Card_Seven
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  links_tw={val.links_tw}
                  links_fb={val.links_fb}
                  links_in={val.links_in}
                  links_ln={val.links_ln}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
