module.exports = (args) => {

    // Fonts
    require('./src/fonts/lato')(args);

    // Animations
    require('./src/animations/spinAround')(args);
    require('./src/animations/fadeIn')(args);
    require('./src/animations/fadeOut')(args);

    // Variants
    require('./src/variants/active')(args);
    require('./src/variants/disabled')(args);
    require('./src/variants/first-child')(args);
    require('./src/variants/important')(args);
    require('./src/variants/last-child')(args);

    // Utilities
    require('./src/utilities/blur')(args);

    // Components
    require('./src/components/button')(args);
    require('./src/components/checkbox')(args);
    require('./src/components/dropdown')(args);
    require('./src/components/input')(args);
    require('./src/components/list')(args);
    require('./src/components/modal')(args);
    require('./src/components/radio')(args);
    require('./src/components/select')(args);
    require('./src/components/table')(args);
    require('./src/components/tabs')(args);
    require('./src/components/tag')(args);

};
