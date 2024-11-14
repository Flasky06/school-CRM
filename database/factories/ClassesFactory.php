<?php

namespace Database\Factories;

use App\Models\Classes;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Classes>
 */
class ClassesFactory extends Factory
{
    protected $model = Classes::class;

    // Counter to track grade levels
    private static $gradeLevelCounter = 1;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Set grade level from 1 to 8
        $gradeLevel = 'grade ' . self::$gradeLevelCounter;

        // Increment counter, reset if it exceeds 8
        self::$gradeLevelCounter = (self::$gradeLevelCounter % 8) + 1;

        return [
            'class_level' => $gradeLevel,
            'teacher_id' => $this->faker->bothify('TCHR-####'),
        ];
    }
}
