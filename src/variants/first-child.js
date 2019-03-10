module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addVariant('first-child', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.first-child${separator}${className}:first-child`
        })
    });

};