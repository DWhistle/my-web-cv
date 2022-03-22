import { React, useEffect, useContext } from "react";
import { AppStateContext } from "../components/Utils/LangWrapper";
import { Redirect } from "react-router-dom";

const LangSwitcher = () => {
  const context = useContext(AppStateContext);
  useEffect(() => {
    context.switchLanguage();
  });
  return <Redirect to="/" />;
};

export default LangSwitcher;
