// Runtime translation helpers. `strings` and `LOCALE` are provided by the
// locale bundle (see bundle-pro.mjs), so this file has no imports.

export function t(key, vars = {}) {
  const value = key.split(".").reduce((node, part) => (node ? node[part] : undefined), strings);
  if (typeof value !== "string") return key;
  return value.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? vars[name] : `{${name}}`));
}

export function fmtNumber(n) {
  return n.toLocaleString(LOCALE === "en" ? "en-US" : undefined);
}
