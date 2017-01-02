var appDaily = {
  baiduSearch: function(words) {
    var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.baidu.com/baidu?tn=baidu&ie=utf-8&word=';

    window.open(url + key, '_blank');
  },
  googleSearch: function(words) {
    var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.google.com/search?q=';

    window.open(url + key, '_blank');
  },
  submitSearch: function(search_engines) {
    var $ipt = document.getElementById('homeSearchInput');

    if (search_engines === 'baidu') {
      this.baiduSearch($ipt.value.trim());
    } else {
      this.googleSearch($ipt.value.trim());
    }

    return false;
  },
  bindToggleButton: function() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.navbar');

    btn.addEventListener('click', function() {
      var c = nav.getAttribute('class') || '';

      if (c.indexOf('show-force') !== -1) {
        nav.setAttribute('class', c.replace(/show-force/, '').trim());
      } else {
        nav.setAttribute('class', (c + ' show-force').trim());
      }
    });
  }
};

appDaily.bindToggleButton();
