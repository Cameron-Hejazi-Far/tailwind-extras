module.exports = (tailwind) => {

    // tailwind.addComponents({
    // TODO: implement
    // });

};

/*
.radio {
  & input[type=radio] {
    @apply absolute appearance-none outline-none select-none inline-block opacity-0 align-baseline m-0 no-underline;
    & + label {
      @apply relative block cursor-pointer align-middle text-grey-darkest pl-8;

      &::before, &:before {
        @apply absolute pin-l pin-t rounded-full border border-grey w-6 h-6 pointer-events-none;
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
        @apply absolute inline-block rounded-full bg-blue pin-l pin-t pointer-events-none;
        content: "";
        -webkit-transform: scale(.5);
        -ms-transform: scale(.5);
        transform: scale(.5);
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}










.radio input[type=radio] {
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

.radio input[type=radio] + label {
  position: relative;
  display: block;
  cursor: pointer;
  vertical-align: middle;
  color: #3d4852;
  padding-left: 2rem;
}

.radio input[type=radio] + label::before,
.radio input[type=radio] + label:before {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #b8c2cc;
  width: 1.5rem;
  height: 1.5rem;
  pointer-events: none;
  content: "";
}

.radio input[type=radio]:focus + label::before,
.radio input[type=radio]:focus + label:before {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);
}

.radio input[type=radio]:hover + label:not(:disabled)::before,
.radio input[type=radio]:hover + label:not(:disabled):before {
  border-color: #8795a1;
}

.radio input[type=radio]:disabled + label,
.radio input[type=radio].disabled + label {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

.radio input[type=radio]:checked + label::after,
.radio input[type=radio]:checked + label:after {
  position: absolute;
  display: inline-block;
  border-radius: 9999px;
  background-color: #3490dc;
  left: 0;
  top: 0;
  pointer-events: none;
  content: "";
  -webkit-transform: scale(.5);
          transform: scale(.5);
  width: 1.5rem;
  height: 1.5rem;
}

 */