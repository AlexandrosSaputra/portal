<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['username' => 'alexportal'],
            [
                'name' => 'alexandros saputra',
                'email' => 'alextest@gmail.com',
                'password' => Hash::make('superadmin'),
                'role' => 'superadmin',
            ],
        );
    }
}
