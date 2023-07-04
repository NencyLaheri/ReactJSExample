import { Component } from "react";

export default class Updating extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: this.props.favcol};
    }
    static getDerivedStateFromProps(props, state) {
      
      if(props.favcol!==state.favoritecolor)
      {
        console.log("get derived state");
        console.log(props,state);
        return {favoritecolor: props.favcol };
      }
      return null;
      
    }
    shouldComponentUpdate(nextProps,nenxtState)
    {
      return true;
      
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
      console.log("favouritecolor - componentDidUpdate - it runs before update")
      console.log(prevProps,prevState);
      return "green";
    }  
    
    componentDidUpdate(prevProps,prevState,snapshot)
    {
      console.log("favouritecolor - componentDidUpdate - it runs after update")
      console.log(prevProps,prevState,snapshot);
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      console.log("color rendered");
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }