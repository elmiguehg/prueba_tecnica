<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(150)
        ->state(new Sequence(
            ['role' => 'manager'],
            ['role' => 'revisor'],
            ['role' => 'comprador'],
            ['role' => 'comprador'],
            ['role' => 'comprador'],
            ['role' => 'revisor'],
        ))
        ->create();
    }
}
