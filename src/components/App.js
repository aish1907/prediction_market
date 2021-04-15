import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Fpmm from '../abis/FixedProductMarketMaker.json'
import Condt from '../abis/ConditionalTokens.json'
import Navbar from "./Navbar";


class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    
    const networkId = await web3.eth.net.getId()
    // 0x7E79bf33484b3994826356a0184B71B9Fe10967A
    // 0x382A8c5837d5dcD82F6b1EB6109e6066D43291d9
    if(networkId==80001) {
      const abi = Fpmm.abi
      const abi2 = Condt.abi
      const address = "0x382A8c5837d5dcD82F6b1EB6109e6066D43291d9"
      const condaddress = "0x7E79bf33484b3994826356a0184B71B9Fe10967A"
      console.log(address);
      const contract = new web3.eth.Contract(abi, address)
      const condcontract = new web3.eth.Contract(abi2,condaddress)
      this.setState({ contract })
      this.setState({ condcontract })
      //await condcontract.methods.prepareCondition(0xF3d9D81e744B84a70CC40e790907a23BA2Cd018D,"0x0000000000000000000000000000000000000000000000000000000000000001",2).send({from: this.state.account})
      const condiId = await condcontract.methods.getConditionId("0xF3d9D81e744B84a70CC40e790907a23BA2Cd018D","0x0000000000000000000000000000000000000000000000000000000000000001",2).call()
      if(condiId){
        console.log(condiId)
      this.setState({ condiId })
      }else{
        console.log("aishwarya")
      }
      console.log(condiId)
      //const colIDlo = await condcontract.methods.getcoll
      /* const coar = await contract.methods.arr().call()
      if(coar){const totalSupply = coar.length;
        this.setState({ totalSupply })
      // Load Places
      for (var i = 1; i <= totalSupply; i++) {
        const plac = coar[i - 1]
        this.setState({
          placs: [...this.state.placs, plac]
        })}
        //console.log(plac); */

     /*  }
      const balance = await contract.methods.balanceOf(accounts[0]).call()
      console.log(balance + "balance")
      this.setState({balance})
      console.log(this.state.placs);
      const memeHash = await contract.methods.get().call()
      this.setState({ memeHash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    } */
  }
  }

  handleInput = event => {
    this.setState({ liq: event.target.value });
  };

  addliq = () => {
    const l = this.state.liq
    this.state.contract.methods.addFunding(this.state.liq.toString(),["0"]).send({ from: this.state.account })
    .once('recepient', (receipt) => {
      console.log(receipt);
    })
    .on("error", () => {
      console.log("error");
    });
    
  };

  rede = () => {
    this.state.contract.methods.redeemPositions(0x9DE03F9Ee15AF5FcF3035EaB4540fc2d3E5410c2,"0x0000000000000000000000000000000000000000000000000000000000000000",this.state.condiId,[1]).send({ from: this.state.account })
    .once('receipt', (receipt) => {
     console.log(receipt)
    })
  }

  handleToken = event => {
    this.setState({ coltok: event.target.value });
  };

  buyy = () =>{
    this.state.contract.methods.buy(this.state.coltok,1,0).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log(receipt)
     })
  }


  selll = ()=>{
    this.state.contract.methods.sell(this.state.coltok,1,0).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log(receipt)
     })
  }

  res = ()=>{
    this.state.condcontract.methods.reportPayouts("0x0000000000000000000000000000000000000000000000000000000000000001",[1,0]).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      console.log(receipt)
     })
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      contract: null,
      condcontract: null,
      liq: 0,
      web3: null,
      buffer: null,
      coltok: 0,
      condiId:"0x0000000000000000000000000000000000000000000000000000000000000000" 
    }
  
  }
  render() {
    return ( 
      <div>
        <Navbar  />

          <div class="container">
            <main role="main" class="container">
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
                <input type="number" placeholder="0.0" onChange={this.handleInput} style={{ height: "35px", marginLeft: "350px", marginRight: "40px",marginTop:"-80px"}}></input>
                <button className="btn btn-outline-primary" onClick={this.addliq} style={{ marginLeftt: "30px",marginBottom:"30px",marginTop:"10px" }}>Add Liquidity</button>
                <div className="row" style={{ paddingLeft: "40px" }}>
                      <p><input type="number" placeholder="0.0" onChange={this.handleToken} style={{ height: "35px", marginLeft: "350px", marginRight: "40px"}}></input></p>
                        <p><button className="btn btn-outline-success btn-lg" onClick={this.buyy} style={{ width: "157px",marginTop:"-20px", marginLeft: "300px"}}>YES</button>
                        <button className="btn btn-outline-danger btn-lg" onClick={this.selll} style={{ width: "157px" ,marginTop:"30px",marginLeft: "30px", marginBottom: "50px"}}>NO</button></p>
                        <button className="btn btn-outline-secondary btn-lg" onClick={this.res} style={{ width: "127px", marginLeft: "320px" , marginBottom: "100px", marginTop:"-30px"}}>RESOLVE</button>
                        <button className="btn btn-outline-warning btn-lg" onClick={this.rede} style={{ width: "127px", marginLeft: "30px" , marginBottom: "100px",marginTop:"-30px"}}>REDEEM</button>
                        
                </div>
                
                <div className="row" style={{ paddingLeft: "40px" }}>
                </div>      
                </div>

              </div>
            </main>
          </div>
      </div>
      
    );
  }
}


export default App;
