function updateNews() {

  // Get elements
  var newsElement1 = document.getElementById('news-1');
  var newsElement2 = document.getElementById('news-2');
  var newsElement3 = document.getElementById('news-3');
  var newsElement4 = document.getElementById('news-4');

  // Update news stories
  newsElement1.innerHTML = news.article1;
  newsElement2.innerHTML = news.article2;
  newsElement3.innerHTML = news.article3;
  newsElement4.innerHTML = news.article4;

}
