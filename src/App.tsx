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
              <For each={item.names}>{(name) => <h2 class="text-xl">{name}</h2>}</For>
              <div class="flex flex-col gap-2 my-2 break-all">
                <div>
                  <p>网址</p>
                  <For each={item.sites}>{(site) => <p>{site}</p>}</For>
                </div>
                <Show when={item.locations[0] && item.locations[0] !== 'UNKNOWN'}>
                  <div>
                    <p>地址</p>
                    <For each={item.locations}>{(location) => <p>{location}</p>}</For>
                  </div>
                </Show>
                <div>
                  <p>来源</p>
                  <For each={item.sources}>{(source) => <p>{source}</p>}</For>
                </div>
              </div>
              <Show when={item.persecution.known}>
                <p class="text-red-400">可能存在对跨性别者的迫害</p>
              </Show>
              <Show when={!item.checked}>
                <p>待审核</p>
              </Show>
              <ul>
                <For each={item.persecution.evidences}>
                  {(evidence) => (
                    <li>
                      <a
                        href={evidence}
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
            </li>
          )}
        </For>
      </ul>
    </>
  );
};
export default App;
