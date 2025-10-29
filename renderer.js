const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const ping = async () => {
  const response = await versions.ping();
  information.innerText = response;
};

const pingButton = document.getElementById("ping");
pingButton.addEventListener("click", ping);
