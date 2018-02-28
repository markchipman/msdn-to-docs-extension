(function() {
    var assetid = document.querySelector("meta[name='ms.assetid']");

    var type = assetid !== null ? assetid.content.toLowerCase() : null;
    
    chrome.runtime.sendMessage({ type: type }, function(response){});
})();