/*
 * @Author: your name
 * @Date: 2022-03-29 11:53:53
 * @LastEditTime: 2022-03-29 19:37:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app-learn/src/pages/my-form/compponents/Input.js
 */
const Input = (props) => {
    return <input {...props} />;
};

function InputExport(props) {
    const { value = "", ...otherProps } = props;
    return (
        <div>
            <Input value={value} {...otherProps}></Input>
        </div>
    )
}
export default InputExport;