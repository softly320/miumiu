$(document).ready(function () {
    

//
//
//
//다국어설정


const url = new URL(location.href).searchParams;
const lang = url.get("lang");
const pathname = new URL(location.href).pathname;

// 네비게이션
const kr_nav = ["컬렉션", "신상품", "미우미우 클럽"];
const en_nav = ["COLLECTION", "NEW IN", "MIU MIU CLUB"];
const jp_nav = ["コレクション","新商品","ミュウミュウクラブ"]


// newin 
const kr_new = ["신상품","홀리데이 2022,","레디 투 웨어","아이코닉한 믹스&매치의 컨트라스트는, 여성스러운 실루엣, 오버사이즈의 형태, 복고풍 라인과 현대적인 디테일으로 기성복 컬렉션을 구분합니다.","구매하기"]
const en_new = ["NEW IN","Holiday 2022,","Ready to wear","An iconic mix&match of contrasts distinguishes the ready-to-wear collection with feminine silhouettes, oversized shapes, retro lines and contemporary details.","shop"]
const jp_new = ["新商品","ホリデー 2022,","レディートゥウェアー","アイコニックなミックス&マッチのコントラストは女性らしいシルエット、オーバーサイズの形、レトロなラインと現代的なディテールで既製服のコレクションを際立たせています。","購入する"]

// hot
const kr_hot = ["미우 원더", "구매하기"]
const en_hot = ["Miu Wander", "Shop"]
const jp_hot = ["ミュウ・ワンダー", "購入する"]


// bag
const kr_bag = ["미우 원더 쉬어링 미니 호보백", "예약하기", "구매하기"]
const en_bag = ["Miu Wander shearling mini hobo bag","Reservation","Cart"]
const jp_bag = ["ミュウ・ワンダーシアリングミニホボバック","予約する", "購入する"]


//footer
const kr_footer = ["회사명: 프라다 코리아 (유). 사업자등록번호: 213-86-18599. 대표자: 최문영. 개인정보 보호책임자: 김지훈이사. 통신판매신고번호: 2017-서울강남-04082. 주소: 서울시 강남구 압구정로 439 06010. 고객 서비스 센터: 080-522-7198. 이메일: CLIENT.SERVICE.KR@MIUMIU.COM. 법적고지 및 이용약관 (링크를 확인하세요). 호스팅 서비스: WIIT. 구매안전서비스: NHN한국 사이버결제 주식회사에 가입하여 고객님의 안전한 거래를 보장하고 있습니다. 모든제품은 2016년 1월 이후 생산된 제품 입니다.","뉴스레터","매장찾기","이메일주소","지역명","구독하기","검색"]
const en_footer = ["Company name: PRADA KOREA LLC. Business registration number: 213-86-18599. Representative person name: CHOI MOONYOUNG. Chief Privacy Officer: Jeehoon Kim. E-commerce business operator Registration number: 2017-SEOULGANGNAM-04082. Office Address: Apkujeong-Ro 439, Gangnam-gu, Seoul 06010. Telephone number: 080-522-7198. E-mail address: CLIENT.SERVICE.KR@MIUMIU.COM. Contractual T&C of the e-commerce business (LINK TO T&C). Hosting services name: WIIT. Escrow info: We are affiliated with a purchasing security service called NHN Korea Cyber Payment Co., Ltd. to guarantee your safe transactions. Manufacturing date disclaimers: Every product has been produced since after January 2016","News letter","Store","E-mail address","State","Subscribe","Search"]
const jp_footer = ["ニュースレター","ストア","メールアドレス","地域名","購読する","探す"]



//modal
const kr_modal = ["미우 원더 쉬어링 미니 호보백", "카트에 추가하기", ]
const en_modal = ["Miu Wander shearling mini hobo bag", "Cart +", "Cart -"]
const jp_modal = ["ミュウ・ワンダーシアリングミニホボバック", "カートに入れる", "カートから削除"]






    if(lang == undefined || lang == "kr"){
        $(".header .header-wrap .logo a").attr("href", pathname+"?lang=kr")
        $(".header .header-wrap .nav ul li a").eq(0).text(kr_nav[0])
        $(".header .header-wrap .nav ul li a").eq(1).text(kr_nav[1])
        $(".header .header-wrap .nav ul li a").eq(2).text(kr_nav[2])
        $(".newin .left h3").eq(0).text(kr_new[0])
        $(".newin .left span").eq(0).text(kr_new[1])
        $(".newin .left span").eq(1).text(kr_new[2])
        $(".newin .left p").eq(0).text(kr_new[3])
        $(".newin .left a").eq(0).text(kr_new[4])
        $(".hot .buy-btn h3").eq(0).text(kr_hot[0])
        $(".hot .buy-btn span").eq(0).text(kr_hot[1])
        $(".bag ul li span:even").text(kr_bag[0])
        $(".bag ul li p").eq(0).text(kr_bag[1])
        $(".bag ul li p:gt(0)").text(kr_bag[2])
        $(".footer .left p").text(kr_footer[0])
        $(".footer .right h3").eq(0).text(kr_footer[1])
        $(".footer .right h3").eq(1).text(kr_footer[2])
        $(".footer .right p").eq(0).text(kr_footer[3])
        $(".footer .right p").eq(1).text(kr_footer[4])
        $(".footer .right a").eq(0).text(kr_footer[5])
        $(".footer .right a").eq(1).text(kr_footer[6])
        $(".modal-wrap .right .text h3").eq(0).text(kr_modal[0])
        $(".modal-wrap .right .cart a").eq(0).text(kr_modal[1])
        $(".modal-wrap .right .cart a").eq(1).text(kr_modal[2])

    }else if(lang == undefined || lang == "en"){
        $(".header .header-wrap .logo a").attr("href", pathname+"?lang=en")
        for(let i = 0; i < en_nav.length; i++){
            $(".header .header-wrap .nav ul li a").eq(i).text(en_nav[i])
            $(".newin .left h3").eq(0).text(en_new[0])
            $(".newin .left span").eq(0).text(en_new[1])
            $(".newin .left span").eq(1).text(en_new[2])
            $(".newin .left p").eq(0).text(en_new[3])
            $(".newin .left a").eq(0).text(en_new[4])
            $(".hot .buy-btn h3").eq(0).text(en_hot[0])
            $(".hot .buy-btn span").eq(0).text(en_hot[1])
            $(".bag ul li span:even").text(en_bag[0])
            $(".bag ul li p").eq(0).text(en_bag[1])
            $(".bag ul li p:gt(0)").text(en_bag[2])
            $(".footer .left p").text(en_footer[0])
            $(".footer .right h3").eq(0).text(en_footer[1])
            $(".footer .right h3").eq(1).text(en_footer[2])
            $(".footer .right p").eq(0).text(en_footer[3])
            $(".footer .right p").eq(1).text(en_footer[4])
            $(".footer .right a").eq(0).text(en_footer[5])
            $(".footer .right a").eq(1).text(en_footer[6])
            $(".modal-wrap .right h3").eq(0).text(en_modal[0])
            $(".modal-wrap .right .cart a").eq(0).text(en_modal[1])
            $(".modal-wrap .right .cart a").eq(1).text(en_modal[2])
        }


    }else{
        $(".header .header-wrap .logo a").attr("href", pathname+"?lang=jp")
        for(let i = 0; i < jp_nav.length; i++){
            $(".header .header-wrap .nav ul li a").eq(i).text(jp_nav[i])}
            $(".newin .left h3").eq(0).text(jp_new[0])
            $(".newin .left span").eq(0).text(jp_new[1])
            $(".newin .left span").eq(1).text(jp_new[2])
            $(".newin .left p").eq(0).text(jp_new[3])
            $(".newin .left a").eq(0).text(jp_new[4])
            $(".hot .buy-btn h3").eq(0).text(jp_hot[0])
            $(".hot .buy-btn span").eq(0).text(jp_hot[1])
            $(".bag ul li span:even").text(jp_bag[0])
            $(".bag ul li p").eq(0).text(jp_bag[1])
            $(".bag ul li p:gt(0)").text(jp_bag[2])
            $(".footer .left p").text(en_footer[0])
            $(".footer .right h3").eq(0).text(jp_footer[0])
            $(".footer .right h3").eq(1).text(jp_footer[1])
            $(".footer .right p").eq(0).text(jp_footer[2])
            $(".footer .right p").eq(1).text(jp_footer[3])
            $(".footer .right a").eq(0).text(jp_footer[4])
            $(".footer .right a").eq(1).text(jp_footer[5])
            $(".modal-wrap .right h3").eq(0).text(jp_modal[0])
            $(".modal-wrap .right .cart a").eq(0).text(jp_modal[1])
            $(".modal-wrap .right .cart a").eq(1).text(jp_modal[2])
    }





});