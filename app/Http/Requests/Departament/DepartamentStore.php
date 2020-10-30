<?php

namespace App\Http\Requests\Departament;

use Illuminate\Foundation\Http\FormRequest;

class DepartamentStore extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:3|max:100',
            'client_id' => 'required'
        ];
    }
    
    public function messages()
    {
        return [
            'name.required' => 'Requerido',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 100 caracteres.',

            'client_id.required' => 'Requerido',
        ];
    }
}
