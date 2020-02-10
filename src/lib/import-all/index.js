export function importAll(context) {
  return context.keys().map(key => context(key));
}
