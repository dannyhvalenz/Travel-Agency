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

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>

    <script src="assets/js/hoteles.js"></script>
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

<body onLoad="disableScroll();" class="text-center">
    <div class="mh-100" id="div-resize" style="position:absolute;width: 60%; height: 100vh;" id="added">
        <div id="container">
        </div>
    </div>
    <header class="header">
        <div class="navbar p-3 px-md-4 mb-3 bg-white shadow-sm">
            <img class="" src="assets/img/logo.svg" height="40">
            <nav class="cl-effect-3 my-2 my-md-0 mr-md-3">
                <a class="p-2" href="vuelos.php" style="text-decoration:none;">Vuelos</a>
                <a class="p-2 active" href="#" style="text-decoration:none">Hoteles</a>
                <a class="p-2" href="login.php" style="text-decoration:none">Inicia Sesión</a>
            </nav>
    </header>

    <!--Carousel Wrapper-->
    <div id="carousel-example-1z" class="carousel slide carousel-fade z-depth-1-half" style="
    width:  50vw;
    object-fit: scale-down;float:right; position: relative" data-ride="carousel">

        <img class="d-block w-100 img-fluid" id="imagen" src="assets/img/mexico.jpg" alt="Ciudad">
    </div>
    <!--/.Carousel Wrapper-->
    <div class="mw-100" style="position: absolute; margin-top:100px;">
        <form method="POST">
            <select class="new-select" id="ciudad" name="ciudad" style="margin-right:150px" onChange="cambiarImagen()" required>
                <option value="Mexico" selected>Ciudad de México, México</option>
                <option value="EEUU">Nueva York, EE.UU.</option>
                <option value="Canada">Toronto, Canadá</option>
            </select>
            <div class="row fixed-middle p-3" style="margin-top:100px;">
                <div class="form-group px-md-3">
                    <label class=" text-white">Check-In</label>
                    <input name="checkIn" id="checkIn" style="height: 70px;  width:170px; border:none;"
                        class="input-format input-format form-control" type="date" min="<?= date('Y-m-d'); ?>" value="<?php echo date('yy-m-d'); ?>"
                        required>
                </div>
                <div class="form-group px-md-3"">
                    <label class=" text-white">Check-Out</label>
                    <input name="checkOut" id="checkOut"style="height: 70px;  width:170px; border:none;"
                        class="input-format form-control" type="date"
                        value="<?php $date = date('Y-m-d', strtotime("+1 day")); echo $date;?>" min="<?= date('Y-m-d', strtotime("+1 day")); ?>" required>
                </div>
                <div class="form-group px-md-3"">
                    <label class=" text-white">Huéspedes</label>
                    <input name="huespedes" id="huespedes" style="height: 70px; width:170px; border:none;"
                        class="input-format form-control" type="number" min="1" max="8" value="1" required>
                </div>
                <div class="form-group px-md-3">
                    <!-- onClick="var x = (document.body.scrollHeight);window.scrollTo(0,x);"-->
                    <button id="buscar" style="margin-top:32px;height: 70px;  width:170px; border:none;" type="button"
                        class="input-format btn btn-warning form-control" >Buscar hotel</button>
                </div>
            </div>
        </form>
    </div>

    <div id="busqueda" style="clear: both; height:108vh" hidden>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                        <div >
                            <div style="position:relative; top:20vh ;left:10px">
                            <div class="form-group px-md-3"">
                                    <label class=" text-white" style="margin-left:-84vw;clear: both;">Ciudad</label>
                                    <select class="input-format-sidebar form-control" id="ciudadFiltros"
                                        style="width: 15vw; margin-left:-1vw; border:none;" onChange="cambiarImagen()" required>
                                        <option value="Mexico" selected>Cd. de México, Méx</option>
                                        <option value="EEUU">Nueva York, EEUU</option>
                                        <option value="Canada">Toronto, Canadá</option>
                                    </select>

                                </div>
                                <div class="d-block form-group px-md-3">
                                    <label class=" text-white" style="margin-left:-84vw;">Check-In</label>
                                    <br>
                                    <input name="checkIn" id="checkInFiltros" style="width: 15vw; margin-left:-1vw; border:none;"  min="<?= date('yy-m-d'); ?>" 
                                        class="input-format-sidebar form-control" type="date" value="<?php echo date('yy-m-d'); ?>"
                                        onChange="cambiarCheckOut()" required>
                                </div>
                                <div class="form-group px-md-3"">
                                    <label class=" text-white" style="margin-left:-84vw;">Check-Out</label>
                                    <input name="checkOut" id="checkOutFiltros"  style="width: 15vw; margin-left:-1vw; border:none;"
                                        class="input-format-sidebar form-control" type="date"  min="<?= date('Y-m-d', strtotime("+1 day")); ?>" 
                                        value="<?php $date = date('Y-m-d', strtotime("+1 day")); echo $date;?>" required>
                                </div>
                                <div class="form-group px-md-3"">
                                    <label class=" text-white" style="margin-left:-84vw;clear: both;">Huéspedes</label>
                                    <input name="huespedes" id="huespedesFiltros" style="width: 15vw; margin-left:-1vw; border:none;"
                                        class="input-format-sidebar form-control" type="number" min="1" max="8" value="1" required>
                                </div>
                                <div class="form-group px-md-3"">
                                    <label class=" text-white" style="margin-left:-84vw;clear: both;">Tipo de habitación</label>
                                    <select class="input-format-sidebar form-control" id="tipoHabitacion"
                                        style="width: 15vw; margin-left:-1vw; border:none;" onChange="cambiarImagen()" required>
                                        <option value="Todas" selected>Todas</option>
                                        <option value="Sencilla">Sencilla</option>
                                        <option value="Doble">Doble</option>
                                        <option value="JuniorDoble">Junior Doble</option>
                                        <option value="Suite">Suite</option>
                                    </select>

                                </div>
                                <div class="form-group px-md-3"">
                                    <button  type="button" id="aplicarfiltros" style="width: 15vw; margin-left:-1vw; margin-top:4vw" 
                                    class=" btn-warning button-format-sidebar form-control" >Aplicar filtros</button>
                                </div>
                            </div>
                    </div>
                    
                </div>
                <div class="col-sm-8">
                    <h1 style="position:relative; top:17vh; left:-8vw">Resultados de la búsqueda</h1>
                    <div id="listaHoteles" class="list-group" v-if="bandera === true" v-for="item in db">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{item}}</h5>
                            </div>
                            <p class="mb-1">{{item.ciudad}}</p>
                          
                        </a>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
    <div id="footer-div"class="card-footer text-muted" style="position:fixed;" hidden>
        Agencia de viajes - @dannyhvalenz
    </div>


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