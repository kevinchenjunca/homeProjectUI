import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      return;
    }
  }

  render() {
    return (
    <section className="home">
      <div className="container container-main">
        <header>
          <h1>Kevin Chen Profile</h1>
        </header>

        <div className="line"/>

        <div className="row">
          <div className="col-md-7">
            <h2># Summary</h2>
            <p>8 years Front-End UI development with 17 years Java backend experience and 15 years J2EE experience.  Expert in ExtJs, JQuery, Backbone, Marionette, NodeJS,  requiresJs,  Familiar with CSS3, HTML5, Sass/Compass/Less/Bootstrap/stylus, hands on experience with Servlet, spring, Hibernate, Web Service, XML. Sun Certified Java Programmer since 1998, Sun Certified Java Developer since 2000. </p>           
          </div>
          <div className="col-md-5">
            <h2># Contact Info</h2>
            <ul className="contact-list">
              <li>(778) 829-3035</li>
              <li>kevinchen2017@outlook.com</li>
            </ul>
          </div>
        </div>

        <div className="row">

          <div className="col-md-12">
            <h2># Professional Experience</h2>
          </div>

          <div className="col-md-6">
            <div className="media">
              <div className="media-left">
                5/2016 - 7/2017                                 
              </div>
              <div className="media-body">
                <h4 className="media-heading">Freelancer</h4>
                <h5 className="media-heading">Greater Vancouver, BC, CANADA</h5>                
                <p>Personal Projects</p>
              </div>
            </div>        

            <div className="media">
              <div className="media-left">
                1/2016 – 4/2016
              </div>
              <div className="media-body">
                <h4 className="media-heading">UI Consultant (Cisco)</h4>
                <h5 className="media-heading">San Jose, CA, USA</h5>                
                <p>Cisco Intercloud Fabric</p>
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                9/2015 – 12/2015                                 
              </div>
              <div className="media-body">
                <h4 className="media-heading">UI Consultant(Novartis)</h4>
                <h5 className="media-heading">Emeryville,CA,USA</h5>                
                <p>MWP</p>
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                2/2013 – 7/2015
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Software Engineer(CA Technologies)</h4>
                <h5 className="media-heading">Santa Clara, CA, USA</h5>                
                <p>SaaS/CA platform</p>
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                9/2012 – 2/2013             
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Support Engineer (Sencha)</h4>
                <h5 className="media-heading">RedWood City, CA, USA</h5>                
                <p>ExtJs framework Support</p>
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                5/2011 – 9/2012           
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Software Engineer, UI Lead(Nexant)</h4>
                <h5 className="media-heading">Foster City, CA, USA, 94404</h5>                
                <p>Traksmart</p>
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                11/2010 – 4/2011           
              </div>
              <div className="media-body">
                <h4 className="media-heading">Sr Application developer(Standard&Poor's)</h4>
                <h5 className="media-heading">Manhattan, New York, NY, USA</h5>                
                <p>SPICE<br/>
                   Market Scope Advisor
                </p>                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                05/2010 – 10/2010           
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Front end Developer(SAIC)</h4>
                <h5 className="media-heading">Manhattan, New York, NY, USA</h5>                
                <p>CityTime</p>                
              </div>
            </div>            

          </div> 
          <div className="col-md-6">

            <div className="media">
              <div className="media-left">
                03/2008 – 05/2010         
              </div>
              <div className="media-body">
                <h4 className="media-heading">Software Engineer(Info)</h4>
                <h5 className="media-heading">Alpharetta, GA, USA</h5>                
                <p>ClearUX (Infor User Experience)<br/>
                   Infor CRM C3</p>                                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                12/2006 – 11/2007         
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Java Developer(Alpha Global IT)</h4>
                <h5 className="media-heading">Toronto, ON, Canada </h5>                
                <p>Euhm (Universal Health management)</p>                                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                11/2004 – 12/2006         
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Java Developer(CGI)</h4>
                <h5 className="media-heading">Toronto, ON, Canada</h5>                
                <p>
                    Smart Link BOS project<br/>
                    Trouble Shooting<br/>
                    Promotion Inquiry project<br/>
                    National Install simplification project<br/>
                    Back Office  project<br/>
                </p>                                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                11/2003 – 5/2004        
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Java Developer(BCE Emergis)</h4>
                <h5 className="media-heading">Mississauga, ON, Canada</h5>                
                <p>PCAP project</p>                                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                07/2003 – 11/2003       
              </div>
              <div className="media-body">
                <h4 className="media-heading">Senior Java Developer(Bell Canada)</h4>
                <h5 className="media-heading">Toronto, ON, Canada</h5>                
                <p>ebill ambassador<br/>
                   Request tracking tool
                 </p>                                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                10/2000 – 06/2002      
              </div>
              <div className="media-body">
                <h4 className="media-heading">Web Application Developer(PrinterOn)</h4>
                <h5 className="media-heading">Kitchener, ON, Canada</h5>                
                <p>Developed  B to C  e-business web site </p>                                
              </div>
            </div>

            <div className="media">
              <div className="media-left">
                04/96 – 03/2000     
              </div>
              <div className="media-body">
                <h4 className="media-heading">Java Developer(Modern Devices)</h4>
                <h5 className="media-heading">Beijing, China</h5>                
                <p>Java Development</p>                                
              </div>
            </div>

          </div> 


        </div>   
       </div>  
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Home);
