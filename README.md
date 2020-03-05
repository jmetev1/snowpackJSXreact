<p align="center">
  <img alt="Logo" src="https://www.snowpack.dev/img/logo.png" height="240">
</p>

<p align="center">
   <strong>Snowpack</strong><br/> Build web applications with less tooling and 10x faster iteration. No bundler required.
</p>

Want to use [Snowpack](https://www.snowpack.dev) build tool, but can't give up React and JSX? Me too. So I made this.

It's got:

1. Built in code splitting/dynamic imports and the simplest router courtesy of [Luke Jackson](https://github.com/lukejacksonn/create-es-react-app) Even fallback routing!
2. Practically instant reload (on my 2015 Macbook anyway ). Sure babel has to run, but only on the one file you changed.
3. [Material-UI](https://material-ui.com/)! because who wants to make their own Selects?

first time:

```bash
npm run cleanStart
```
(No need `npm install` before.)

after:

```bash
npm run dev
```
