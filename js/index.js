/**
 * Created by wangxiang on 2017/7/21.
 */
$('.btn').on('click',function(){
    $(this).toggleClass('active')
})
/*$('.cz-wx').on('click',function(){
    var html=$(this).find('div').html()
    if(html=='立即开抢'){
        $('.modal').css('display','block')
    }
})*/

function cli(t){
    var html=$(t).find('div').html();
    if(html=='立即开抢'){
        $('.modal').show()
    }
}
function closeModal(){
    $('.modal').hide();
}
function failModal(){
    $('.modal1').show();
}
function closeFail(){
    $('.modal1').hide()
}