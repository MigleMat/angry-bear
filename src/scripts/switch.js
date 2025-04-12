const toggle = document.getElementById("bear-switch");
const bearHead = document.querySelector(".switch__bear-head");

let toggleCount = 0;

toggle.addEventListener("change", () => {
  if (!toggle.checked) {
    // Switch is OFF → increase toggle count
    toggleCount++;

    // 4. Change bear expression based on count
    if (toggleCount >= 4) {
      bearHead.classList.remove("switch__bear--annoyed");
      bearHead.classList.add("switch__bear--furious");
    } else if (toggleCount >= 2) {
      bearHead.classList.add("switch__bear--annoyed");
    }
  } else {
    // Switch is ON → calm the bear down
    bearHead.classList.remove("switch__bear--furious", "switch__bear--annoyed");
  }
});
