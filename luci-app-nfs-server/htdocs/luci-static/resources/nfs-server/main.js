'use strict';
'require view';
'require uci';
'require rpc';
'require form';

const callServiceRestart = rpc.declare({
    object: 'service',
    method: 'restart',
    params: [ 'name' ]
});

return view.extend({
    load: function() {
        return uci.load('nfs');
    },

    render: function() {
        const m = new form.Map('nfs', _('NFS Freigaben'));

        const s = m.section(form.GridSection, 'share', _('Freigaben'));
        s.addremove = true;
        s.anonymous = true;

        const path = s.option(form.Value, 'path', _('Pfad'));
        path.datatype = 'directory';

        const opts = s.option(form.Value, 'options', _('Optionen'));
        opts.default = 'rw,sync,no_subtree_check';

        return m.render();
    },

    handleSaveApply: function(ev, mode) {
        return this.handleSave(ev).then(() => {
            return callServiceRestart('nfsd');
        });
    }
});
