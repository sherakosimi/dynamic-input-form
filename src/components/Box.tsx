import React, { useState } from "react";
import introPhoto from "../images/hello.png";
import InputForm from "./Form";
import List from "./List";

export interface Input {
  id: string;
  type?: string;
  label?: string;
  defaultValue?: string;
}

var obj: Input[] = [
  {
    id: "last_name",
    type: "inputText",
    label: "Last Name",
  },
  {
    id: "first_name",
    type: "inputText",
    label: "First Name",
  },

  {
    id: "password",
    type: "inputPassword",
    label: "Password",
  },
  {
    id: "email",
    type: "inputEmail",
    label: "Email",
    defaultValue: "sherakosimi@gmail.com",
  },
];

const Box = () => {
  const [values, setValues] = useState<any>();
  return (
    <div className="box">
      <img alt="Photo1" className="box__icon" src={introPhoto} />
      {values ? (
        <div className="box__container">
          <div className="box__header">
            <h1 className="box__header--heading">Добро пожаловать</h1>
            <h1 className="box__header--subheading">
              Пожалуйста проверьте свои данные
            </h1>
          </div>
          <List values={values} />
          <button className="box__btn" onClick={() => setValues(null)}>
            Вернуться
          </button>
        </div>
      ) : (
        <div className="box__container">
          <div className="box__header">
            <h1 className="box__header--heading">Авторизация</h1>
            <h1 className="box__header--subheading">
              Для доступа к личному кабинету вашей компании авторизуйтесь на
              сайте
            </h1>
          </div>
          <InputForm data={obj} setValues={setValues} />
        </div>
      )}
    </div>
  );
};

export default Box;
