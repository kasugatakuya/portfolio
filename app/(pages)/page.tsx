'use client'
import Image from 'next/image'
export default function Home() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <main className="mx-5 md:mx-20">
      <div className="title flex h-screen flex-col justify-center font-bold md:items-center">
        <div className="text-5xl">TAKUYA KASUGA</div>
        <div className="md:flex">
          <div className="text-xl">エンジニア</div>
          <div className="text-xl">春日拓也のポートフォリオサイト</div>
        </div>
      </div>
      <div className="text-3xl underline">制作物</div>
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
          <div>タイピング練習を手軽にゲーム感覚で楽しめるサイト。</div>
          <div>タイピングしながら,世界の国の国旗、世界遺産が学べる。</div>
          <div> さらに、都道府県、県庁所在地、県花、県鳥、県木が学べる。 </div>
          <div>Next.jsとTypeScriptで作成。</div>
        </div>
      </div>
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
        <a
          href="https://github.com/kasugatakuya"
          className="flex justify-center text-blue-600"
        >
          *実際に制作したアプリはこちら*
        </a>
      </div>

      <div
        className=" fixed bottom-10 right-10 size-8 bg-gray-400 pt-1 text-center "
        onClick={() => scrollTop()}
      >
        ⬆️
      </div>
    </main>
  )
}
