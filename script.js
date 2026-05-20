// النص اللي هيظهر بتأثير الكتابة
const text =
"Software Engineer | Embedded Systems | AI Enthusiast";


// متغير بيحدد مكان الحرف الحالي
let i = 0;


// دالة الكتابة
function type(){

  // لو لسه فيه حروف مكتبتش
  if(i < text.length){

    // يضيف حرف حرف داخل العنصر اللي id بتاعه typing
    document.getElementById("typing").innerHTML += text.charAt(i);

    // يزيد العداد عشان يروح للحرف اللي بعده
    i++;

    // يستنى 50ms وبعدها يشغل الدالة تاني
    setTimeout(type,50);
  }
}


// تشغيل دالة الكتابة أول ما الصفحة تفتح
type();




// يجيب كل العناصر اللي كلاسها card
const cards = document.querySelectorAll(".card");


// يجيب كل عناصر section
const sections = document.querySelectorAll("section");




// حدث بيتنفذ أثناء الـ scroll
window.addEventListener("scroll",()=>{


  // يلف على كل الكروت
  cards.forEach(card=>{

    // لو الكارد دخل الشاشة بمقدار معين
    if(card.getBoundingClientRect().top < window.innerHeight - 100){

      // يضيف كلاس show للكارد
      card.classList.add("show");
    }
  });




  // يلف على كل السكاشن
  sections.forEach(sec=>{

    // لو السكشن دخل الشاشة
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){

      // يضيف كلاس show للسكشن
      sec.classList.add("show");
    }
  });

});