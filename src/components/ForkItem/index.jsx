import React from "react";
import imgSrc from "../ForkItem/images.png";
import "../ForkItem/style.css"



class ForkItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        if(this.props.forks>0){
            return  <section>
                    <img className="imgRound" src={imgSrc} alt="" />
                    <span> {this.props.forks} </span>
                </section>
        }
        else{
            return  <section>
                    <img className="imgRound" src={imgSrc} alt="" />
                    <span> 0 </span>
                </section>
        }
    }
}


export default ForkItem;