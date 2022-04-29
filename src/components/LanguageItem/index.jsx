import React from "react";
import imgSrc from "../LanguageItem/yellow.jpg";
import "../LanguageItem/style.css"



class LanguageItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return  <section>
                    <img className="imgRound" src={imgSrc} alt="" />
                    <span> {this.props.language} </span>
                </section>
    }
}


export default LanguageItem;