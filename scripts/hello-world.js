angular.module("helloWorld", ["apiMock"])
    .run(
        function($templateCache) {
            $templateCache.put("scripts/hello-world.html", "<div>hello world!</div>")
        }
    )
    .directive("helloWorld",
        function() {
            return {
                restrict: "E",
                // template: "<div>hello world!</div>",
                templateUrl: "scripts/hello-world.html"
            }
        }
    );
