const d = document;
d.querySelector('#cat_ropa_hombre').addEventListener('click', () => {
    const cat_1 = d.querySelector('#ol_ropa_hombre');
    let valor = cat_1.getAttribute('data-c-1');

    if (valor == 1) {
        cat_1.setAttribute('data-c-1', '0');
            cat_1.classList.add('d_none');
    } else {
        cat_1.setAttribute('data-c-1', '1');
            cat_1.classList.remove('d_none');
    };
})
//---------------------------------
d.querySelector('#cat_ropa_mujer').addEventListener('click', () => {
    const cat_2 = d.querySelector('#ol_ropa_mujer');
    let valor = cat_2.getAttribute('data-c-2');

    if (valor == 1) {
        cat_2.setAttribute('data-c-2', '0');
            cat_2.classList.add('d_none');
    } else {
        cat_2.setAttribute('data-c-2', '1');
            cat_2.classList.remove('d_none');
    };
})
//---------------------------------
d.querySelector('#cat_ropa_kids').addEventListener('click', () => {
    const cat_3 = d.querySelector('#ol_ropa_kids');
    let valor = cat_3.getAttribute('data-c-3');

    if (valor == 1) {
        cat_3.setAttribute('data-c-3', '0');
            cat_3.classList.add('d_none');
    } else {
        cat_3.setAttribute('data-c-3', '1');
            cat_3.classList.remove('d_none');
    };
})
//---------------------------------
d.querySelector('#cat_accesorios').addEventListener('click', () => {
    const cat_4 = d.querySelector('#ol_accesorios');
    let valor = cat_4.getAttribute('data-c-4');

    if (valor == 1) {
        cat_4.setAttribute('data-c-4', '0');
            cat_4.classList.add('d_none');
    } else {
        cat_4.setAttribute('data-c-4', '1');
            cat_4.classList.remove('d_none');
    };
})
//---------------------------------
d.querySelector('#cat_hogar_aire').addEventListener('click', () => {
    const cat_4 = d.querySelector('#ol_hogar_aire');
    let valor = cat_4.getAttribute('data-c-4');

    if (valor == 1) {
        cat_4.setAttribute('data-c-4', '0');
            cat_4.classList.add('d_none');
    } else {
        cat_4.setAttribute('data-c-4', '1');
            cat_4.classList.remove('d_none');
    };
})