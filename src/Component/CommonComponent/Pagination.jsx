import React,{useState} from 'react'
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({data}) => {
 
  return (
    <>
        <div className="container flex justify-center mt-4">
                <div className='flex gap-2'>
                  <Button
                    variant='text'
                    className='flex gap-2'
                    disabled={currentPage === 1}
                    onClick={prev}

                  >
                    <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />Previous
                  </Button>

                  <div className="flex gap-2">
                    {number.map(page => (
                      <IconButton key={page}

                        {...getItemProps(page)}>{page}</IconButton>
                    ))}
                  </div>
                  <Button
                    variant='text'
                    className='flex item-center gap-2'
                    onClick={next}
                    disabled={currentPage === Math.ceil(data.length / recordPerPage)}
                  >
                    Next <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
                  </Button>


                </div>
              </div>
    </>
  )
}

export default Pagination
