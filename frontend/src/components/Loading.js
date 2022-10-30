import React from "react";

function Loading({ isFetching }) {
  return (
    <>
      {isFetching ? (
        <div className="overlay">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Loading;
