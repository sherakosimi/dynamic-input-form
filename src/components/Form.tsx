import React from "react";
import { Input } from "./Box";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import FormItem from "./FormItem";

type FormProps = {
  data: Input[];
  setValues: any;
};

const InputForm = (props: FormProps) => {
  const initialValues = () => {
    return Object.fromEntries(props.data.map((field) => [field.id, ""]));
  };

  const validationSchema = () => {
    return object(
      Object.fromEntries(
        props.data.map((field) => [field.id, string().required("Обязятельно")])
      )
    );
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={initialValues()}
      validationSchema={validationSchema()}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        props.setValues(values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          <FormItem
            data={props.data}
            errors={errors}
            onChange={handleChange}
            values={values}
          />
          <button className="box__btn" type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
