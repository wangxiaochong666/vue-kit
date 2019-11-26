function install(Vue, filters = {}) {
  if (install.installed) return;

  for (const i in filters) {
    // eslint-disable-line no-unused-vars
    const filter = filters[i];
    Vue.filter(i, filter);
  }
}

export const filters = { install };

export default filters;
