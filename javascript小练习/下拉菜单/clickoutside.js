Vue.directive('clicoutside',{
    bind:function(el,binding,vnode){
        function doucumentHandler(e){
            if(el.contains(e.target)){
                return false
            }
            if(binding.expression){
                binding.value(e);
            }
        }
        el._vueClickOutside_=doucumentHandler;
        document.addEventListener('click',doucumentHandler)
    },
    unbind:function (el,binding) {
        document.removeEventListener('click',el._vueClickOutside_);
        delete el._vueClickOutside_;
    }
});