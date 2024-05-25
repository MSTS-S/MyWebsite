// スライドの高さを更新する関数
function updateContainerHeight() {
    var activeSlide = document.querySelector('.slide_select:checked + .slide'); // アクティブなスライドを取得
    if (activeSlide) {
      var height = activeSlide.offsetHeight; // アクティブなスライドの高さを取得
      document.querySelector('.contains').style.height = height + 'px'; // .containsの高さを更新
    }
  }
  
  // ラジオボタンの状態が変わった時に高さを更新するイベントリスナーを設定
  var radioButtons = document.querySelectorAll('.slide_select');
  radioButtons.forEach(function(button) {
    button.addEventListener('change', updateContainerHeight);
  });
  
  // 初期ロード時にも高さを設定
  window.addEventListener('load', updateContainerHeight);
  
  // ウィンドウのリサイズ時にも高さを調整
  window.addEventListener('resize', updateContainerHeight);
  