
var Footer = function() {
    this.element = document.getElementById('footer');
    this.element.innerHTML = '';
};

Footer.prototype.element = null;

Footer.prototype.Show = function(){
    let instance = this;
    let parent = this.element;
    Gen.Create('div', function(footer){
        footer.className='footer_content';
        footer.setAttribute('align','center');
        instance.ConstructIcons(footer);
    }, null, parent);
};

Footer.prototype.ConstructIcons = function(parent) {
    let icons = [
        { style: 'icon_vk', description: 'official group in "vk.com"', url: 'https://vk.com/magnetar_heavy' }
    ];
    let instance = this;
    icons.forEach(function(icon){
        Gen.Create('div', function(iconElement){
            iconElement.className='icon ';
            instance.ConstructIcon(iconElement, icon);
        }, null, parent);
    });
};

Footer.prototype.ConstructIcon = function(iconElement, icon) {
    iconElement.SetTransition(150);
    iconElement.className+=icon.style;
    iconElement.title=icon.description;
    iconElement.onclick = function() {
        openTab(icon.url);
    };
};
