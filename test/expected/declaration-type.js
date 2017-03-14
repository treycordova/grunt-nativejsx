function test() {
    return function () {
        let $$a = document.createElement('div');
        $$a.setAttribute('declaration-type', 'test');
        return $$a;
    }.call(this);
}
