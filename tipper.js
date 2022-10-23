const w = window === window.top ? window : window.top;
w.Notiflix ? void(0) : import("https://cdn.jsdelivr.net/gh/notiflix/Notiflix@latest/dist/notiflix-aio-3.2.5.min.js");
w.i = w.Notiflix;
if (!w.i) {
  w.i = w;
  w.i.n = (msg) => new Notification("FPS2", { body: msg });
} else {
  w.i.n = w.i.Notify;
  w.i.n.init({timeout:5000,info:{background:"#fff",textColor:"#38b6ff",notiflixIconColor:"#38b6ff"}});
}
const tips = [{ type: "tip", text: "Playing with Game Modes lets you use different types of misc, items, and more!" }, { type: "tip", text: "We support Gamepads (like Xbox and PS) on the menu and in-game" }, { type: "reminder", text: "Signup for a free account and save status, points, and rewards wherever you go" }, { type: "reminder", text: "In Preferences, you can customize all settings, loadouts, and more!" }, { type: "reminder", text: "Like the game? Check us out on GitHub for future updates and feature requests." }];
function tip() {
  let tipChosen = tips[Math.floor(Math.random() * tips.length)];
  let prefix = tipChosen.type == "reminder" ? "Hey there!" : "Did you know?";
  let result = prefix + " " + tipChosen.text;
  return(result);
}
w.i.n.info(tip());
