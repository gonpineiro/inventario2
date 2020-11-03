<?php

namespace App\Models;

use App\Models\Mark;
use App\Models\DeviceModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DeviceType extends Model
{
    use HasFactory;

    public function deviceModels()
    {
        return $this->hasMany(DeviceModel::class);
    }

    public function marks()
    {
        return $this->hasMany(Mark::class);
    }
}
