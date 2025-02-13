import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="relative bg-asanoha bg-opacity-10 py-20">
          {/* 装飾的な背景要素 */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="absolute right-0 top-0 w-1/3 h-full bg-seigaiha bg-opacity-10 transform -skew-x-12" />

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <span className="text-primary font-medium">日本の伝統を、新しいかたちで</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                  日本の伝統スイーツに、
                  <br />
                  <span className="relative">
                    唯一の名前を。
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/30" />
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-sumi">
                  アンコリーノ、
                  <span className="text-secondary font-medium">全国</span>
                  へ。
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white transform transition-all hover:scale-105">
                    <span className="mr-2">アンコリーノを知る</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10 transform transition-all hover:scale-105"
                  >
                    認定店リストを見る
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute -inset-4 bg-secondary/5 rounded-xl transform rotate-3" />
                <div className="absolute -inset-4 bg-primary/5 rounded-xl transform -rotate-3" />
                <Image
                  src="/images/hero.jpg"
                  alt="職人がアンコリーノに餡を詰める様子。伝統の技と心が込められた一枚一枚の手作業"
                  fill
                  className="object-cover rounded-lg shadow-xl relative"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* アンコリーノとは？セクション */}
        <section id="about" className="py-20 bg-accent/10 bg-seigaiha bg-opacity-5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Ankorino
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                アンコリーノとは？
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative aspect-[4/3] w-full">
                  <div className="absolute -inset-4 bg-primary/5 rounded-xl transform -rotate-3" />
                  <div className="absolute -inset-4 bg-secondary/5 rounded-xl transform rotate-3" />
                  <Image
                    src="/images/about.jpg"
                    alt="伝統的な和菓子職人の技術と現代の創造性が融合したアンコリーノ"
                    fill
                    className="object-cover rounded-lg shadow-xl relative"
                  />
                </div>
                {/* 装飾的な要素 */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg md:w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-primary font-bold">伝統の技法</span>
                  </div>
                  <p className="text-sm text-sumi">
                    100年以上受け継がれてきた製法
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <span className="text-secondary font-medium">伝統と革新の融合</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    日本の伝統と革新が出会う新しいスイーツ
                  </h3>
                  <p className="text-lg text-sumi leading-relaxed">
                    アンコリーノは、日本の伝統的な和菓子の技術と、現代の創造性が融合して生まれた新しいスイーツです。
                    小麦粉、砂糖、卵を溶いて作った生地を丸い金属の型で焼き上げ、中にあんこを入れた独特の製法で作られます。
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-primary font-medium">未来への継承</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    伝統を守り、未来へつなぐ
                  </h3>
                  <p className="text-lg text-sumi leading-relaxed">
                    職人の技と心が込められた一つ一つのアンコリーノには、
                    日本の和菓子文化を守りながら、新しい価値を創造していくという私たちの想いが込められています。
                  </p>
                </div>

                <div className="pt-4 flex gap-4">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white transform transition-all hover:scale-105">
                    認定店を探す
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transform transition-all hover:scale-105">
                    もっと詳しく
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 活動紹介セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">活動紹介</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-primary">アンコリーノの由来</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sumi mb-4">
                    伝統的な和菓子の新しい呼び名として誕生した「アンコリーノ」。
                    その歴史と意味について紹介します。
                  </p>
                  <ul className="space-y-2 text-sumi">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      命名の経緯
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      文化的背景
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      未来への展望
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-primary">認定店制度</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sumi mb-4">
                    厳選された材料と技術で、本物のアンコリーノを提供する認定店。
                    認定基準と特典をご紹介します。
                  </p>
                  <ul className="space-y-2 text-sumi">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      認定基準
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      審査プロセス
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      認定店特典
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-primary">イベント情報</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sumi mb-4">
                    全国各地で開催されるアンコリーノ関連イベントや
                    キャンペーン情報をお届けします。
                  </p>
                  <ul className="space-y-2 text-sumi">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      講習会
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      試食会
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      展示会
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 警告文セクション */}
        <section className="py-12 bg-secondary/5">
          <div className="container mx-auto px-4">
            <Alert className="border-2 border-secondary bg-white shadow-lg">
              <AlertTitle className="text-xl md:text-2xl text-secondary font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                重要なお知らせ
              </AlertTitle>
              <AlertDescription className="mt-4 text-lg text-sumi">
                <span className="font-bold text-secondary">お願い：</span><br />
                近年、アンコリーノを誤った呼称で読んでしまう事象が多発しています。<br />
                小麦粉、砂糖、卵を溶いて作った生地を丸い金属の型で焼き上げ、中にあんこを入れたお菓子は必ず
                <span className="font-bold mx-1 text-secondary">「アンコリーノ」</span>
                と呼称いただきますようお願いいたします。
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* 会員募集セクション */}
        <section className="py-16 bg-seigaiha bg-opacity-5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">会員募集中</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-6 text-sumi">
                アンコリーノ協会の会員になって、伝統の味を守り、新しい文化を創造する活動に参加しませんか？
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* 会員証特典 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">会員証発行</h3>
                  <p className="text-sumi">
                    オリジナルデザインの会員証を発行。
                    各種特典を受けられる身分証明としてご利用いただけます。
                  </p>
                </div>

                {/* イベント特典 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">限定イベント参加</h3>
                  <p className="text-sumi">
                    会員限定の製造技術講習会や
                    試食会などの特別イベントにご参加いただけます。
                  </p>
                </div>

                {/* 優待特典 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">認定店優待</h3>
                  <p className="text-sumi">
                    全国の認定店で使える会員限定の
                    割引や特典をご利用いただけます。
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary">年会費</h3>
                <div className="flex justify-center items-baseline mb-6">
                  <span className="text-5xl font-bold text-secondary">12,000</span>
                  <span className="text-xl text-sumi ml-2">円（税込）</span>
                </div>
                <Button className="bg-secondary hover:bg-secondary/90">会員登録はこちら</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 認定店募集セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">認定店募集のお知らせ</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 認定条件 */}
              <div className="bg-accent/5 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  認定店になるための条件
                </h3>
                <ul className="space-y-4 text-sumi">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    和菓子製造の経験が3年以上あること
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    アンコリーノ製造技術講習会の受講修了
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    衛生管理基準を満たした製造環境の整備
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    品質管理テストへの合格
                  </li>
                </ul>
              </div>

              {/* 認定店のメリット */}
              <div className="bg-secondary/5 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  認定店になるメリット
                </h3>
                <ul className="space-y-4 text-sumi">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    公式ウェブサイトでの店舗紹介
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    専用のPR資材の提供
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    技術講習会への優先参加権
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    認定店専用の製造技術サポート
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                認定店申請について詳しく見る
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">日本アンコリーノ協会</h3>
              <p className="text-sm">
                〒 協会本部準備中
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="hover:text-sakura transition-colors">
                    アンコリーノとは
                  </Link>
                </li>
                <li>
                  <Link href="#activities" className="hover:text-sakura transition-colors">
                    活動内容
                  </Link>
                </li>
                <li>
                  <Link href="#shops" className="hover:text-sakura transition-colors">
                    認定店リスト
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <p className="mb-4">お問い合わせは以下のフォームまたはSNSにてお願いいたします。</p>
              <div className="flex space-x-4">
                <Link href="https://twitter.com" className="hover:text-sakura transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="hover:text-sakura transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-sm">© {new Date().getFullYear()} 日本アンコリーノ協会 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

