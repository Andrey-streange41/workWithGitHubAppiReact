import React from "react";
import imgSrc from "../LanguageItem/yellow.jpg";
import "../LanguageItem/style.css"



class LanguageItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then(res=>{
            return res.json()
        }).then(res=>{
            this.setState((state)=>{
                return {
                    ...state,
                    data:res
                }
            })
            
        })
    }

    render(){
        if(this.state.data[this.props.language] !== undefined){
            return  <section className="langFlexBox">
                         <div className="divRound" style={{backgroundColor:this.state.data[this.props.language].color}}></div> 
                         <span> {this.props.language} </span>
                    </section>
        }
        else{
            return <section className="langFlexBox">
                        <div className="divRound bord" ></div> 
                        <span> 0 </span>
                    </section>
        }
          
                
          

        
    }
}


export default LanguageItem;