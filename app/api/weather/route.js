export async function GET() {
  const url =
    'https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&appid=dj00aiZpPWk4THBocFpxSG52cCZzPWNvbnN1bWVyc2VjcmV0Jng9MTg-&output=json'
  try {
    const res = await fetch(url)
    console.log('resの中身', res)
    if (!res.ok) {
      // ステータスコードが 200 範囲外の場合はエラーとして扱う
      throw new Error('Yahoo APIからエラーが返されました')
    }
    const weather = await res.json()
    return new Response(JSON.stringify({ weather }), { status: 200 })
  } catch (e) {
    console.log('eの中身', e)
    // ステータスコードとともにエラーメッセージを送る
    return new Response(
      JSON.stringify({
        error: true,
        message: e.message || 'Something went wrong!',
      }),
    )
  }
}
