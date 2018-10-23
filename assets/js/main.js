
window._head    = new Head();
window._sidebar = new Sidebar();
window._content = new Content();

let tmpElements = [
    window._head,
    window._sidebar,
    window._content
];

tmpElements.forEach(function(item){
    item.Show();
});

setTimeout(function(){
    showPage(window._content,'main');
},600);
