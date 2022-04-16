import React from "react";

const Ex5 = () => {
  return (
    <>
      <h1>
        Example heading <span class="badge bg-secondary">New</span>
        <button type="button" class="btn btn-primary">
          Notifications <span class="badge bg-secondary">4</span>
        </button>
        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary">
              1
            </button>
            <button type="button" class="btn btn-primary">
              2
            </button>
            <button type="button" class="btn btn-primary">
              3
            </button>
            <button type="button" class="btn btn-primary">
              4
            </button>
          </div>
          <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">
              5
            </button>
            <button type="button" class="btn btn-secondary">
              6
            </button>
            <button type="button" class="btn btn-secondary">
              7
            </button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-info">
              8
            </button>
          </div>
        </div>
      </h1>
    </>
  );
};

export default Ex5;
