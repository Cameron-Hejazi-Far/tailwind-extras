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

    param(key, defaultToConfig = null, defaultVal = null) {
        if (typeof(this._params) === 'object' && this._params.hasOwnProperty(key)) {
            return this._params[key];
        }
        if (typeof(defaultToConfig) === 'string' && defaultToConfig.length > 0) {
            return this.config(defaultToConfig, defaultVal);
        }
        return defaultVal;
    }

};

module.exports = TailwindExtras;
