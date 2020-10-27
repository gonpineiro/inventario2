<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStore extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:3|max:20',
            'email' => 'required|email|min:5|max:150|unique:users',
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Requerido',
            'name.min' => 'El minimo es 3 caracteres.',
            'name.max' => 'El maximo es 20 caracteres.',

            'email.required' => 'Requerido',
            'email.email' => 'Formato Erroneo.',
            'email.min' => 'El maximo es 5 caracteres.',
            'email.max' => 'El maximo es 150 caracteres.',
            'email.unique' => 'Ya existe el correo.',
            
            'password.required' => 'Requerido.',
        ];
    }
}
