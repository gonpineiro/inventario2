<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Support\Str;
/* use Illuminate\Http\Request; */
use App\Http\Requests\UserStore;
use App\Http\Requests\UserUpdate;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\UserCollection;

class UserController extends Controller
{
    public function index()
    {
        return new UserCollection(User::where('is_active', 1)->get());
    }

    public function store(UserStore $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'api_token' => Str::random(60),
        ]);
        return new UserResource($user);
    }

    public function show($id)
    {
        $user = User::where('id', $id)->firstOrFail();
        return new UserResource($user);
    }

    public function update(UserUpdate $request, User $user)
    {
        $user->update($request->all());

        return new UserResource($user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->is_active = 0;
        $user->save();
        return new UserResource($user);
    }
}
