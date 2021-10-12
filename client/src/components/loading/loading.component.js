import React from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { Wrap } from "./loading.styles";

const Loading = () => {
  const loading = useSelector((state) => state.user.loading);
  return (
    <>
      {ReactDOM.createPortal(
        <>
          {loading && (
            <Wrap>
              <div className="sk-fading-circle">
                <div className="sk-circle1 sk-circle"></div>
                <div className="sk-circle2 sk-circle"></div>
                <div className="sk-circle3 sk-circle"></div>
                <div className="sk-circle4 sk-circle"></div>
                <div className="sk-circle5 sk-circle"></div>
                <div className="sk-circle6 sk-circle"></div>
                <div className="sk-circle7 sk-circle"></div>
                <div className="sk-circle8 sk-circle"></div>
                <div className="sk-circle9 sk-circle"></div>
                <div className="sk-circle10 sk-circle"></div>
                <div className="sk-circle11 sk-circle"></div>
                <div className="sk-circle12 sk-circle"></div>
              </div>
            </Wrap>
          )}
        </>,
        document.getElementById("loading")
      )}
    </>
  );
};

export default Loading;
