/*
 * @Author: your name
 * @Date: 2022-03-29 11:51:08
 * @LastEditTime: 2022-03-29 15:05:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app-learn/src/pages/my-form/MyFormPage.js
 */
// import Form, { Field } from "rc-field-form";
import Form, { Field } from './compponents/form';
import Input from './compponents/Input';
import { useEffect } from 'react';

function MyFormPage() {

    const [form] = Form.useForm();

    const onFinish = (val) => {
        console.log("onFinish", val); //sy-log
    };

    // 表单校验失败执行
    const onFinishFailed = (val) => {
        console.log("onFinishFailed", val); //sy-log
    };

    // 初始化
    useEffect(() => {
        console.log("form", form); //sy-log
        // form.setFieldsValue({ username: "default" });
    }, []);
    return (
        <div>
            <h3>
                nium form
            </h3>
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Field name="username">
                    <Input placeholder="input UR Username" />
                </Field>
                <Field name="password">
                    <Input placeholder="input UR Password" />
                </Field>
                <button>Submit</button>
            </Form>
        </div>
    )
}

export default MyFormPage;