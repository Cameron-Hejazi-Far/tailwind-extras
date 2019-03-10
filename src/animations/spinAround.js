module.exports = (tailwind) => {

    tailwind.addAnimation('spinAround', {'transform': 'rotate(0)'}, {'transform': 'rotate(359deg)'});

};