var bearer = localStorage.getItem("access_token")
chrome.runtime.sendMessage({
  bearer
})

// var bearer = sessionStorage.getItem("OneTrust.AppVersion")
// chrome.runtime.sendMessage({
//   bearer
// })
