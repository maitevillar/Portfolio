'use strict';

let centerContent = document.getElementById("center-content");
let centerFold = document.getElementById("center-fold");
let foldsContent = Array.from(document.getElementsByClassName("fold-content"));

let targetScroll = -(
  document.documentElement.scrollTop || document.body.scrollTop
);

let currentScroll = targetScroll;

let tick = () => {
  let overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

  document.body.style.height = overflowHeight + window.innerHeight + "px";

  targetScroll = -(
    document.documentElement.scrollTop || document.body.scrollTop
  );

  currentScroll += (targetScroll - currentScroll) * 0.1;
  foldsContent.forEach(content => {
    content.style.transform = `translateY(${currentScroll}px)`;
  });

  requestAnimationFrame(tick);

};

tick();
