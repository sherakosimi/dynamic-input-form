import React from "react";
import { Input } from "./Box";

type FormItemProps = {
  data: Input[];
  errors: any;
  onChange: any;
  values: any;
};

const FormItem = (props: FormItemProps) => {
  return (
    <>
      {props.data?.map(({ id, type, label, defaultValue }: Input) => {
        return (
          <div className="form__container" key={id}>
            <input
              placeholder={label}
              className="form__input"
              id={id}
              name={id}
              type={type?.slice(5).toLowerCase()}
              onChange={props.onChange}
              value={props.values[id]}
              autoComplete="new-password"
            />
            <label htmlFor={id} className="form__input--label">
              {label}
            </label>
            <span className="form__input--highlight"></span>
            <label htmlFor={id} className="form__input--label-error">
              {props.errors[id]}
            </label>
            <button
              className="form__clear"
              onClick={() => (props.values[id] = "")}
            >
              <i className="bx bx-x" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FormItem;
