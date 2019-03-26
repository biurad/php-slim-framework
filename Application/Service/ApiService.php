<?php 

namespace Service\Api;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\JsonResponse;
use Rlis\RadeApi\RadeApi;


class ApiService extends RadeApi
{
    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        return new JsonResponse(['rade-api-time' => time()]);
    }
}