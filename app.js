let app = angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html',
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '../views/blog.html',                // controller: 'homeCtrl',
            })
            .state('products-details', {
                url: '/product-details',
                templateUrl: '../views/product-details.html',
            })
            // .state('product-tmpl', {
            //     url: '/',
            //     templateUrl: '../views/product-tmpl.html',                // controller: 'homeCtrl',
            // })
            .state('shop', {
                url: '/shop',
                templateUrl: '../views/shop.html',
                controller: 'shopCtrl'
            })
        $urlRouterProvider.otherwise('/')
    });