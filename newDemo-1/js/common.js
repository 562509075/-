/**
 * Created by Administrator on 2017/6/15 0015.
 */
/************��ҳ-����**********/
var i = 0;//��ʼ���±�
var timer;//���嶨ʱ��
//����Ҽ�ͷ
$(".btn_right").click(function(){
    i++;
    if(i>2)i=0;
    $("#index_news li").eq(i).fadeIn(1500).siblings().fadeOut(1500);
});
//������ͷ
$(".btn_left").click(function(){
    i--;
    if(i<0)i=2;
    $("#index_news li").eq(i).fadeIn(1500).siblings().fadeOut(1500);
});
$("#index_news li").mouseover(function(){
    clearInterval(timer);//�������ʱ��ͣ��ʱ��
});
$("#index_news li").mouseout(function(){
    timer = setInterval(play,3000);//����Ƴ��ָ���ʱ��
});
$(".btn_left").mouseover(function(){
    clearInterval(timer);//�������ʱ��ͣ��ʱ��
});
$(".btn_left").mouseout(function(){
    timer = setInterval(play,3000);//����Ƴ��ָ���ʱ��
});
$(".btn_right").mouseover(function(){
    clearInterval(timer);//�������ʱ��ͣ��ʱ��
});
$(".btn_right").mouseout(function(){
    timer = setInterval(play,3000);//����Ƴ��ָ���ʱ��
});
//��ʱ��
function play(){
    i++;
    if(i>2)i=0;
    $("#index_news li").eq(i).fadeIn(1500).siblings().fadeOut(1500);
}
//ִ�ж�ʱ��
timer = setInterval(play,3000);
/************��ҳ-չʾ**********/
$(".show_nav ul li").click(function () {
    $(this).css("background-color","#5f5f5f").siblings().css("background-color","#f0f0f0");
    $(this).children("a").css("color","#fff").parents().siblings().children("a").css("color","#535353");
});
$("#show_nav1").click(function(){
    $(".show_content").css("display","block");
    $(".link").css("display","none");
    $(".show_image").css("display","none");
});
$("#show_nav2").click(function(){
    $(".show_content").css("display","none");
    $(".link").css("display","block");
    $(".show_image").css("display","none");
});
$("#show_nav3").click(function(){
    $(".show_content").css("display","none");
    $(".link").css("display","none");
    $(".show_image").css("display","block");
});