function install(Vue, options) {
  if (install.installed) return;
  Object.assign(Vue.config, options);
}

export const setConfig = {
  install
};

export default setConfig;
