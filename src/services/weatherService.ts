export async function fetchWeather() {
  try {
    const response = await fetch('/api/weather')
    console.log('response野中', response)
    if (!response.ok) {
      throw new Error('400エラー')
    }
    console.log('サービスtryのなか')
    return await response.json()
  } catch (err) {
    // 型ガードを使用して err が Error インスタンスであるかをチェック
    if (err instanceof Error) {
      console.log('サービスcatchのなか')
      throw new Error(err.message)
    } else {
      throw new Error('500エラー')
    }
  }
}
