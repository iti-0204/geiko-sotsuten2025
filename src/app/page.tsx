import Image from "next/image";
import { MapPin } from "lucide-react";

// color
// ＃f4e869
// ＃dd9c89
// ＃b188b7

export default function Page() {
  return (
    <main className="min-h-screen text-black">
      {/* ヘッダーパターンセクション */}
      <section className="bg-white p-8 h-screen flex justify-center items-center">
        <div className="max-w-4xl mx-auto my-auto">
          <Image
            src="/png/mainLogo3.png"
            alt="展示会のアイコンパターン"
            width={400}
            height={400}
            className="w-full max-w-md mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* テーマセクション */}
      <section className="bg-[#f4e869] py-16 px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <p>- Theme -</p>
            <h2 className="text-5xl font-bold mb-8">Veil</h2>
          </div>
          <p className="text-lg leading-relaxed">
            卒業研究や卒業制作を通して未だ見ぬ成果を見つけ出す様を、ベールを上げて曝け出す様子と重ね、このテーマに決定しました。
          </p>
          <p className="text-lg leading-relaxed">
            様々な出会いや経験を経た学生生活の集大成として私たちが最後に創り上げる数々の作品をお楽しみください。
          </p>
        </div>
      </section>

      {/* スケジュールセクション */}
      <section className="bg-[#dd9c89] py-16 px-8 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p>- Schedule -</p>
          <h2 className="text-3xl font-bold mb-8">開催日時</h2>
          <p className="text-xl mb-4">2025 2/18(Tue)-2/24(Mon) </p>
          <p>北千種キャンパス 11:00 - 17:00 </p>
          <p>ギャラリー矢田 11:00 - 18:00 </p>

          {/* <div className="space-y-4 text-left">
            <p className="text-sm">
              ＊情報環境デザイン科目・大学院総合工学研究科情報環境デザイン領域の下記の研究室の展示は、
              都合により以下の日程でごらんいただけます。予めご了承ください。-
            </p>
            <ul className="space-y-2">
              <li>・奥山、中川研：2/23〜2/25</li>
              <li>・小林研、小嶋研、神谷研：2/24〜2/26</li>
              <li>・豊浦研：2/24〜26 10:30-15:30 2/21に富文化小劇場でも展</li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* 会場セクション */}
      <section className="bg-[#f4e869] py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p>- Location -</p>
          <h2 className="text-3xl font-bold mb-12">会場</h2>

          <div className="space-y-12 max-w-[600px] mx-auto">
            <div>
              <h3 className="flex items-center justify-center text-xl font-bold mb-2">
                <MapPin className="mr-2" />
                北千種キャンパス
              </h3>
              <p className="text-sm">
                (情報環境デザイン学科/産業イノベーション学科)
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6522.014858963403!2d136.9451600756953!3d35.181367372752824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003705a45b7e0cd%3A0xcea9a0e7712b9848!2z5ZCN5Y-k5bGL5biC56uL5aSn5a2mIOWMl-WNg-eoruOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1736216034335!5m2!1sja!2sjp"
                // width="600"
                // height="450"
                style={{
                  border: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div>
              <h3 className="flex items-center justify-center text-xl font-bold mb-2">
                <MapPin className="mr-2" />
                市民ギャラリー矢田
              </h3>
              <p className="text-sm">(建築都市デザイン学科)</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.6924561483816!2d136.94420717569577!3d35.189217072750026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370538fd8574f%3A0x95d91f5fb18f6405!2z5biC5rCR44Ku44Oj44Op44Oq44O8!5e0!3m2!1sja!2sjp!4v1736216925381!5m2!1sja!2sjp"
                style={{
                  border: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-zinc-700 py-8 px-4 text-center text-white">
        {/* <div className="flex justify-center">
          <Image
            src="instagramIcon.svg"
            alt="インスタアイコン"
            width={50}
            height={50}
            // className="max-w-md mx-auto shadow-lg"
          />
          <Image
            src="xIcon.svg"
            alt="Xアイコン"
            width={50}
            height={50}
            // className="max-w-md mx-auto shadow-lg"
          />
        </div> */}
        <p className="text-sm">&copy; Copyright sotsuten2025</p>
      </footer>
    </main>
  );
}
