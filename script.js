document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    const block = event.target.closest(".block");
    if (block) {
      console.log(event);
      block.classList.toggle("block--active");
    }
  });
});
