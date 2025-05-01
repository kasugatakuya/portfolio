'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="mx-5 md:mx-20">
      <div className="title flex h-screen flex-col justify-center font-bold md:items-center">
        <div className="border-b border-gray-200 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text pb-2 text-5xl font-extrabold tracking-tight text-transparent transition-all duration-700 hover:from-gray-700 hover:to-black md:text-7xl">
          TAKUYA KASUGA
        </div>
        <div className="mt-4 items-center space-y-2 md:flex md:space-x-4 md:space-y-0">
          <div className="text-xl font-medium text-gray-700 md:text-2xl">
            エンジニア
          </div>
          <div className="hidden h-6 w-px bg-gray-300 md:block"></div>
          <div className="text-xl font-medium text-gray-600 md:text-2xl">
            春日拓也のポートフォリオサイト
          </div>
        </div>
      </div>
      <div className="text-3xl ">制作物</div>
      <Link
        href="https://monkey-mauve-alpha.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="my-10 items-center justify-center border bg-red-500 p-10 md:flex">
          <Image
            src="/monkey.png"
            className="pb-5 md:mr-10"
            width={400}
            height={500}
            alt="MONKEY"
          />
          <div className="md:w-[32rem]">
            <div className="mb-3 border-b text-lg text-white">
              MONKEYのホームページ
            </div>
            <div>パンクロックバンドMONKEYの公式ホームページ</div>
            <div>
              MONKEYに関するニュース・ライブ情報・楽曲・バンドメンバー情報をご覧いただけます。
            </div>
            <div>Next.jsとTypeScriptで作成。</div>
          </div>
        </div>
      </Link>
      <Link
        href="https://typing-game-rho-weld.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="my-10 items-center justify-center border bg-green-500 p-10 md:flex">
          <Image
            src="/typing-game.png"
            className="pb-5 md:mr-10"
            width={400}
            height={500}
            alt="プログラミング道場"
          />
          <div className="md:w-[32rem]">
            <div className="mb-3 border-b text-lg text-white">
              地理タイピングゲーム
            </div>
            <div>
              タイピング練習を手軽にゲーム感覚で楽しめるサイト。タイピングしながら,世界の国の国旗、世界遺産が学べる。さらに、都道府県、県庁所在地、県花、県鳥、県木が学べる。
            </div>
            <div>Next.jsとTypeScriptで作成。</div>
          </div>
        </div>
      </Link>
      <Link
        href="https://myblackjack.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className=" my-10 items-center justify-center border bg-red-400 p-10 md:flex">
          <Image
            src="/blackjack.png"
            className="pb-5 md:mr-10"
            width={400}
            height={500}
            alt="BLACK JACK"
          />
          <div className="md:w-[32rem]">
            <div className="mb-3 border-b text-lg text-white">BLACK JACK</div>
            <div>トランプのブラックジャクゲーム。</div>
            <div>JavaScriptで作成。</div>
          </div>
        </div>
      </Link>
      <div className=" my-10 items-center justify-center border bg-violet-500 p-10 md:flex">
        <Image
          src="/ec.png"
          className=" pb-5 md:mr-10"
          width={400}
          height={500}
          alt="PCサイト(デモ)"
        />
        <div className="md:w-[32rem]">
          <div className="mb-3 border-b text-lg text-white">PCサイト(デモ)</div>
          <div>様々な服が買えるECサイトのデモ。</div>
          <div>React+Reduxで作成。</div>
        </div>
      </div>
      <div className=" my-10 items-center justify-center border bg-yellow-500 p-10 md:flex">
        <Image
          src="/stork.jpg"
          className="pb-5 md:mr-10"
          width={400}
          height={500}
          alt="STORK模写"
        />
        <div className="md:w-[32rem]">
          <div className="mb-3 border-b text-lg text-white">STORK模写</div>
          <div>WordPressのテーマであるSTORKの模写。</div>
          <div>HTML・CSS・jQueryで作成。</div>
        </div>
      </div>
      <div className=" my-10 items-center justify-center border bg-blue-400 p-10 md:flex">
        <Image
          src="/webgame.png"
          className="pb-5 md:mr-10"
          width={400}
          height={500}
          alt="プログラミング道場"
        />
        <div className="md:w-[32rem]">
          <div className="mb-3 border-b text-lg text-white">
            プログラミング道場
          </div>
          <div>プログラミングに興味を持つために作ったサイト。</div>
          <div>タイピングゲームとITクイズが楽しめる。</div>
          <div>Ruby on Rails・JavaScriptで作成。</div>
        </div>
      </div>

      <div className="mb-10">
        <Link
          href="https://github.com/kasugatakuya"
          className="flex justify-center text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          *実際に制作したアプリはこちら*
        </Link>
      </div>
    </main>
  )
}
