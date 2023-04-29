import type { Component } from 'solid-js';
import style9 from 'style9';

const styles = style9.create({
  landingContainer: { height: '100vh', display: 'flex', flexDirection: 'column' },
  titleContainer: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: '2.25rem',
    '@media (min-width: 768px)': {
      fontSize: '3rem',
    },
    lineHeight: 1.5,
  },
  subtitle: {
    fontSize: '1.5rem',
    '@media (min-width: 768px)': { fontSize: '1.875rem' },
    color: '#b7b7b7',
  },
  instListTitleContainer: {
    backgroundImage: 'linear-gradient(145deg, rgba(115, 115, 115, 0.15) 15%, rgb(43, 45, 47) 80%);',
    boxShadow: '20px 20px 60px #161718, -20px -20px 60px #404346',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '0.75rem',
  },
  instListTitle: { fontSize: '1.875rem', textAlign: 'center', lineHeight: 1.2 },
});

const Landing: Component = () => (
  <div class={styles('landingContainer')}>
    <div class={styles('titleContainer')}>
      <h1 class={styles('title')}>Night has fallen</h1>
      <h2 class={styles('subtitle')}>Protect yourself</h2>
    </div>
    <div class={styles('instListTitleContainer')}>
      <h1 class={styles('instListTitle')}>机构列表</h1>
    </div>
  </div>
);

export default Landing;
