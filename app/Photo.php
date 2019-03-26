<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Response;

class Photo extends Model
{
    protected $fillable = [
        'photo'
    ];

    public function create($request, $key)
    {
        if ($request->has($key)) {
            foreach ($request->file($key) as $item) {
                $this->store($item);
            }
            return response()->json(['success' => 'Фотографии успешно добавлены!'], Response::HTTP_OK);
        } else {
            return response()->json(['error' => 'Произошла ошибка'], Response::HTTP_CONFLICT);
        }
    }

    public function store($photo)
    {
        $this->name = uniqid('img_') . '.' . $photo->getClientOriginalExtension();
        $this->save();
        $photo->move(public_path('images/'), $this->name);
    }

}
