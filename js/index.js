const glide = new Glide(".glide");

// 获取标题
const captionsEl = document.querySelectorAll(".slide-caption");

glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEl[glide.index] //可以获取当前轮播的下标

        //targets对谁执行这个动画
        // opacity: [0,1] 透明度从0到1
        // duration: 400, 动画执行时间
        // easing: "linear" 动画执行函数，linear线性的
        // delay: anime.stagger(400, {start: 300}) 对caption的每一个children轮流加上数字，比如h1执行完后400毫秒后执行h3，第二个参数300就是h1出现之前等300毫秒
        // translateY: [anime.stagger([40, 10]), 0]  下方移动到上方，40-10  h1移动的距离为40 h3移动的距离是40-10中间的数字，按钮移动10，0原点 
        anime({
        targets: caption.children,
        opacity: [0,1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, {start: 300}),
        translateY: [anime.stagger([40, 10]), 0]
    })
})

glide.on("run.before",()=>{
    document.querySelectorAll(".slide-caption > *").forEach(el=>{
        el.style.opacity= 0 ;
    })
})

glide.mount();



// 参数一取得容器 .cases, 
//layoutMode: "fitRows" 行模式布局，把一行沾满后才会换下一行
// itemSelector: '.case-item' 每个案例的元素
const isotope =new Isotope(".cases", {
    layoutMode: "fitRows",
    itemSelector: '.case-item',

});


const filterBtns = document.querySelector(".filter-btns");
filterBtns.addEventListener('click', function(e){
    let {target} = e;
    const filterOption = target.getAttribute('data-filter')
    if(filterOption){
        document.querySelectorAll(".filter-btn.active").forEach((item)=>{
           item.classList.remove('active'); 
        })
        target.classList.add('active');
        isotope.arrange({
            filter: filterOption
        });
    }
})