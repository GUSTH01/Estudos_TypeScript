const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        }else{
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        carregaPagina(el)
    }
})

function carregaPagina(el){
    const href = el.getAttribute('href')
    console.log(href)
}