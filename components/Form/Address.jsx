import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";

const required = (value) => (value ? undefined : "Required");

function Address() {
  return (
    <div>
      <Field
        name="address"
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
            <label>Address</label>
            <input {...input} placeholder={placeholder} />

            <div>
              <Field
                name="state"
                component="input"
                
                initialValue={"Cash on Delivery"}
                validate={required}
              >
                {({ input:{
                    onChange, ...input
                }, meta, placeholder }) => (
                  <>
                    <label for="cars">State</label>
                    <select input = {{...input, onChange: (data)=>{
                       onChange(data)
                            
                    }}}>
                      <option value="Madhya Pradesh"> Madhya Pradesh</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </select>
                    {(fieldState) => (
                      <pre className="App-header">
                        {JSON.stringify(fieldState, undefined, 2)}
                      </pre>
                    )}
                  </>
                )}
              </Field>
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
  );
}

export default Address;
