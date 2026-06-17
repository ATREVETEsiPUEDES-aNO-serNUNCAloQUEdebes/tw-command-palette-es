# Typescript plugin template for TiddlyWiki5

Este complemento se basa en[[Souk21/TW-commandpalette|https://github.com/Souk21/TW-commandpalette]] ，Muchas gracias por su trabajo, este complemento ha mejorado enormemente mi productividad durante el ano pasado. Copie su codigo fuente principal al chino y agregue una funcion de busqueda pinyin para que podamos usarlo de manera mas flexible en el entorno chino.。

## Funcion

Presione ctrl/cmd + P Abre el cuadro de busqueda, si lo presionas agrega uno mas shift Se puede evocar el cuadro de funciones.。

Puedes usar Pinyin al buscar。

## During development

There are some scripts you can run to boost your development.

After `npm i --legacy-peer-deps`:

- `npm run dev` to pack the plugin in the `dist/` directory, this will setup a site that will auto reload when you have changes. But this is development mode, will produce a much larget bundle than the final version, so only for dev.
- `npm run dev-html` to setup the demo site locally. Re-run this command and refresh browser to see changes. In this way you can see the real bundle size same as your user will get.

You will need `--legacy-peer-deps` when `npm i` if you are using latest nodejs. This is a bug in npm.

### Add a second ts file

Add new file name (without `.ts`) to `package.json`'s `tsFiles` field. And build script will read it and compile files in it.

## After the plugin is complete

### Publish

Enable github action in your repo (in your github repo - setting - action - general) if it is not allowed, and when you tagging a new version `vx.x.x` in a git commit and push, it will automatically publish to the github release.

### Demo

You will get a Github Pages demo site automatically after publish. If it is 404, you may need to manually enable Github Pages in your github repo:

Settings - Pages (on left side) - Source - choose `gh-pages` branch

## Examples

- https://github.com/tiddly-gittly/tw-react
- https://github.com/tiddly-gittly/slate-write

## Trouble Shooting

### ▲ [WARNING] Import "useFilter" will always be undefined because the file "node_modules/tw-react/dist/plugins/linonetwo/tw-react/index.js" has no exports

See [tw-react](https://github.com/tiddly-gittly/tw-react/blob/eb858d33737bfa6cff35f58f27770321080980f6/esbuild.config.mjs#L35-L43)'s esbuild config, you will need to exclude the file from the modification here.
