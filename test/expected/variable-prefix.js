function test() {
    return function () {
        var _a = document.createElement('div');
        _a.setAttribute('variable-prefix', 'test');
        return _a;
    }();
}
