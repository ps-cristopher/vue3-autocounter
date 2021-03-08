<template>
	<span>{{displayedAmount}}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Data {
  timestamp: number,
  startTimestamp: number,
  currentStartAmount: number,
  currentAmount: number,
  currentDuration: number,
  paused: boolean,
  remaining: number,
  animationFrame: string
}

export default defineComponent({
	name: "Vue3Autocounter",
  interval: null,
  props: {
    startAmount: {
      type: Number,
      default: 0
    },
    endAmount: {
      type: Number,
      default: 0,
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    },
    autoinit: {
      type: Boolean,
      default: true
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    decimals: {
      type: Number,
      default: 0,
      validator(decimals: number): boolean {
        return decimals >= 0;
      }
    }
  },
	data(): Data {
		return {
      timestamp: null,
      startTimestamp: null,
			currentAmount: 0,
      currentStartAmount: 0,
      currentDuration: 0,
      paused: false,
      remaining: null,
      animationFrame: null
		};
	},
  mounted (): void {
    this.currentAmount = this.startAmount;
    this.currentStartAmount = this.startAmount;
    this.currentDuration = this.duration;
    this.remaining = this.duration;
    if (this.autoinit) this.start();
    else this.paused = true;
    this.$emit('mounted');
  },
  unmounted(): void {
    this.cancelAnimation();
  },
  watch: {
    startAmount(): void {
      this.reset();
    },
    endAmount(): void {
      this.reset();
    }
  },
  computed: {
    isCountingUp(): boolean {
      return this.endAmount > this.startAmount;
    },
    displayedAmount(): string {
      return `${this.prefix}${this.formatedAmount}${this.suffix}`;
    },
    formatedAmount(): string {
      const regex = /(\d+)(\d{3})/;

      let numberString: string = this.currentAmount.toFixed(this.decimals);
      numberString += '';
      let numberArray:Array<string> = numberString.split('.');
      let numbers: string = numberArray[0];
      let decimals: string = numberArray.length > 1 ? this.decimal + numberArray[1] : '';
      let isNumber = !isNaN(parseFloat(this.separator));

      if (this.separator && !isNumber) {
        while (regex.test(numbers)) numbers = numbers.replace(regex, '$1' + this.separator + '$2');
      }
      
      return this.prefix + numbers + decimals + this.suffix;
    }
  },
	methods: {
    start(): void {
      this.cancelAnimation();
      this.currentStartAmount = this.startAmount;
      this.startTimestamp = null;
      this.currentDuration = this.duration;
      this.paused = false;
      this.animationFrame = window.requestAnimationFrame(this.counting);
    },
    pause(): void {
      if (this.paused) return;
      this.cancelAnimation();
      this.paused = true;
    },
    resume(): void {
      if (!this.paused) return;
      this.startTimestamp = null;
      this.currentDuration = +this.remaining;
      this.currentStartAmount = +this.currentAmount;
      this.animationFrame = window.requestAnimationFrame(this.counting);
      this.paused = false;
    },
    reset(): void {
      this.paused = false;
      this.startTimestamp = null;
      this.cancelAnimation();
      this.currentAmount = this.startAmount;
      if (this.autoinit) this.start();
      else this.paused = true;
    },
    counting(timestamp: number): void {
      this.timestamp = timestamp;
      if (!this.startTimestamp) this.startTimestamp = timestamp;
      let progress: number = timestamp - this.startTimestamp;
      this.remaining = this.currentDuration - progress;
      
      if (!this.isCountingUp) {
        this.currentAmount = this.currentStartAmount - ((this.currentStartAmount - this.endAmount) * (progress / this.currentDuration));
        this.currentAmount = this.currentAmount < this.endAmount ? this.endAmount : this.currentAmount;
      } else {
        this.currentAmount = this.currentStartAmount + (this.endAmount - this.currentStartAmount) * (progress / this.currentDuration);
        this.currentAmount = this.currentAmount > this.endAmount ? this.endAmount : this.currentAmount;
      }

      if (progress < this.currentDuration) this.animationFrame = window.requestAnimationFrame(this.counting);
      else this.$emit('finished');
		},
    cancelAnimation(): void {
      if (this.animationFrame) window.cancelAnimationFrame(this.animationFrame);
    }
  }
});
</script>
