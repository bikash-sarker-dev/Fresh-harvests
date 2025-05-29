"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const CustomersSay = () => {
  return (
    <div className="my-[110px] ">
      <div className="container relative">
        <div className="">
          <Image
            src={"/assets/pata.png"}
            width={60}
            height={10}
            className="absolute top-15 rotate-45 left-0 z-11"
          />
        </div>
        <div className="">
          <Image
            src={"/assets/pata.png"}
            width={60}
            height={10}
            className="absolute top-20 right-0 z-11"
          />
        </div>
        <SectionHeader
          subTitle={"Testimonial"}
          title={"What Our Customers Say"}
          description={
            "Don t just take our word for it—here s what some of our customers have to say about their experience with Fresh Harvest"
          }
        />
      </div>

      <div className="mt-10">
        <div className="container ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <div className="w-1/3">
                  <div className="">
                    <Image
                      src={"/assets/testi.png"}
                      width={250}
                      height={300}
                      className=""
                      alt="no image"
                    />
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="bg-fh-gray-20 p-5 rounded-xl max-w-lg">
                    <p className="">
                      "I absolutely love Fresh Harvest! The quality of their
                      produce is outstanding. It's always fresh, flavorful, and
                      delicious. The convenience of ordering online and having
                      it delivered to my doorstep saves me so much time. Fresh
                      Harvest has become my go-to for all my fruit and vegetable
                      needs.
                    </p>

                    <h4 className="mt-4 ">
                      <span className="text-fh-block text-lg font-medium ">
                        Jane Doe
                      </span>{" "}
                      - Professional chef
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <div className="w-1/3">
                  <div className="">
                    <Image
                      src={"/assets/testi.png"}
                      width={250}
                      height={300}
                      className=""
                      alt="no image"
                    />
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="bg-fh-gray-20 p-5 rounded-xl max-w-lg">
                    <p className="">
                      "I absolutely love Fresh Harvest! The quality of their
                      produce is outstanding. It's always fresh, flavorful, and
                      delicious. The convenience of ordering online and having
                      it delivered to my doorstep saves me so much time. Fresh
                      Harvest has become my go-to for all my fruit and vegetable
                      needs.
                    </p>

                    <h4 className="mt-4 ">
                      <span className="text-fh-block text-lg font-medium ">
                        Jane Doe
                      </span>{" "}
                      - Professional chef
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <div className="w-1/3">
                  <div className="">
                    <Image
                      src={"/assets/testi.png"}
                      width={250}
                      height={300}
                      className=""
                      alt="no image"
                    />
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="bg-fh-gray-20 p-5 rounded-xl max-w-lg">
                    <p className="">
                      "I absolutely love Fresh Harvest! The quality of their
                      produce is outstanding. It's always fresh, flavorful, and
                      delicious. The convenience of ordering online and having
                      it delivered to my doorstep saves me so much time. Fresh
                      Harvest has become my go-to for all my fruit and vegetable
                      needs.
                    </p>

                    <h4 className="mt-4 ">
                      <span className="text-fh-block text-lg font-medium ">
                        Jane Doe
                      </span>{" "}
                      - Professional chef
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
