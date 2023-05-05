import type { Component } from 'solid-js';
import style9 from 'style9';

const styles = style9.create({
  landingContainer: { height: '50vh', display: 'flex', flexDirection: 'column' },
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
    fontSize: '4rem',
    // '@media (min-width: 768px)': {
    //  fontSize: '3rem',
    // },
    lineHeight: 1.5,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '2rem',
    // '@media (min-width: 768px)': { fontSize: '1.875rem' },
    color: '#b7b7b7',
    letterSpacing: '0.01em',
    fontWeight: 400,
  },
});

const Landing: Component = () => (
  <div class={styles('landingContainer')}>
    <div class={styles('titleContainer')}>
      <h1 class={styles('title')}>机构列表</h1>
      <h2 class={styles('subtitle')}>
        Night has fallen;
        <br />
        Protect yourself.
      </h2>
    </div>
  </div>
);

export default Landing;
