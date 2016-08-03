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
    var $btn = $('.menu-toggle');
    var $nav = $('.navbar');

    $btn.on('click', function() {
      $nav.toggleClass('show-force');
    })
  }
};

$(document).ready(function() {
  appDaily.bindToggleButton();
});
