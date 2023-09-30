async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/AllService");
  if(!res.ok){
    throw new Error("AllService List Calling Fail");
  }
  return res.json();
}

  const AllService = async () => {
    const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
              <div className="text-center lg:text-left">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold ">
                  All Service
                </h2>
              </div>

            </div>
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-4">
              {
                data.map((item,i)=>{
                  return(
                      <div key={i.toString()} className="w-[30%] bg-gray-200 p-6 rounded-xl">

                          <div className="flex flex-wrap items-center -mx-4 flex-col">
                            <div className="mb-12 lg:mb-0 w-full flex px-4">
                              <div className="max-w-md">
                                <h2 className="mb-2 text-3xl font-bold ">
                                  {item['title']}
                                </h2>
                                <div className="mb-6 max-w-sm">
                                  <p className="text-gray-500 text-sm">
                                    {item['des']}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="mb-4 flex flex-wrap items-end">
                                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                  <img className="w-full h-32 lg:h-48 object-cover rounded" src= {item['image1']}/>
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                  <img className="w-full h-32 object-cover rounded" src= {item['image2']} alt=""/>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-start">
                                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                  <img className="w-full h-32 object-cover rounded" src= {item['image3']} alt=""/>
                                </div>
                                <div className="w-full lg:w-2/3 px-3">
                                  <img className="w-full h-32 lg:h-48 object-cover rounded" src= {item['image4']} alt=""/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                  )
                })
              }
                </div>
                      </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default AllService;
