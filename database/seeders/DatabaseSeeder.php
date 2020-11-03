<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Gonzalo',
            'email' => 'gon.pineiro@gmail.com',
            'password' => Hash::make('gonzalo45'),
            'api_token' => 'NDovfS45rro6L5L3M1a9INRIZaYf7ZJRM4jwRRE36PLqXRPGlz3xkVS6Me9j'
            ]);

        \App\Models\User::factory(2)->create();
        \App\Models\Client::factory(3)->create();
        \App\Models\Departament::factory(2)->create();
        \App\Models\Mark::factory(2)->create();
        $this->call(DeviceTypesSeeder::class);
        \App\Models\DeviceModel::factory(10)->create();

    }
}
