<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        return User::paginate(8);
    }

    public function UsersByRole(){
        $users = User::select(DB::raw('count(users.id) as count, users.role'))
        ->groupBy('users.role')->get();
        return response()->json($users);
    }

    public function FilterByRole($role){
        $users = User::where('role','=',$role)->get();
        return response()->json($users);
    }
}
