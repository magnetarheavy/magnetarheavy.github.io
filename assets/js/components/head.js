
var Head = function() {
    this.element = document.getElementById('head');
    this.element.innerHTML = '';
};

Head.prototype.element = null;

Head.prototype.Show = function(){

    let parent = this.element;
    let head = Gen.Create('div', function(element) {
        parent.className = 'head';
    }, function(element) {
        element.style.backgroundColor = 'rgb(15, 22, 39)';
    }, parent, 150);

    this.CreateLogo(head);
    this.CreateText(head);

};

Head.prototype.CreateLogo = function(parent) {
    return Gen.Create('div', function(element) {
        element.className = 'logo';
    }, function(element) {

    }, parent, 250);
};

Head.prototype.CreateText = function(parent) {
    return Gen.Create('div', function(element) {
        element.className = 'logo_content';
        element.innerHTML = 'Text title';
    }, function(element) {

    }, parent, 450);
};
