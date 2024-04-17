import React from "react";

import { MainParentContainer } from "./style/style";
import { InsuaranceImage } from "images";
import Container from "./container";
import FunAndInteraction from "../Section2";

class MainParent extends React.Component {
  NoDataFound = (props) => {
    return (
      <div className={props.className}>
        <p>No Data Found</p>
        <p>
          Select options from above section <span>👆</span>
        </p>
      </div>
    );
  };

  render() {
    const { currentState, currentActiveId, clickHandler } = this.props;
    return (
      <MainParentContainer>
        <div className="option-container">
          <div className="sidecontainer">
            <h2>Explore more of this !!</h2>
            <div className="personal-navigation">
              <button className="checkout-btn">Personal Interaction</button>
              <button
                className={`${
                  currentActiveId === 1 ? "active-btn" : ""
                } checkout-btn`}
                onClick={() => clickHandler(1)}
              >
                Fun & Interaction
              </button>
            </div>
            <div className="genral-navigation">
              <button className="checkout-btn">Section 3</button>
              <button className="checkout-btn">Section 4</button>
            </div>
          </div>
          <div className="image-container">
            <figure>
              <img src={InsuaranceImage} alt="" srcset="" />
            </figure>
          </div>
        </div>
        <div className="content-data">
          {currentState === "default" && currentActiveId === -1 && (
            <this.NoDataFound className="no-data-found" />
          )}
          {currentActiveId === 1 && <FunAndInteraction />}
        </div>
      </MainParentContainer>
    );
  }
}

export default Container(MainParent);
