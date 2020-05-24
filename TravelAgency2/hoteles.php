<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Agencia de viajes. Arma tu viaje">
    <meta name="author" content="">
    <link rel="icon" href="assets/img/favicon.png">

    <title>Travel Agency</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/cover/">

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/component.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

    <link href="assets/css/cover.css" rel="stylesheet">
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        .header {
            background-color: transparent;
        }
        
        .header .navbar {
            background-color: transparent !important;
        }
        
        .a {
            text-decoration: none;
        }
        
        .scrollable-place {
            height: 1000px;
        }
        
        .stop-scrolling {
            height: 100%;
            overflow: hidden;
        }
    </style>
</head>

<body onLoad="disableScroll();" class="text-center">
    <!--BEGIN DIV MAIN BUSCAR-->
    <div id="mainBuscar" class="d-block mh-100">
        <!--BEGIN BACKGROUND RESIZE-->
        <div class="mh-100" id="div-resize" style="position:absolute;width: 60%; height: 100vh;" id="added">
            <div id="container">
            </div>
        </div>
        <!--END BACKGROUND RESIZE-->
        <!--BEGIN NAVBAR-->
        <header class="header">
            <div class="navbar p-3 px-md-4 mb-3 bg-white shadow-sm">
                <img class="" src="assets/img/logo.svg" height="40">
                <nav class="cl-effect-3 my-2 my-md-0 mr-md-3">
                    <a class="p-2" href="vuelos.php" style="text-decoration:none;">Vuelos</a>
                    <a class="p-2 active" href="#" style="text-decoration:none">Hoteles</a>
                    <a class="p-2" href="login.php" style="text-decoration:none">Inicia Sesión</a>
                </nav>
            </div>
        </header>
        <!--END NAVBAR-->
        <!--BEGIN IMAGE CAROUSEL-->
        <div id="carousel-example-1z" class="carousel slide carousel-fade z-depth-1-half" style="width:  50vw;
            object-fit: scale-down;float:right; position: relative" data-ride="carousel">

            <img class="d-block w-100 img-fluid" id="imagen" src="assets/img/mexico.jpg" alt="Ciudad">
        </div>
        <!--END IMAGE CAROUSEL-->
        <!--BEGIN SEARCH PARAMS-->
        <div class="mw-100" style="position: absolute; margin-top:100px;">
            <!--BEGIN SELECT CIUDAD-->
            <select class="new-select" id="ciudad" name="ciudad" style="margin-right:150px" onChange="cambiarImagen()" required>
                <option value="Mexico" selected>Ciudad de México, México</option>
                <option value="EEUU">Nueva York, EE.UU.</option>
                <option value="Canada">Toronto, Canadá</option>
            </select>
            <!--END SELECT CIUDAD-->
            <!--BEGIN SELECT PARAMS (CIUDAD, CHECK-IN, CHECK-OUT)-->
            <div class="row fixed-middle p-3" style="margin-top:100px;">
                <!--BEGIN SELECT CHECK-IN DATE-->
                <div class="form-group px-md-3">
                    <label class=" text-white">Check-In</label>
                    <input name="checkIn" id="checkIn" style="height: 70px;  width:170px; border:none;" class="input-format input-format form-control" type="date" min="<?php date('Y-m-d'); ?>" value="<?php echo date('yy-m-d'); ?>" required>
                </div>
                <!--END SELECT CHECK-IN DATE-->
                <!--BEGIN SELECT CHECK-OUT DATE-->
                <div class="form-group px-md-3" ">
                    <label class=" text-white ">Check-Out</label>
                    <input name="checkOut " id="checkOut " style="height: 70px; width:170px; border:none; "
                        class="input-format form-control " type="date "
                        value="<?php $date=date( 'Y-m-d', strtotime( '+1 day')); echo $date;?>" min="
                    <?php date('Y-m-d ', strtotime('+1 day')); ?>" required>
                </div>
                <!--END SELECT CHECK-OUT DATE-->
                <!--BEGIN SELECT HUESPEDES-->
                <div class="form-group px-md-3" ">
                    <label class=" text-white ">Huéspedes</label>
                    <input name="huespedes " id="huespedes " style="height: 70px; width:170px; border:none; "
                        class="input-format form-control " type="number " min="1 " max="8 " value="1 " required>
                </div>
                <!--END SELECT HUESPEDES-->
                <!--BEGIN BUTTON BUSCAR-->
                <div class="form-group px-md-3 ">
                    <!-- onClick="var x=( document.body.scrollHeight);window.scrollTo(0,x); "-->
                    <button id="buscar " style="margin-top:32px;height: 70px; width:170px; border:none; " type="button "
                        class="input-format btn btn-warning form-control ">Buscar hotel</button>
                </div>
                <!--END BUTTON BUSCAR-->
            </div>
        </div>
        <!--END SEARCH PARAMS-->
    </div>
    <!--END DIV MAIN BUSCAR-->
    <!--BEGIN DIV BUSQUEDA (RESULTADOS)-->
    <div id="busqueda " class="d-block mh-100 w-100 container-fluid " style="clear: both; height:108vh ;width:20vw; " hidden>
        <div id="filtros " class="col-md-4 w-25 d-inline-block ">
                <!--BEGIN SELECT CIUDAD FILTROS-->
                <div class="form-group px-md-3 "">
                    <label class=" text-red">Ciudad</label>
                    <select class="form-control" id="ciudadFiltros" style="width: 15vw; margin-left:-1vw; border:none;" onChange="cambiarImagen()" required>
                        <option value="Mexico" selected>Cd. de México, Méx</option>
                        <option value="EEUU">Nueva York, EEUU</option>
                        <option value="Canada">Toronto, Canadá</option>
                    </select>
                </div>
                <!--END SELECT CIUDAD FILTROS-->
                <!--BEGIN SELECT CHECK-IN DATE FILTROS-->
                <div class="d-block form-group px-md-3 ">
                    <label class=" text-white ">Check-In</label>
                    <br>
                    <input name="checkIn " id="checkInFiltros " style="width: 15vw; margin-left:-1vw; border:none; " min="<?php date( 'yy-m-d '); ?>" class="input-format-sidebar form-control" type="date" value="
                    <?php echo date('yy-m-d '); ?>" onChange="cambiarCheckOut()" required>
                </div>
                <!--END SELECT CHECK-IN DATE FILTROS-->
                <!--BEGIN SELECT CHECK-OUT DATE FILTROS-->
                <div class="form-group px-md-3 " ">
            <label class=" text-white " style="margin-left:-84vw; ">Check-Out</label>
            <input name="checkOut " id="checkOutFiltros " style="width: 15vw; margin-left:-1vw; border:none; " class="input-format-sidebar form-control " type="date " min="<?php date( 'Y-m-d ', strtotime( '+1 day ')); ?>" value="
                    <?php $date = date('Y-m-d ', strtotime(' +1 day ')); echo $date;?>" required>
                </div>
                <!--END SELECT CHECK-OUT DATE FILTROS-->

        </div>
        <div id="resultados " class="w-27 d-inline-block ">
            <h1>Resultados de la busqueda</h1>
        </div>
    </div>
    <!--END DIV BUSQUEDA (RESULTADOS)-->
    <!--BEGIN FOOTER-->
    <div id="footer-div"class="d-block card-footer text-muted" style="position:fixed;" hidden>
        Agencia de viajes - @dannyhvalenz
    </div>
    <!--END FOOTER-->
        
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
    <!-- (Optional) Latest compiled and minified JavaScript translation files -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js"></script>
    <!-- Placed at the end of the document so the pages load faster -->
    <script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="assets/js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="assets/js/mdb.min.js"></script>
    <!--SMOOTH SCROLL & RESIZE-->
    <script src="assets/js/myJS/myscript.js"></script>
    <script>
    function cambiarImagen() {
        var ciudad = document.getElementById("ciudad").value;
        if (ciudad == "Mexico") {
            document.getElementById("imagen").src = "assets/img/mexico.jpg";
        } else if (ciudad == "EEUU") {
            document.getElementById("imagen").src = "assets/img/brooklyn.png";
        } else if (ciudad == "Canada") {
            document.getElementById("imagen").src = "assets/img/canada.png";
        }
    }
    </script>
</body>

</html>