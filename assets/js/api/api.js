var last_page_name = null;

function isEmpty(obj) {
    return obj===undefined || obj==null;
}

function readPage(pageName, callback) {
    fetch('/assets/'+pageName+'.html').then(function(response) {
        response.text().then(function(text){
            callback(text);
        });
    });
}

function showPage(content, pageName) {
    if(last_page_name===pageName)
        return;
    let element = content.element;
    readPage(pageName, function(text) {
        Gen.Create('div',function(pageContent) {
            element.HideChilds(pageContent);
        }, function(pageContent) {
            pageContent.innerHTML = text;
            pageContent.style.color=null;
            if(element.childElementCount===0)
                element.appendChild(pageContent);
        }, element, 250);
    });
    last_page_name = pageName;
}
