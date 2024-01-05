/* eslint-disable @typescript-eslint/no-explicit-any */
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import type { RcFile, UploadFile } from "antd/es/upload/interface";
import { useField, useFormikContext } from "formik";
import ErrorMassage from "./error-message";

export default function FormImageUpload({ name, label, disabled }: { name: string; label: string; disabled?: boolean }) {
    const [{ value }, meta] = useField(name);
    const { setFieldValue } = useFormikContext();
    const fileList: UploadFile<any>[] | undefined = value ? [{ uid: "-1", name: "image.png", status: "done", url: value }] : undefined;

    const onChange = ({ fileList }: { fileList: UploadFile[] }) => {
        if (fileList[0]?.originFileObj) {
            const fileReader = new FileReader();
            fileReader.onload = () => setFieldValue(name, fileReader.result);
            fileReader.readAsDataURL(fileList[0].originFileObj);
        }
    };

    const onRemove = () => {
        setFieldValue(name, "");
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return (
        <div>
            <ImgCrop rotationSlider>
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={() => false}
                    onPreview={onPreview}
                    onRemove={onRemove}
                    onChange={onChange}
                    maxCount={1}
                    disabled={disabled}
                >
                    + {label}
                </Upload>
            </ImgCrop>
            <ErrorMassage meta={meta} />
        </div>
    );
}
