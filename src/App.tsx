import Header from './components/Header'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'
import FeatureCard from './components/FeatureCard'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import data from './data.json'
import Stats from './components/Stats'
import IconBrand from './assets/icon-brand-recognition.svg?react'

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <div className="w-full bg-(--gray-background)">
        <LinkShortener />
        <Stats/>
        <div className='flex mb-10 justify-between flex-wrap content'>
          {data.map(feature =>
            <FeatureCard key={feature.heading} heading={feature.heading}
              description={feature.description} Icon={ IconBrand } />)}
        </div>
        <CallToAction heading="Boost your links today" />
      </div>
      <Footer/>
    </>
  )
}

export default App
