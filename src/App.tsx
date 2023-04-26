import { Component, For, Show, createResource } from 'solid-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@unocss/reset/tailwind-compat.css';
import 'virtual:uno.css';
import './App.css';
import Landing from './components/Landing';
import getList from './utils/getList';

const App: Component = () => {
  const [data] = createResource(getList);
  return (
    <>
      <Landing />
      <ul>
        <For each={data()}>
          {(item) => (
            <li class="nm-flat p-4 m-4 rounded-xl">
              <h2 class="text-xl">{item.name}</h2>
              <div class="flex flex-col gap-2 my-2 break-all">
                <div>
                  <p>网址</p>
                  <p>{item.website}</p>
                </div>
                <div>
                  <p>地址</p>
                  <p>{item.location}</p>
                </div>
                <div>
                  <p>来源</p>
                  <p>{item.source}</p>
                </div>
              </div>
              <Show when={item.persecutingTrans}>
                <p>可能存在对跨性别者的迫害</p>
              </Show>
              <Show when={item.factChecking}>
                <p>待审核</p>
              </Show>
              <Show when={item.proof}>
                <ul>
                  <For each={item.proof}>
                    {(item2) => (
                      <li>
                        <a
                          href={item2}
                          rel="noreferrer noopener"
                          target="_blank"
                          class="text-blue underline"
                        >
                          相关证据
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </Show>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};
export default App;
