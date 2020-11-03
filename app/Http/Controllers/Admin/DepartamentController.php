<?php

namespace App\Http\Controllers\Admin;

use App\Models\Departament;
use App\Http\Controllers\Controller;
use App\Http\Requests\Departament\DepartamentStore;
use App\Http\Resources\Departament\DepartamentResource;
use App\Http\Resources\Departament\DepartamentCollection;

class DepartamentController extends Controller
{
    public function index()
    {
        return new DepartamentCollection(Departament::all());
    }
    
    public function store(DepartamentStore $request)
    {
        $departament = Departament::create($request->all());
        return new DepartamentResource($departament);
    }

    public function show($id)
    {
        $departament = Departament::where('id', $id)->firstOrFail();
        return new DepartamentResource($departament);
    }

    public function update(DepartamentStore $request, Departament $departament)
    {
        dd($departament);

        $departament->update($request->all());
        return new DepartamentResource($departament);
    }

    public function destroy($id)
    {
        $departament = Departament::find($id);
        $departament->delete();
        return new DepartamentResource($departament);
    }
}
