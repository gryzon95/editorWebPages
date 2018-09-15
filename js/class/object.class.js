var draggElement = function(options) {
    var vars = {
        name: 'Name',
        source: 'source',
    }

    this.constructor = function (options) {
        $.extend(vars, options);
    }
    
    this.getName = function () {
        console.log(vars.name);
    }
}