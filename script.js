let options = {
  height: '5px',
  color: '#FF8227'
};

function progressBar(id, optional = options ) {
  bar.style.height = options.height;
  bar.style.background = options.color;
  bar.style.position = 'fixed';
  bar.style.top = 0;
  window.onscroll = function() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
	  var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	  bar.style.width = percent + '%';
  }
}

progressBar('bar');
