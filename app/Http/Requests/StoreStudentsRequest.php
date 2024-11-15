<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'admno' => 'required|string|unique:students,admno|max:10',
            'first_name' => 'required|string|max:20',
            'middle_name' => 'nullable|string|max:20',
            'last_name' => 'required|string|max:20',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female',
            'guardian_name' => 'required|string|max:80',
            'guardian_contact' => 'required|string|max:15',
            'enrollment_year' => 'required|integer|min:1990|max:' . date('Y'),
        ];
    }
}
