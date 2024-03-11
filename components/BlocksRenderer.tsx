import React from 'react'
import Team from './blocks/Team'
import HeroHome from './blocks/HeroHome'
import Introduce from './blocks/Introduce'
import Projects from './blocks/Projects'
import Products from './blocks/Products'
import TimeLine from './blocks/TimeLine'
import Ylink from './blocks/Ylink'

const componentMap = {
  Team,
  HeroHome,
  Introduce,
  Projects,
  Products,
  TimeLine,
  Ylink,
}

export const ContentBlocks = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        const MDXComponent: React.ElementType | undefined = componentMap[block['type']]
        if (!MDXComponent) return null
        return <MDXComponent key={index} data={block} />
      })}
    </>
  )
}
