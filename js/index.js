$(document).ready(function () {
    $(".modal-wrap").hide()
    new WOW({
        animateClass: "animate__animated"
    }).init()


    $(".top-btn").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1300)
    })


    $(".header .header-wrap .nav").click(function(){
        $(".main-menu").addClass("on")
    })
    $(".main-menu a i").click(function(e){
        e.preventDefault()
        $(".main-menu").removeClass("on")
    })

    // 푸터

    $(".footer").click(function(e){
        e.preventDefault();
    })

    // 슈즈 스와이프

    const swiper = new Swiper(".swiper",{
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 10
    })

    $('.swiper-slide').on('mouseover', function(){
        swiper.autoplay.stop();
    });
    $('.swiper-slide').on('mouseout', function(){
        swiper.autoplay.start();
    });







    // 클럽부분




    let club_list = [
        design = {
            id : 1,
            image : "images/campa1.png",
            title: "프라이빗 위시",
            desc : "2022 홀리데이 컬렉션",
            iso: " campa"
        },
        {
            id : 2,
            image : "images/fashi1.png",
            title: "SPRING SUMMER 2023",
            desc : "In Translation",
            iso: " fashi"
        },
        {
            id : 3,
            image : "images/woman1.png",
            title: "#21 샹그릴라",
            desc : "이자벨 산도발(Isabel Sandoval)",
            iso: " womans"
        },
        {
            id : 4,
            image : "images/special1.png",
            title: "미우미우 테니스 클럽",
            desc : "생 트로페즈",
            iso: " special"
        },
        {
            id : 5,
            image : "images/perfume1.png",
            title: "미우미우 트위스트 오 드 매그놀리아",
            desc : "후각을 자극하는 여정",
            iso: " perfume"
        },
        {
            id : 6,
            image : "images/campa2.png",
            title: "미우 완더",
            desc : "배회, 탐험, 호기심 충족 발견",
            iso: " campa"
        },
        {
            id : 7,
            image : "images/campa3.png",
            title: "CHARACTER STUDY",
            desc : "미우미우 2022 가을/겨울 캠페인",
            iso: " campa"
        },
        {
            id : 7,
            image : "images/campa4.png",
            title: "BASIC INSTINCTS",
            desc : "미우미우 2022 봄/여름 캠페인",
            iso: " campa"
        },
        {
            id : 8,
            image : "images/fashi2.png",
            title: "2022 가을 겨울",
            desc : "Nathalie Djurberg and Hans Berg",
            iso: " fashi"
        },
        {
            id : 9,
            image : "images/fashi3.png",
            title: "2022 봄/여름",
            desc : "Basic Instincts",
            iso: " fashi"
        },
        {
            id : 10,
            image : "images/fashi4.png",
            title: "2021 가을 겨울",
            desc : "브레이브 하트",
            iso: " fashi"
        },
        {
            id : 11,
            image : "images/woman2.png",
            title: "#22 I AND THE STUPID BOY",
            desc : "카우테르 벤 하니아(Kaouther Ben Hania)",
            iso: " womans"
        },
        {
            id : 12,
            image : "images/woman3.png",
            title: "#23 HOUSE COMES WITH A BIRD",
            desc : "자니크자 브라보(Janicza Bravo)",
            iso: " womans"
        },
        {
            id : 13,
            image : "images/woman4.png",
            title: "#24 CARTA A MI MADRE PARA MI HIJO",
            desc : "카를라 시몬(Carla Simón)",
            iso: " womans"
        },
        {
            id : 14,
            image : "images/special2.png",
            title: "UPCYCLED BY MIU MIU",
            desc : "Re-worked,re-fashioned. by Miu Miu",
            iso: " special"
        },
        {
            id : 15,
            image : "images/special3.png",
            title: "A REMEDY",
            desc : "나탈리 뒤버그(Nathalie Djurberg)",
            iso: " special"
        },
        {
            id : 16,
            image : "images/special4.png",
            title: "샤인 어 라이트",
            desc : "짜릿한 새해를 알리는 미우미우",
            iso: " special"
        },
        {
            id : 17,
            image : "images/perfume2.png",
            title: "Twist Eau de Parfum",
            desc : "미우미우 트위스트(Twist)",
            iso: " perfume"
        },
        {
            id : 18,
            image : "images/perfume3.png",
            title: "Miu Miu L’Eau Rosée",
            desc : "말썽꾸러기가 되어 보세요!",
            iso: " perfume"
        },
        {
            id : 19,
            image : "images/perfume4.png",
            title: "Miu Miu Fleur d'Argent",
            desc : "눈부신 황홀함에 빠져 보세요.",
            iso: " perfume"
        }
    ]


    for(let k = 0; k < club_list.length; k++){
        // console.log(club_list[k].iso)
        let html = "";
        html += "<div class='clubcontent" +club_list[k].iso+"'>";
        html += "<div class='img wow animate__pulse'>";
        html += "<a href='#'><img src="+club_list[k].image+" alt="+club_list[k].title+"></a>"
        html += "</div>"
        html += "<div class='text'>"
        html += "<h3>"+club_list[k].title+"</h3>"
        html += "<p>"+club_list[k].desc+"</p>"
        html += "</div>"
        $(".club .miumiuclub .clubwrap").append(html)
    }



 // (클럽 처음 필터 활성화 + 클릭시 이벤트)
    $(".miumiuclub .menu ul li").eq(0).addClass("on")
    $(".miumiuclub .menu ul li").click(function(){
        let i = $(this).index()
        $(".miumiuclub .menu ul li").removeClass("on").eq(i).addClass("on")
    })



    $(".club .miumiuclub .clubwrap").isotope({
        itemSelector: ".clubcontent",
        filter: ".campa",
        transitionDuration: 1
    })

    $(".club .miumiuclub .menu ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".club .miumiuclub .menu ul li").removeClass("on").eq(i).addClass("on")

        let selector = $(this).attr("data-filter");
        $(".club .miumiuclub .clubwrap").isotope({
            filter: selector
        })
        })








        // 모달창

        let color = [
            "Pink",
            "Green",
            "Blue",
            "White"
        ]
    
        let design_img=[
            "images/bag1Cp.jpg",
            "images/bag1Cg.jpg",
            "images/bag1Cb.jpg",
            "images/bag1Cw.jpg"
        ]
    
        $(".bag .content-bag ul li p, .hot .content2 .buy-btn").click(function(e){
            e.preventDefault();
            $(".modal").show()
            $(".modal-wrap").fadeIn()
            $(".modal-wrap .right .select .bagimg").removeClass("on").eq(0).addClass("on")
            $(".hot, .bag").addClass("on")
        })
    
    
        $(".modal-wrap .right .select .bagimg").click(function(){
            let i = $(this).index();
            // console.log(i)
            $(".modal-wrap .left img").attr("src", design_img[i])
            $(".modal-wrap .right .select .bagimg").removeClass("on").eq(i).addClass("on")
            $(".modal-wrap .right .select p span").text(color[i])
        })
    
        $(".modal-wrap .right > a i, .modal").click(function(e){
            e.preventDefault();
            $(".modal").hide()
            $(".modal-wrap").fadeOut()
            $(".hot, .bag").removeClass("on")
        })
    
        $(".modal-wrap .right .cart i").eq(0).click(function(){
            $(".modal-wrap .right .cart i").eq(0).toggleClass("fa-heart-circle-plus fa-heart-circle-minus")
        })
    
    
        let count = 0;
    
        $(".modal-wrap .right .cart").click(function(e){
            e.preventDefault();
            $(".modal-wrap .right .cart a").toggleClass("active").toggleClass("on")
        })

        $(".club .miumiuclub .clubwrap .clubcontent").click(function(e){
            e.preventDefault();
        })
    


// 풀페이지

    let Fullpage = new fullpage(".fullpage",{
        sectionsColor: ["", "#f7f8f9", "#000", "#000", "#000", "#f7f8f9","#f7f8f9"],
        anchors: ["main", "newin", "hot", "bag", "shoes", "club", "footer"],
        navigation: true,
        scrollBar : true,
        responsiveWidth: 1200,
        normalScrollElements: ".modal, .modal-wrap, .main-menu",
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        afterLoad: function(origin, destination){
            if(destination.index > 0){
                $(".header").css("background-color", "")
            }else{
                $(".header").css("background-color", "transparent")
            }
        },
        onLeave: function(origin, destination){
            }
    })



}); //jq