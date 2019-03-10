module.exports = (tailwind) => {

    tailwind.addVariant('last-child', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.last-child${separator}${className}:last-child`
        })
    });

};