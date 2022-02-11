import { scroller } from 'react-scroll'

const handleScroll = () => {
  scroller.scrollTo('gallery', {
    duration: 900,
    delay: 0,
    smooth: 'ease',
  })
}

export default handleScroll
