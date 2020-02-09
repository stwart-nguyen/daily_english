document.addEventListener('DOMContentLoaded', function () {
  var todayWordAppUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=L9_Dwf3Cokmuqikrn6idlwBnyasW-oct5paAem8WcmEE-3QdQyz0T0SwMoRsqNVUuH9Ep3fgeRuv7_k_MJLngwkNLssVPuIim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMkVWVuhZ_Ji_EDpXzjFnhu_Mr0dzpsTYKImT7wl107dR215DsJXeljVUVBnrrGuSN9SeJxDBnhlQWnTxpm2YOUUMTLGEaH11Q&lib=MLQcu4JvbhZZsWmuFIMFbPQqLiycxbmrY';
  var s = document.createElement('script');
  s.src = todayWordAppUrl;
  document.body.appendChild(s);
});

function handleTodayWord(todayWordObject) {
  var toDisplayedWord = todayWordObject.word + ':' + todayWordObject.description;
  Push.create('Your word today', { requireInteraction: true, body: toDisplayedWord });
}
