<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceTypesSeeder extends Seeder
{
    public function run()
    {

        //HOST TYPE (Host de Usuarios)
        DB::table('device_types')->insert(['name' => 'Computadora','id' => 1]);
        DB::table('device_types')->insert(['name' => 'Notebook','id' => 2]);
        DB::table('device_types')->insert(['name' => 'Impresora','id' => 3]);
        DB::table('device_types')->insert(['name' => 'Teléfono IP','id' => 4]);

        //HOST TYPE (Networking)
        DB::table('device_types')->insert(['name' => 'Modem','id' => 10]);
        DB::table('device_types')->insert(['name' => 'Router','id' => 11]);
        DB::table('device_types')->insert(['name' => 'Switch','id' => 12]);
        DB::table('device_types')->insert(['name' => 'AccesPoint','id' => 13]);

        //HOST TYPE (Dispositivos de Seguridad)
        DB::table('device_types')->insert(['name' => 'Cámara ip','id' => 20]);
        DB::table('device_types')->insert(['name' => 'DVR','id' => 21]);
        DB::table('device_types')->insert(['name' => 'NVR','id' => 22]);
        DB::table('device_types')->insert(['name' => 'XVR','id' => 23]);
        DB::table('device_types')->insert(['name' => 'Cámara analógica','id' => 24]);

        //HOST TYPE (Perifericos)
        DB::table('device_types')->insert(['name' => 'Monitor','id' => 30]);
        DB::table('device_types')->insert(['name' => 'Televisor','id' => 31]);
        DB::table('device_types')->insert(['name' => 'Teclado','id' => 32]);
        DB::table('device_types')->insert(['name' => 'Mouse','id' => 33]);
        DB::table('device_types')->insert(['name' => 'Web cam','id' => 34]);

        //HOST TYPE (Seguridad Electronica)
        DB::table('device_types')->insert(['name' => 'Panel de alarma','id' => 40]);
        DB::table('device_types')->insert(['name' => 'Expansora','id' => 41]);
        DB::table('device_types')->insert(['name' => 'Comunicador','id' => 42]);
        DB::table('device_types')->insert(['name' => 'Sensor','id' => 43]);
        DB::table('device_types')->insert(['name' => 'Teclado (SDI)','id' => 44]);
        DB::table('device_types')->insert(['name' => 'Sirena','id' => 45]);
        DB::table('device_types')->insert(['name' => 'Panico','id' => 46]);
        DB::table('device_types')->insert(['name' => 'Tracker','id' => 47]);
    }
}
