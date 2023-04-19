<?php

use FirebaseJWT\JWT;
use FirebaseJWT\Key; 

/** 
 * update class
 * @author Panagiotis Tsellos w20024460
 */
class Update extends Endpoint
{
 
    public function __construct()
    {
        $this->validateRequestMethod("POST");

        // Validate the token
        $this->validateToken();

        $this->validateUpdateParams();

        $db = new Database("db/account_id");

        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());
       
        $this->setData(
            array(
                "length" => 0,
                "message" => "Success",
                "data" => null
            )
        );
    }

    private function validateRequestMethod($method)
    {
        if ($_SERVER['REQUEST_METHOD'] != $method) {
            throw new ClientErrorException("Invalid Request Method", 405);
        }
    }

    private function validateToken()
    {
        $key = SECRET;

        $allHeaders = getallheaders();
        $authorizationHeader = "";

        if (array_key_exists('Authorization', $allHeaders)) {
            $authorizationHeader = $allHeaders['Authorization'];
        } elseif (array_key_exists('authorization', $allHeaders)) {
            $authorizationHeader = $allHeaders['authorization'];
        }

        if (substr($authorizationHeader, 0, 7) != 'Bearer ') {
            throw new ClientErrorException("Bearer token required", 401);
        }

        $jwt = trim(substr($authorizationHeader, 7));

        try {
            $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        } catch (Exception $e) {
            throw new ClientErrorException($e->getMessage(), 401);
        }

        if ($decoded->iss != $_SERVER['HTTP_HOST']) {
            throw new ClientErrorException("invalid token issuer", 401);
          }

    }
    private function validateUpdateParams() {
 
        if (!filter_has_var(INPUT_POST,'award')) {
          throw new ClientErrorException("award parameter required", 400);
        }
        if (!filter_has_var(INPUT_POST,'paper_id')) {
          throw new ClientErrorException("paper_id parameter required", 400);
        }
             

        $awards = ["true", "false"];
        if (!in_array(strtolower($_POST['award']), $awards)) {
          throw new ClientErrorException("invalid award", 400);
        }
      }

      //when update the award, its been set to change to true/null.
      protected function initialiseSQL() {
        $award_ids = ["true"=> "true","false"=> null];
       
        $award = $award_ids[strtolower($_POST['award'])];
       
        $sql = "UPDATE paper SET award = :award WHERE paper_id = :paper_id";
        $this->setSQL($sql);
        $this->setSQLParams(['award'=> $award, 'paper_id'=>$_POST['paper_id']]);
      }
    }