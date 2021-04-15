import React from "react";

const Quest = ({ account }) => {
  return (
      <div>
          <div class="jumbotron">
            
            <div className="row" style={{ paddingTop: "30px" }}>
              {" "}
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3>Will Donald Trump be inaugurated for his second term as President of the USA on Inauguration Day, January 20th, 2021?</h3>
              </div>
            </div>
         </div>
         <div className = "container">
         <input type="number" placeholder="0.0" style={{ height: "35px", marginLeft: "350px", marginRight: "40px",marginTop:"-80px"}}></input>
         <button className="btn btn-outline-primary" style={{ marginLeftt: "30px",marginBottom:"30px",marginTop:"10px" }}>Add Liquidity</button>
         <div className="row" style={{ paddingLeft: "40px" }}>
               <p><input type="number" placeholder="0.0" style={{ height: "35px", marginLeft: "350px", marginRight: "40px"}}></input></p>
                <p><button className="btn btn-outline-success btn-lg" style={{ width: "157px",marginTop:"-20px", marginLeft: "300px"}}>YES</button>
                <button className="btn btn-outline-danger btn-lg" style={{ width: "157px" ,marginTop:"30px",marginLeft: "30px", marginBottom: "50px"}}>NO</button></p>
                <button className="btn btn-outline-secondary btn-lg" style={{ width: "127px", marginLeft: "320px" , marginBottom: "100px", marginTop:"-30px"}}>RESOLVE</button>
                <button className="btn btn-outline-warning btn-lg" style={{ width: "127px", marginLeft: "30px" , marginBottom: "100px",marginTop:"-30px"}}>REDEEM</button>
                
         </div>
         
         
         <div className="row" style={{ paddingLeft: "40px" }}>
         </div>      
         </div>

      </div>      
  );
};

export default Quest;
