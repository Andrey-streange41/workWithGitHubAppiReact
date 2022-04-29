import React from "react";
import "../Card/style.css";
import LanguageItem from "../LanguageItem";
import StarItem from "../StarItem";
import TitleProjItem from "../TitleProjItem";
import ForkItem from "../ForkItem";

class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="cardContainer">
        <TitleProjItem title={this.props.title}/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        </p>
        <section className="addInfo">
            <LanguageItem language={this.props.language}/>
            <StarItem  stars={this.props.stars}/>
            <ForkItem forks={this.props.forks}/>
        </section>
        
      </section>
    );
  }
}

export default Card;
