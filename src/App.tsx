import { Component } from 'solid-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@unocss/reset/tailwind-compat.css';
import 'virtual:uno.css';
import './App.css';
import Landing from './components/Landing';
import getList from './utils/getList';

const App: Component = () => {
  getList();
  return (
    <>
      <Landing />
      <div>
        <div class="nm-flat p-8">
          <h1 class="text-3xl text-center">机构列表</h1>
        </div>
      </div>
    </>
  );
};
export default App;
