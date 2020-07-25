import React, { Component } from 'react';
import { Footer } from '../components/Footer';
import { Card } from './Cards';
import {
  Card_Two,
  Card_Three,
  Card_Nine_Left,
  Card_Nine_Right,
  Service_Banner_Left,
  Service_Banner_Right,
} from './Cards';
import {
  Sdata,
  Sdata_Two,
  Sdata_Three,
  Sdata_Nine_Left,
  Sdata_Nine_Right,
  Service_Banner_Left_Data,
  Service_Banner_Right_Data,
} from './Data';

export class Service extends Component {
  render() {
    return (
      <>
        <section className='mobile_height  d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 order-2 order-lg-1 d-flex align-items-center'>
                {Service_Banner_Left_Data.map((val, index) => {
                  return (
                    <Service_Banner_Left key={index} heading={val.heading} />
                  );
                })}
              </div>
              <div className='col-lg-6 order-1 order-lg-2'>
                {Service_Banner_Right_Data.map((val, index) => {
                  return (
                    <Service_Banner_Right key={index} imgsrc={val.imgsrc} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className='d-flex align-items-center py-5'>
          <div className='container'>
            <div className='row justify-content-center mt-4'>
              {Sdata.map((val, index) => {
                return (
                  <Card
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

        <div className='service_role_svg py-5'>
          <svg
            className='role_svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#012534'
              fillOpacity='1'
              d='M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,
               576,101.3C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,
               128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,
               672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>

          <section className='py-5 service_role_section'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-6 text-center'>
                  <div className='service_role_header'>
                    <h2>Digital Marketing</h2>
                    <p>
                      <sup>"</sup>The best marketing doesn't feel like
                      marketing.<sup>"</sup>
                    </p>
                    <p>-Tom Fishburne</p>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-lg-4 text-left'>
                  <div className='service_role'>
                    <div className='service_role_content'>
                      <h2>The Role of Digital Marketing</h2>
                      <p>
                        We are utilizing all of the digial marketing channels to
                        get the best outcome
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='row justify-content-center'>
                    {Sdata_Two.map((val, index) => {
                      return (
                        <Card_Two
                          key={index}
                          imgsrc={val.imgsrc}
                          title={val.title}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#012534'
              fillOpacity='1'
              d='M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,101.3C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,
               0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ></path>
          </svg>
        </div>
        <section className='py-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <div className='data_header'>
                  <h2>Data Science & Analytics</h2>
                  <p>
                    <sup>"</sup>Without big data analytics, companies are blind
                    and deaf, wandering out onto the web like deer on a freeway.
                    <sup>"</sup>
                  </p>
                  <p>-Geoffrey Moore</p>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              {Sdata_Three.map((val, index) => {
                return (
                  <Card_Three
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div className='what_data_svg'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#f4f4f4f4'
              fillOpacity='1'
              d='M0,192L120,165.3C240,139,480,85,720,101.3C960,117,1200,203,
                1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>

          <section className='py-5 what_data_section'>
            <div className='container'>
              <div className='row justify-content-center'>
                {Sdata_Nine_Left.map((val, index) => {
                  return (
                    <Card_Nine_Left
                      key={index}
                      l_title={val.l_title}
                      l_pera={val.l_pera}
                      l_content_one={val.l_content_one}
                      l_content_two={val.l_content_two}
                      l_content_three={val.l_content_three}
                      r_title={val.r_title}
                      r_pera={val.r_pera}
                      r_content_one={val.r_content_one}
                      r_content_two={val.r_content_two}
                      r_content_three={val.r_content_three}
                    />
                  );
                })}

                {Sdata_Nine_Right.map((val, index) => {
                  return (
                    <Card_Nine_Right
                      key={index}
                      r_title={val.r_title}
                      r_pera={val.r_pera}
                      r_content_one={val.r_content_one}
                      r_content_two={val.r_content_two}
                      r_content_three={val.r_content_three}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#f4f4f4f4'
              fillOpacity='1'
              d='M0,64L120,74.7C240,85,480,107,720,106.7C960,
               107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
            ></path>
          </svg>
        </div>
      </>
    );
  }
}
