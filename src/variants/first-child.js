module.exports = (tailwind) => {

    tailwind.addVariant('first-child', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.first-child${separator}${className}:first-child`
        })
    });

};