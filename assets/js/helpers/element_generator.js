
let GeneratorHandler = function() { };

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

GeneratorHandler.prototype.Create = function(type,initCallback,endCallback,parent,delay) {

    let defDelay = isEmpty(delay)?500:delay;
    let element = document.createElement(type);
    element.SetScale(0.01);
    element.SetTransition(defDelay);
    element.style.color = 'rgba(0, 0, 0, 0)';

    if(!isEmpty(parent))
        parent.appendChild(element);

    initCallback(element);

    setTimeout(function() {

        element.SetScale(1);
        //element.style.backgroundColor = 'rgba(0,0,0,0)';

        if(!isEmpty(endCallback))
            endCallback(element);

    },defDelay);

    return element;
};

const Gen = new GeneratorHandler();