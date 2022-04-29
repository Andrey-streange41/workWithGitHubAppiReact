import React from "react";
import imgSrc from "../StarItem/star3.jpeg";
import "../StarItem/style.css"



class StarItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }

    }
        componentDidMount(){
            fetch(this.props.stars).then(result=>{
                return result.json();
            }).then(result=>{
                this.setState((state)=>{
                    return {...state, data:result}
                })
            })
        }

    render(){
        return  <section>
                    <img className="imgRound" src={imgSrc} alt="" />
                    <span> {this.state.data.length} </span>
                </section>
    }
}


export default StarItem;