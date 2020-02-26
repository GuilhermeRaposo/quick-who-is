const button = document.getElementById('go');
button.addEventListener('mousedown', getPageUrl);

// Gets the current active page's url
function getPageUrl(){
  browser.tabs.query({currentWindow: true, active: true})
  .then(tabs => openTab(tabs[0].url) )
}

// Formats url, removing http, https, www, etc
function formatUrl(url){
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');

  if (url.indexOf('/') != -1){
    url = url.substring(0, url.indexOf('/'));
  }
  
  
  return url;
}

// Open a new tab on the corret url format
function openTab(url){
  url = formatUrl(url)

  browser.tabs.create({
    active: true, 
    url: 'https://who.is/whois/' + url
  });
}