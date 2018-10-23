
window._head    = new Head();
window._sidebar = new Sidebar();
window._content = new Content();

window._head.Show();
window._sidebar.Show();
window._content.Show();

setTimeout(function(){
    showPage(window._content,'main');
},600);
