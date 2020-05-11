function loadJSON() {
    var json = undefined; 
    var xobj = new XMLHttpRequest(); 
    xobj.overrideMimeType("application/json"); 
    xobj.open('GET','../credentials/credentials.json',true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            json = xobj.responseText; 
        }
    }; 
    xobj.send(null); 
    return Promise.resolve(json); 
}