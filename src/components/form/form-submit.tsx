import { useFormikContext } from "formik";
import { FormSubmitProps } from "@/types/form";
import { Button } from "antd";

export default function FormSubmit({ children, loading }: FormSubmitProps) {
    const { submitForm, errors } = useFormikContext();
    const hasError = Object.keys(errors).length !== 0;

    return (
        <Button type="primary" size="large" style={{ marginTop: "8px" }} onClick={submitForm} loading={loading} disabled={hasError}>
            {children}
        </Button>
    );
}
