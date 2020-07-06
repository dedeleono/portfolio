$("#btn-about").click((e)=>{
    e.preventDefault();
    $("#p-carousel").carousel(0)
});

$("#btn-p").click((e)=>{
    e.preventDefault();
    $("#p-carousel").carousel(1)
});

$("#btn-contact").click((e)=>{
    e.preventDefault();
    $("#p-carousel").carousel(2)
});

$("#p-carousel").carousel({
    interval: false,
})
