let jsBase = function() {
    let fn = {};
    fn.init = function() {};
    fn.nvoEvt = function(elemento, evento, funcion) {
        if (elemento.addEventListener)
            elemento.addEventListener(evento, funcion, false);
        else if (elemento.attachEvent)
            elemento.attachEvent('on' + evento, funcion);
    }

    return fn;

}();

jsBase.nvoEvt(window, 'load', function() {
    jsDetalle.init(jsDetalle);
});

let jsDetalle = function() {
    let fn = {};

    fn.init = (obj) => {
        if (null != obj)
            obj.ocultar();
    };

    fn.ocultar = function() {
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, 1500);
        }).then(function() {
            const obj = document.querySelector('.spinner');
            if (null != obj)
                obj.classList.add('d-none');
        });
    }

    return fn;

}();