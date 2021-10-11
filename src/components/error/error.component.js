import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { Content, Message, Title, Wrap } from "./error.styles";
import { addError } from "../../redux/user/user.actions";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const [x, setX] = useState("-155%");
  useEffect(() => {
    if (error) {
      setX(0);
    }
    const timer = setTimeout(() => {
      setX("-155%");
      dispatch(addError(null));
    }, 4000);
    return () => clearTimeout(timer);
  }, [dispatch, error]);
  return (
    <>
      {ReactDOM.createPortal(
        <Wrap initial={{ y: "-155%" }} animate={{ y: x }}>
          <Content>
            <Title>Error!</Title>
            <Message>{error}</Message>
          </Content>
        </Wrap>,
        document.getElementById("error")
      )}
    </>
  );
};

export default Error;
