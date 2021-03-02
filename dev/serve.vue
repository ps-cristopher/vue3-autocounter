<template>
  <div id="app" class="main">
    <h5 class="mb-0">Vue3 AutoCounter</h5>
    <button class="mr-1" @click="pause()">Pause</button>
    <button class="mr-1" @click="resume()">Resume</button>
    <button class="mr-1" @click="reset()">Restart</button>
    <button @click="start()">Start</button>
    <br>
    <vue3-autocounter ref="counter" :startAmount="500" :endAmount="10000" :duration="10000" :autoinit="false"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vue3Autocounter from '@/vue3-autocounter.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3Autocounter
  },
  methods: {
    pause() {
      this.$refs.counter.pause();
    },
    resume() {
      this.$refs.counter.resume();
    },
    reset() {
      this.$refs.counter.reset();
    },
    start() {
      this.$refs.counter.start();
    }
  }
});
</script>

<style scoped>
.main {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 5rem;
  text-align: center;
  color: purple;
}

.mr-1 {
  margin-right: 1rem;
}

.mb-0 {
  margin-bottom: 0rem;
}
</style>
