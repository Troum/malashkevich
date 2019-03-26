<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class ApiController extends Controller
{
    public function photos()
    {
        $photos = json_decode(File::get(public_path().'/images/photos.json'));
        return response()->json(['photos' => $photos], Response::HTTP_OK);
    }
}
