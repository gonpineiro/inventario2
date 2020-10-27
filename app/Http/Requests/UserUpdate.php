<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdate extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:3|max:20',
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 20 caracteres.',

            'password.required' => 'Requerido.',
        ];
    }
}
