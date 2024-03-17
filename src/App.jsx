import Luxuosos from "./components/Luxuosos"
import Luxury from "./components/Luxuosos"
import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"




export default function App() {
  return (
    <main className="py-20 px-6 nmin-h-svh bg-offwhitebg antialiased lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans/>

        <Suvs/>

        <Luxuosos/>

      </div>
    </main>
  )
}