module.exports = (tailwind) => {

    tailwind.addVariant('active', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.active${separator}${className}:active`
        })
    });

};