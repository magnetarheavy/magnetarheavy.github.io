var last_page_name = null;

function isEmpty(obj) {
    return obj===undefined || obj==null;
}

Array.prototype.insert = function(item,index) {
    let defIndex = isEmpty(index)?0:index;
    this.splice(defIndex, 0, item);
};

function read(url, callback){
    fetch('.'+url).then(function(response) {
        response.text().then(function(text){
            callback(text);
        });
    });
}

function readPage(pageName, callback) {
    read('/assets/'+pageName+'.html', callback);
}

function readText(textName, callback) {
    read(textName, callback);
}

function openTab(url){
    window.open(url, '_blank').focus();
}

function showPage(content, pageName, callback) {
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

            if(!isEmpty(callback))
                callback();

        }, element, 250);
    });
    last_page_name = pageName;
}

var cssFix = function(){
    var u = navigator.userAgent.toLowerCase(),
        addClass = function(el,val){
            if(!el.className) {
                el.className = val;
            } else {
                var newCl = el.className;
                newCl+=(" "+val);
                el.className = newCl;
            }
        },
        is = function(t){return (u.indexOf(t)!=-1)};
    addClass(document.getElementsByTagName('html')[0],[
        (!(/opera|webtv/i.test(u))&&/msie (\d)/.test(u))?('ie ie'+RegExp.$1)
            :is('firefox/2')?'gecko ff2'
            :is('firefox/3')?'gecko ff3'
                :is('gecko/')?'gecko'
                    :is('opera/9')?'opera opera9':/opera (\d)/.test(u)?'opera opera'+RegExp.$1
                        :is('konqueror')?'konqueror'
                            :is('applewebkit/')?'webkit safari'
                                :is('mozilla/')?'gecko':'',
        (is('x11')||is('linux'))?' linux'
            :is('mac')?' mac'
            :is('win')?' win':''
    ].join(" "));
}();
