import Luxury from "./components/Luxury"
import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"




export default function App() {
  return (
    <main className="py-20 px-6 nmin-h-svh bg-offwhitebg antialiased lg:flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <Sedans/>

        <Suvs/>

        <Luxury/>

      </section>
    </main>
  )
}