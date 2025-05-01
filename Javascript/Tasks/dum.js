function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

console.log(throttle())


function handleScroll() {
    console.log('Scroll event handled');
  }
  
  const throttledHandleScroll = throttle(handleScroll, 200);
  throttledHandleScroll()
//   console.log(throttledHandleScroll())
  
//   window.addEventListener('scroll', throttledHandleScroll);