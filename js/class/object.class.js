var draggElement = function(options) {
    var settings = {
        name: '',
        displayName: '',
        icon: '',
        source: '',
        draggable: true,
        allowedOptions: [],
    }

    this.construct = function (options) {
        $.extend(settings, options);

    }
    
    this.getName = function () {
        return settings.name;
    }

    this.getSource = function () {
        return settings.source;
    }

    this.getDisplayName = function () {
        return settings.displayName;
    }

    this.getIcon = function () {
        return settings.icon;
    }

    this.construct(options);
}