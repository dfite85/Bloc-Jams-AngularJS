<<<<<<< HEAD
=======

>>>>>>> ec7433774e6a0db2e51450dc35fa0c44c53ca5c7
(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
<<<<<<< HEAD
            });
        
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
=======
            })
        $stateProvider
            .state('landing', {
                url: '/',
>>>>>>> ec7433774e6a0db2e51450dc35fa0c44c53ca5c7
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
<<<<<<< HEAD
                controller: 'AlbumCtrl as album',
=======
>>>>>>> ec7433774e6a0db2e51450dc35fa0c44c53ca5c7
                templateUrl: '/templates/album.html'
            })
            .state('collection', {
                url: '/collection',
<<<<<<< HEAD
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
            });
    }

    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
=======
                templateUrl: '/templates/collection.html'
            });
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
>>>>>>> ec7433774e6a0db2e51450dc35fa0c44c53ca5c7
