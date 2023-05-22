import React, { FormEvent, useState } from 'react'
import useForm from '@/hooks/useForm'
import { ShippingForm, CompleteOrder, CartDetails } from '@/components'
import { useRouter } from 'next/router'
import { useCartContext } from '@/context/CartContext'

type ShippingDetails = {
  firstName: string,
  lastName: string,
  email: string,
  country: string,
  address: string,
  state: string,
  city: string,
  postalCode: number | string,
  phoneNumber: string
}

type UpdateShippingDetails = ShippingDetails & {
  onUpdate(fields: Partial<ShippingDetails>): void
}

const ShippingDataProps: ShippingDetails = {
  firstName: '',
  lastName: '',
  email: '',
  country: 'Czech Republic',
  address: '',
  state: '',
  city: '',
  postalCode: '',
  phoneNumber: '+420 '
}


const Checkout = () => {
  const router = useRouter()
  let { cartItems } = useCartContext()



  const onUpdate = (fields: Partial<ShippingDetails>) => {
    setShippingData(prev => (
      {...prev, ...fields}
    ))
  }
    const [shippingData, setShippingData] = useState(ShippingDataProps)
    const { steps, currentStep, step, back, next } = useForm([<ShippingForm key='1' {...shippingData} onUpdate={onUpdate}/>, <CompleteOrder key='2' {...shippingData}/>]) 
    const onSubmit = (e: FormEvent) => {
      e.preventDefault()
      if (currentStep === steps.length - 1) {
        router.push('/')
      } else {
        next()
      }
    }

    

  
  return (
    <div className='relative min-h-screen flex flex-wrap justify-center max-w-[960px] m-auto md:p-4 max-md:flex-col'>
        {/* <form onSubmit={onSubmit} className='p-8 shadow-md max-w-[960px] border-2 border-gray-50'>
            <div className='flex justify-end mr-2'>
                {currentStep + 1} / {steps.length}
            </div> 
            {step}
            <div className='mt-2 flex gap-1 justify-end mr-2'>
               {currentStep !== 0 && <button type='button' className='border-2 px-2 py-1' onClick={back}>back</button>}
                <button type='submit' className=' px-3 py-1 outline-none rounded bg-green-500 text-white border-none' >{currentStep === steps.length - 1 ? 'Complete order' : 'next' }</button>
            </div>
        </form> */}
        <CartDetails />
        <ShippingForm {...shippingData} onUpdate={onUpdate}/>
    </div>
  )
}

export default Checkout 