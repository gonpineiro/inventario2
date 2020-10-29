<?php

namespace App\Http\Controllers\Admin;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Client\ClientStore;
use App\Http\Resources\Client\ClientResource;
use App\Http\Resources\Client\ClientCollection;

class ClientController extends Controller
{
    public function index()
    {
        return new ClientCollection(Client::all());
    }
    
    public function store(ClientStore $request)
    {
        $client = Client::create($request->all());
        return new ClientResource($client);
    }

    
    public function show($id)
    {
        $client = Client::where('id', $id)->firstOrFail();
        return new ClientResource($client);
    }

    public function update(ClientStore $request, Client $client)
    {
        $client->update($request->all());

        return new ClientResource($client);
    }
    
    public function destroy($id)
    {
        $client = Client::find($id);
        $client->delete();
        return new ClientResource($client);

    }
}
