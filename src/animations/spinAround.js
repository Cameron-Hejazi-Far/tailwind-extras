let { animation, transform } = require('./_helpers');

module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addUtilities(animation('spinAround', transform('rotate(0)'), transform('rotate(359deg)')));

};