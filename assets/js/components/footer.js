
var Footer = function() {
    this.element = document.getElementById('footer');
    this.element.innerHTML = '';
};

Footer.prototype.element = null;

Footer.prototype.Show = function(){
    let instance = this;
    let parent = this.element;
    Gen.Create('div', function(footer){
        instance.ConstructIcons(footer);
    }, null, parent);
};

Footer.prototype.ConstructIcons = function(parent) {
    let icons = [
        { style: 'icon_vk', description: 'vk.com' }
    ];
    let instance = this;
    icons.forEach(function(icon){
        Gen.Create('div', function(iconElement){
            instance.ConstructIcon(iconElement, icon);
        }, null, parent);
    });
};

Footer.prototype.ConstructIcon = function(iconElement, icon) {
    iconElement.className+=' '+icon.style;
    iconElement.title=icon.description;
};
