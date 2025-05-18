const interval =  setInterval ( () => {
    const now = new Date();
    console.log(`Current Time : ${now.toLocaleTimeString()} - TIck`);
}, 2000)



setTimeout(() => {
    clearInterval(interval);
    console.log("Interval Cleared");
}, 11000);