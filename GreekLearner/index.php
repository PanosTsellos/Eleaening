<?php
/**
 * Index with paths and get/post requestd
 * 
 * @author Panagiotis Tsellos w20024460
 */
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {    
    exit(0);
} 

define('SECRETKEY',"j2rXsft9Hc");

include 'config/autoloader.php';
spl_autoload_register('autoloader');

include 'config/exceptionHandler.php';
set_exception_handler('exceptionHandler');

//include exceptionhandler as autoloader above
 
if (!in_array($_SERVER['REQUEST_METHOD'], array("GET", "POST"))){
    // Updated to use the ClientError endpoint
    $endpoint = new ClientError("Invalid method: ". $_SERVER['REQUEST_METHOD'], 405);
} else {

    // Work out the request from the path
    $path = parse_url($_SERVER['REQUEST_URI'])['path'];
    $path = str_replace("/GreekLearner/api","",$path);
 
    // Route the request as appropriate
    try {
        switch ($path) {
            case '/':
                $endpoint = new Base();
                break;
            case'/account':
            case'/accounts':
            case"/account/":
            case"/accounts/":
                $endpoint = new Account();
                break;
            case'/homepage':
                $endpoint = new homepage();
                break;
            case'/addhomeinfo':
                $endpoint = new AddHomeInfo();
                break;
            case'/deletehomeinfo':
                $endpoint = new DeleteHomeInfo();
                break;
            case'/tutorialvids':
                $endpoint = new TutorialVids();
                break;
            case'/addtutorialvid':
                $endpoint = new AddTutorialVid();
                break;
            case'/deletetutorialvid':
                $endpoint = new DeleteTutorialVid();
                break;
            case '/contactinfo' :
                $endpoint = new contactinfo();
                break;
            case'/dashboard':
                $endpoint = new dashboard();
                break;
            case'/auth':
                $endpoint = new Authenticate();
                break;
            case '/recourses':
                $endpoint = new reference();
                break;
            case '/addrecourses':
                $endpoint = new Addrecourses();
                break;
            case '/deleterecourses':
                $endpoint = new DeleteReferenceInfo();
                break;    
    
            default:
                $endpoint = new ClientError("Path not found: " . $path, 404);
        }
    }catch(ClientErrorException $e) {
        $endpoint = new ClientError($e->getMessage(), $e->getCode());
    }
    
}
 
$response = $endpoint->getData();
echo json_encode($response);
