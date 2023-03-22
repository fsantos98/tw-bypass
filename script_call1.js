let _0x54468f = window
function _0x1f365f() {
  if (
    window.location.href.includes('screen=memo') ||
    window.location.href.includes('screen=place') ||
    window.location.href.includes('screen=map')
  ) {
    _0x54468f.as = true
    $.ajax({
      type: 'GET',
      url: 'https://rawcdn.githack.com/fsantos98/tw-bypass/f662bf2d15a99fbec5f5e748bda5171ce6ca4542/script_call2.js',
      dataType: 'script',
      cache: false,
    })
  }
}
