<!DOCTYPE html>
<html>
  <head>
    <title>Page Diff</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="css/styles.css" rel="stylesheet" media="screen">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container">
      <div class="controls">
        <h1>Visual Diff</h1>
        <p class="lead">Compare two pages. See what breaks.</p>
        <form role="form" id="site-pickers" name="site-pickers" class="form-inline" method="GET" action="">
          <p><label for="picker-one">Page 1:</label> <input size="40" type="text" name="picker-one" value="" id="picker-one" />
          <label for="picker-two">Page 2:</label> <input size="40" type="text" name="picker-two" value="" id="picker-two" />
          <input type="submit" class="btn btn-primary" id="picker-submit" value="Compare" /></p>
          <p><label for="diff-type">Display:</label> <select id="diff-type" name="diff-type"><option value="overlay">Overlay</option><option value="sidebyside">Side-by-side</option></select></p>
        </form>
      </div>
    </div><!-- /.container -->
    <div class="diffzone overlay">
    </div>
  </body>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script src="js/diff.js"></script>
  <script src="js/jquery.scrollto.js"></script>
</html>
