<?php
 /**
 * 
 * @author Panagiotis Tsellos w20024460
 */
class Response
{
    public function __construct() {
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Origin: *"); 
    }
}