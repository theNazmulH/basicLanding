async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/TeamList");
  if(!res.ok){
    throw new Error("TeamList Calling Fail");
  }
  return res.json();
}

const TeamList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-12 text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap">
              {
                data.map((item,i)=>{
                  return(
                      <div key={i} className="mb-6 w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                          <img className="w-full lg:w-1/3 h-80 object-cover"
                               src={item['image']}
                               alt=""/>
                          <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                            <h4 className="mb-2 text-2xl font-bold font-heading">
                              {item['name']}
                            </h4>
                            <p className="mb-4 text-gray-500 leading-loose">
                              {item['bio']}
                            </p>
                            <div className="flex">
                              <a className="mr-3" href={item['facebook']}>
                                <img src="atis-assets/social/facebook.svg" alt=""/>
                              </a>
                              <a className="mr-3" href={item['twitter']}>
                                <img src="atis-assets/social/twitter.svg" alt=""/>
                              </a>
                              <a href={item['instagram']}>
                                <img src="atis-assets/social/instagram.svg" alt=""/>
                              </a>
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
      </section>
    </>
  );
};

export default TeamList;
