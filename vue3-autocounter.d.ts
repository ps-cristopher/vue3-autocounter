import { DefineComponent, Plugin } from 'vue';

declare const Vue3Autocounter: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default Vue3Autocounter;
