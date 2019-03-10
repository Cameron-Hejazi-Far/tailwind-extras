module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    // addComponents({
    // TODO: implement
    // });

};

/*
.checkbox input[type=checkbox] {
  position: absolute;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  display: inline-block;
  opacity: 0;
  vertical-align: baseline;
  margin: 0;
  text-decoration: none;
}

.checkbox input[type=checkbox] + label {
  position: relative;
  display: block;
  cursor: pointer;
  vertical-align: middle;
  color: #3d4852;
  padding-left: 2rem;
}

.checkbox input[type=checkbox] + label::before,
.checkbox input[type=checkbox] + label:before {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: .25rem;
  border-width: 1px;
  border-color: #b8c2cc;
  width: 1.5rem;
  height: 1.5rem;
  pointer-events: none;
  content: "";
}

.checkbox input[type=checkbox]:focus + label::before,
.checkbox input[type=checkbox]:focus + label:before {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);
}

.checkbox input[type=checkbox]:hover + label:not(:disabled)::before,
.checkbox input[type=checkbox]:hover + label:not(:disabled):before {
  border-color: #8795a1;
}

.checkbox input[type=checkbox]:disabled + label,
.checkbox input[type=checkbox].disabled + label {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

.checkbox input[type=checkbox]:checked + label::after,
.checkbox input[type=checkbox]:checked + label:after {
  position: absolute;
  display: inline-block;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: #3490dc;
  pointer-events: none;
  content: "";
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  width: .375rem;
  height: .6rem;
  top: .405rem;
  left: .6rem;
}











.checkbox {
  & input[type=checkbox] {
    @apply absolute appearance-none outline-none select-none inline-block opacity-0 align-baseline m-0 no-underline;
    & + label {
      @apply relative block cursor-pointer align-middle text-grey-darkest pl-8;

      &::before, &:before {
        @apply absolute pin-l pin-t rounded border border-grey w-6 h-6 pointer-events-none;
        content: "";
      }
    }
    &:focus + label::before, &:focus + label:before {
      @apply outline-none shadow-outline;
    }
    &:hover + label:not(:disabled)::before, &:hover + label:not(:disabled):before {
      @apply border-grey-dark;
    }
    &:disabled + label, &.disabled + label {
      @apply opacity-50 cursor-not-allowed pointer-events-none;
    }
    &:checked + label {
      &::after, &:after {
        @apply absolute inline-block border-r-2 border-b-2 border-blue pointer-events-none;
        content: "";
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        width: .375rem;
        height: .6rem;
        top: .405rem;
        left: .6rem;
      }
    }
  }
}

 */