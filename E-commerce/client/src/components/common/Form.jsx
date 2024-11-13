import { Key } from 'lucide-react'
import React from 'react'

const Form = ({formcontrols}) => {
  return (
    <form>
        <div className='flex flex-col gap-3'>
            {
                formcontrols.map(controlitem=> <div className='grid w-full gap-1.5' key={controlitem.name}>
                    <label className='mb-1'>{controlitem.label} </label>
                    {
                        
                    }
                </div> )
            }
        </div>
    </form>
  )
}

export default Form