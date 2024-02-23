import Navbar from "../components/Navbar";

export default function NotFound(appContainer) {
    const template = document.createElement('div')
    template.innerHTML = `
    ${Navbar()}
        <div class="mt-5 py-4 text-center">
            <h1 class="mt-4">Página no encontrada</h1><hr>
            <a href="/" class="nav-link">REGRESAR</a>
        </div>
    `
    appContainer.innerHTML= ''; appContainer.appendChild(template);
}