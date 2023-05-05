import { Component, For, Show, createResource } from 'solid-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@unocss/reset/tailwind.css';
import style9 from 'style9';
import './App.css';
import Landing from './components/Landing';
import getList from './utils/getList';
import Persecution from './components/Persecution';

const styles = style9.create({
  nmFlat: {
    backgroundImage: 'linear-gradient(145deg, rgba(115, 115, 115, 0.15) 15%, rgb(43, 45, 47) 80%);',
    boxShadow: '20px 20px 60px #161718, -20px -20px 60px #404346',
  },
  institutionListContainer: {
    gap: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '@media (min-width: 768px)': {
      display: 'grid',
      gridAutoFlow: 'row dense',
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (min-width: 1280px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    '@media (min-width: 1920px)': {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    margin: '2rem',
  },
  institutionListItem: {
    padding: '1rem',
    borderRadius: '0.75rem',
  },
  textXl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
  institutionListItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    wordBreak: 'break-all',
  },
  linkText: { color: 'rgb(96, 165, 250)', textDecorationLine: 'underline' },
  checking: { flexShrink: 0, marginTop: '0.4rem' },
  gray: { color: '#D8D7D7' },
  textNormal: { fontSize: '1.25rem', lineHeight: 1.2 },
  name: { fontSize: '2rem', lineHeight: 1.2, fontWeight: 700 },
  siteList: { display: 'flex', flexDirection: 'column', alignItems: 'start' },
  site: {
    textDecorationLine: 'underline',
  },
  source: { fontSize: '1rem', lineHeight: 1.25, textAlign: 'right', color: '#B7B7B7' },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

const App: Component = () => {
  const [data] = createResource(getList);
  return (
    <>
      <Landing />
      <ul class={styles('institutionListContainer')}>
        <For each={data()}>
          {(item) => (
            <li class={styles('institutionListItem', 'nmFlat')}>
              <div class={styles('headerContainer')}>
                <Show
                  when={item.names.length > 1}
                  fallback={<h2 class={styles('name', 'gray')}>{item.names[0]}</h2>}
                >
                  <div>
                    <h2 class={styles('name', 'gray')}>{item.names[0]}</h2>
                    <details>
                      <summary class={styles('gray')}>其它名称</summary>
                      <For each={item.names.slice(1)}>
                        {(name) => <h2 class={styles('name', 'gray')}>{name}</h2>}
                      </For>
                    </details>
                  </div>
                </Show>
                <Show when={!item.checked}>
                  <p class={styles('checking')}>待审核</p>
                </Show>
              </div>
              <div class={styles('institutionListItemContainer')}>
                <div class={styles('siteList')}>
                  <For each={item.sites}>
                    {(site) => (
                      <a
                        class={styles('site', 'gray', 'textNormal')}
                        rel="noreferrer noopener"
                        target="_blank"
                        href={site}
                      >
                        {site}
                      </a>
                    )}
                  </For>
                </div>
                <Show when={item.locations[0] && item.locations[0] !== 'UNKNOWN'}>
                  <div>
                    <For each={item.locations}>
                      {(location) => <p class={styles('gray', 'textNormal')}>{location}</p>}
                    </For>
                  </div>
                </Show>
                <Show when={item.persecution.known}>
                  <Persecution detail={item.persecution} />
                </Show>
              </div>
              <div class={styles('source')}>
                <p>
                  信息来源
                  <Show when={item.sources.length === 1}>： {item.sources[0]}</Show>
                </p>
                <Show when={item.sources.length > 1}>
                  <For each={item.sources}>{(source) => <p>{source}</p>}</For>
                </Show>
              </div>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};
export default App;
