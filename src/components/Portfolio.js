import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  
                  <h5><a href={`${item.link}`}>{item.name}</a></h5><br></br>
                    
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          
                          <h7>{item.description}</h7>
                        </div>
                      </div>
                    
                  
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}