
function isEmpty(obj){
    return obj==null || obj===undefined || (typeof obj==='undefined');
}

function readPage(pageName, callback) {
    fetch('/assets/'+pageName+'.html').then(function(response) {
        response.text().then(function(text){
            callback(text);
        })
    });
}

function showPage(content, pageName){
    content.element.innerHTML = '';
    Gen.Create('div',function(pageContent) {
        pageContent.style.color=null;
        readPage(pageName, function(text){
            pageContent.innerHTML = text;
        });
    }, null, content.element, 100);
}
