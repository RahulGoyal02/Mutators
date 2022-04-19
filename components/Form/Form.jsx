// import logo from './logo.svg';
// import "./App.css";
import { Form, Field, FormSpy } from "react-final-form";
import { useState } from "react";
import UserName from "./UserName";
import Email from "./Email";
import Designation from "./Designation";
import Phone from "./Phone";
import Address from "./Address";




const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const showResults = async (values) => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
  console.log(values);
};

const required = (value) => (value ? undefined : "Required");

function MyForm() {
  const [secondary, setSecondary] = useState(true);

  return (
    <>
      <h1 className="App">Checkout Page</h1>

      <Form
        onSubmit={showResults}
        subscription={{
          submitting: true,
        }}
        mutators={
          { 

            // arrgs is always in array format
            enableCity: (arrgs, state, utils)=>{
              utils.changeValue(state, "city", ()=>{
                if(state.value === "Madhya Pradesh"){

                }
              })
            }
          }
        }
      >
        {({ handleSubmit, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <UserName />
            <Email />
            <Designation />
            <Phone />

          {/* ------------Employee Checker-------------- */}
            <div>
              <label>Employee</label>

              <Field name="Employee Check" component="input" type="checkbox" />
            </div>

           
           {/* ----------------Gender Checker------------------ */}
            <div>
              <div>
                <label>Sex</label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="Male"
                    initialValue={"Rahul"}
                  />
                  Male
                </label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="Female"
                  />{" "}
                  Female
                </label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="Transgender"
                  />{" "}
                  Transgender
                </label>
              </div>
            </div>

           <Address />


            <div>
              <label>Same as Primary Address</label>

              <Field
                name="Same Address"
                component="input"
                type="checkbox"
                onClick={() => setSecondary(!secondary)}
              />

              {secondary ? (
                <div>
                  <Field
                    name="secondaryaddress"
                    component="input"
                    placeholder="Enter Address"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}
                  >
                    {({ input, meta, placeholder }) => (
                      <div>
                        <label>Secondary Address</label>
                        <input {...input} placeholder={placeholder} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
              ) : (
                ""
              )}
            </div>

            

            <button type="submit" disabled={submitting}>
              Submit
            </button>

            {/* ------------Form Spy----- --------       */}

            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                <pre className="App-header">
                  {JSON.stringify(values, undefined, 2)}
                </pre>
              )}
            </FormSpy>
          </form>
        )}
      </Form>
    </>
  );
}

export default MyForm;
