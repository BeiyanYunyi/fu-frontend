import { Component, For, Show, createResource } from 'solid-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@unocss/reset/tailwind-compat.css';
import style9 from 'style9';
import './App.css';
import Landing from './components/Landing';
import getList from './utils/getList';

const styles = style9.create({
  nmFlat: {
    backgroundImage: 'linear-gradient(145deg, rgba(115, 115, 115, 0.15) 15%, rgb(43, 45, 47) 80%);',
    boxShadow: '20px 20px 60px #161718, -20px -20px 60px #404346',
  },
  institutionListItem: {
    padding: '1rem',
    margin: '1rem',
    borderRadius: '0.75rem',
  },
  textXl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
  institutionListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    wordBreak: 'break-all',
  },
  textRed400: { color: 'rgb(248, 113, 113)' },
  linkText: { color: 'rgb(96, 165, 250)', textDecorationLine: 'underline' },
});

const App: Component = () => {
  const [data] = createResource(getList);
  return (
    <>
      <Landing />
      <ul>
        <For each={data()}>
          {(item) => (
            <li class={styles('institutionListItem', 'nmFlat')}>
              <For each={item.names}>{(name) => <h2 class={styles('textXl')}>{name}</h2>}</For>
              <div class={styles('institutionListContainer')}>
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
                <p class={styles('textRed400')}>可能存在对跨性别者的迫害</p>
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
                        class={styles('linkText')}
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
