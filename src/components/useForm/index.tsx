import { useState } from "react";

const useForm = (submit: any, validate: any) => {
  const [values, setValues] = useState({
    // id: null,
    title: "",
    description: "",
    // published: false,
    submitted: false,
  });
  const [errors, setErrors] = useState({
    // id: null,
    title: "",
    description: "",
    // published: false,
    submitted: false,
  });

  const handleInputChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
    submit();
    setErrors(validate(values));
  };

  return { handleInputChange, handleSubmit, setValues, values, errors };
};

export default useForm;
