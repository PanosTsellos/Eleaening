<?php

/**
 * A general class for the homepage to provide more info that the admin will later be able to edit/add/remove. 
 * 
 * @author Panagiotis Tsellos w20024460
 */
class contactinfo extends Endpoint{

    protected function initialiseSQL() {
        $sql = "SELECT DISTINCT id, name, email, message
                    FROM contactus";
               $sqlParams = [];

               if (filter_has_var(INPUT_GET, 'id')) {
                if (isset($where)) {
                    $where .= " AND id = :id";
                } else {
                    $where = " WHERE id = :id";
                }
                $sqlParams['id'] = $_GET['id'];
    
            }


        if (isset($where)) {
            $sql .= $where;
            
        }

        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);

    }
}