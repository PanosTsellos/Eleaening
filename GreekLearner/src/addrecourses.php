<?php

/** 
 * 
 * @author Panagiotis Tsellos w20024460
 */


class Addrecourses extends Endpoint
{
    public function __construct()
    {
        $db = new Database("db/learn.db");

        // Initialise and execute the SQL statement 
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        if ($queryResult === false) {
            $this->setData(array(
                "length" => 0,
                "message" => "Error. Item could not be added.",
                "data" => null,
            ));
        } else {
            $this->setData(array(
                "length" => 1,
                "message" => "Success. Item added successfully.",
                "data" => $queryResult,
            ));
        }
    }

    protected function initialiseSQL()
    {
        $sql = "INSERT INTO reference (title, content) VALUES (:title, :content)";

        //parameters for the new home page content
        $title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_STRING);
        $content = filter_input(INPUT_GET, 'content', FILTER_SANITIZE_STRING);
       
        
        $sqlParams = array(
            ':title' => $title,
            ':content' => $content,
        );

        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);
    }

    protected function endpointParams()
    {
        return ['title', 'content'];
    }
}
