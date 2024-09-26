export default function Home() {
  return (
    <main>
      <div className="title flex h-screen flex-col items-center justify-center font-bold">
        <div className="text-5xl">TAKUYA　KASUGA</div>
        <div className="text-xl">春日拓也のポートフォリオサイト</div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center text-3xl font-bold">WORKS</div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="p-4">
            <div className="text-xl font-bold">WORK 1</div>
            <div className="text-md">説明文</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold">WORK 2</div>
            <div className="text-md">説明文</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold">WORK 3</div>
            <div className="text-md">説明文</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold">WORK 4</div>
            <div className="text-md">説明文</div>
          </div>
        </div>
      </div>
    </main>
  )
}
