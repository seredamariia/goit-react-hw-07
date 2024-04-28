import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { initialValues } from "../../redux/constants";
import { addContact } from "../../redux/contactsAPI";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneNumberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.container}>
          <label htmlFor={nameId}>Name</label>

          <div>
            <Field
              className={`${css.input} ${errors.name && touched.name}`}
              type="text"
              name="name"
              id={nameId}
            />
          </div>
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={phoneNumberId}>Phone</label>

          <div>
            <Field
              className={`${css.input} ${errors.phone && touched.phone}`}
              type="text"
              name="number"
              id={phoneNumberId}
            />
          </div>
          <ErrorMessage className={css.error} name="number" component="span" />

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
