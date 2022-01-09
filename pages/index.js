import Slider from '../components/Slider'
import CardsLine from '../components/CardsLine'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div id="scrollable" className="flex flex-col flex-1 h-screen overflow-y-scroll scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-[104px] pb-[104px]">
      <div className="bg-emerald-100 dark:bg-[#111827] mx-0 p-0">
        <CardsLine />
        <CardsLine />
        <Slider />
        <Slider />
        <CardsLine />
      </div>
      <Footer />
    </div>
  )
}
