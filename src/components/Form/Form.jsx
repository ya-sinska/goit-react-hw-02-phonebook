import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid').required(),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid').max(12).required(),
})
const initialValues = {
    name: '',
    number: '+38',
};
export const Forma = ({onSubmit}) => {
    const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}>
            <Form>
                <label> Name
                    
                <Field
                type="text"
                name="name"
                placeholder="Surname Name"
                    />
                    <ErrorMessage name="name" component="div"/>
                </label>
                <label> Number
                    
                <Field
                type="tel"
                name="number"
                    />
                    <ErrorMessage name="number" component="div"/>
                </label>
                <button type="submit">Add contact</button>
            </Form>
      </Formik>
    )
}
