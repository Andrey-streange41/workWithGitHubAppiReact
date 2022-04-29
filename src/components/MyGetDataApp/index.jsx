
import React from "react";
import "../MyGetDataApp/style.css";
import Card from "../Card";

class MyGetDataApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    componentDidMount(){
        fetch("https://api.github.com/users/facebook/repos").then(response=>{
            return response.json();
        }).then(response=>{
            this.setState((state)=>{
                return {...state, data: response}
            })
        });

       
            
         console.log(this.state.data);
    }


    render(){
        
        const result = [];

            for (let i = 0; i < 8; i++) {

                if(this.state.data[i] !== undefined){
                    result.push(<Card forks={this.state.data[i].forks} stars={this.state.data[i].stargazers_url} language={this.state.data[i].language} title={this.state.data[i].full_name}/>)
                }
                
            }
       const component = <section className="gitCardContainer">
            {result}
        </section>

        return component;
            
            
            
        
    }
}

export default MyGetDataApp;