
var Head = function() {
    this.element = document.getElementById('head');
    this.element.innerHTML = '';
};

Head.prototype.element = null;

Head.prototype.Show = function(){
    let parent = this.element;
    parent.className = 'head';
    this.CreateLogo(parent);
    this.CreateText(parent);
};

Head.prototype.CreateLogo = function(parent) {
    return Gen.Create('div', function(element) {
        element.className = 'logo';
    }, null, parent, 250);
};

Head.prototype.CreateText = function(parent) {
    return Gen.Create('div', function(element) {
        element.className = 'logo_content';
        element.innerHTML = 'Magnetar Band';
    }, null, parent, 450);
};
