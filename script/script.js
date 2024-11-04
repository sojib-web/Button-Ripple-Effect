const btnEl = document.querySelector(".btn");

btnEl?.addEventListener("mouseover", (event) => {
  // @ts-ignore
  const x = event.pageX - btnEl.offsetLeft;
  // @ts-ignore
  const y = event.pageY - btnEl.offsetTop;

  // @ts-ignore
  btnEl.style.setProperty("--xPos", +x + "px");
  // @ts-ignore
  btnEl.style.setProperty("--yPos", +y + "px");
});
