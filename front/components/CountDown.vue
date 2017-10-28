<template>
    <div class="countdown">
        <template  v-if="days > 0">
            <span class="digit">{{ days | twoDigits }}</span>
            <span class="text">days</span>
        </template>
        <template v-if="hours > 0">
            <span class="digit">{{ hours | twoDigits }}</span>
            <span class="text">hours</span>
        </template>
        <template class="block" v-if="minutes > 0">
            <span class="digit">{{ minutes | twoDigits }}</span>
            <span class="text">minutes</span>
        </template>
        <template class="block">
            <span class="digit">{{ seconds | twoDigits }}</span>
            <span class="text">seconds</span>
        </template>
        remaining
    </div>
</template>

<script>
    export default {
        props: [
            'time',
        ],
        data() {
            return {
                totalSeconds: 0,
                autoStart: true,
            }
        },
        created() {
            this.init();

            if (this.autoStart !== false) {
                this.start();
            }

            this.$on('stop', this.stop);
            this.$on('start', this.start);
            this.$on('restart', this.restart);
        },
        watch: {
            totalSeconds() {
                this.countDownProgress();

                if (this.totalSeconds <= 0) {
                    this.countDownFinished()
                }
            }
        },
        computed: {
            seconds() {
                return this.totalSeconds % 60;
            },
            minutes() {
                return Math.trunc(this.totalSeconds / 60) % 60;
            },
            hours() {
                return Math.trunc(this.totalSeconds / 60 / 60) % 24;
            },
            days() {
                return Math.trunc(this.totalSeconds / 60 / 60 / 24);
            }
        },
        methods: {
            init() {
                this.totalSeconds = this.time;
            },
            restart() {
                this.stop();
                this.init();
                this.start();
            },
            start() {
                this.interval = setInterval(
                    () => this.totalSeconds--
                    , 1000)
            },
            stop() {
                clearInterval(this.interval);
            },
            countDownFinished() {
                this.stop();
                this.$emit('onFinish');
            },
            countDownProgress() {
                this.$emit('onProgress', this.totalSeconds);
            }
        },
    }
</script>
