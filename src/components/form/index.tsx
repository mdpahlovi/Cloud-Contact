import { FormProps } from "@/types/form";
import { Formik, Form as FormikForm } from "formik";

export default function Form({ children, onSubmit, initialValues, validationSchema }: FormProps) {
    const config = { onSubmit, initialValues, validationSchema, validateOnBlur: true, validateOnMount: true, validateOnChange: true };

    return (
        <Formik {...config}>
            <FormikForm style={{ display: "grid", gap: "0.5rem" }}>{children}</FormikForm>
        </Formik>
    );
}
