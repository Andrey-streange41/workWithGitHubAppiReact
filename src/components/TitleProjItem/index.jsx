import React from "react";
import imgSrc from "../TitleProjItem/gitBook2.png";
import "../TitleProjItem/style.css"



class TitleProjItem extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return  <section className="flex-container">
                    <div className="gitBook">
                        <img  src={imgSrc} alt="" />
                    </div>
                    <h3>{this.props.title}</h3>
                </section>
    }
}


export default TitleProjItem;