var id_cur=[];
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if(request.todo=="showPageAction"){
		chrome.tabs.query({active:true,currentWindow:true},function(tabs){
			console.log("check");
			var n=id_cur.includes(String(tabs[0].id),0);
			if (!n){
				chrome.pageAction.show(tabs[0].id);
				chrome.tabs.query({active: true,currentWindow: true},function(tabs){
				var url_cur = tabs[0].url;
				//chrome.tabs.update({url: url_cur});
				if(url_cur.includes("cXVvcmE")){
				chrome.tabs.update({url: url_cur+"P3NoYXJlPTE"});
				id_cur.push(String(tabs[0].id));
				}
			});}
				
	});
	}
});
//Zml4IGxpbmtzIGJlZm9yZSBsb2FkaW5nPw
//YWRkIGZlYXR1cmUgdG8gY2hhbmdlIGNvbG9ycyBmcm9tIHRlcm1pbmFs