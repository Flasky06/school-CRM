<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    /** @use HasFactory<\Database\Factories\StudentsFactory> */
    use HasFactory;


    protected $fillable = [
        'admno',
        'first_name',
        'middle_name',
        'last_name',
        'date_of_birth',
        'gender',
        'guardian_name',
        'guardian_contact',
        'enrollment_year',
    ];
}
