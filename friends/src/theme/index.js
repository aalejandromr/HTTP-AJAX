const keyframes = {
  show: `@keyframes show {
    to {
      opacity: 1;
      transform: none;
    }
  }`
};

const animation = {
  show: `
    animation: show 500ms ease-out forwards;
    ${keyframes.show}
  `,
  xAxis: `
    animation-delay: 300ms;
    opacity: 0;
    transform: translateX(50px);
    margin: 0 40px;
  `,
  yAxis: `
    animation-delay: 300ms;
    opacity: 0;
    transform: translateY(50px);
    margin: 0 40px;
  `
};

const theme = {
  animation
};

export default theme;
