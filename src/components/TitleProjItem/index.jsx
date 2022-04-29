import React from "react";
// import imgSrc from "../TitleProjItem/";
import "../TitleProjItem/style.css"



class TitleProjItem extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return  <section >
                    <img className="" src="" alt="" />
                    <h3>{this.props.title}</h3>
                </section>
    }
}


export default TitleProjItem;