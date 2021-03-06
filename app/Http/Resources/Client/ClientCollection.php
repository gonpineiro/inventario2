<?php

namespace App\Http\Resources\Client;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ClientCollection extends ResourceCollection
{
    public $collects = ClientResource::class;

    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];
    }
}
