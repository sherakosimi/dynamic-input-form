import React from "react";
import { Input } from "./Box";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import FormItem from "./FormItem";

type FormProps = {
  data: Input[];
  setValues: React.Dispatch<React.SetStateAction<{
    [key: string]: string;
  }> | null>;
};

const InputForm = ({ data, setValues }: FormProps) => {
  const initialValues = () => {
    return Object.fromEntries(data.map((field) => [field.id, ""]));
  };

  const validationSchema = () => {
    return object(
      Object.fromEntries(
        data.map((field) => [field.id, string().required("Обязятельно")])
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
        setValues(values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <Form className="form" onSubmit={handleSubmit} autoComplete="off">
          <FormItem
            data={data}
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
