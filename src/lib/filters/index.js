function install(Vue, filters = {}) {
  if (install.installed) return;

  for (const i in filters) {
    const filter = filters[i];
    Vue.filter(i, filter);
  }
}

export const filters = {
  install,
};

export default filters;
