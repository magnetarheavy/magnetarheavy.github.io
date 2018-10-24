
let GeneratorHandler = function() { };

Element.prototype.AddStyle = function(style) {
    this.RemoveStyle(style);
    this.className += ' '+style;
};

Element.prototype.RemoveStyle = function(style) {
    this.className = this.className.replace(style,'');
};

Element.prototype.SetTransition = function(delay) {
    let time = 'all '+delay+'ms';
    this.style.setProperty('-webkit-transition',time);
    this.style.setProperty('-moz-transition',   time);
    this.style.setProperty('-o-transition',     time);
    this.style.setProperty('transition',        time);
};

Element.prototype.SetScale = function(value) {
    let scale = 'scale('+value+','+value+')';
    this.style.setProperty('-webkit-transform',scale);
    this.style.setProperty('-moz-transform',   scale);
    this.style.setProperty('-ms-transform',    scale);
    this.style.setProperty('-o-transform',     scale);
    this.style.setProperty('transform',        scale);
};

Element.prototype.Hide = function() {
    this.SetTransition(200);
    this.SetScale(0);
    this.style.left='0';
    this.style.top='0';
    this.style.width='0';
    this.style.heigth='0';
};

Element.prototype.HideChilds = function(exclude) {
    let instance = this;
    instance.childNodes.forEach(function(child){
        if(!isEmpty(exclude) && child==exclude)
            return;
        child.Hide();
        setTimeout(function() {
            if(!isEmpty(exclude) && child==exclude)
                return;
            instance.removeChild(child);
        }, 200);
    });
};

GeneratorHandler.prototype.Create = function(type,initCallback,endCallback,parent,delay) {

    let defDelay = isEmpty(delay)?500:delay;
    let element = document.createElement(type);
    element.SetScale(0.01);
    element.SetTransition(defDelay);
    element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    element.style.color = 'rgba(0, 0, 0, 0)';

    if(!isEmpty(parent))
        parent.appendChild(element);

    initCallback(element);

    setTimeout(function() {

        element.style.backgroundColor=null;
        element.style.color=null;
        element.SetScale(1);

        if(!isEmpty(endCallback))
            endCallback(element);

    },defDelay);

    return element;
};

const Gen = new GeneratorHandler();
