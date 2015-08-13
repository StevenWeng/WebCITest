var serviceModule = angular.module('app.service', []);

serviceModule.service('HelloWorldService', [function () {
    var self = this;

    self.sayHi = function () {
        return 'Hi!';
    };

    self.goodBye = function () {
        return 'GoodBye!!';
    };
} ]);