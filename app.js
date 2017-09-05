let app = angular.module('assessment', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html',
                controller: 'homeCtrl',
            })
            .state('about', {
                url: '/',
                templateUrl: '../views/about.html',
                // controller: 'homeCtrl',
            })
            .state('blog', {
                url: '/',
                templateUrl: '../views/blog.html',
                // controller: 'homeCtrl',
            })
            .state('products-details', {
                url: '/',
                templateUrl: '../views/product-details.html',
                // controller: 'homeCtrl',
            })
            .state('product-tmpl', {
                url: '/',
                templateUrl: '../views/product-tmpl.html',
                // controller: 'homeCtrl',
            })
            .state('shop', {
                url: '/',
                templateUrl: '../views/shop.html',
                // controller: 'homeCtrl',
            })
        $urlRouterProvider.otherwise('/')
    });