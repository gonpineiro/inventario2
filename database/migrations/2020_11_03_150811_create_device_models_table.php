<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeviceModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('device_models', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('mark_id')->unsigned();
            $table->unsignedBigInteger('device_type_id')->unsigned();
            $table->timestamps();

            /* Realations */
            $table->foreign('mark_id')->references('id')->on('marks');
            $table->foreign('device_type_id')->references('id')->on('device_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('device_models');
    }
}
