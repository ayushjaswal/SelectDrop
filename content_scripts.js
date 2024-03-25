// Function to inject CSS to change selection color
function changeSelectionColor(colorVal) {
  const css = `::selection { background-color: ${colorVal}; }`;
  console.log({ colorVal });
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
changeSelectionColor("#6072f44d");
