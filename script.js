//Color wheel
var ColorPicker = VueColorPicker;
let chosenHue = null;
Vue.createApp({
    components: {
        ColorPicker: ColorPicker,
    },
    setup() {
        const color = Vue.reactive({
            hue: 50,
            saturation: 100,
            luminosity: 50,
            alpha: 1,
        });
        return {
            color
        };
    },
}).mount('#app');


