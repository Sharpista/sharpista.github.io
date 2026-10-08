import { FinalCta } from '../components/sections/FinalCta'
import { HomeHero } from '../components/sections/home/HomeHero'
import { FeaturedServices } from '../components/sections/home/FeaturedServices'
import { ExperienceHighlight } from '../components/sections/home/ExperienceHighlight'
import { Differentials } from '../components/sections/home/Differentials'
import { usePageMeta } from '../hooks/usePageMeta'
import { siteConfig } from '../data/site'

export default function Home() {
  usePageMeta({
    title: siteConfig.homeTitle,
    description: siteConfig.homeDescription,
    isHome: true,
  })

  return (
    <>
      <HomeHero />
      <FeaturedServices />
      <ExperienceHighlight />
      <Differentials />
      <FinalCta />
    </>
  )
}
