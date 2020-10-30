<?php

namespace App\Http\Resources\Departament;

use Illuminate\Http\Resources\Json\JsonResource;

class DepartamentResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'client' => $this->client->name,
            'observation' => $this->observation,
        ];

    }
}
