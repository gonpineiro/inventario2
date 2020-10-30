<?php

namespace App\Http\Resources\Departament;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DepartamentCollection extends ResourceCollection
{
    public $collects = DepartamentResource::class;

    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];

    }
}
