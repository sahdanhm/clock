setInterval(function () {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let m;
  let awake = null;

  if (sec % 2 == 0) {
    document.getElementById('colon').style.color = 'whitesmoke';
  } else {
    document.getElementById('colon').style.color = 'black';
  }

  if (hour <= 12) {
    m = 'AM';
  } else {
    m = 'PM';
  }

  if (min < 10) {
    document.getElementById('minute').textContent = '0' + min;
  } else {
    document.getElementById('minute').textContent = min;
  }
  document.getElementById('hour').textContent = hour;
  document.getElementById('ampm').textContent = m;
}, 0);

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
  disableBtnFS(true, false);
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
  disableBtnFS(false, true);
}
setInterval(() => {
  if (document.fullscreenElement) {
    disableBtnFS(true, false);
  } else {
    disableBtnFS(false, true);
  }
}, 1000);

// check if available
if ('wakeLock' in navigator) {
  alert('awakeLock is supported');
} else {
  alert('awakeLock is NOT supported');
  disableBtn(true, true);
}

// Always on Display
async function lockAwakeScreen() {
  awake = await navigator.wakeLock.request('screen');
  disableBtn(true, false);
  alert('display will be always on');
}

// Release always on displya
function closeAwakeScreen() {
  awake.release().then(() => {
    disableBtn(false, true);
    alert('display will NOT always on display');
  });
}

function disableBtnFS(full, notFull) {
  document.getElementById('fs').disabled = full;
  document.getElementById('notfs').disabled = notFull;
}

function disableBtn(keep, notKeep) {
  document.getElementById('keep').disabled = keep;
  document.getElementById('notkeep').disabled = notKeep;
}
