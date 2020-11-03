<?php

namespace App\Http\Requests\DeviceModel;

use Illuminate\Foundation\Http\FormRequest;

class DeviceModelStore extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:100',
            'device_type_id' => 'required',
            'mark_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 100 caracteres.',

            'device_type_id.required' => 'Requerido',
            'mark_id.required' => 'Requerido',
        ];
    }
}
