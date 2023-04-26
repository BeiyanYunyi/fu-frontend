import type { Component } from 'solid-js';

const Landing: Component = () => (
  <div class="h-[100vh] flex flex-col">
    <div class="flex-grow" />
    <div class="m-auto flex flex-col items-center">
      <h1 class="text-5xl line-height-normal">Night has fallen</h1>
      <h2 class="text-3xl text-[#b7b7b7]">Protect yourself</h2>
    </div>
    <div class="flex-grow" />
    <div class="nm-flat p-8 m-4 rounded-xl">
      <h1 class="text-3xl text-center">机构列表</h1>
    </div>
  </div>
);

export default Landing;
