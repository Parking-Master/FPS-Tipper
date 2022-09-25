# Parking-Master-Tipper (tipper.js API)
This API for FPS and FPS only is a notifier that gives tips throughout gameplay on the official web-game, or desktop app.
##### A quick walkthrough of how it works
___
Check the Notification API Is not added _\\/_
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Add it automatically</b> - `document.body.innerHTML += "..."`
<br>
Check the Notification API Is added _\\/_
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>(void)</b> - `void(0)`
```
w.Notiflix ? void(0) : document.body.innerHTML += `<script src="https://cdn.jsdelivr.net/gh/notiflix/Notiflix@latest/dist/notiflix-aio-3.2.5.min.js"></script>`;
```
___
\> Create `tips[]` array with each type and text
```
const tips = [{ type: "tip", text: "New and existing game modes are already out!" }, { type: "tip", text: "Gamepads like Xbox and PlayStation controllers are supported too" }, { type: "reminder", text: "Signup for a free account and save your status wherever you go" }, { type: "reminder", text: "You can now customize your bots in Preferences." }, { type: "reminder", text: "Like the game? Check us out on GitHub for future updates and features." }];
```
___
\> Create `tip()` function that chooses a random tip from `tips[]` array
```
function tip() {
  let tipChosen = tips[Math.floor(Math.random() * tips.length)];
  let prefix = tipChosen.type == "reminder" ? "Hey there!" : "Did you know?";
  let result = prefix + " " + tipChosen.text;
  return(result);
}
```
___
\> If the Notifier API (`w.i`) is disabled or `undefined`/missing, use the built in one
```
if (!w.i) {
  w.i = w;
  w.i.n = (msg) => new Notification("FPS", { body: msg });
} else {
  w.i.n = w.i.Notify;
}
```
___
\> Use the `tip()` function and notify the tip to the user
```
function tip() {
  let tipChosen = tips[Math.floor(Math.random() * tips.length)];
  let prefix = tipChosen.type == "reminder" ? "Hey there!" : "Did you know?";
  let result = prefix + " " + tipChosen.text;
  return(result);
}
```
### Licensing and commercial use
This software is free of use _but beware_ it is designed specifically for the
<br><b>FPS</b> project so it will not work for any other use.
<br>
<br>
The full license is availabe at Root/LICENSE.
<br>
<br>
_This API is an Alias of [Parking-Master-Tipper](https://github.com/Parking-Master/Parking-Master-Tipper)._