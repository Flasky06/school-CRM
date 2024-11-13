<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Students>
 */
class StudentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'admno' => strtoupper(Str::random(8)),
            'first_name' => $this->faker->firstName(),
            'middle_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'date_of_birth' => $this->faker->date('Y-m-d', '2015-01-01'),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'guardian_name' => $this->faker->name(),
            'guardian_contact' => $this->faker->phoneNumber(),
            'enrollment_year' => $this->faker->year(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
