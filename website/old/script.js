/*TODO:
  1. Recreate the Home Section <>
  2. Create an intro animation <>
  3. Revamp the Tech Stack
  4. Change the buttons <>
  5. Add Experience section
  6. Get Subtle Background Images
  7. Add Accessibilty features
  */

window.onload = () => {
  const navBar = document.querySelector("nav");
  const scrollProgress = document.getElementById("scroll-progress-bar");
  let scrollProgressBarWidth = scrollProgress.clientWidth - 4; // Conpensate for CSS insert offset
  let scrollableHeight = parseFloat(
    (document.body.getBoundingClientRect().height - window.innerHeight).toFixed(
      4
    )
  );
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const techStack = document.getElementById("tech-stack");
  const projects = document.getElementById("projects");
  //   let homePosition = home.offsetTop;
  let aboutPosition = about.offsetTop;
  let techStackPosition = techStack.offsetTop;
  let projectsPosition = projects.offsetTop;
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const techStackLink = document.getElementById("tech-stack-link");
  const projectsLink = document.getElementById("projects-link");
  // let refColumnGap = parseFloat(
  //   getComputedStyle(homeLink.parentElement).columnGap.slice(0, -2)
  // ).toFixed(2);

  let homeAbsWidth = homeLink.offsetWidth;
  let aboutAbsWidth = aboutLink.offsetWidth;
  let techStackAbsWidth = techStackLink.offsetWidth;
  let projectsWidth = projectsLink.offsetWidth;
  let refColumnGap =
    (scrollProgressBarWidth -
      homeAbsWidth -
      aboutAbsWidth -
      techStackAbsWidth -
      projectsWidth) /
    3;
  let homeWidth = homeAbsWidth + parseFloat(refColumnGap);
  let aboutWidth = aboutAbsWidth + parseFloat(refColumnGap);
  let techStackWidth = techStackAbsWidth + parseFloat(refColumnGap);

  // console.log(
  //   refColumnGap,
  //   homeWidth,
  //   aboutWidth,
  //   techStackWidth,
  //   projectsWidth,
  //   scrollableHeight
  // );
  // console.log(
  //   scrollableHeight,
  //   parseFloat(
  //     (
  //       document.body.getBoundingClientRect().height - window.innerHeight
  //     ).toFixed(4)
  //   )
  // );

  // Home Wipe Effect

  const homeInfo = document.querySelector("#home .info");
  const homeInfoHeading = document.querySelector(
    "#home .info .info-wrapper h1"
  );
  const homeInfoBio = document.querySelector("#home .info .info-wrapper p");
  homeInfo.addEventListener("animationend", () => {
    homeInfoHeading.style.textWrap = "stable";
    homeInfoBio.style.textWrap = "stable";
    document.querySelector("#home .info .info-wrapper").style.overflow =
      "visible";
  });

  // Updates Variables on Screen Resize

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
    scrollableHeight = document.body.scrollHeight - window.innerHeight;
    refColumnGap = parseFloat(
      getComputedStyle(homeLink.parentElement).columnGap.slice(0, -2)
    ).toFixed(2);
    techStackPosition = techStack.offsetTop;
    projectsPosition = projects.offsetTop;
    homeWidth = homeLink.offsetWidth + parseFloat(refColumnGap);
    techStackWidth = techStackLink.offsetWidth + parseFloat(refColumnGap);
    projectsWidth = projectsLink.offsetWidth;
  });

  window.addEventListener("resize", handleResize);

  // Scroll Events

  window.addEventListener("scroll", () => {
    let progressWidth;
    let scrollY = parseFloat(window.scrollY.toFixed(4));

    if (scrollY <= aboutPosition) {
      progressWidth = (scrollY / aboutPosition) * homeWidth;
    } else if (scrollY <= techStackPosition) {
      progressWidth = (scrollY / techStackPosition) * aboutWidth + homeWidth;
    } else if (scrollY <= projectsPosition) {
      progressWidth =
        (scrollY / projectsPosition) * techStackWidth +
        (homeWidth + aboutWidth);
    } else if (scrollY <= scrollableHeight) {
      progressWidth =
        (Math.floor(window.scrollY) / scrollableHeight) * projectsWidth +
        (scrollProgressBarWidth - projectsWidth);
    } else {
      progressWidth = scrollProgressBarWidth;
    }
    scrollProgress.style.setProperty("--progress-width", `${progressWidth}px`);
    // console.log(
    //   Math.floor(window.scrollY),
    //   scrollableHeight,

    //   projectsWidth,
    //   progressWidth
    // );
    // console.log(window.scrollY, scrollY);

    // NavBar Show/Hide Fade Animation

    if (Math.floor(window.scrollY) >= techStackPosition / 2) {
      navBar.style.opacity = 1;
      navBar.style.height = `${3.5}dvh`;
      navBar.style.padding = `${0.2}rem ${1.75}rem ${0.15}rem`;
    } else {
      navBar.style.opacity = 0;
      navBar.style.height = 0;
      navBar.style.padding = 0;
    }
  });
};
