import { Tilt } from 'react-tilt'
import logo from '../../assets/mastercard.svg'
import chip from '../../assets/chip.svg'
export function CreditCard() {
  return (
    <Tilt className='w-[425px] h-[270px] bg-gradient-to-tr rounded-2xl flex content-center items-center justify-center from-[#fc2ca3] to-[#3b59ff]'>
      <div className='w-full h-full p-8'>
        <div className='relative w-full h-full'>
          <img
            className='absolute'
            width='70px'
            height='24px'
            alt='credit card logo'
            src={logo}
          />
          <img
            className='absolute right-0 bottom-0 top-0 my-auto'
            alt='credit card chip'
            src={chip}
            width='60px'
            height='30px'
          />
          <div className='flex flex-col w-full h-full justify-end gap-4'>
            <p className='text-2xl text-white'>0000 1111 2222 3333</p>
            <div className='flex gap-28'>
              <p className='text-lg uppercase text-white'>John Doe</p>
              <p className='text-lg uppercase text-white'>08/24</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}
