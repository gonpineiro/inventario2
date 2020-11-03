<?php

namespace App\Models;

use App\Models\Mark;
use App\Models\DeviceType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DeviceModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'mark_id',
        'device_type_id'
    ];

    public function mark()
    {
        return $this->belongsTo(Mark::class);
    }

    public function deviceType()
    {
        return $this->belongsTo(DeviceType::class);
    }
}
