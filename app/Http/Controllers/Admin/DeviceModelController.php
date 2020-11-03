<?php

namespace App\Http\Controllers\Admin;

use App\Models\DeviceModel;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeviceModel\DeviceModelStore;
use App\Http\Resources\DeviceModel\DeviceModelResource;
use App\Http\Resources\DeviceModel\DeviceModelCollection;

class DeviceModelController extends Controller
{

    public function index()
    {
        return new DeviceModelCollection(DeviceModel::all());
    }

    public function store(DeviceModelStore $request)
    {
        $deviceModel = DeviceModel::create($request->all());
        return new DeviceModelResource($deviceModel);
    }

    public function show($id)
    {
        $deviceModel = DeviceModel::where('id', $id)->firstOrFail();
        return new DeviceModelResource($deviceModel);

    }

    public function update(DeviceModelStore $request, DeviceModel $deviceModel)
    {
        dd($deviceModel);
        $deviceModel->update($request->all());
        return new DeviceModelResource($deviceModel);
    }
    
    public function destroy($id)
    {
        $deviceModel = DeviceModel::find($id);
        $deviceModel->delete();
        return new DeviceModelResource($deviceModel);
    }
}
