<?php

namespace Database\Seeders;

use App\Models\Classes;
use App\Models\Students;
use App\Models\Teacher;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Students::factory(60)->create();  // Generate random students
        Teacher::factory()->count(10)->create();


 // Create each class manually with a unique teacher_id as string placeholder
 Classes::factory()->create(['class_level' => 'grade 1', 'teacher_id' => 'teacher_1']);
 Classes::factory()->create(['class_level' => 'grade 2', 'teacher_id' => 'teacher_2']);
 Classes::factory()->create(['class_level' => 'grade 3', 'teacher_id' => 'teacher_3']);
 Classes::factory()->create(['class_level' => 'grade 4', 'teacher_id' => 'teacher_4']);
 Classes::factory()->create(['class_level' => 'grade 5', 'teacher_id' => 'teacher_5']);
 Classes::factory()->create(['class_level' => 'grade 6', 'teacher_id' => 'teacher_6']);
 Classes::factory()->create(['class_level' => 'grade 7', 'teacher_id' => 'teacher_7']);
 Classes::factory()->create(['class_level' => 'grade 8', 'teacher_id' => 'teacher_8']);
}

}
