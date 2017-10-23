import * as helo from './log.js'


document.getElementById('btn_lazy').addEventListener('click', function(){
    import(/* webpackMode: "lazy-once" */'jquery').then(($) => {
        helo.helo2()
        let chocolat = 'nestlet'
        let [a, ,b] = [1,2,3,4]
        console.log(b)
        $('body').css('backgroundColor', '#F00')
    })
})
