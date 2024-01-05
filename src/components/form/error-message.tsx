import { FieldMetaProps } from "formik";
import { Typography } from "antd";

export default function ErrorMassage<TField>({ meta }: { meta: FieldMetaProps<TField> }) {
    return meta && meta.touched && meta.error ? <Typography.Text type="danger">{meta.error}</Typography.Text> : null;
}
