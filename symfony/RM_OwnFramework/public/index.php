<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__.'/../src/error/error_handler.php';
require_once __DIR__.'/../src/performance/performance.php';


//$startTime = getTime();
$startTime = $_SERVER['REQUEST_TIME_FLOAT'];
$startMemory = getMemory();


//FRONT CONTROLLER
require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\{
    RequestContext,
    Matcher\UrlMatcher,
    Exception\ResourceNotFoundException
};


/* function render_template($request){

    extract($request->attributes->all(), EXTR_SKIP);
    ob_start();
    /** @var string $_route 
    include sprintf(__DIR__.'/../src/pages/%s.php', $_route);

    return new Response(ob_get_clean());
} */


$request = Request::createFromGlobals();
$routes = include __DIR__.'/../src/app.php';

$context = new RequestContext();
$context->fromRequest($request);
$matcher = new UrlMatcher($routes, $context);

$response = new Response();

// the headers public attribute is a ResponseHeaderBag
//$response->headers->set('Content-Type', 'text/plain');

try{

    $request->attributes->add($matcher->match($request->getPathInfo()));

    //throw new ResourceNotFoundException("No source");

    $response = call_user_func($request->attributes->get('_controller'), $request, $response);

}catch(ResourceNotFoundException $exception){

    $response = new Response('Not Found', 404);

}catch(Exception $exception){

    $response = new Response('An error occurred', 500);

}

//$response->send();

$a = 23 / 0;

echo "\nSpeed - ".round(getTime($startTime) * 1000, 3)."ms\n";
echo "Start memory - ".$startMemory."B\n";
echo "Memory use - ".round(getMemory($startMemory) * 1000, 3)."B\n";

$included_files = get_included_files();

foreach ($included_files as $filename) {
    echo "INCLUDED FILE - $filename\n";
}

