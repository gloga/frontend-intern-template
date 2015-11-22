var internsJS = {
    common: {}
};

internsJS.common = (function (window, document) {

    function funkcija() {

        console.log('tu sam');

    }

    return {
        funkcija: funkcija
    };


})(window, document);

$(function () {
    webJS.common.funkcija();
});
