<?php

/**
 * A general class for the references to provide more info that the admin will later be able to add/remove. 
 * 
 * @author Panagiotis Tsellos w20024460
 */
class reference extends Endpoint{
protected function endpointParams() {
    return ['id'];
 }

 protected function initialiseSQL() {
    $sql = "SELECT *
     FROM reference";



        $this->setSQL($sql);
    }
   
}