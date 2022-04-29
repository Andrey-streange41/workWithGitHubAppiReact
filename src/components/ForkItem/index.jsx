import React from "react";
import imgSrc from "../ForkItem/images.png";
import "../ForkItem/style.css"



class ForkItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return  <section>
                    <img className="imgRound" src={imgSrc} alt="" />
                    <span> {this.props.forks} </span>
                </section>
    }
}


export default ForkItem;