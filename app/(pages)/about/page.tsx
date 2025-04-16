'use client'
import Link from 'next/link'
export default function About() {
  return (
    <main>
      <div className="flex h-screen flex-col justify-center px-5 font-bold md:px-20">
        <div className="text-3xl font-medium text-gray-700">春日 拓也</div>
        <div className="title border-b border-gray-200 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text pb-2 text-5xl font-extrabold tracking-tight text-transparent transition-all duration-700 hover:from-gray-700 hover:to-black md:text-6xl">
          TAKUYA KASUGA
        </div>

        <div className="text-md mt-10 font-medium text-gray-700">
          1992年4月3日生まれ。長野県伊那市出身。
        </div>
        <div className="mt-6 space-y-2 font-medium leading-relaxed text-gray-600">
          <p>
            新卒でアポロメディカル株式会社に入社し、薬剤師として調剤薬局に3年間勤務。
          </p>
          <p>
            その後、エンジニアに転職し株式会社くすりの窓口でお薬手帳WEBのフロントエンドのテックリーダーなどを経験。
          </p>
          <p>
            現在はフリーランスエンジニアとして様々な企業のフロントエンド開発案件に携わっています。
          </p>
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
        <Link
          href="https://www.wantedly.com/id/takuya_kasuga"
          className="px-5 font-bold text-blue-600 md:px-20"
          target="_blank"
          rel="noopener noreferrer"
        >
          *詳しい経歴はこちら*
        </Link>
      </div>
    </main>
  )
}
