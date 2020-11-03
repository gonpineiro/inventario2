<?php

namespace App\Http\Resources\DeviceModel;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DeviceModelCollection extends ResourceCollection
{
    public $collects = DeviceModelResource::class;
    
    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];
    }
}
