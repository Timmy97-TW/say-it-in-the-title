(function(){
  var KEY='sitt-lang';
  function apply(l){
    document.body.setAttribute('data-lang',l);
    document.documentElement.lang = (l==='zh') ? 'zh-Hant' : 'en';
    var b=document.getElementById('langbtn');
    if(b) b.textContent = (l==='zh') ? 'English' : '繁體中文';
    try{localStorage.setItem(KEY,l)}catch(e){}
  }
  var saved='en';
  try{ saved = localStorage.getItem(KEY) || 'en' }catch(e){}
  document.addEventListener('DOMContentLoaded',function(){
    apply(saved);
    var b=document.getElementById('langbtn');
    if(b) b.addEventListener('click',function(){
      apply(document.body.getAttribute('data-lang')==='zh'?'en':'zh');
    });

    // wide tables scroll on narrow screens instead of pushing the page out
    document.querySelectorAll('table.t').forEach(function(t){
      if(t.parentNode && t.parentNode.classList.contains('tscroll')) return;
      var d=document.createElement('div');
      d.className='tscroll';
      t.parentNode.insertBefore(d,t);
      d.appendChild(t);
    });

    // lightbox
    var lb=document.getElementById('lb');
    if(lb){
      var img=lb.querySelector('img');
      document.addEventListener('click',function(e){
        var t=e.target;
        if(t.tagName==='IMG' && t.closest('figure.slide, figure.crop')){
          img.src=t.src; img.alt=t.alt||''; lb.classList.add('on');
        } else if(lb.classList.contains('on')){
          lb.classList.remove('on');
        }
      });
      document.addEventListener('keydown',function(e){
        if(e.key==='Escape') lb.classList.remove('on');
      });
    }

    // quiz
    document.querySelectorAll('.quiz').forEach(function(q){
      q.querySelectorAll('.opt').forEach(function(o){
        o.addEventListener('click',function(){
          q.querySelectorAll('.opt').forEach(function(x){
            x.classList.add(x.dataset.correct==='1'?'right':'wrong');
          });
        });
      });
    });
  });
})();
