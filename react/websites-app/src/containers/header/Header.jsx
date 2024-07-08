import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">

      
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          GPT-3 is a powerful language model that can generate human-like text.
          It takes a text prompt and generates a text completion. It can be used
          for a variety of tasks, such as chatbots, content generation
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1,600+ people have already signed up to build amazing things with
          </p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
