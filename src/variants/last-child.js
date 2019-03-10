module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addVariant('last-child', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.last-child${separator}${className}:last-child`
        })
    });

};