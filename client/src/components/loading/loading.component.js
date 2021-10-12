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
              <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
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
