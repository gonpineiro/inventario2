<?php

namespace App\Http\Controllers\Admin;

use App\Models\Mark;
use App\Http\Controllers\Controller;
use App\Http\Requests\Mark\MarkStore;
use App\Http\Resources\Mark\MarkResource;
use App\Http\Resources\Mark\MarkCollection;

class MarkController extends Controller
{
    public function index()
    {
        return new MarkCollection(Mark::all());
    }
    
    public function store(MarkStore $request)
    {
        $mark = Mark::create($request->all());
        return new MarkResource($mark);

    }

    public function show($id)
    {
        $mark = Mark::where('id', $id)->firstOrFail();
        return new MarkResource($mark);

    }
    public function update(MarkStore $request, Mark $mark)
    {
        $mark->update($request->all());
        return new MarkResource($mark);

    }

    public function destroy($id)
    {
        $mark = Mark::find($id);
        $mark->delete();
        return new MarkResource($mark);

    }
}
