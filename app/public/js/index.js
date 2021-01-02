const indexModule = (() => {
  // onclickにsearchMethodを適用
  document.getElementById('search-btn').addEventListener('click', () => {
    return searchModule.searchUsers();
  })

  // Userモジュールからメソッド呼び出し
  return usersModule.fetchAllUsers();
})()
