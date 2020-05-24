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

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

    <link href="assets/css/cover.css" rel="stylesheet">
    <style>
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

<body onLoad="disableScroll();">
    <!--BEGIN DIV MAIN BUSCAR-->
    <div id="mainBuscar" class="text-center d-block mh-100 h-100">
        <!--BEGIN BACKGROUND RESIZE-->
        <div class="mh-100 h-100" id="div-resize" style="position:absolute;width: 60%; height: 100vh;" id="added">
            <div id="container">
            </div>
        </div>
        <!--END BACKGROUND RESIZE-->
        <!--BEGIN NAVBAR-->
        <header class="header">
            <div class="navbar p-3 px-md-4 mb-3 bg-white shadow-sm">
                <img class="" src="assets/img/logo-letras.png" height="40">
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
            <select class="new-select" id="ciudad" name="ciudad" style="margin-right:150px" onChange="cambiarImagen()"
                required>
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
                    <input name="checkIn" id="checkIn" style="height: 70px;  width:170px; border:none;"
                        class="input-format input-format form-control" type="date" min="<?php date('Y-m-d'); ?>"
                        value="<?php echo date('yy-m-d'); ?>" required>
                </div>
                <!--END SELECT CHECK-IN DATE-->
                <!--BEGIN SELECT CHECK-OUT DATE-->
                <div class="form-group px-md-3"">
                    <label class=" text-white">Check-Out</label>
                    <input name="checkOut" id="checkOut" style="height: 70px;  width:170px; border:none;"
                        class="input-format form-control" type="date"
                        value="<?php $date = date('Y-m-d', strtotime("+1 day")); echo $date;?>"
                        min="<?php date('Y-m-d', strtotime("+1 day")); ?>" required>
                </div>
                <!--END SELECT CHECK-OUT DATE-->
                <!--BEGIN SELECT HUESPEDES-->
                <div class="form-group px-md-3"">
                    <label class=" text-white">Huéspedes</label>
                    <input name="huespedes" id="huespedes" style="height: 70px; width:170px; border:none;"
                        class="input-format form-control" type="number" min="1" max="8" value="1" required>
                </div>
                <!--END SELECT HUESPEDES-->
                <!--BEGIN BUTTON BUSCAR-->
                <div class="form-group px-md-3">
                    <!-- onClick="var x = (document.body.scrollHeight);window.scrollTo(0,x);"-->
                    <button id="buscar" style="margin-top:32px;height: 70px;  width:170px; border:none;" type="button"
                        class="input-format btn btn-warning form-control">Buscar hotel</button>
                </div>
                <!--END BUTTON BUSCAR-->
            </div>
        </div>
        <!--END SEARCH PARAMS-->
    </div>
    <!--END DIV MAIN BUSCAR-->

    <!--BEGIN DIV BUSQUEDA (RESULTADOS)-->
    <div id="busqueda" class="d-block h-100 w-100 container-fluid " hidden>
        <div id="filtros " class="col-md-4  w-25 h-auto d-inline-block" style="margin-top:10vh">
            <!--BEGIN SELECT CIUDAD FILTROS-->
            <div class="form-group px-md-3"">
                <label class=" text-white">Ciudad</label>
                <select class="input-format-sidebar form-control" id="ciudadFiltros" onChange="cambiarImagen()"
                    required>
                    <option value="Mexico" selected>Cd. de México, Méx</option>
                    <option value="EEUU">Nueva York, EEUU</option>
                    <option value="Canada">Toronto, Canadá</option>
                </select>
            </div>
            <!--END SELECT CIUDAD FILTROS-->
            <!--BEGIN SELECT CHECK-IN DATE FILTROS-->
            <div class="d-block form-group px-md-3 ">
                <label class="text-white">Check-In</label>
                <br>
                <input name="checkIn" id="checkInFiltros" min="<?php date( 'yy-m-d '); ?>"
                    class="input-format-sidebar form-control" type="date" value="<?php echo date('yy-m-d '); ?>"
                    onChange="cambiarCheckOut()" required>
            </div>
            <!--END SELECT CHECK-IN DATE FILTROS-->
            <!--BEGIN SELECT CHECK-OUT DATE FILTROS-->
            <div class="form-group px-md-3">
                <label class="text-white">Check-Out</label>
                <br>
                <input name="checkOut" id="checkOutFiltros"
                    min="<?php $date = date('Y-m-d ', strtotime(' +1 day ')); echo $date; ?>"
                    class="input-format-sidebar form-control" type="date" value="
                    <?php $date = date('Y-m-d ', strtotime(' +1 day ')); echo $date; ?>" required>
            </div>
            <!--END SELECT CHECK-OUT DATE FILTROS-->
            <!--BEGIN SELECT HUESPEDES-->
            <div class="form-group px-md-3"">
                <label class=" text-white">Huéspedes</label>
                <br>
                <input name="huespedes" id="huespedesFiltros" class="input-format-sidebar form-control" type="number"
                    min="1" max="8" value="1" required>
            </div>
            <!--END SELECT HUESPEDES-->
            <!--BEGIN SELECT TIPO HABITACION-->
            <div class="form-group px-md-3"">
                <label class=" text-white">Tipo de habitación</label>
                <br>
                <select class="input-format-sidebar form-control" id="tipoHabitacion" onChange="cambiarImagen()"
                    required>
                    <option value="Todas" selected>Todas</option>
                    <option value="Sencilla">Sencilla</option>
                    <option value="Doble">Doble</option>
                    <option value="JuniorDoble">Junior Doble</option>
                    <option value="Suite">Suite</option>
                </select>
            </div>
            <!--END SELECT TIPO HABITACION-->
            <!--BEGIN BOTON APLICAR FILTROS-->
            <div class="form-group px-md-3"">
                <button  type=" button" id="aplicarfiltros" style="margin-top:4vw"
                class=" btn-warning input-format-sidebar form-control">Aplicar filtros</button>
            </div>
            <!--END BOTON APLICAR FILTROS-->
        </div>

        <div id="resultados" class="float-right w-75 h-auto d-inline-block" style="margin-top:5vh">
            <h1>Resultados de la busqueda</h1>
            <div id="cards-hoteles" class="card-deck">
                <!-- Card -->
                <div class="card" style="max-height:200px;">

                    <!-- Card image -->
                    <div class="view overlay">
                        <img class="card-img-top"
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Card title</h4>
                        <!-- Text -->
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                            content.</p>
                        <!-- Button -->
                        <a href="#" class="btn btn-primary">Button</a>

                    </div>

                </div>
                <!-- Card -->
                <!-- Card -->
                <div class="card">

                    <!-- Card image -->
                    <div class="view overlay">
                        <img class="card-img-top"
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Card title</h4>
                        <!-- Text -->
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                            content.</p>
                        <!-- Button -->
                        <a href="#" class="btn btn-primary">Button</a>

                    </div>

                </div>
                <!-- Card -->
                <!-- Card -->
                <div class="card">

                    <!-- Card image -->
                    <div class="view overlay">
                        <img class="card-img-top"
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Card title</h4>
                        <!-- Text -->
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                            content.</p>
                        <!-- Button -->
                        <a href="#" class="btn btn-primary">Button</a>

                    </div>

                </div>
                <!-- Card -->
                <!-- Card -->
                <div class="card" style="max-height:200px;">

                    <!-- Card image -->
                    <div class="view overlay">
                        <img class="card-img-top"
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Card title</h4>
                        <!-- Text -->
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                            content.</p>
                        <!-- Button -->
                        <a href="#" class="btn btn-primary">Button</a>

                    </div>

                </div>
                <!-- Card -->
            </div>
        </div>
    </div>
    <!--END DIV BUSQUEDA (RESULTADOS)-->
    <!--BEGIN FOOTER-->
    <div id="footer-div" class="d-block card-footer text-muted">
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