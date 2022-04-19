
import { Form, Field, FormSpy } from "react-final-form";
// import { useState } from "react";


const required = (value) => (value ? undefined : "Required");


function Phone (){
    return(
        <div>
        <Field
          name="phone"
          type="number"
          component="input"
          placeholder="Enter Mobile Number"
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
              <label>Mobile Number</label>
              <input {...input} placeholder={placeholder} />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
      </div>
    )
}
export default Phone;