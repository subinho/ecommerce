import React, { FormEvent } from 'react'
import { useCartContext } from '@/context/CartContext'
import { useRouter } from 'next/router'

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

const ShippingForm = ({firstName, lastName, email, country, address, state, city, postalCode, phoneNumber, onUpdate}: UpdateShippingDetails) => {

  const router = useRouter()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/')
  }
  return (
    <div className='flex-cst md:w-2/3'>
      <h4 className='text-xl font-medium '>Billing Information</h4>
      <form action="submit" onSubmit={onSubmit}>
        <div className='flex flex-wrap'>

          <div className='flex-cst w-1/2 px-2 mt-3'>
              <label htmlFor="firstName" className='inline-block mb-1'>First Name</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='firstName' placeholder='First Name' value={firstName} onChange={e => onUpdate({firstName: e.target.value})} required/>
          </div>
          <div className='flex-cst w-1/2 px-2 mt-3'>
              <label htmlFor="lastName" className='inline-block mb-1'>Last Name</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='lastName' placeholder='Last Name' value={lastName} onChange={e => onUpdate({lastName: e.target.value})} required/>
          </div>
          <div className='flex-cst w-full px-2 mt-3'>
              <label htmlFor="email" className='inline-block mb-1'>Email</label>
              <input type="email" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='email' placeholder='you@example.com' value={email} onChange={e => onUpdate({email: e.target.value})} required/>
          </div>
          <div className='flex-cst w-full px-2 mt-3'>
              <label htmlFor="address" className='inline-block mb-1'>Address</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='address' placeholder='Address' value={address} onChange={e => onUpdate({address: e.target.value})} required/>
          </div>
          <div className='flex-cst w-full px-2 mt-3'>
              <label htmlFor="address2" className='inline-block mb-1'>Address 2 (Optional)</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='address2' placeholder='Address 2' value={address} onChange={e => onUpdate({address: e.target.value})} required/>
          </div>
          <div className='flex-cst md:w-5/12 px-2 mt-3 max-md:w-full'>
              <label htmlFor="country" className='inline-block mb-1'>Country</label>
              <select className='block w-full py-1 pr-4 pl-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='country' placeholder='Country' value={country} onChange={e => onUpdate({country: e.target.value})} required>
                <option value="">Choose...</option>
                <option value="Czechia">Czech Republic</option>
              </select>
          </div>
          <div className='flex-cst md:w-1/3 px-2 mt-3 max-md:w-full'>
              <label htmlFor="state" className='inline-block mb-1'>State</label>
              <select className='block w-full py-1 pr-4 pl-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='state' placeholder='State' value={state} onChange={e => onUpdate({state: e.target.value})} required>
                <option value="">Choose...</option>
                <option value="Czechia">Prague</option>
              </select>
          </div>
          <div className='flex-cst md:w-1/4 px-2 mt-3 max-md:w-full'>
              <label htmlFor="postalCode" className='inline-block mb-1'>Postal Code</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='postalCode' placeholder='Postal Code' value={postalCode} onChange={e => onUpdate({postalCode: e.target.value})} required/>
          </div>

        </div>

        <hr className='my-6'/>

        <h4 className='text-xl font-medium '>Payment</h4>
        <div className='my-4'>
          <div>
            <input type="radio" name='payment' id='creditCart' className='w-4 mr-2' defaultChecked required/>
            <label htmlFor="creditCart">Credit Cart</label>
          </div>
          {/* <div>
            <input type="radio" name='payment' id='cash' className='w-4 mr-2' required/>
            <label htmlFor="cash">Cash</label>
          </div> */}
        </div>

          <div className='flex flex-wrap'>
          <div className='flex-cst md:w-1/2 max-md:w-full px-2 mt-3'>
              <label htmlFor="cc-name" className='inline-block mb-1'>Name on card</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded ' id='cc-name' required/>
              <small className='text-gray-400'>Full name on card</small>
          </div>
          <div className='flex-cst md:w-1/2 max-md:w-full px-2 mt-3'>
              <label htmlFor="cc-number" className='inline-block mb-1'>Credit card number</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded tracking-wider ' id='cc-number' maxLength={16} required/>
          </div>

          <div className='flex-cst md:w-1/4 max-md:w-1/2 px-2 mt-3'>
              <label htmlFor="cc-exp" className='inline-block mb-1'>Expiration date</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded tracking-wider ' id='cc-exp' maxLength={5} required/>
          </div>
          <div className='flex-cst md:w-1/4 max-md:w-1/2 px-2 mt-3'>
              <label htmlFor="cc-cvv" className='inline-block mb-1'>CVV</label>
              <input type="text" className='block w-full py-1 px-2 leading-normal text-md bg-white border-2 border-gray-100 rounded tracking-wider ' id='cc-cvv' maxLength={3} required/>
          </div>

          </div>
        
        <hr className='my-6'/>
        
        <button
        type='submit'
        className='w-full pointer font-lg rounded bg-green-500 outline-none text-white py-2 px-4 mb-6'
        >
          Complete Order
        </button>
      </form>
    </div>
  )
}

export default ShippingForm


{/* <div className='flex flex-wrap justify-between'>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>First Name</label>
      <input autoFocus type="text" value={firstName} onChange={(e) => onUpdate({ firstName: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base'  required/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>Last Name</label>
      <input type="text" value={lastName} onChange={(e) => onUpdate({ lastName: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' required/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>Country</label>
      <input type="text" value={country} onChange={(e) => onUpdate({ country: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' readOnly/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>Street Address</label>
      <input type="text" value={address} onChange={(e) => onUpdate({ address: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' required/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>State</label>
      <input type="text" value={state} onChange={(e) => onUpdate({ state: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' required/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>City</label>
      <input type="text" value={city} onChange={(e) => onUpdate({ city: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' required/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>Postal Code</label>
      <input type="text" value={postalCode} onChange={(e) => onUpdate({ postalCode: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' required/>
    </div>
    <div className='w-input mb-3'>
      <label className='font-medium mb-2 block  '>Phone Number</label>
      <input type="text" value={phoneNumber} onChange={(e) => onUpdate({ phoneNumber: e.target.value})} className='w-full h-10   border-2 border-gray-100 rounded pl-2 text-base' required/>
    </div>
</div> */}