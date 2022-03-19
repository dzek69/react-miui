WIP.

Old MIUI inspired design components for React. Breaking changes may happen until `1.0.0`.

Usage:
- Import `global.scss`
- Import any needed component from named exports

Your bundler needs to handle scss files, including scss modules.

For next.js projects use something like this with your next.config.js:
```typescript
const createTranspileModules = require("next-transpile-modules");
const withTM = createTranspileModules(["react-miui"]);
module.exports = withTM({});
```
