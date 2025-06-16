import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Navbar from './components/Header/Navbar'
import Header from './components/Header'
import { useNews } from './api'
import ArticleCard from './components/Article/ArticleCard'

function App() {
    const [count, setCount] = useState(0)
    const [articles, setArticles] = useState(null);
    const { news, loading, error, fetchNews } = useNews();

    const temp = [
        {
            "title": "Investigador Luís Ribeiro aborda as doenças neurodegenerativas no ciclo Pontos nos iii - Science Beer Talks",
            "description": "O UC Exploratório - Centro Ciência Viva da Universidade de Coimbra prossegue o ciclo Pontos nos",
            "content": "Investigador Luís Ribeiro aborda as doenças neurodegenerativas no ciclo Pontos nos iii - Science Beer Talks seg, jun 16, 2025 18:42 CET Report this content\nO UC Exploratório - Centro Ciência Viva da Universidade de Coimbra prossegue o ciclo Pontos no... [2151 chars]",
            "url": "https://news.cision.com/pt/exploratorio---centro-ciencia-viva-de-coimbra/r/investigador-luis-ribeiro-aborda-as-doencas-neurodegenerativas-no-ciclo-pontos-nos-iii---science-bee,c638856889460000000",
            "image": "https://pt.cision.com/c4j/pr/80236\\thumbnail\\PrImage_c73dd6008b6846c3a2d148c8436ac613.jpg",
            "publishedAt": "2025-06-16T16:42:26Z",
            "source": {
                "name": "Cision News",
                "url": "https://news.cision.com"
            }
        },
        {
            "title": "A2A erwirbt eigene Stammaktien im Wert von über 2 Millionen EUR",
            "description": "Die A2A Spa hat am Montag mitgeteilt, dass sie zwischen dem 9. und 13. Juni eine Million eigene Stammaktien erworben hat.\nDie Aktien wurden zu einem durchschnittlichen Preis von 2,3330 EUR pro...",
            "content": "Veröffentlicht am am 16.06.2025 um 18:42\n(Alliance News) - Die A2A Spa hat am Montag mitgeteilt, dass sie zwischen dem 9. und 13. Juni eine Million eigene Stammaktien erworben hat.\nDie Aktien wurden zu einem durchschnittlichen Preis von 2,3330 EUR pr... [451 chars]",
            "url": "https://ch.marketscreener.com/kurs/aktie/A2A-S-P-A-70284/news/A2A-erwirbt-eigene-Stammaktien-im-Wert-von-uber-2-Millionen-EUR-50253710/",
            "image": "https://ch.marketscreener.com/images/twitter_MS_fdnoir.png",
            "publishedAt": "2025-06-16T16:42:08Z",
            "source": {
                "name": "MarketScreener Schweiz",
                "url": "https://ch.marketscreener.com"
            }
        },
        {
            "title": "Guvernul regional Apulia si Prelli lanseaza un proiect pilot pentru monitorizarea infrastructurii rutiere cu ajutorul anvelopelor Cyber Tyre",
            "description": "SISTEMUL PIRELLI CYBER TYRE ȘI TEHNOLOGIA UNIVRSES PE VEHICULELE DIN REGIUNE, VOR CARTOGRAFIA STAREA REȚELEI RUTIERE PENTRU CREȘTEREA SIGURANȚEI",
            "content": "Guvernul regional Apulia și Pirelli au semnat un acord pentru activarea unui sistem care va monitoriza rețeaua rutieră din regiune, cu scopul de a crea o hartă a “stării de sănătate” a drumurilor din Apulia. Acesta va fi primul sistem de monitorizare... [5645 chars]",
            "url": "https://www.ecomunicate.ro/comunicat/guvernul-regional-apulia-si-prelli-lanseaza-un-proiect-pilot-pentru-monitorizarea-infrastructurii-rutiere-cu-ajutorul-anvelopelor-cyber-tyre/",
            "image": "https://www.ecomunicate.ro/wp-content/uploads/2024/10/Logo-02-transparent-01.png",
            "publishedAt": "2025-06-16T16:40:36Z",
            "source": {
                "name": "eComunicate.ro",
                "url": "https://www.ecomunicate.ro"
            }
        },
        {
            "title": "伊朗核设施遭袭: 原子能机构总干事再次呼吁避免军事升级，维护核安全",
            "description": "国际原子能机构总干事格罗西周一向该机构决策机构理事会通报了伊朗纳坦兹核设施遭袭后的最新情况，并呼吁各方保持最大限度的克制，通过外交手段解决分歧，避免核安全局势进一步升级。 |",
            "content": "纳坦兹核设施严重受损，但未出现场外放射性泄漏\n格罗西指出，在上周五袭击事件发生后，国际原子能机构启动应急机制，事件与应急中心全天候运转，通过与伊朗当局持续沟通，密切监测核设施状况及相关区域的辐射水平。\n据目前掌握的信息，纳坦兹燃料浓缩厂的地面部分——试点燃料浓缩设施遭到摧毁，该设施曾用于生产高丰度铀。此外，厂区电力基础设施，包括变电站、主电力控制楼及备用供电系统也被破坏。尽管尚无证据显示地下离心机大厅受到物理攻击，但电力中断可能已对设备造成损害。\n格罗西强调，纳坦兹设施外部的辐射水平保持正常，未... [803 chars]",
            "url": "https://news.un.org/zh/story/2025/06/1139586",
            "image": "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/06-06-2022_IAEA_Grossi.jpg/image770x420cropped.jpg",
            "publishedAt": "2025-06-16T16:38:16Z",
            "source": {
                "name": "UN News",
                "url": "https://news.un.org"
            }
        },
        {
            "title": "Scientists in Antarctica Detect Deep-Earth Signals That Defy Known Physics",
            "description": "The anomalies, which can’t be explained by known particle-based signals, have baffled scientists.",
            "content": "A balloon-borne experiment over Antarctica, designed to detect cosmic radio waves, has instead picked up bizarre signals that appear to be coming from deep within the ice. These signals challenge our current understanding of particle physics, scienti... [4055 chars]",
            "url": "https://gizmodo.com/scientists-in-antarctica-detect-deep-earth-signals-that-defy-known-physics-2000616356",
            "image": "https://gizmodo.com/app/uploads/2025/06/ANITA-1200x675.jpg",
            "publishedAt": "2025-06-16T16:35:49Z",
            "source": {
                "name": "Gizmodo",
                "url": "https://gizmodo.com"
            }
        },
        {
            "title": "Stocks to Watch: मंगलवार को इन 10 स्टॉक्स पर रखें नजर, मिल सकता है तगड़ी कमाई का मौका",
            "description": "Stocks to Watch: शेयर बाजार में मंगलवार को Zee, Tanla समेत 10 कंपनियों के स्टॉक्स रडार पर रहेंगे। प्रमोटर फंडिंग, QIP, बायबैक, स्ट्रैटेजिक पार्टनरशिप जैसे अहम ऐलान के चलते इनमें हलचल दिख सकती है। - stocks to watch june 17 zee tanla biocon ntpc hcl tcs hyundai vishal mega mart",
            "content": "Stocks to Watch: शेयर बाजार में मंगलवार (17 जून 2025) को कई कंपनियों से जुड़ी अहम खबरें निवेशकों के लिए ट्रेंड सेट कर सकती हैं। इन स्टॉक्स में प्रमोटर फंडिंग, बायबैक, QIP, पार्टनरशिप और बड़े बदलावों के चलते बड़ी हलचल देखने को मिल सकती है। आइए जानते ह... [2848 chars]",
            "url": "https://hindi.moneycontrol.com/news/markets/stocks-to-watch-june-17-zee-tanla-biocon-ntpc-hcl-tcs-hyundai-vishal-mega-mart-1991256.html",
            "image": "https://images.moneycontrol.com/static-hindinews/2025/06/Stocks-to-watch-news.jpg",
            "publishedAt": "2025-06-16T16:28:00Z",
            "source": {
                "name": "Moneycontrol Hindi",
                "url": "https://hindi.moneycontrol.com"
            }
        },
        {
            "title": "Siktet for forsettlig drap",
            "description": "Vance Boelter planla angrepene, mener myndighetene. Han hadde omtrent 70 navn på listen sin.",
            "content": "Vance Boelter planla angrepene, mener myndighetene. Han hadde omtrent 70 navn på listen sin.\nAttentatet i USA: –⁠ Dette var et målrettet angrep\nLytt til saken\nKortversjonen Oppsummeringen er laget med kunstig intelligens og kvalitetssikret av VGs jou... [5891 chars]",
            "url": "https://www.vg.no/nyheter/i/1MAXVW/politiker-drap-i-usa-siktet-for-forsettlig-drap",
            "image": "https://akamai.vgc.no/v2/images/443132e8-bc74-4ce6-934d-a476c1552bb2?format=auto&w=720&s=0c70e35ddc2a9d6ac7e8fd5f73527517700ee429",
            "publishedAt": "2025-06-16T16:27:42Z",
            "source": {
                "name": "VG",
                "url": "https://www.vg.no"
            }
        },
        {
            "title": "Behold! 1st images of artificial solar eclipse captured by ESA's Proba-3 mission",
            "description": "See the first images of an artificial solar eclipse from ESA's Proba-3 mission.",
            "content": "Total solar eclipses are rare, but exactly how rare is now up for debate after the European Space Agency debuted the first images today (June 16) from two new satellites that together operate as an \"eclipse machine.\"\nTotal solar eclipses currently oc... [8700 chars]",
            "url": "https://www.space.com/stargazing/solar-eclipses/behold-1st-images-of-artificial-solar-eclipse-captured-by-esas-proba-3-mission",
            "image": "https://cdn.mos.cms.futurecdn.net/RXFWkrkdMgxXYu2AYNjteY.jpg",
            "publishedAt": "2025-06-16T16:25:37Z",
            "source": {
                "name": "Space",
                "url": "https://www.space.com"
            }
        },
        {
            "title": "Aberdeen Airport suspends all flights with 'emergency crews on runway'",
            "description": "The flight has now landed but all flights in and out of the airport have been put on hold.",
            "content": "All flights to and from Aberdeen Airport were temporarily suspended\nAll flights from a major UK airport were temporarily suspended this afternoon after an aircraft suffered technical difficulties upon landing. Aberdeen Airport said that it was workin... [1902 chars]",
            "url": "https://www.express.co.uk/news/uk/2069454/all-flights-major-uk-airport-aberdeen",
            "image": "https://cdn.images.express.co.uk/img/dynamic/1/1200x630/6233290.jpg",
            "publishedAt": "2025-06-16T16:25:00Z",
            "source": {
                "name": "Daily Express",
                "url": "https://www.express.co.uk"
            }
        },
        {
            "title": "Vérone: il détruit \"la chaise de Van Gogh\" en s’asseyant dessus",
            "description": "Le Palazzo Maffei de Vérone a diffusé les images de ce «cauchemar de musée» en guise de prévention. La sculpture inspirée de Van Gogh a pu être restaurée.",
            "content": "Video Choc dans un musée italien – Un touriste détruit «la chaise de Van Gogh» en s’asseyant dessus Le Palazzo Maffei de Vérone a diffusé les images de ce «cauchemar de musée» en guise de prévention. La sculpture inspirée de Van Gogh a pu être restau... [3046 chars]",
            "url": "https://www.24heures.ch/verone-il-detruit-la-chaise-de-van-gogh-en-sasseyant-dessus-558770600177",
            "image": "https://cdn.unitycms.io/images/BZ5ayWQdKjCBsge4hy3Tyj.png?op=ocroped&val=1200,600,927,811,189,56&sum=BqbBIHDXeyk",
            "publishedAt": "2025-06-16T16:20:16Z",
            "source": {
                "name": "24 heures",
                "url": "https://www.24heures.ch"
            }
        }
    ]

    const getNews = async() => {
        await fetchNews();
        setArticles(news);
        // setArticles(temp);
        console.log(articles);
    }
  return (
    <div className='flex flex-col min-h-screen min-w-screen bg-gradient-to-br from-blue-400 to-green-300 dark:from-green-900 dark:to-blue-900 place-items-center dark:text-white'>
        <div className='max-w-[1380px] place-items-center'>
            <Header />
            <button 
                onClick={() => {
                    console.log('hey' + count);
                    setCount(count + 1);
                    getNews();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 cursor-pointer rounded"
            >Press This</button>
            <main className='flex flex-row flex-wrap place-content-around'>
                {articles && articles.map((article) => {
                    return <ArticleCard article={article} key={article.url}/>
                })}
            </main>
        </div>
    </div>
  )
}

export default App