import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch,Provider } from "react-redux";
import { login } from "../ReduxStore/LoginSlice"
import { store } from "../ReduxStore/store.js"

//import { yupToFormErrors } from "formik";
const LoginComponent = () =>
{
  const navigate = useNavigate();
  const dispatch = useDispatch();  

  return (
    <> 
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        initialValues={{ email: "", password: "" }}

        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email Required";
          }
          if (!values.password) {
            errors.password = "Password is Empty";
          }
          return errors;
        }}

        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));        
          dispatch(login(values));
          navigate("/search");
          
        }}
      >
        {({
          values,
          errors,        
          handleChange,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}


export default LoginComponent;