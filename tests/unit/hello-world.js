describe('Unit test hello-world directive', function() {
    var $compile;
    var $rootScope;
    var element;

    beforeEach(module('helloWorld'));

    beforeEach(inject(function($injector){
        $compile = $injector.get("$compile");
        $rootScope = $injector.get("$rootScope");

        element = $compile("<hello-world></hello-world>")($rootScope);
        $rootScope.$digest();
    }));

    it('Should contains a hello world message', function() {
        expect(element.html()).toContain('<div>hello world!</div>');
    });
});
