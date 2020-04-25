import * as Yup from "yup";
export const RegisterFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Shorti")
    .max(20)
    .required(),
  lastName: Yup.string()
    .min(2)
    .max(20)
    .required(),

  phoneNumber: Yup.string().required(),
  birthday: Yup.date().required(),
  sex: Yup.string().required(),
  username: Yup.string().required()
});
