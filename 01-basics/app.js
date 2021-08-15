const app = Vue.createApp({
    data() {
        return {
            band: 'FooFighters',
            lead: 'Dave Grohl',
            members: 5,
            url: 'https://www.foofighters.com/'
        }
    },
    methods: {
        changeBand(band) {
            this.band = band;
        }
    }
});

app.mount('#app');