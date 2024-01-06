import { FormProps } from "@/types/form";
import { Formik, Form as FormikForm } from "formik";

export default function Form({ children, onSubmit, initialValues, validationSchema }: FormProps) {
    const config = {
        onSubmit,
        initialValues,
        validationSchema,
        validateOnBlur: true,
        validateOnMount: true,
        validateOnChange: true,
        enableReinitialize: true,
    };

    return (
        <Formik {...config}>
            <FormikForm style={{ marginTop: "20px" }}>{children}</FormikForm>
        </Formik>
    );
}
