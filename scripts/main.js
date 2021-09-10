/* Constantes y Variables */
    const d = document
    menuLst = d.querySelector('nav .menu')
    menuBtn = d.querySelector('nav .btn')

    menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'