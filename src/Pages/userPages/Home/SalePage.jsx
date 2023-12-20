import React,{useState,useEffect} from 'react'
import Navbar2 from '../../../Component/userComponent.js/Navbar2'
import MainCard from '../../../Component/CommonComponent/MainCard'
import { saleProperty } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'
import Footer from '../../../Component/CommonComponent/Footer'
import SideBarFilter from '../../../Component/userComponent.js/SideBarFilter'
const SalePage = () => {
    const [loading,setLoading]=useState(true)
    const [originalProperty,setOriginalProperty]=useState([])
    const[filteredProperty,setFilteredProperty]=useState([])
    const [filterOption,setFilterOption]=useState({
      propertyType:{
        Flat:false,Appartment:false,House:false,Ofice:false
      }
    });
    useEffect(()=>{
        saleProperty().then((res)=>{
          setOriginalProperty(res?.data?.saleProperty)

        }).catch((error)=>{
            console.log(error.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    useEffect(()=>{

      const updatedFilterProperty=originalProperty.filter((property)=>{
        const {propertyType}=filterOption;
        const selectedPropertyType=Object.keys(propertyType).filter((type)=>propertyType[type]);
        const selectedTypeMatches=
        selectedPropertyType.length===0||selectedPropertyType.includes(property.propertyType)
        return selectedTypeMatches
      })
    },[filterOption,originalProperty])
  return (
    <>
        <div className='mb-28'>
        <Navbar2 />
      </div>

      <div className='text-2xl font-normal m-12'>Sale</div>
      {loading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-[25%,75%] mt-3 gap-1 px-2'>
          <SideBarFilter setProperty={setFilteredProperty} filterproperty={originalProperty} />

          <div className='lg:order-2 h-full overflow-y-auto border rounded-lg px-2 py-3 '>
            <div className='overflow-y-auto flex flex-wrap justify-center'>
              {filteredProperty.map((data) => (
                <MainCard key={data?._id} property={data} />
              ))}
            </div>
            <div className='join'>
              <button className='join-item btn btn-sm'>1</button>
              <button className='join-item btn btn-sm btn-active'>2</button>
              <button className='join-item btn btn-sm'>3</button>
              <button className='join-item btn btn-sm'>4</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>

   
  )
}

export default SalePage
