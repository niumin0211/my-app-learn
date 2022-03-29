/*
 * @Author: your name
 * @Date: 2022-03-29 12:01:25
 * @LastEditTime: 2022-03-29 14:37:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app-learn/src/pages/my-form/compponents/form/index.js
 */

import _Form from './Form.js';
import Field from './Field.js';
import useForm from './useForm.js';

const Form = _Form;
_Form.Field = Field;
_Form.useForm = useForm;

export { Field, useForm };
export default Form;