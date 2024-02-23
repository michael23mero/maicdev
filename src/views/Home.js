import Info from "../components/Info";
import Navbar from "../components/Navbar"

export default function Home(appContainer) {
    const template = document.createElement('div')
    template.innerHTML = `
        ${Navbar()}

        <main class="container mt-5"><br>
            <h1 class="text-center mt-4 py-4 animate__animated animate__bounceInLeft">< Hola Mundo /> </h1>
            <div class="row">
                <div class="col-md-6 text-center animate__animated animate__zoomIn">
                    <img src="/file/logo.png" alt="">
                </div>
                <div class="col-md-6 mt-4" style="font-size: 17px;">
                    <div class="d-flex">
                        <i class="fas fa-user mt-1"></i> <p class="ml-2">Michael Joel Mero Antón</p>
                    </div>
                    <div class="d-flex">
                        <i class="fas fa-map-marker mt-1"></i> <p class="ml-2">Manta - Ecuador</p>
                    </div>
                    <div class="d-flex">
                        <i class="fas fa-envelope mt-1"></i> <p class="ml-2">maicol23mero.dev@gmail.com</p>
                    </div>
                    <div class="d-flex">
                        <i class="fab fa-github mt-1"></i> <a class="ml-2" href="https://github.com/michael23mero/" target="_blank">Repositorio</a>
                    </div>
                </div>
            </div><br>

            <hr class="mt-5" style="height: 1px; background-color: #fff;">

            <div class="d-flex justify-content-center mx-auto py-4">
                <div class="icon-container">
                    <a href="" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                </div>
        
                <div class="icon-container">
                    <a href="" class="nav-link"><i class="fab fa-instagram"></i></a>
                </div>
        
                <div class="icon-container">
                    <a href="" class="nav-link"><i class="fab fa-twitter"></i></a>
                </div>
        
                <div class="icon-container">
                    <a href="" class="nav-link"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <hr class="mt-3" style="height: 1px; background-color: #fff;">
        </main>

        <div class="modal fade" id="modal-about" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="card p-4 text-center">
                        <h5 class="card-header p-3">FTTH Budget App</h5>
                        <h1 class="display-3 text-primary"><i class="fas fa-info-circle"></i></h1>
                        <p class="py-2 bg-primary_">© Todos los derechos reservados por Wion</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="info">${Info()}</div>
    `
    appContainer.innerHTML= ''; appContainer.appendChild(template);
}