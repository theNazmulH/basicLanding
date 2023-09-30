import Link from "next/link";
async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
  if(!res.ok){
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}
  const FeaturedProject = async () => {

    const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="">
                  <span className="text-green-600 font-bold">
                    Dolor sit amet consectutar
                  </span>
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    We provide the Perfect Solution to your business growth
                  </h2>

                </div>
              </div>
              <div className="w-full flex flex-wrap">
              {
                data.map((item,i)=>{
                  return(
                      <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4"  key={i}>
                        <div className="bg-white rounded">
                          <img
                              className="rounded-t object-cover h-128"
                              src={item['image']}
                              alt=""
                          />
                          <div className="p-6">
                            <span className="text-gray-400">2021</span>
                            <h3 className="mb-4 text-2xl font-bold font-heading">
                              {
                                item['title']
                              }
                            </h3>
                            <a
                                className="flex text-green-600 hover:text-green-700 font-bold"
                                href={item['live']}
                            >
                              <svg
                                  className="mr-3 w-6 h-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                              >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                />
                              </svg>
                              <span>View Case Study</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      // <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                      //   <a target="_blank" href={item['live']}>
                      //     <img className="h-80 w-full mx-auto object-cover rounded" src={item['image']} alt=""/>
                      //   </a>
                      // </div>
                  )
                })
              }
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
