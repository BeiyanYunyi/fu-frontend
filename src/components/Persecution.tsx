import Modal from 'solid-dialog';
import { IoWarning } from 'solid-icons/io';
import type { Component } from 'solid-js';
import { For, Match, Show, Switch, createSignal } from 'solid-js';
import style9 from 'style9';
import type { Content } from '../utils/getList';

const styles = style9.create({
  warningIcon: { color: '#FFA5A5', display: 'inline-block' },
  persecution: {
    display: 'inline-block',
    color: '#FFF',
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    marginLeft: '0.25rem',
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationColor: '#FFA5A5',
  },
  modalButton: { textAlign: 'start' },
});

const PersecutionInnerText: Component<{ underline?: boolean }> = (props) => (
  <>
    <span class={styles('warningIcon')}>
      <IoWarning />
    </span>
    <p class={styles('persecution', props.underline && 'underline')}>
      可能存在对跨性别者的迫害<Show when={props.underline}> ↗</Show>
    </p>
  </>
);

const MultiEvidences: Component<{ detail: Content['persecution'] }> = (props) => {
  const [modalOpen, setModalOpen] = createSignal(false);
  return (
    <>
      <button class={styles('modalButton')} type="button" onClick={() => setModalOpen(true)}>
        <PersecutionInnerText underline />
      </button>
      <Modal isShown={modalOpen()} closeModal={() => setModalOpen(false)} dismissText="× 关闭">
        <ul>
          <For each={props.detail.evidences}>
            {(evidence, index) => (
              <li>
                <a
                  href={evidence}
                  rel="noreferrer noopener"
                  target="_blank"
                  class={styles('persecution', 'underline')}
                >
                  证据 {index() + 1}
                </a>
              </li>
            )}
          </For>
        </ul>
      </Modal>
    </>
  );
};

const Persecution: Component<{ detail: Content['persecution'] }> = (props) => (
  <Switch fallback={<MultiEvidences detail={props.detail} />}>
    <Match when={props.detail.evidences.length === 0}>
      <div>
        <PersecutionInnerText />
      </div>
    </Match>
    <Match when={props.detail.evidences.length === 1}>
      <a rel="noreferrer noopener" target="_blank" href={props.detail.evidences[0]}>
        <PersecutionInnerText underline />
      </a>
    </Match>
  </Switch>
);

export default Persecution;
