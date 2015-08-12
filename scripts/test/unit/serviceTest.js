describe('Test Hello world service', function () {
    var helloWorldService;

    beforeEach(module("app.service"));

    beforeEach(inject(function (_HelloWorldService_) {
        helloWorldService = _HelloWorldService_;
    }));

    it('test Say hi', function () {
        expect(helloWorldService.sayHi()).toEqual('Hi!');
    });

    it('test Good Bye', function () {
        expect(helloWorldService.goodBye()).toEqual('GoodBye!');
    });
});