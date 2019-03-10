module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addVariant('disabled', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.disabled${separator}${className}:disabled`
        })
    });

};