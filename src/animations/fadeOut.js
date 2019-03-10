let { animation } = require('./_helpers');

module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addUtilities(animation('fadeOut', {'opacity': '1'}, {'opacity': '0', 'display': 'none'}));

};