
var Sidebar = function() {
    this.items   = [MainMenu, MusicsMenu, AboutMenu];
    this.element = document.getElementById('sidebar');
};

Sidebar.prototype.items   = null;
Sidebar.prototype.element = null;

Sidebar.prototype.Show = function(){
    let instance = this;
    let parent = this.element;

    Gen.Create('div', function(){
        parent.className='sidebar_hide';
    }, function(element){
        parent.className='sidebar';
        parent.style.backgroundColor='rgb(15, 22, 39)';
        Gen.Create('div', function(menu) {
            instance.ConstructMenu(menu);
        }, function(menu){
            menu.className='sidebar_menu';
        }, element);
    }, parent,100);

    Gen.Create('div', function(footer) {
        footer.setAttribute('id','footer');
        footer.className='footer';
    }, function(footer){
        new Footer().Show();
    }, parent);

};

Sidebar.prototype.ConstructMenu = function(menu) {
    let delay = 0;
    let instance = this;
    this.items.forEach(function(item){
        Gen.Create('div', function(element){
            element.className='sidebar_menu_item';
            instance.ConstructMenuItem(element, item);
        }, function(element){
            element.style.backgroundColor='rgb(0, 0, 0)';
        }, menu, delay);
        delay+=250;
    });
};

Sidebar.prototype.ConstructMenuItem = function(element, item) {
    Gen.Create('div',function(text){
        text.className='sidebar_menu_item_text';
        text.innerHTML=item.caption;
        text.setAttribute('align','center');
        text.title=item.description;
        element.onclick=item.event;
    },function(text){
        text.style.color='#fff';
        text.SetTransition(150);
    },element);
};
