window.onload = () => {
  const scrollProgress = document.getElementById("scroll-progress-bar");
  let scrollProgressBarWidth = scrollProgress.clientWidth - 4; // Conpensate for CSS insert offset
  let totalHeight = document.body.scrollHeight - window.innerHeight;

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const handleResize = debounce(() => {
    scrollProgressBarWidth = scrollProgress.clientWidth - 4;
    totalHeight = document.body.scrollHeight - window.innerHeight;
  });

  window.addEventListener("resize", handleResize);

  window.addEventListener("scroll", () => {
    let progressWidth =
      Math.sin(((Math.floor(window.scrollY) / totalHeight) * Math.PI) / 2) *
      scrollProgressBarWidth;
    scrollProgress.style.setProperty("--progress-width", `${progressWidth}px`);
    console.log(scrollProgressBarWidth, totalHeight);

    //   let progressWidth =
    //     Math.sqrt((window.scrollY / totalHeight).toFixed(2)) *
    //     scrollProgressBarWidth;
    //   console.log(Math.floor(window.scrollY));
    //   console.log(totalHeight);
    //   console.log((window.scrollY / totalHeight).toFixed(2));
    //     console.log(progressWidth);
    //     console.log((window.scrollY / totalHeight).toFixed(2));
    //     console.log(
    //       Math.asin((window.scrollY / totalHeight).toFixed(2)) * (180 / Math.PI)
    //     );
  });
  //   document.onresize = () => {
  //     scrollProgressBarWidth = scrollProgress.clientWidth - 4; // Conpensate for CSS insert offset
  //     totalHeight = document.body.scrollHeight - window.innerHeight;
  //   };
};
