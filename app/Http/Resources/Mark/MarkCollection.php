<?php

namespace App\Http\Resources\Mark;

use Illuminate\Http\Resources\Json\ResourceCollection;

class MarkCollection extends ResourceCollection
{
    public $collects = MarkResource::class;
    
    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];
    }
}
