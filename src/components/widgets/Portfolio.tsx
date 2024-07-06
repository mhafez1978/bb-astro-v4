'use client';
const Portfolio = () => {
  return (
    <>
      <section>
        <div className="w-[100vw] min-h-[100vh] bg-slate-200 dark:bg-slate-800 py-24 px-32">
          <div className="row w-full h-[50vh] flex flex-row gap-2 ">
            <div className="z-30 relative col w-1/2 flex flex-col bg-[url('../../assets/images/clt-auto-wiz-project.png')] bg-center bg-no-repeat bg-cover">
              {/* <h1 className="text-3xl font-bold">Col 1</h1> */}
            </div>
            <div className="col w-1/2 flex flex-col  bg-[url('../../assets/images/carolina-recycles.png')] bg-center bg-no-repeat bg-cover">
              {/* <h1 className="text-3xl font-bold">Col 2</h1> */}
            </div>
          </div>
          <div className="row mt-2 w-full h-[50vh] flex flex-row gap-2 ">
            <div className="col w-1/3 flex flex-col  bg-[url('../../assets/images/pwwl2.png')] bg-center bg-no-repeat bg-cover">
              {/* <h1 className="text-3xl font-bold">Col 1</h1> */}
            </div>
            <div className="col w-1/3 flex flex-col  bg-[url('../../assets/images/beingmohamedhafez.png')] bg-center bg-no-repeat bg-cover">
              {/* <h1 className="text-3xl font-bold">Col 2</h1> */}
            </div>
            <div className="col w-1/3 flex flex-col  bg-[url('../../assets/images/ceds.png')] bg-center bg-no-repeat bg-cover">
              {/* <h1 className="text-3xl font-bold">Col 2</h1> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
