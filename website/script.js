window.onload = () => {
  const navBar = document.querySelector("nav");
  const scrollProgress = document.getElementById("scroll-progress-bar");
  let scrollProgressBarWidth = scrollProgress.clientWidth - 4; // Conpensate for CSS insert offset
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  const about = document.getElementById("about");
  const techStack = document.getElementById("tech-stack");
  const projects = document.getElementById("projects");
  //   let aboutPosition = about.offsetTop;
  let techStackPosition = techStack.offsetTop;
  let projectsPosition = projects.offsetTop;
  const aboutLink = document.getElementById("about-link");
  const techStackLink = document.getElementById("tech-stack-link");
  const projectsLink = document.getElementById("projects-link");
  let refColumnGap = parseFloat(
    getComputedStyle(aboutLink.parentElement).columnGap.slice(0, -2)
  ).toFixed(2);
  let aboutWidth = aboutLink.offsetWidth + parseFloat(refColumnGap);
  let techStackWidth = techStackLink.offsetWidth + parseFloat(refColumnGap);
  let projectsWidth = projectsLink.offsetWidth;

  console.log(
    refColumnGap,
    aboutWidth,
    techStackWidth,
    projectsWidth,
    totalHeight
  );
  //   console.log(scrollProgressBarWidth);

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
    refColumnGap = parseFloat(
      getComputedStyle(aboutLink.parentElement).columnGap.slice(0, -2)
    ).toFixed(2);
    techStackPosition = techStack.offsetTop;
    projectsPosition = projects.offsetTop;
    aboutWidth = aboutLink.offsetWidth + parseFloat(refColumnGap);
    techStackWidth = techStackLink.offsetWidth + parseFloat(refColumnGap);
    projectsWidth = projectsLink.offsetWidth;
  });

  window.addEventListener("resize", handleResize);

  window.addEventListener("scroll", () => {
    let progressWidth;
    //   Math.sin(((Math.floor(window.scrollY) / totalHeight) * Math.PI) / 2) *
    //   scrollProgressBarWidth;

    if (Math.floor(window.scrollY) <= techStackPosition) {
      progressWidth =
        (Math.floor(window.scrollY) / techStackPosition) * aboutWidth;
    } else if (Math.floor(window.scrollY) <= projectsPosition) {
      progressWidth =
        (Math.floor(window.scrollY) / projectsPosition) * techStackWidth +
        aboutWidth;
    } else {
      progressWidth =
        (Math.floor(window.scrollY) / totalHeight) * projectsWidth +
        (scrollProgressBarWidth - projectsWidth);
    }
    scrollProgress.style.setProperty("--progress-width", `${progressWidth}px`);
    console.log(
      Math.floor(window.scrollY),
      progressWidth,
      Math.floor(window.scrollY) / projectsPosition
    );

    // NavBar Show/Hide Fade Animation
    if (Math.floor(window.scrollY) >= techStackPosition / 2) {
      //   navBar.style.display = "flex";
      navBar.style.opacity = 1;
      navBar.style.height = `${3.5}dvh`;
    } else {
      //   navBar.style.display = "none";
      navBar.style.opacity = 0;
      navBar.style.height = 0;
    }

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
