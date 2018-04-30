function sortir1() {
    document.getElementById( 'item5' ).style.display = 'none';
    document.getElementById( 'item6' ).style.display = 'none';
    document.getElementById( 'item7' ).style.display = 'none';
    document.getElementById( 'item8' ).style.display = 'none';
    document.getElementById( 'item9' ).style.display = 'none';
    document.getElementById( 'item10' ).style.display = 'none';
    document.getElementById( 'item11' ).style.display = 'none';
    document.getElementById( 'item12' ).style.display = 'none';
    document.getElementById( 'item13' ).style.display = 'none';
    document.getElementById( 'item14' ).style.display = 'none';
    document.getElementById( 'item15' ).style.display = 'none';
    document.getElementById( 'item16' ).style.display = 'none';
}
function sortir2() {
    document.getElementById( 'item1' ).style.display = 'none';
    document.getElementById( 'item2' ).style.display = 'none';
    document.getElementById( 'item3' ).style.display = 'none';
    document.getElementById( 'item4' ).style.display = 'none';
    document.getElementById( 'item9' ).style.display = 'none';
    document.getElementById( 'item10' ).style.display = 'none';
    document.getElementById( 'item11' ).style.display = 'none';
    document.getElementById( 'item12' ).style.display = 'none';
    document.getElementById( 'item13' ).style.display = 'none';
    document.getElementById( 'item14' ).style.display = 'none';
    document.getElementById( 'item15' ).style.display = 'none';
    document.getElementById( 'item16' ).style.display = 'none';
}
function sortir3() {
    document.getElementById( 'item1' ).style.display = 'none';
    document.getElementById( 'item2' ).style.display = 'none';
    document.getElementById( 'item3' ).style.display = 'none';
    document.getElementById( 'item4' ).style.display = 'none';
    document.getElementById( 'item5' ).style.display = 'none';
    document.getElementById( 'item6' ).style.display = 'none';
    document.getElementById( 'item7' ).style.display = 'none';
    document.getElementById( 'item8' ).style.display = 'none';
    document.getElementById( 'item13' ).style.display = 'none';
    document.getElementById( 'item14' ).style.display = 'none';
    document.getElementById( 'item15' ).style.display = 'none';
    document.getElementById( 'item16' ).style.display = 'none';
}
function sortir4() {
    document.getElementById( 'item1' ).style.display = 'none';
    document.getElementById( 'item2' ).style.display = 'none';
    document.getElementById( 'item3' ).style.display = 'none';
    document.getElementById( 'item4' ).style.display = 'none';
    document.getElementById( 'item5' ).style.display = 'none';
    document.getElementById( 'item6' ).style.display = 'none';
    document.getElementById( 'item7' ).style.display = 'none';
    document.getElementById( 'item8' ).style.display = 'none';
    document.getElementById( 'item9' ).style.display = 'none';
    document.getElementById( 'item10' ).style.display = 'none';
    document.getElementById( 'item11' ).style.display = 'none';
    document.getElementById( 'item12' ).style.display = 'none';

}
    $(document).ready(function(){

    $('.ruki').click(function(){
        for(i=1;i<=4;i++){
            $('#item'+i).fadeIn(700);
        }
    })
    $('.smaz').click(function(){
        for(i=5;i<=8;i++){
            $('#item'+i).fadeIn(700);
        }
    })
    $('.masl').click(function(){
        for(i=9;i<=12;i++){
            $('#item'+i).fadeIn(700);
        }
    })
    $('.tehzhid').click(function(){
        for(i=13;i<=16;i++){
            console.log(i)
            $('#item'+i).fadeIn(700);
        }
    })
    $('.reset').click(function(){
        for(i=1;i<=16;i++){
            $('#item'+i).fadeIn(700);
        }
    })
});