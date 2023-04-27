import type { Component } from 'solid-js';

const Landing: Component = () => (
  <div class="h-[100vh] flex flex-col">
    <div class="m-auto flex flex-col items-center justify-center flex-grow">
      <h1 class="text-4xl md:text-5xl line-height-normal">Night has fallen</h1>
      <h2 class="text-2xl md:text-3xl text-[#b7b7b7] mt-4">Protect yourself</h2>
    </div>
    <div class="nm-flat p-8 m-4 rounded-xl">
      <h1 class="text-3xl text-center">机构列表</h1>
    </div>
  </div>
);

export default Landing;
