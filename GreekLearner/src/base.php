<?php
 
/**
 * endpoint handling endpoint
 * 
 * @author Panagiotis Tsellos w20024460
 */
class Base extends Endpoint
{
    /**
     * Override the constructor because we do
     * not need to query the database for this 
     * endpoint.
     */
    public function __construct() {

        //connect the database.
        $db = new Database("db/database.db");
        $sql="SELECT name FROM conference_information"; 
        $result = $db->executeSQL($sql);
        $posts = $result;
      

    
        $this->setSQL($sql);

//return the data for the base endpoint.
        $name = array(
            "first_name" => "Panagiotis", 
            "last_name" => "Tsellos"
        );
        $module = array(
            "code" => "KF6003", 
            "name" => "FINAL PROJECT",
        );
        $data = array(
            "name" => $name,
            "id" => "w20024460",
            "module" => $module
        );
 
        // We are following the same pattern for all endpoints
        $this->setData( array(
            "length" => count($data),
            "message" => "Success",
            "data" => $data,
        ));
    }
}