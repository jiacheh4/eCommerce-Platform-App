import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext(); //传递formik的参数
  return (
    //copying two or more components need to wrap them in <></>
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)} //if leaves the field, touched=1
        onChangeText={handleChange(name)}
        {...otherProps} //传这些属性进来
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
