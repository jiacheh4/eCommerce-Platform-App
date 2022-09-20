import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext(); //传递formik的参数
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
