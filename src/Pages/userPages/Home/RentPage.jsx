import React, { useEffect, useState } from 'react';
import MainCard from '../../../Component/CommonComponent/MainCard';
import Navbar2 from '../../../Component/userComponent.js/Navbar2';
import { rentProperty } from '../../../Api/userApi';
import Loading from '../../../Component/Loading/Loading';
import Footer from '../../../Component/CommonComponent/Footer';
import SideBarFilter from '../../../Component/userComponent.js/SideBarFilter';
import Pagination from '../../../Component/CommonComponent/Pagination';

const RentPage = () => {
  const [originalProperty, setOriginalProperty] = useState([]);
  const [filteredProperty, setFilteredProperty] = useState([]);
  const [filterOption, setFilterOption] = useState({
    propertyType: { Flat: false, Appartment: false, House: false, Office: false },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rentProperty()
      .then((res) => {
        console.log(res?.data?.rentProperty)
        setOriginalProperty(res?.data?.rentProperty);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const updatedFilteredProperty = originalProperty.filter((property) => {
      const { propertyType } = filterOption;
      const selectedPropertyType = Object.keys(propertyType).filter(
        (type) => propertyType[type]
      );
      const selectedTypeMatches =
        selectedPropertyType.length === 0 ||
        selectedTypeMatches.includes(property.propertyType);

      return selectedTypeMatches;
    });

    setFilteredProperty(updatedFilteredProperty);
  }, [filterOption, originalProperty]);



  return (
    <>
      <div className='mb-28'>
        <Navbar2 />
      </div>

      <div className='text-2xl font-normal m-12'>Rent</div>
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
            <div className='flex justify-center'>
          
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default RentPage;
