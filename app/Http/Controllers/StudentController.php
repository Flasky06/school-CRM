<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentsRequest;
use App\Http\Requests\UpdateStudentsRequest;
use App\Models\Students;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         // Fetch all students
         $students = Students::all();

         // Return the data to the React view using Inertia
         return Inertia::render('Students/Index', [
             'students' => $students,
         ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Students $students)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Students $students)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentsRequest $request, Students $students)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Students $students)
    {
        //
    }
}
