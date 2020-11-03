<?php

namespace Database\Factories;

use App\Models\DeviceModel;
use Illuminate\Database\Eloquent\Factories\Factory;

class DeviceModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DeviceModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'mark_id' => function () {
                return \App\Models\Mark::query()->inRandomOrder()->first()->id;
            },
            'device_type_id' => function () {
                return \App\Models\DeviceType::query()->inRandomOrder()->first()->id;
            }
        ];
    }
}
