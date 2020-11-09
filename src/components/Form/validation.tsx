export default function validateLogin(values: any) {
  let errors: any = {};
  if (!values.title) {
    errors.title = "Username is required";
  } else if (values.title.lenght > 20) {
    errors.title = "Username to long";
  }
  if (!values.description) {
    errors.description = "Description is required";
  } else if (values.description.length > 100) {
    errors.description = "Description to long";
  }
  return errors;
}
