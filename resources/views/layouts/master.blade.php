<!DOCTYPE html>
<html>
  <head>
    <title>Quintype Sample App</title>
    <link rel="stylesheet" type="text/css" href="{{ assetPath("application.css") }}">
  </head>
  <body>
    <div class="body-container">
      <div class="layout-menu">
	@section('menu')
	<ul>
	@foreach($config->menuItems() as $menu)
	<li><a href="{{$menu->url()}}">{{$menu->title()}}</a></li>
	@endforeach
	</ul>
	@show
      </div>
      <div class="layout-content">
	<div class="container">
	  @yield('content')
	</div>
      </div>
      <div class="clear"></div>
    </div>
    <link rel="stylesheet" type="text/css" href="{{ assetPath("application.js") }}">
  </body>
</html>
