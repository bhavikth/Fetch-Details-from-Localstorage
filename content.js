var token = localStorage.getItem("OneTrust.ZenTenant")
chrome.runtime.sendMessage({
  token
})
