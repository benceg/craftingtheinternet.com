import colors from '../manifests/colors.json';

const components = {
  HOME: colors.easternBlue,
  ABOUT: colors.wattle,
  LIST: colors.wattle,
};

export default (state = 'HOME', action = {}) => components[action.type] || state;