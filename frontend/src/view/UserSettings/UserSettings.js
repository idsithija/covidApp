import { Formik } from "formik";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

function UserSettings() {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Details</h1>
            <div className="mt-4">
              <Formik>
                {(props) => (
                  <form>
                    <div className="row">
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Full Name</label>
                        <input
                          className="form-control mt-1"
                          name="full_name"
                          placeholder="Full Name..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">
                          Date of Birth
                        </label>
                        <input
                          className="form-control mt-1"
                          name="dob"
                          placeholder="Date of Brith..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">NIC</label>
                        <input
                          className="form-control mt-1"
                          name="nic"
                          placeholder="NIC..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Gender</label>
                        <input
                          className="form-control mt-1"
                          name="gender"
                          placeholder="Gender..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Blood Group</label>
                        <input
                          className="form-control mt-1"
                          name="bloog_group"
                          placeholder="Blood Group..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">
                          Address Line 01
                        </label>
                        <input
                          className="form-control mt-1"
                          name="address_line_01"
                          placeholder="Address Line 01..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">
                          Address Line 02
                        </label>
                        <input
                          className="form-control mt-1"
                          name="address_line_02"
                          placeholder="Address Line 02..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">District</label>
                        <input
                          className="form-control mt-1"
                          name="district"
                          placeholder="District..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">City</label>
                        <input
                          className="form-control mt-1"
                          name="city"
                          placeholder="City..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Province</label>
                        <input
                          className="form-control mt-1"
                          name="province"
                          placeholder="Province..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Home Phone</label>
                        <input
                          className="form-control mt-1"
                          name="home_phone"
                          placeholder="Home Phone..."
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Mobile Phone</label>
                        <input
                          className="form-control mt-1"
                          name="mobile_phone"
                          placeholder="Mobile Phone..."
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

export default UserSettings;
