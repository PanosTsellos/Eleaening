<?php

/** 
 * 
 * @author Panagiotis Tsellos w20024460
 */

class DeleteHomeInfo extends Endpoint
{
    public function __construct()
    {
        $db = new Database("db/learn.db");

        $this->validateRequestMethod("POST");

        
        // Initialise and execute the SQL statement 
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        $this->setData(array(
            "length" => 0,
            "message" => "Success. Item deleted successfully.",
            "data" => null,
        ));
    }

    protected function initialiseSQL()
    {
        $sql = "DELETE FROM home WHERE title = :title
        ";

        //parameter to find the id.
        if (filter_has_var(INPUT_GET, 'title')) {
            $sqlParams[':title'] = $_GET['title'];
            $this->setSQL($sql);
            $this->setSQLParams($sqlParams);
        }
    }

    protected function endpointParams()
    {
        return ['title'];
    }
}


