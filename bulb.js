const Bulb = {
    data() {
        return {
            appName: 'Bulb App',
            bulbSwitch: false,
            bulbState: 'off',
            switchState: 'on'
        };
    },

    methods: {
        switchImage() {
            this.bulbSwitch = !this.bulbSwitch;
            switch(this.bulbState) {
                case 'off':
                    this.bulbState = 'on';
                    this.switchState = 'off';
                break
                case 'on':
                    this.bulbState = 'off';
                    this.switchState = 'on';
            }
        },
    },
};

Vue.createApp(Bulb).mount('#app')