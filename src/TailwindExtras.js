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

    param(key, defaultToConfig = null, defaultVal = []) {
        let returnConfig = null;
        if (typeof(this._params) === 'object' && this._params.hasOwnProperty(key)) {
            returnConfig = this._params[key];
        }

        if ((returnConfig === null) && typeof(defaultToConfig) === 'string' && defaultToConfig.length > 0) {
            returnConfig = this.config(defaultToConfig, defaultVal);
        }

        if (returnConfig === null) {
            returnConfig = defaultVal;
        }

        // Check if any extended properies were specified, and add them
        if (
            typeof(this._params) === 'object' && this._params.hasOwnProperty('extend') &&
            typeof(this._params.extend) === 'object' && this._params.extend.hasOwnProperty(key)
        ) {
            let extendedParams = this._params.extend[key];
            if (typeof(extendedParams) === 'object' && typeof(returnConfig) === 'object') {
                for (let i in extendedParams) {
                    returnConfig[i] = extendedParams[i];
                }
            }
        }

        return this.parseAnyColors(returnConfig);
    }

    parseAnyColors(obj) {
        if (typeof(obj) === 'object') {
            for (let key in obj) {
                obj[key] = this.parseAnyColors(obj[key]);
            }
        } else if (typeof(obj) === 'string') {
            if (obj.indexOf('colors.') === 0) {
                obj = this.config(obj, '#ffffff');
            }
        }
        return obj;
    }

    generateButtonStyles() {
        return this.param('buttons', null, {
            default: {
                bg: this.config('colors.white', '#ffffff'),
                bgHover: this.config('colors.white', '#ffffff'),
                bgActive: this.config('colors.grey-lighter', '#f1f5f8'),
                text: this.config('colors.grey-darkest', '#3d4852'),
                textHover: this.config('colors.grey-darkest', '#3d4852'),
                textActive: this.config('colors.grey-darkest', '#3d4852'),
                border: this.config('colors.grey', '#b8c2cc'),
                borderHover: this.config('colors.grey-dark', '#8795a1'),
                borderActive: this.config('colors.grey-dark', '#8795a1'),
            },
            primary: {
                bg: this.config('colors.teal', '#4dc0b5'),
                bgHover: this.config('colors.teal-dark', '#38a89d'),
                bgActive: this.config('colors.teal-darker', '#20504f'),
                text: this.config('colors.white', '#ffffff'),
                textHover: this.config('colors.white', '#ffffff'),
                textActive: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
                borderHover: this.config('colors.transparent', 'transparent'),
                borderActive: this.config('colors.transparent', 'transparent'),
            },
            link: {
                bg: this.config('colors.blue', '#3490dc'),
                bgHover: this.config('colors.blue-dark', '#2779bd'),
                bgActive: this.config('colors.blue-darker', '#1c3d5a'),
                text: this.config('colors.white', '#ffffff'),
                textHover: this.config('colors.white', '#ffffff'),
                textActive: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
                borderHover: this.config('colors.transparent', 'transparent'),
                borderActive: this.config('colors.transparent', 'transparent'),
            },
            info: {
                bg: this.config('colors.purple', '#9561e2'),
                bgHover: this.config('colors.purple-dark', '#794acf'),
                bgActive: this.config('colors.purple-darker', '#382b5f'),
                text: this.config('colors.white', '#ffffff'),
                textHover: this.config('colors.white', '#ffffff'),
                textActive: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
                borderHover: this.config('colors.transparent', 'transparent'),
                borderActive: this.config('colors.transparent', 'transparent'),
            },
            success: {
                bg: this.config('colors.green', '#38c172'),
                bgHover: this.config('colors.green-dark', '#1f9d55'),
                bgActive: this.config('colors.green-darker', '#1a4731'),
                text: this.config('colors.white', '#ffffff'),
                textHover: this.config('colors.white', '#ffffff'),
                textActive: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
                borderHover: this.config('colors.transparent', 'transparent'),
                borderActive: this.config('colors.transparent', 'transparent'),
            },
            warning: {
                bg: this.config('colors.yellow', '#ffed4a'),
                bgHover: this.config('colors.yellow-dark', '#f2d024'),
                bgActive: this.config('colors.yellow-darker', '#684f1d'),
                text: this.config('colors.yellow-darkest', '#453411'),
                textHover: this.config('colors.yellow-darkest', '#453411'),
                textActive: this.config('colors.yellow-darkest', '#453411'),
                border: this.config('colors.transparent', 'transparent'),
                borderHover: this.config('colors.transparent', 'transparent'),
                borderActive: this.config('colors.transparent', 'transparent'),
            },
            danger: {
                bg: this.config('colors.red', '#e3342f'),
                bgHover: this.config('colors.red-dark', '#cc1f1a'),
                bgActive: this.config('colors.red-darker', '#621b18'),
                text: this.config('colors.white', '#ffffff'),
                textHover: this.config('colors.white', '#ffffff'),
                textActive: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
                borderHover: this.config('colors.transparent', 'transparent'),
                borderActive: this.config('colors.transparent', 'transparent'),
            },
        });
    }

    generateCheckboxStyles() {
        return this.param('checkbox', null, {
            bg: this.config('colors.white', '#ffffff'),
            border: this.config('colors.grey', '#b8c2cc'),
            indicator: this.config('colors.blue', '#3490dc'),
            bgHover: this.config('colors.white', '#ffffff'),
            borderHover: this.config('colors.grey-dark', '#8795a1'),
            indicatorHover: this.config('colors.blue', '#3490dc'),
        });
    }

    generateDropdownStyles() {
        return this.param('dropdown', null, {
            bg: this.config('colors.white', '#ffffff'),
            border: this.config('colors.grey', '#b8c2cc'),
            items: {
                bg: this.config('colors.white', '#ffffff'),
                bgHover: this.config('colors.grey-lighter', '#f1f5f8'),
                bgActive: this.config('colors.grey-light', '#dae1e7'),
                text: this.config('colors.grey-darkest', '#3d4852'),
                textHover: this.config('colors.grey-darkest', '#3d4852'),
                textActive: this.config('colors.grey-darkest', '#3d4852'),
            },
        });
    }

    generateInputStyles() {
        return this.param('input', null, {
            shadow: true,
            bg: this.config('colors.white', '#ffffff'),
            bgHover: this.config('colors.white', '#ffffff'),
            bgFocus: this.config('colors.white', '#ffffff'),
            text: this.config('colors.grey-darkest', '#3d4852'),
            textHover: this.config('colors.grey-darkest', '#3d4852'),
            textFocus: this.config('colors.grey-darkest', '#3d4852'),
            border: this.config('colors.grey', '#b8c2cc'),
            borderHover: this.config('colors.grey-dark', '#8795a1'),
            borderFocus: this.config('colors.grey-dark', '#8795a1'),
        });
    }

    generateListStyles() {
        return this.param('list', null, {
            bg: this.config('colors.transparent', 'transparent'),
            border: this.config('colors.grey', '#b8c2cc'),
            bgHover: this.config('colors.blue-lightest', '#6cb2eb'),
            borderHover: this.config('colors.grey', '#b8c2cc'),
        });
    }

    generateModalStyles() {
        return this.param('modal', null, {
            border: this.config('transparent', 'transparent'),
            bg: this.config('colors.white', '#ffffff'),
            text: this.config('colors.grey-darkest', '#3d4852'),
            sectionDividers: this.config('colors.grey', '#b8c2cc'),
            headerBg: this.config('colors.grey-lighter', '#f1f5f8'),
            footerBg: this.config('colors.grey-lighter', '#f1f5f8'),
            titleText: this.config('colors.grey-darkest', '#3d4852'),
            closeBg: this.config('colors.grey', '#b8c2cc'),
            closeBgHover: this.config('colors.grey-dark', '#8795a1'),
            closeBgActive: this.config('colors.grey-darker', '#606f7b'),
            closeX: this.config('colors.white', '#ffffff'),
            closeXHover: this.config('colors.white', '#ffffff'),
            closeXActive: this.config('colors.white', '#ffffff'),
        });
    }

    generateRadioStyles() {
        return this.param('radio', null, {
            bg: this.config('colors.white', '#ffffff'),
            border: this.config('colors.grey', '#b8c2cc'),
            indicator: this.config('colors.blue', '#3490dc'),
            bgHover: this.config('colors.white', '#ffffff'),
            borderHover: this.config('colors.grey-dark', '#8795a1'),
            indicatorHover: this.config('colors.blue', '#3490dc'),
        });
    }

    generateSelectStyles() {
        return this.param('select', null, {
            shadow: true,
            bg: this.config('colors.white', '#ffffff'),
            border: this.config('colors.grey', '#b8c2cc'),
            text: this.config('colors.grey-darkest', '#3d4852'),
            indicator: this.config('colors.blue', '#3490dc'),
            bgHover: this.config('colors.white', '#ffffff'),
            borderHover: this.config('colors.grey-dark', '#8795a1'),
            textHover: this.config('colors.grey-darkest', '#3d4852'),
            indicatorHover: this.config('colors.blue', '#3490dc'),
        });
    }

    generateSliderStyles() {
        return this.param('slider', null, {
            thumbBg: this.config('colors.grey-lightest', '#f8fafc'),
            thumbBorder: this.config('colors.grey', '#b8c2cc'),
            thumbBgHover: this.config('colors.grey-lightest', '#f8fafc'),
            thumbBorderHover: this.config('colors.grey-dark', '#8795a1'),
            thumbBgFocus: this.config('colors.grey-lightest', '#f8fafc'),
            thumbBorderFocus: this.config('colors.grey-dark', '#8795a1'),
            trackBg: this.config('colors.grey-lighter', '#f1f5f8'),
            trackBorder: this.config('colors.grey', '#b8c2cc'),
            trackBgHover: this.config('colors.grey-lighter', '#f1f5f8'),
            trackBorderHover: this.config('colors.grey', '#b8c2cc'),
            trackBgFocus: this.config('colors.grey-lighter', '#f1f5f8'),
            trackBorderFocus: this.config('colors.grey', '#b8c2cc'),
        });
    }

    generateTableStyles() {
        return this.param('table', null, {
            border: this.config('colors.grey', '#b8c2cc'),
            bg: this.config('colors.white', '#ffffff'),
            text: this.config('colors.grey-darkest', '#3d4852'),
            bgHover: this.config('colors.blue-lightest', '#eff8ff'),
            textHover: this.config('colors.grey-darkest', '#3d4852'),
            stripedBg: this.config('colors.blue-lightest', '#eff8ff'),
            stripedText: this.config('colors.grey-darkest', '#3d4852'),
            stripedBgHover: this.config('colors.blue-lighter', '#bcdefa'),
            stripedTextHover: this.config('colors.grey-darkest', '#3d4852'),
        });
    }

    generateTabsStyles() {
        return this.param('tabs', null, {
            border: this.config('colors.grey', '#b8c2cc'),
            bg: this.config('transparent', 'transparent'),
            text: this.config('colors.grey-darkest', '#3d4852'),
            bgHover: this.config('transparent', 'transparent'),
            textHover: this.config('colors.blue', '#3490dc'),
            bgActive: this.config('transparent', 'transparent'),
            textActive: this.config('colors.blue-dark', '#2779bd'),
            bgSelected: this.config('colors.white', '#ffffff'),
            textSelected: this.config('colors.blue', '#3490dc'),
        });
    }

    generateTagStyles() {
        return this.param('tags', null, {
            default: {
                bg: this.config('colors.white', '#ffffff'),
                text: this.config('colors.grey-darkest', '#3d4852'),
                border: this.config('colors.grey', '#b8c2cc'),
            },
            primary: {
                bg: this.config('colors.teal', '#4dc0b5'),
                text: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
            },
            link: {
                bg: this.config('colors.blue', '#3490dc'),
                text: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
            },
            info: {
                bg: this.config('colors.purple', '#9561e2'),
                text: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
            },
            success: {
                bg: this.config('colors.green', '#38c172'),
                text: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
            },
            warning: {
                bg: this.config('colors.yellow', '#ffed4a'),
                text: this.config('colors.yellow-darkest', '#453411'),
                border: this.config('colors.transparent', 'transparent'),
            },
            danger: {
                bg: this.config('colors.red', '#e3342f'),
                text: this.config('colors.white', '#ffffff'),
                border: this.config('colors.transparent', 'transparent'),
            },
        });
    }

    generateTooltipStyles() {
        return this.param('tags', null, {
            bg: 'rgba(0, 0, 0, .6)',
            text: this.config('colors.white', '#ffffff'),
        });
    }

}

module.exports = TailwindExtras;
