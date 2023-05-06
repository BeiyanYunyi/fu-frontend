import { Show, For, type JSX } from 'solid-js';

const DetailList = <T extends readonly any[], U extends JSX.Element>(props: {
  items: T;
  children: (item: T[number]) => U;
  listClasses?: string;
  detailsClasses?: string;
  summaryClasses?: string;
  summaryContent?: JSX.Element;
}) => (
  <Show when={props.items.length !== 0}>
    <div class={props.listClasses}>
      {props.children(props.items[0])}
      <Show when={props.items.length > 1}>
        <details class={props.detailsClasses}>
          <summary class={props.summaryClasses}>{props.summaryContent}</summary>
          <For each={props.items.slice(1)}>{(item) => props.children(item)}</For>
        </details>
      </Show>
    </div>
  </Show>
);

export default DetailList;
