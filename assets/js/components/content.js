
const Content = function() {
    this.element = document.getElementById('content');
    this.element.innerHTML = '';
};

Content.prototype.element = null;

Content.prototype.Show = function(){
    let parent = this.element;
    Gen.Create('div', function(element){
        parent.className='content_hidden';
    }, function(element){
        parent.className='content';
    }, parent);
};
