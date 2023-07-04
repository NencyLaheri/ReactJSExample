import React,{Component} from "react";

export default class Unmounting extends Component
{
    componentDidMount()
    {
        console.log(" Student mount");
    }
    componentWillUnmount()
    {
        console.log("student umnounted")
    }
    render()
    {
        return <h1>Hello Student Component</h1>
    }
}