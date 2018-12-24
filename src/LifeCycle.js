import React , {Component} from 'react';

class LifeCycle extends Component {
    state = {
        number:0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
    }

    handleIncrese = () =>{
        const {number} = this.state;
        this.setState({
            number : number +1
        });
       
    }

    handleDecrese = () =>{
        this.setState(
            ({number}) =>({
                number : number - 1
            })
        )
    }


    render(){
      return (
          <div>
              <h1>CONTER</h1>
              <div>값 : {this.state.number}</div>
              <button onClick={this.handleIncrese}>+</button>
              <button onClick={this.handleDecrese}>-</button>
          </div>
      )

    }
}

export default LifeCycle;