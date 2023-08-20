// Temporary blocker for copyright issues
if (!(location.hostname.endsWith(".uk.to") || location.hostname === "localhost")) document.documentElement.innerHTML = `
<div style="font-family: Arial, Helvetica, sans-serif; font-weight: thinner">
  <img src="https://avatars.githubusercontent.com/u/88283567?v=4" style="width: 10%; position: relative; left: 45%">
  <h1 style="text-align: center; font-size: 50px"><small style="font-family: monospace !important">403:</small> OOPS!</h1>
  <p style="text-align: center"><i>This doesn't seem to be the real FPS</i>. Please contact me at <a style="text-decoration: none !important; color: #333; border-bottom: 1px solid currentColor" href="mailto:parkingmaster@email.com">parkingmaster@email.com</a> if you think this is an issue.</p>
  <p style="text-align: center">If this domain is not the original domain <b>https://fps${location.host.match(/[0-9]/gi)[0]}.uk.to</b>, this is a type of <i>spoofing</i> to trick you into stealing sensitive information.
  <br>
  <small>Read more at <b>https://www.cloudflare.com/learning/ssl/what-is-domain-spoofing/</b>.</p></small>
  <hr>
  <p style="text-align: center">Please <a style="text-decoration: none !important; color: #333; border-bottom: 1px solid currentColor" href="https://${"fps" + location.host.match(/[0-9]/gi)[0] + ".uk.to"}">go here</a> instead. If you think this project is owned by someone else (and not Parking Master), please report it on <b>GitHub</b>.</p>
</div>
`;

const w = window === window.top ? window : window.top;
w.Notiflix ? void(0) : import("https://cdn.jsdelivr.net/gh/notiflix/Notiflix@latest/dist/notiflix-aio-3.2.5.min.js");
w.i = w.Notiflix;
if (!w.i) {
  w.i = w;
  w.i.n = (msg) => new Notification("FPS2", { body: msg });
} else {
  w.i.n = w.i.Notify;
  w.i.n.init({position:"left-top",timeout:5000,info:{background:"#fff",textColor:"#38b6ff",notiflixIconColor:"#38b6ff"}});
}
const tips = [{ type: "tip", text: "Playing with Game Modes lets you use different types of misc, items, and more!" }, { type: "tip", text: "We support Gamepads (like Xbox and PS) on the menu and in-game" }, { type: "reminder", text: "Signup for a free account and save status, points, and rewards wherever you go" }, { type: "reminder", text: "In Preferences, you can customize all settings, loadouts, and more!" }, { type: "reminder", text: "Like the game? Check us out on GitHub for future updates and feature requests." }];
function tip() {
  let tipChosen = tips[Math.floor(Math.random() * tips.length)];
  let prefix = tipChosen.type == "reminder" ? "Hey there!" : "Did you know?";
  let result = prefix + " " + tipChosen.text;
  return(result);
}
w.i.n.info(tip());
