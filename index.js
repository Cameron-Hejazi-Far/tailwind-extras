let TailwindExtras = require('./src/TailwindExtras');

module.exports = (params = {}) => {
    return ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

        // Wrap all of the params in a class so we can easily pass it to the other modules
        let tailwind = new TailwindExtras(addUtilities, addComponents, addVariant, e, prefix, config, params);

        // Fonts
        require('./src/fonts/lato')(tailwind);

        // Animations
        require('./src/animations/spinAround')(tailwind);
        require('./src/animations/fadeIn')(tailwind);
        require('./src/animations/fadeOut')(tailwind);

        // Variants
        require('./src/variants/active')(tailwind);
        require('./src/variants/disabled')(tailwind);
        require('./src/variants/first-child')(tailwind);
        require('./src/variants/important')(tailwind);
        require('./src/variants/last-child')(tailwind);

        // Utilities
        require('./src/utilities/blur')(tailwind);

        // Components
        require('./src/components/button')(tailwind);
        require('./src/components/checkbox')(tailwind);
        require('./src/components/dropdown')(tailwind);
        require('./src/components/input')(tailwind);
        require('./src/components/list')(tailwind);
        require('./src/components/modal')(tailwind);
        require('./src/components/radio')(tailwind);
        require('./src/components/select')(tailwind);
        require('./src/components/slider')(tailwind);
        require('./src/components/table')(tailwind);
        require('./src/components/tabs')(tailwind);
        require('./src/components/tag')(tailwind);
        require('./src/components/tooltip')(tailwind);

    };
};