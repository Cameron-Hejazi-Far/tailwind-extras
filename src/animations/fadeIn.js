let { animation } = require('./_helpers');

module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addUtilities(animation('fadeIn', {'opacity': '0'}, {'opacity': '1'}));

};
