class TailwindExtras {

    constructor(addUtilities, addComponents, addVariant, e, prefix, config, params) {
        this.addUtilities = addUtilities;
        this.addComponents = addComponents;
        this.addVariant = addVariant;
        this.e = e;
        this.prefix = prefix;
        this.config = config;
        this._params = params;
    }

    addAnimation(name, from, to) {
        this.addUtilities({
            [`@-webkit-keyframes ${name}`]: {
                'from': from,
                'to': to,
            },
            [`@keyframes ${name}`]: {
                'from': from,
                'to': to,
            },
        });
    }

    addFonts(fonts) {
        let fontsCss = [];
        for (let i = 0; i < fonts.length; i++) {
            fontsCss.push({
                '@font-face': fonts[i],
            });
        }
        this.addUtilities(fontsCss);
    }

    param(key, defaultToConfig = '', defaultVal = '') {
        // TODO: get param... if not available, then default to the config stuff
    }

};

module.exports = TailwindExtras;
