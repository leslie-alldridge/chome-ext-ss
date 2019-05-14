chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.ready === "ready") {
    if (confirm("Screenshot?")) {
      sendResponse({ download: "download" });
    }
  }
});
