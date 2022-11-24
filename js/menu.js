var menus = [
    {
        titulo: "Dashboard",
        url: "index.html",
        icone: "fas fa-home"
    },
    {
        titulo: "Listar",
        url: "listar.html",
        icone: "fas fa-list"
    },
    {
        titulo: "Cadastrar",
        url: "cadastrar.html",
        icone: "fas fa-plus"
    }
]
menus.forEach(function (i) {
    document.querySelector("#menus").innerHTML +=
        //`
        // <li class="nav-item">
        // <a class="nav-link active" aria-current="page" href="${url}">
        //     <i class="${icone}"></i>
        //     ${titulo}
        // </a>
        // </li> `
        `<li class="nav-item">
    <a class="nav-link" aria-current="page" href="${i.url}">
        <i class="${i.icone}"></i>
        ${i.titulo}
    </a>
    </li> `
})
{/* */ }