import { Formik } from "formik";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

function Support() {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Support</h1>
            <div className="mt-5">
              <Formik>
                {(props) => (
                  <form>
                    <div className="row">
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Name</label>
                        <input
                          className="form-control mt-1"
                          name="name"
                          placeholder="Name..."
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">
                          Email Address
                        </label>
                        <input
                          className="form-control mt-1"
                          name="email"
                          placeholder="Email Address..."
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="name fw-semibold">Details</label>
                        <textarea
                          rows="10"
                          className="form-control mt-1"
                          name="details"
                          placeholder="Details..."
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary w-25">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
