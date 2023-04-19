<?php

/**
 * A general class for accounts
 * 
 * @author Panagiotis Tsellos w20024460
 */
class Account extends Endpoint{
protected function endpointParams() {
    return ['id'];
 }

 protected function initialiseSQL() {
    $sql = "SELECT *
     FROM account
    ";
$this->setSQL($sql);
$sqlParams = [];
$where = "";
//gets the parameter for id.
        if (filter_has_var(INPUT_GET, 'id')) {
            if (!filter_var($_GET['id'],FILTER_VALIDATE_INT)) {
                http_response_code(400);
                $output['message'] = "Value of id must be an integer";
                die(json_encode($output));
            }
            if (isset($where)) {
                $where .= " AND account_id = :id";
            } else {
                $where = " WHERE account_id = :id";
            }
            $sqlParams['id'] = $_GET['id'];
        }
        
        
        // isset will return false if there are no WHERE
        // clauses set for the query
        if (isset($where)) {
            $sql .= $where;
        }

        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);
    }
   
}