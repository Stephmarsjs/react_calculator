import React from 'react';
import './App.css';
import ResultComponent from './components/Result';
import keyPadComponent from './components/Keypad';

class App extends Component {
   constructor(){
     super();

     this.state = {
          result: ""
     }
   }

   calculate = () => {
     try {
       this.setState({
         result: (eval(this.state.result) || "") + ""
       })
     } catch (e) {
       this.setState({
         result: "error"
       })
     }
   };

   reset = () => {
     this.setState({
       result: ""
     })
   };
   
   render() {
     return (
       <div>
          <div className="App">
            <h1> Simple Calculator </h1>
            <ResultComponent result={this.state.result}/> 
            <keyPadComponent onClick={this.onClick}/>
      </div>
    </div>
   );
 } 
}

export default App;
