import { VNode, h } from 'snabbdom';

export const infoI = (): VNode => {
  return h(
    'svg',
    {
      class: { 'fill-current': true, 'text-white': true },
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewbox: '0 0 16 16',
        width: '20',
        height: '20',
      },
    },
    [
      h('path', {
        attrs: {
          'fill-rule': 'evenodd',
          d: 'M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z',
        },
      }),
    ],
  );
};
