import { FormikErrors } from "formik";
import React, { useState } from "react";
import { Input } from "./Box";

type FormItemProps = {
  data: Input[];
  errors: FormikErrors<{ [k: string]: string }>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: { [key: string]: string };
};

const FormItem = ({ data, errors, onChange, values }: FormItemProps) => {
  const handleClear = (id: string) => {
    values[id] = "";
  };

  return (
    <>
      {data?.map(({ id, type, label, defaultValue }: Input) => {
        return (
          <div className="form__container" key={id}>
            <input
              placeholder={label}
              className="form__input"
              id={id}
              name={id}
              type={type?.slice(5).toLowerCase()}
              onChange={onChange}
              value={values[id]}
              autoComplete="new-password"
            />
            <label htmlFor={id} className="form__input--label">
              {label}
            </label>
            <span className="form__input--highlight"></span>
            <label htmlFor={id} className="form__input--label-error">
              {errors[id]}
            </label>
            <button className="form__clear" onClick={() => handleClear(id)}>
              <i className="bx bx-x" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FormItem;
