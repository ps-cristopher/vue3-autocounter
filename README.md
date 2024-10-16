<h1 align='center'>
  Vue3 Autocounter
</h1>

<p align='center'>
  <a href="https://vue3autocounter.cristopherps.dev/" target="_blank">
    <img src="https://cristopherps.com/assets/vue3-autocounter.gif" width="700">
  </a>
</p>

<p align='center'>
  <a href="https://vue3autocounter.cristopherps.dev/" target="_blank">
    View Demo
  </a> | <a href="https://vue3autocounter.cristopherps.dev/docs" target="_blank"> 
    Full Docs 
  </a>
</p>

<p align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
</p>

<p align='center'>
  <img src="https://img.shields.io/npm/dt/vue3-autocounter?style=for-the-badge"/>
  <img src="https://img.shields.io/npm/v/vue3-autocounter?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/ps-cristopher/vue3-autocounter?style=for-the-badge"/>
  <img src="https://img.shields.io/github/languages/top/ps-cristopher/vue3-autocounter?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/ps-cristopher/vue3-autocounter?style=for-the-badge"/>
</p>

<p align='center'>
  <a href="https://twitter.com/ps_cristopher" target="_blank">
    <img src="https://img.shields.io/twitter/follow/ps_cristopher?style=social"/>
  </a>
  <a href="https://github.com/ps-cristopher" target="_blank">
    <img src="https://img.shields.io/github/followers/ps-cristopher?label=%40ps-cristopher&style=social"/>
  </a>
</p>

## Description
A lightweight Vue 3 component made with TypeScript, you can use it to create an animation that shows an automatic count for any quantity with a specified duration, it can be used for counting up and down.

## Installation
You can install it easily with NPM.

```sh
npm install vue3-autocounter
```

## Usage
Add the vue3-autocounter to your main.js for a global import:

```javascript
import { createApp } from 'vue';
import Vue3Autocounter from 'vue3-autocounter';
import App from './App.vue';

createApp(App)
.component('vue3-autocounter', Vue3Autocounter)
.mount('#app'); 
```

If you prefer yo can import it directly in your Single File Component:

```javascript
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
  name: 'Demo',
  components: {
    'vue3-autocounter': Vue3autocounter
  }
});   
```

Finally you can use it on your template:


```html
<template>
  <vue3-autocounter ref='counter' :startAmount='0' :endAmount='2021' :duration='3' prefix='$' suffix='USD' separator=',' decimalSeparator='.' :decimals='2' :autoinit='true' @finished='alert(`Counting finished!`)'/>
</template>
```

Go to <a href="https://vue3autocounter.cristopherps.dev/docs"> full documentation </a> with properties, events and methods specifications.

## Support
Send me an email to
<a href="mailto:cristopher.p.s@gmail.com">cristopher.p.s@gmail.com</a>
You can also send me a direct message on Twitter
<a href="https://twitter.com/ps_cristopher">@ps_cristopher</a>

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contributors
<p align="center">
  <a href="https://github.com/ps-cristopher/vue3-autocounter/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=ps-cristopher/vue3-autocounter" />
  </a>
</p>

Made with [contributors-img](https://contrib.rocks).

## License
[MIT](https://choosealicense.com/licenses/mit/) License © 2021 [Cristopher PS](https://github.com/ps-cristopher)
