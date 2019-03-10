module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addVariant('active', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.active${separator}${className}:active`
        })
    });

};