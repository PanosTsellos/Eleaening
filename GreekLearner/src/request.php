<?php
 /**
 * 
 * @author Panagiotis Tsellos w20024460
 */
class Request 
{
    private $method;
    private $path;
 
    public function __construct() {
        $this->setMethod();
        $this->setPath();
    }
 
    private function setMethod() {
        $this->method = $_SERVER['REQUEST_METHOD'];
    }
 
    public function validateRequestMethod($validMethods) {
        if (!in_array($this->method, $validMethods)) {
            $output['message'] = "Invalid request method: ".$this->method;
            die(json_encode($output));
        }
    }
 
    private function setPath() {
        $this->path = parse_url($_SERVER['REQUEST_URI'])['path'];
        $this->path = str_replace("/kf6012/part1/answers","",$this->path);
    }
 
    public function getPath() {
        return $this->path;
    }
 
}