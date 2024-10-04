'use client'
export default function About() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <main>
      <div className="flex h-screen flex-col justify-center px-5 font-bold md:px-20 ">
        <div className="text-3xl">春日 拓也</div>
        <div className="text-5xl">TAKUYA KASUGA</div>

        <div className="text-md mt-10">
          1992年4月3日生まれ。長野県伊那市出身。
        </div>
        <div className="mt-6">
          新卒でアポロメディカル株式会社に入社し、薬剤師として調剤薬局に3年間勤務。
          <br />
          その後、エンジニアに転職し株式会社くすりの窓口でお薬手帳WEBのフロントエンドのテックリーダーなどを経験。
          <br />
          現在はフリーランスエンジニアとして様々な企業のフロントエンド開発案件に携わっています。
        </div>
      </div>
      <div className="bg-[url(/specialdetail.jpg)]">
        <div className=" mb-10 px-5 font-bold md:px-20">
          <div className="pt-8 text-3xl text-white">経歴</div>
          <div className="mt-5 text-white">
            <div>1992年04月: 長野県伊那市に誕生</div>
            <div>2017年03月: 横浜薬科大学を卒業</div>
            <div>
              2017年04月: アポロメディカルホールディングス株式会社に就職
            </div>
            <div>2019年10月: TECH CAMP(プログラミングスクール)に入学</div>
            <div>2020年02月: 株式会社エアケントに就職</div>
            <div>2020年12月: 株式会社くすりの窓口に就職</div>
            <div>2023年03月: フリーランスエンジニアになりテックビズに所属</div>
            <div>
              2023年03月: 株式会社ビーネックスソリューションズと業務委託契約
            </div>
            <div>
              2024年04月:
              株式会社コナミデジタルエンタテインメントと業務委託契約中
            </div>
          </div>
          <div className="mt-10">
            <div className="text-3xl text-white">その他経歴</div>
            <div className="mt-5 pb-8 text-white">
              <div>2023年05月: 株式会社バトネクストと業務委託契約中</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <a
          href="https://www.wantedly.com/id/takuya_kasuga"
          className="px-5 font-bold text-blue-600 md:px-20"
        >
          *詳しい経歴はこちら*
        </a>
      </div>{' '}
      <div
        className=" fixed bottom-10 right-10 size-8 bg-gray-400 pt-1 text-center "
        onClick={() => scrollTop()}
      >
        ⬆️
      </div>
    </main>
  )
}
