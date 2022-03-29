/*
 * @Author: your name
 * @Date: 2022-03-29 14:24:26
 * @LastEditTime: 2022-03-29 18:45:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app-learn/src/pages/my-form/compponents/form/useForm.js
 */

import { useForm } from "antd/lib/form/Form";
import React, { Component } from 'react'

class FormStore extends Component {
    constructor() {
        // 数据仓库
        this.store = {};
    }
    // getVal
    getFieldValue = (name) => {
        return this.store[name];
    }
    // getVals
    getFieldsValue = () => {
        return this.store;
    }
    // setVal
    setFieldsValue = (newVal) => {
        this.store = {
            ...this.store,
            ...newVal,
        }
    }
    // 数据仓库权限
    getForm = () => {
        return {
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue,
        }
    }
}

export default function useForm2() {
    return []
}
