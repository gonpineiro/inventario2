<?php

namespace App\Http\Resources\DeviceModel;

use Illuminate\Http\Resources\Json\JsonResource;

class DeviceModelResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'mark_id' => $this->mark_id,
            'mark' => $this->mark->name,
            'device_type_id' => $this->device_type_id,
            'device_type' => $this->deviceType->name,
        ];
    }
}
