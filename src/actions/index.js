export const ATTACH_DOM = 'ATTACH_DOM';

export default {
  attachDOM: (el) => {
    return { type: ATTACH_DOM, el };
  }
};
