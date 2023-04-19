<?php

/** This api allows the admin to add new video content to the tutorial video page
 * 
 * @author Panagiotis Tsellos w20024460
 */


class AddTutorialVid extends Endpoint
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
        $sql = "INSERT INTO videotutorial (title, content, date_published, video_url) VALUES (:title, :content, :date_published, :video_url)";

        //parameters for the new tutorial video page content
        $title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_STRING);
        $content = filter_input(INPUT_GET, 'content', FILTER_SANITIZE_STRING);
        $date_published = filter_input(INPUT_GET, 'date_published', FILTER_SANITIZE_STRING);
        $video_url = filter_input(INPUT_GET, 'video_url', FILTER_SANITIZE_STRING);
        
        $sqlParams = array(
            ':title' => $title,
            ':content' => $content,
            ':date_published' => $date_published,
            ':video_url' => $video_url,
        );

        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);
    }

    protected function endpointParams()
    {
        return ['title', 'content', 'date_published', 'video_url'];
    }
}
