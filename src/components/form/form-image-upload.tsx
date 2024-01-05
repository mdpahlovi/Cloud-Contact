import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useField, useFormikContext } from "formik";

export default function FormImageUpload({ name, disabled }: { name: string; disabled?: boolean }) {
    const [{ value }] = useField(name);
    const { setFieldValue } = useFormikContext();

    const onChange: UploadProps["onChange"] = ({ fileList }) => {
        const fileReader = new FileReader();
        fileReader.onload = () => (fileReader.readyState === 2 ? setFieldValue(name, fileReader.result) : null);
        fileReader.readAsDataURL(fileList[0] as unknown as Blob);
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
        <ImgCrop rotationSlider>
            <Upload
                listType="picture-card"
                fileList={[{ uid: "-1", name: "image.png", status: "done", url: value }]}
                onChange={onChange}
                onPreview={onPreview}
                maxCount={1}
                disabled={disabled}
            >
                + Upload
            </Upload>
        </ImgCrop>
    );
}
