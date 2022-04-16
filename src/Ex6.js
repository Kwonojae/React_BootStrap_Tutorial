import React from "react";
import styled from "styled-components";
const Divstyled = styled.div`
  width: 100%;
`;
const Divimgsize = styled.div`
  width: 100%;
`;
const Divsize = styled.div`
  width: 50%;
`;
const Ex6 = () => {
  return (
    <>
      <Divsize
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <Divimgsize className="carousel-item active">
            <img src="img/thumb_10.jpg" className="d-block w-100" alt="..." />
          </Divimgsize>
          <Divimgsize className="carousel-item">
            <img src="img/thumb_10.jpg" className="d-block w-100" alt="..." />
          </Divimgsize>
          <Divimgsize className="carousel-item">
            <img src="img/thumb_10.jpg" className="d-block w-100" alt="..." />
          </Divimgsize>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Divsize>
      <div className="contaner">
        <div className="row">
          <div className="col-md-4">
            <Divstyled className="card">
              <img src="img/thumb_08.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Divstyled>
          </div>
          <div className="col-md-4">
            <Divstyled className="card">
              <img src="img/thumb_08.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Divstyled>
          </div>
          <div className="col-md-4">
            <Divstyled className="card">
              <img src="img/thumb_08.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Divstyled>
          </div>
          <div className="col-md-4">
            <Divstyled className="card">
              <img src="img/thumb_08.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Divstyled>
          </div>
          <div className="col-md-4">
            <Divstyled className="card">
              <img src="img/thumb_08.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Divstyled>
          </div>
          <div className="col-md-4">
            <Divstyled className="card">
              <img src="img/thumb_08.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Divstyled>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ex6;
