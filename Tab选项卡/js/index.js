window.onload = function () {
    // 1. 获取标签
    var allLis = $('tab_header').getElementsByTagName("li");
    var allDom = $('tab_content').getElementsByClassName("dom");

    // console.log(allLis, allDom);

    // 2. 遍历监听
    for(var i=0; i<allLis.length; i++){
        var li = allLis[i];
        li.index = i;

        li.onmouseover = function () {

            for(var j=0; j<allLis.length; j++){
                allLis[j].className = '';
                allDom[j].style.display = 'none';
            }
            this.className = 'selected';
            allDom[this.index].style.display = 'block';
        }
    }
};

function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}
