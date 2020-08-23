<?php

use Symfony\Component\Routing\{
    RouteCollection,
    Route
};
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

$routes = new RouteCollection();


$routes->add('homepage', new Route('/', [

        '_controller' => function(Request $request, Response $response) {

            if(file_exists(__DIR__.'/pages/homepage.cache')){

            }else{
                
            }

            $content = include __DIR__.'/pages/homepage.html';

            $response->setContent($content);

            $response->setStatusCode(Response::HTTP_OK);

            return $response; 

        }
    ]));

$routes->add('feedback', new Route('/feedback', [

    '_controller' => function(Request $request, Response $response) {

        $response->setContent(json_encode([
            'status' => 'success',
            'data' => "Hello, world!"
        ]));

        $response->headers->set('Content-Type', 'application/json');

        $response->setStatusCode(Response::HTTP_OK);

        return $response;
    }
]));

/*$routes->add('leap_year', new Route('/is_leap_year/{year}', [
    'year' => null,
    '_controller' => function ($request) {
        if (is_leap_year($request->attributes->get('year'))) {
            return new Response('Yep, this is a leap year!');
        }

        return new Response('Nope, this is not a leap year.');
    }
])); */

return $routes;