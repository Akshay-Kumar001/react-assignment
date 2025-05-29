import React from "react";
import images from "./assets/asset";
import Theme from "./components/Theme";
const App = () => {
  return (
    <>
      <section className="bg-background-blue w-full min-h-dvh">
        <div className="max-w-container w-full mx-auto">
          <div className="grid grid-cols-4 grid-rows-4 gap-7 p-8  text-white min-h-screen">
            <div className="lg:col-span-1 sm:col-span-2  col-span-4 row-span-2 bg-card-background p-8  rounded-4xl flex flex-col justify-between order-0">
              <h2 className="text-4xl font-semibold leading-10 tracking-[-0.36px] bg-[linear-gradient(135deg,_#FFFFFF,_#AA9CFC)] bg-clip-text text-transparent">
                Create your own template
              </h2>
              <div className="flex flex-col">
                <h5 className="text-lg leading-7 ">14 days trial</h5>
                <p className="text-base text-light-blue-text">
                  after – $5/month
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-2 col-span-4 row-span-2  p-8 rounded-4xl  flex flex-col justify-between items-center relative bg-[url('assets/purple_card_bg.svg')] bg-cover bg-bottom bg-no-repeat min-h-[400px] lg;order-1 order-2 ">
              <h1 className="sm:text-[62px] text-[42px] font-bold sm:leading-16 leadimg-20 tracking-[-1.24px] text-center">
                Template Ai
              </h1>
              <img
                className="w-auto absolute bottom-[-184px] z-20"
                src={images.center_image}
                alt=""
              />
            </div>

            {/* Card 3 */}
            <div className="lg:col-span-1 sm:col-span-2 col-span-4 row-span-2 flex flex-col gap-7 lg:order-2 md:order-3 order-5 ">
              <div className="flex items-center justify-center w-full bg-card-background p-11 rounded-3xl ">
                <Theme />
              </div>
              <div className="bg-card-background p-8 rounded-3xl flex flex-col gap-6 justify-center  items-center grow">
                <h2 className="sm:text-[62px] text-[42px] font-bold leading-14 tracking-[-1.24px] bg-[linear-gradient(90deg,_#F5F1FF,_#6633EE)] bg-clip-text text-transparent">
                  25M
                </h2>

                <div className="text-lg leading-5 relative before:absolute before:bg-[url(assets/union_l.svg)] before:bg-cover before:bg-no-repeat  before:w-2.5 before:h-full before:top-0 before:-left-1 after:absolute after:bg-[url(assets/union_l.svg)] after:bg-cover after:bg-no-repeat  after:w-2.5 after:h-full after:top-0 after:-right-1 text-[#B2A1FD] px-5 py-2.5 bg-[linear-gradient(90deg,_#b294ff33,_#b294ff33)]">
                  created prompts
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="lg:col-span-1 sm:col-span-2 col-span-4 row-span-2 flex flex-col gap-7 lg:order-3 order-1">
              <div className="bg-card-background p-8 rounded-3xl flex flex-col gap-6 justify-center  items-center grow">
                <div className="flex flex-col gap-3 items-center">
                  <h2 className="sm:text-[62px] text-[42px] font-bold leading-14 tracking-[-1.24px] bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] bg-clip-text text-transparent">
                    20
                  </h2>
                  <p className="text-lg leading-5 text-light-blue-text ">
                    Top Users
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="w-full max-w-36"
                    src={images.avatars_image}
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-card-background p-8 rounded-3xl flex flex-col gap-6 justify-center  items-center  ">
                <div className="block relative bg-[#00000026] p-2 rounded-full border border-[#5b4b8973]">
                  <div className="relative overflow-hidden text-white text-xl font-medium px-6 py-3 rounded-4xl  before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_at_bottom,_#5F33D6_0%,_#BBA5F4_100%)] before:opacity-100 before:bg-size-[200%] before:bg-center   after:bg-[url(assets/glitter_img.svg)] after:absolute after:inset-0 after:z-10 cursor-pointer hover:before:bg-[radial-gradient(circle_at_top,_#5F33D6_0%,_#BBA5F4_100%)] ">
                    <span className=" relative z-20 flex gap-1.5 justify-center">
                      <img src={images.genrate_img} alt="" />
                      Generate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="md:col-span-1 col-span-2 row-span-2 sm:p-8 p-4 rounded-4xl bg-card-background before:bg-[url('assets/branching_card_bg.svg')] bg-cover bg-top-right bg-no-repeat flex items-end relative min-h-[400px] md:order-4 order-3">
              <div className="flex flex-col gap-1.5">
                <div className="relative left-[-30px]">
                  <img
                    className="w-full max-w-24"
                    src={images.Branching_icon}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold text-white">
                    Branching paths
                  </h4>
                  <p className="text-base leading-5 text-light-blue-text ">
                    Explore multiple prompt directions with branching.
                  </p>
                </div>
              </div>
              <img
                className="w-full max-w-[73px] absolute top-0 left-0"
                src={images.Branching_top_icon}
                alt=""
              />
            </div>

            <div className="md:col-span-1 col-span-2 row-span-2 sm:p-8 p-4 rounded-4xl bg-card-background before:bg-[url('assets/Ai_journey_card.svg')] bg-cover bg-top-right bg-no-repeat flex items-end relative min-h-[400px]  md:order-5 order-4">
              <div className="flex flex-col gap-1.5">
                <div className="relative left-[-30px]">
                  <img
                    className="w-full max-w-24"
                    src={images.Ai_journey_icon}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold text-white">Ai journey</h4>
                  <p className="text-base leading-5 text-light-blue-text ">
                    Boost your prompt precision with keywords.
                  </p>
                </div>
              </div>
              <img
                className="w-full max-w-[73px] absolute top-0 right-0"
                src={images.Ai_journey_top_icon}
                alt="ai-juremy-top-icon"
              />
            </div>

            <div className="lg:col-span-1 sm:col-span-2 col-span-4 row-span-2 p-8 rounded-4xl bg-card-background  min-h-[400px] flex flex-col order-6">
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-white">Prompt Service</h4>
                <p className="text-base leading-5 text-light-blue-text ">
                  Use pre-made templates to jumpstart creativity.
                </p>
              </div>
              <div className="relative grow">
                <div className="px-5 py-4 rounded-full text-base w-fit font-medium border bg-[#636ab636] border-[#ffffff26] flex items-center gap-3 absolute top-[20%] -rotate-[25deg]">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 bg-[#C883FB] rounded-full"></div>{" "}
                    <span>Rewrite</span>
                  </div>
                </div>
                <div className="px-5 py-4 rounded-full text-base w-fit font-medium border bg-[#636ab636] border-[#ffffff26] flex items-center gap-3 absolute bottom-[25%] left-[38%] -rotate-90">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 bg-amber-700 rounded-full"></div>{" "}
                    <span>JPG</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 bg-[#FFB266] rounded-full"></div>{" "}
                    <span>PNG</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 bg-[#44B7FF] rounded-full"></div>{" "}
                    <span>PDF</span>
                  </div>
                </div>
                <div className="px-5 py-4 rounded-full text-base w-fit font-medium border bg-[#636ab636] border-[#ffffff26] flex items-center gap-3 absolute bottom-[5%] right-[25%] rotate-[60deg]">
                  <img src={images.Settings_icon} alt="" />
                  <img src={images.Zap_circle} alt="" />
                </div>
                <img
                  className="w-ful max-w-16 absolute bottom-[0%]  left-[-10%]"
                  src={images.Camera_icon}
                  alt=""
                />
                <img
                  className="w-ful max-w-16 absolute left-[44%] bottom-26"
                  src={images.Gift_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
