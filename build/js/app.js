function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){console.log(n.getBoundingClientRect()),n.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behaviour:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/thumb/${n}.avif" type="image/avif" />\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp" />\n        <img\n        loading="lazy"\n        width="200"\n        height="300"\n        src="build/img/thumb/${n}.jpg"\n        alt="Imagen de la galeria"\n        />\n    `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif" />\n        <source srcset="build/img/grande/${e}.webp" type="image/webp" />\n        <img\n        loading="lazy"\n        width="200"\n        height="300"\n        src="build/img/grande/${e}.jpg"\n        alt="Imagen de la galeria"\n        />\n    `;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(o);const i=document.querySelector("body");i.appendChild(t),i.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
