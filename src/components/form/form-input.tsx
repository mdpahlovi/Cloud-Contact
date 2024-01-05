import { useField } from "formik";
import { FormInputProps } from "@/types/form";
import { Typography, Input, InputProps } from "antd";
import ErrorMassage from "./error-message";

export default function FormInput({ type = "text", name, label, placeholder, disabled }: FormInputProps) {
    const [field, meta] = useField(name);
    const config: InputProps = { size: "large", type, ...field, placeholder, disabled };

    return (
        <div>
            <Typography.Text>{label}</Typography.Text>
            {type === "password" ? <Input.Password {...config} /> : <Input {...config} />}
            <ErrorMassage meta={meta} />
        </div>
    );
}
