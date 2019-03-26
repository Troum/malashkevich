<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
    <div id="app" class="m-0 p-0"></div>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
