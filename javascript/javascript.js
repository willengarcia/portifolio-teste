const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')

let valor = 0

window.addEventListener('load', (evt)=>{
    const tempo1 = ()=>{
        html.value = valor
        if(valor>=100){
            setTimeout(()=>{
                clearInterval(intervalo1)
            }, 1)
        }
        valor++
    }
    const intervalo1 = setInterval(tempo1,30)

    const tempo2 = ()=>{
        css.value = valor
        if(valor>=80){
            setTimeout(()=>{
                clearInterval(intervalo2)
            }, 1)
            console.log(valor)
        }
        valor++
    }
    const intervalo2 = setInterval(tempo2,30)

    const tempo3 = ()=>{
        js.value = valor
        if(valor>=60){
            setTimeout(()=>{
                clearInterval(intervalo3)
            }, 1)
        }
        valor++
    }
    const intervalo3 = setInterval(tempo3,30)
})