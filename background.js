(function() {
    var type = {};

    chrome.runtime.onMessage.addListener(function(request, sender, callback) {
        if (request.type && request.type.startsWith("t:")) {
            type[sender.tab.id] = request.type.substr(2).replace("`", "-");
            chrome.pageAction.show(sender.tab.id);
        } else {
            type[sender.tab.id] = null;
            chrome.pageAction.hide(sender.tab.id);
        }
    });

    chrome.pageAction.onClicked.addListener(function(tab) {
        chrome.tabs.update(tab.id, { url: "https://docs.microsoft.com/dotnet/api/" + type[tab.id] });
    });
})();