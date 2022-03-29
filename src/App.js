/*
 * @Author: your name
 * @Date: 2022-03-28 23:44:08
 * @LastEditTime: 2022-03-29 19:36:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app-learn/src/App.js
 */
// import logo from './logo.svg';
// import './App.css';
import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from "./pages/MyRCFieldForm";
import MyForm from './pages/my-form';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <AntdFormPage />
      <MyRCFieldForm />
      <MyForm />
    </div>
  );
}

export default App;
