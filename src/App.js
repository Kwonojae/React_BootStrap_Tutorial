import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import styled from "styled-components";

const Divstyled = styled.div`
  border: solid 1px black;
`;
function App() {
  return (
    <>
      <h1>grid syste</h1>

      <div className="container-fluid">
        <div className="row">
          <Divstyled className="col-md-6 col-sm-6 ">hello</Divstyled>
          <Divstyled className="col-md-3 col-sm-6">hello</Divstyled>
          <Divstyled className="col-md-3 col-sm-12">hello</Divstyled>
        </div>
        <div className="row">
          <Divstyled className="col-md-4 ">hello</Divstyled>
          <Divstyled className="col-md-4 ">hello</Divstyled>
          <Divstyled className="col-md-4 ">hello</Divstyled>
        </div>
        <div className="row">
          <Divstyled className="col-md-4 offset-md-4">hello</Divstyled>
          <Divstyled className="col-md-4 ">hello</Divstyled>
        </div>
      </div>
    </>
  );
}

export default App;
