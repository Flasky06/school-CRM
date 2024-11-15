<?php

use App\Http\Controllers\ClassController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Redirect the root URL to dashboard
Route::redirect('/', '/dashboard');

// Public routes (no authentication required)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile routes with authentication middleware
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Authenticated and verified routes
Route::middleware(['auth', 'verified'])->group(function () {
    // Classes routes
    Route::get('/classes', [ClassController::class, 'index']);

    // Students routes
    Route::resource('students', StudentController::class)->except(['show']);

    // Teachers routes
    Route::get('/teachers', [TeacherController::class, 'index']);
});

require __DIR__.'/auth.php';
