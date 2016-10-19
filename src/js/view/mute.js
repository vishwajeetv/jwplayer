define([
    'templates/mute.html',
    'utils/helpers',
    'utils/underscore',
    'utils/ui'
], function(muteTemplate, utils, _, UI) {

    var Mute = function(_model, callback) {
        this.model = _model;
        this.callback = callback;
        this.button = {
            img : undefined,
            tooltip : '',
            callback : this.callback,
            id : 'mute-dock',
            btnClass : 'jw-mute-dock-btn'
        };

        this.setup();
        this.model.on('change:mute', this.render, this);
    };

    _.extend(Mute.prototype, {
        setup : function() {
            var clickHandler = this.click.bind(this);
            var html = muteTemplate(this.button);

            this.el = utils.createElement(html);
            utils.style(this.el, {
                position: 'absolute',
                bottom: '-2.5em',
                right: 0
            });

            new UI (this.el).on('click tap', clickHandler);
        },
        getMuteButton : function(evt) {
            if (utils.hasClass(evt.target, 'jw-mute-dock-btn')) {
                // Clicks on button container
                return evt.target;
            }

            // Clicks on any other children
            return evt.target.parentElement;
        },
        click : function(evt) {
            var elem = this.getMuteButton(evt);

            if (this.button && this.button.callback) {
                this.button.callback(evt);
            }
        },
        render: function() {
            var html = muteTemplate(this.button);
            var newEl = utils.createElement(html);

            this.el.innerHTML = newEl.innerHTML;
        },
        element : function() {
            return this.el;
        }
    });
    return Mute;
});
