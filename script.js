// -------------- For Tenant ID ---------------------------
var tokenBtn = document.getElementById("get-token-btn")

var alertbox = document.getElementById("new");
 alertbox.onclick = function(e) {
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
     chrome.tabs.executeScript(tabs[0].id, { file: "content.js" })
     chrome.runtime.onMessage.addListener(function(message) {
       var msg = message.token;
       var result = msg.slice(1,msg.length-1);
  alert(result + "\n\nClick OK to copy your Tenant ID");
  if(message && message.token){
          copyClipboard(result)
       }
window.close()
})
})
}
// var sandbox = document.getElementById("sandbox")
// sandbox.onclick = function(e) {}


// tokenBtn.onclick = function() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.executeScript(tabs[0].id, { file: "content.js" })
//     chrome.runtime.onMessage.addListener(function(message) {
//       if(message && message.token){
//         copyClipboard(message.token)
//       }
//       //window.close()
//     })
//   })
// }

function copyClipboard(text){
  const temp = document.createElement("textarea")
  document.body.append(temp)
  temp.value = text
  temp.select()
  document.execCommand("copy")
  temp.remove()
}
// -------------- For Bearer Token ---------------------------

var tokenBtn = document.getElementById("get-token-btn")

var alertbox = document.getElementById("new1");
 alertbox.onclick = function(e) {
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
     chrome.tabs.executeScript(tabs[0].id, { file: "content1.js" })
     chrome.runtime.onMessage.addListener(function(message) {
       var msg = message.bearer;

       //var result = msg.slice(17,msg.length-2427);
       console.log(msg);
  alert(msg + "\n\nClick OK to copy your Bearer Token");
  if(message && message.bearer){
          copyClipboard(msg)
       }
window.close()
})
})
}
// var sandbox = document.getElementById("sandbox")
// sandbox.onclick = function(e) {}


// tokenBtn.onclick = function() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.executeScript(tabs[0].id, { file: "content.js" })
//     chrome.runtime.onMessage.addListener(function(message) {
//       if(message && message.token){
//         copyClipboard(message.token)
//       }
//       //window.close()
//     })
//   })
// }

function copyClipboard(text){
  const temp = document.createElement("textarea")
  document.body.append(temp)
  temp.value = text
  temp.select()
  document.execCommand("copy")
  temp.remove()
}


// -------------- For Tenant ID ---------------------------
document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("Smart people do not INSPECT page");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("Smart people do not INSPECT page");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("Smart people do not INSPECT page");
      return false;
    }
  }, false);

  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("Smart people do not INSPECT page");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("Smart people do not INSPECT page");
      window.event.returnValue = false;
    });
  }
