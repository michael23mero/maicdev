export default function Navbar() {
    return `
        <header id="header">
            <h5 href="#" class="logo">- maicdev -</h5>
            <nav id="navbar">
                <a href=""><i class="fas fa-home"></i> Home</a>
                <a href="/#info" data-toggle="modal" data-target="#modal-about">
                    <i class="fas fa-info-circle"></i> Info
                </a>
            </nav>
        </header>
    `
}