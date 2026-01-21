<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return auth()->check()
        ? redirect()->route('home')
        : redirect()->route('login');
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware('auth')->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/management-po', function () {
        return Inertia::render('ManagementPO/Index');
    })->name('management-po');

    Route::get('/stock', function () {
        return Inertia::render('Stock/Index');
    })->name('stock');

    Route::get('/inventaris', function () {
        return Inertia::render('Inventaris/Index');
    })->name('inventaris');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
