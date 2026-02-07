<button onclick="notify()">Show Notice</button>

<script>
function notify() {
  if (Notification.permission === "granted") {
    new Notification("Karibu!", {
      body: "App inafanya offline na online 🔥"
    });
  } else {
    Notification.requestPermission();
  }
}
</script>
