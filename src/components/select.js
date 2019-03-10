module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    // addComponents({
    // TODO: implement
    // });

};

/*

.select {
  display: inline-block;
  position: relative;
}

.select select {
  display: block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 100%;
  background-color: #fff;
  border-width: 1px;
  border-color: #b8c2cc;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-right: 2rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  color: #3d4852;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.25;
  text-decoration: none;
}

.select select:focus {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);
}

.select select:hover:not(:disabled) {
  border-color: #8795a1;
}

.select select:disabled,
.select select.disabled {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

.select::after,
.select:after {
  position: absolute;
  display: block;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-color: #3490dc;
  border-radius: .125rem;
  width: .5rem;
  height: .5rem;
  right: 0;
  margin-right: .75rem;
  z-index: 10;
  pointer-events: none;
  content: " ";
  top: 50%;
  margin-top: -0.35rem;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: center;
           transform-origin: center;
}






.select {
  @apply inline-block relative;
  & select {
    @apply block appearance-none w-full bg-white border border-grey px-4 py-2 pr-8 rounded shadow text-grey-darkest truncate leading-tight no-underline;
    &:focus {
      @apply outline-none shadow-outline;
    }
    &:hover:not(:disabled) {
      @apply border-grey-dark;
    }
    &:disabled, &.disabled {
      @apply opacity-50 cursor-not-allowed pointer-events-none;
    }
  }
  &::after, &:after {
    @apply absolute block border-l-2 border-b-2 border-blue rounded-sm w-2 h-2 pin-r mr-3 z-10 pointer-events-none;
    content: " ";
    top: 50%;
    margin-top: -0.35rem;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
  }
}




 */