import React from "react";
import styled from "styled-components";
const Divstyled = styled.div`
  border: solid 1px black;
`;
const Ex1 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* fluid 넓이에 따라 움직임 */}
          <Divstyled className="col-md-4">
            <img className="img-fluid" src="img/home.jpg" alt="" />
          </Divstyled>
          <Divstyled className="col-md-4">
            <img className="img-fluid rounded" src="img/home.jpg" alt="" />
          </Divstyled>
          <Divstyled className="col-md-4">
            <img
              className="img-fluid rounded-circle"
              src="img/home.jpg"
              alt=""
            />
          </Divstyled>
          <Divstyled className="col-md-4">
            <img
              className="img-fluid img-thumbnail"
              src="img/home.jpg"
              alt=""
            />
          </Divstyled>
        </div>
      </div>
    </>
  );
};

export default Ex1;
