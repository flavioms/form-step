import * as Yup from "yup";

const schemaStep1 = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres")
    .required("Campo obrigatório."),
});

const schemaStep2 = Yup.object().shape({
  lastName: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres")
    .required("Campo obrigatório."),
});

export default [schemaStep1, schemaStep2];
