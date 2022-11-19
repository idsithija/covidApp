import { ErrorMessage, Formik } from "formik";
import React, { useContext } from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { addSupport } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";
import * as Yup from "yup";

function Support() {
  const { user, dispatch } = useContext(MainContext);
  const initialValues = {
    name: "",
    email: "",
    details: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email is required!"),
    details: Yup.string().required("Details is required!"),
  });

  function addSupportForm(data) {
    var dataNew = { ...data, userid: user.id };
    addSupport(dataNew, dispatch).then(() => {
      window.location.reload();
    });
  }

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Support</h1>
            <div className="mt-4">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addSupportForm}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="row">
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Name</label>
                        <input
                          className="form-control mt-1"
                          name="name"
                          placeholder="Name..."
                          value={props.values.name}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error"
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
                          value={props.values.email}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="name fw-semibold">Details</label>
                        <textarea
                          rows="10"
                          className="form-control mt-1"
                          name="details"
                          placeholder="Details..."
                          value={props.values.details}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="details"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary w-25">
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
