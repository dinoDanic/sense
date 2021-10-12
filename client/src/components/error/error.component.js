import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { Content, Message, Title, Wrap } from "./error.styles";
import { clearError } from "../../redux/user/user.actions";

const Error = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errors);
  const [x, setX] = useState("-155%");

  useEffect(() => {
    let timer;
    if (errors.length > 0) {
      setX(0);
      timer = setTimeout(() => {
        setX("-155%");
        dispatch(clearError());
      }, 4000);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <>
      {ReactDOM.createPortal(
        <Wrap initial={{ y: "-155%" }} animate={{ y: x }}>
          <Content>
            <Title>Error!</Title>
            {errors.map((err, i) => (
              <Message key={i}>{err.errMessage}</Message>
            ))}
          </Content>
        </Wrap>,
        document.getElementById("error")
      )}
    </>
  );
};

export default Error;
