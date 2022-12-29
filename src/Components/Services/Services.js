import React ,{useState} from 'react'
import '../../Styles/Services.css'
import OfferiingService from './OfferiingService'
import { FaCamera } from 'react-icons/fa'
import { BsApple, BsGithub, BsFillCameraVideoFill } from 'react-icons/bs'
import { ImZoomIn } from 'react-icons/im'
import { FaCircleNotch } from 'react-icons/fa'

export default function Services() {
  const [about]=useState(
    {title:'Services',
    heading:'My Services',
    description:'Note that the development build is not optimized. To create a production build, use npm run build'
  }
  )
  const data = [
    {
      id: 1,
      icon: BsGithub,
      title: 'Web Development',
      detail: 'Note that the development build is not optimized To create a production builduse npm run build.'
    },
    {
      id: 1,
      icon: FaCamera,
      title: 'Photography',
      detail: 'Note that the development build is not optimized To create a production builduse npm run build.'
    },
    {
      id: 1,
      icon: FaCircleNotch,
      title: 'Web Design',
      detail: 'Note that the development build is not optimized To create a production builduse npm run build.'
    },
    {
      id: 1,
      icon: BsApple,
      title: 'App Development',
      detail: 'Note that the development build is not optimized To create a production builduse npm run build.'
    },
    {
      id: 1,
      icon: BsFillCameraVideoFill,
      title: 'FaFileVideo',
      detail: 'Note that the development build is not optimized To create a production builduse npm run build.'
    },
    {
      id: 1,
      icon: ImZoomIn,
      title: 'FaGitHub',
      detail: 'Note that the development build is not optimized To create a production builduse npm run build.'
    },
  ]


  return (
    <>
      <div className='ServicesHeader'>
      <h3>{about.title}</h3>
    <h1>{about.heading}</h1>
    <p>{about.description}</p>
        <div className='borderBottom'></div>
      </div>
      <div className='Boxes'>

        {data.map((d) => <OfferiingService Icon={d.icon} Title={d.title} Detail={d.detail} />)}
      </div>
    </>

  )

}


// const OfferingService = ({ Icon, title, detail }) => {
//   return (
//     <div>Services</div>
//   )
// }

