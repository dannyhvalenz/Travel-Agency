<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Agencia de viajes. Arma tu viaje">
    <meta name="author" content="">
    <link rel="icon" href="assets/img/favicon.png">

    <title>Travel Agency</title>

    <link href="assets/css/cover.css" rel="stylesheet">
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/cover/">

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/component.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet">
    <style>
    .header {
        background: url(assets/img/Desktop.svg) no-repeat center;
        background-size: cover;
        min-height: 20vh;
    }

    .header .navbar {
        background-color: transparent !important;
    }

    .a {
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
    }
    </style>
</head>

<body class="text-center">
    <header class="header">
        <div class="navbar p-3 px-md-4 mb-3 bg-white shadow-sm">
            <img src="assets/img/logo.svg" height="40">
            <nav class="cl-effect-3 my-2 my-md-0 mr-md-3">
                <a class="p-2" href="vuelos.php" style="text-decoration:none;">Vuelos</a>
                <a class="p-2" href="hoteles.php" style="text-decoration:none">Hoteles</a>
                <a class="p-2 active" href="#" style="text-decoration:none">Inicia Sesión</a>
            </nav>
    </header>
    <!--Carousel Wrapper-->
    <div id="carousel-example-1z" class="carousel slide carousel-fade z-depth-1-half" style="
    width:  50vw;
    object-fit: scale-down;float:right; position: relative;" data-ride="carousel">
        <div class="carousel-inner" role="listbox" style=" width:100%; height: 500px !important;">
            <!--Slides-->
            <div class="carousel-inner" role="listbox">
                <!--First slide-->
                <div class="carousel-item active">
                    <img class="d-block w-100" src="assets/img/mexico.jpg" alt="First slide">
                </div>
                <!--/First slide-->
                <!--Second slide-->
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="assets/img/brooklyn.png" alt="Second slide">
                </div>
                <!--/Second slide-->
                <!--Third slide-->
                <div class="carousel-item">
                    <img class="d-block w-100" src="assets/img/canada.png" alt="Third slide">
                </div>
                <!--/Third slide-->
            </div>
            <!--/.Slides-->
        </div>
    </div>
    <!--/.Carousel Wrapper-->
    <div class="mw-100" style="position: absolute; margin-top:100px;">
        <form action="#DSF" method="GET">
            <select class="new-select" style="margin-right:150px" required>
                <option value="Mexico" selected>Ciudad de México, México</option>
                <option value="EEUU">Nueva York, EE.UU.</option>
                <option value="Canada">Toronto, Canadá</option>
            </select>
            <div class="row fixed-middle p-3" style="margin-top:100px;">
                <div class="form-group px-md-3">
                    <label class=" text-white">Check-In</label>
                    <input name="check-in" style="height: 70px;  width:170px; border:none;" class="input-format input-format form-control"
                        type="date" value="<?php echo date('yy-m-d'); ?>" required>
                </div>
                <div class="form-group px-md-3"">
                    <label class=" text-white">Check-Out</label>
                    <input name="check-out" style="height: 70px;  width:170px; border:none;" class="input-format form-control" 
                    type="date" value="<?php $date = date('Y-m-d', strtotime("+1 day")); echo $date;?>" required>
                </div>
                <div class="form-group px-md-3"">
                    <label class="text-white">Huéspedes</label>
                    <input name="huespedes" style="height: 70px; width:170px; border:none;" class="input-format form-control" 
                    type="number" min="1" max="8" value="1" required>
                </div>
                <div class="form-group px-md-3">
                    <button style="margin-top:32px;height: 70px;  width:170px; border:none;"  type="submit" class="input-format btn btn-warning form-control">Buscar</button>
                </div>
            </div>
        </form>
    </div>
    <!--BACKGROUND-->
    <div class="mh-100" style="height: 80vh; background-color: white">
        <div class="mh-100" style="width: 60%; height: 100vh; background-color: #242736;">
        </div>
    </div>
     <!--/BACKGROUND-->




    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script>
    window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')
    </script>
    <script src="assets/js/popper.min.js"></script>
    <script>
    $('.carousel').carousel();
    </script>
    <script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="assets/js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="assets/js/mdb.min.js"></script>


</body>

</html>