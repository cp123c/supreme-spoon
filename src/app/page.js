import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="relative">
      <section className="mx-auto flex flex-col lg:flex-row h-[calc(100vh-8rem)] items-center">
        <div className="w-full p-8 lg:w-1/2 lg:pb-28 lg:pl-44">
          <div className="text-3xl lg:text-7xl font-semibold animated-text pb-4 leading-snug">
            Driving Growth Through Strategic <br />
            <span className="relative"></span>
          </div>
          <div className="text-md lg:text-xl max-w-[700px] pb-6">
            Harnessing Data-Driven Insights for Accelerated Growth. Our
            strategic approach goes beyond quick fixes, offering comprehensive,
            measurable solutions to navigate competition and achieve sustained
            success.
          </div>

          <Link
            href="#"
            className={buttonVariants({ variant: "default", size: "xl" })}
          >
            Get started
          </Link>
        </div>

        <div className="relative w-full lg:w-1/2 h-full bg-orange-400 grid grid-rows-3 grid-cols-3 overflow-hidden">
          <div
            className={
              "overflow-hidden flex items-center justify-center bg-home-grid-bg1 bg-cover bg-no-repeat bg-left-bottom bg-fixed"
            }
          ></div>
          <div
            className={"overflow-hidden flex items-center justify-center"}
          ></div>
          <div
            className={
              "overflow-hidden flex items-center justify-center bg-home-grid-bg1 bg-cover bg-no-repeat bg-right-bottom bg-fixed"
            }
          ></div>

          <div
            className={"overflow-hidden flex items-center justify-center"}
          ></div>
          <div className={"overflow-hidden flex items-center justify-center"}>
            <Image src={"/logo-black.png"} width={100} height={100} alt={""} />
          </div>
          <div
            className={"overflow-hidden flex items-center justify-center"}
          ></div>

          <div
            className={
              "overflow-hidden flex items-center justify-center bg-home-grid-bg1 bg-cover bg-no-repeat bg-right-bottom bg-fixed"
            }
          ></div>
          <div
            className={"overflow-hidden flex items-center justify-center"}
          ></div>
          <div
            className={
              "overflow-hidden flex items-center justify-center bg-home-grid-bg1 bg-cover bg-no-repeat bg-right-bottom bg-fixed"
            }
          ></div>
        </div>
      </section>
      {/* <section className="bg-home-background bg-cover bg-center bg-fixed h-[400px] brightness-50">
        <div>""</div>
      </section> */}

      <section className="lg:h-[400px] w-full flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 h-full bg-orange-400 p-4 overflow-hidden">
          <div className="bg-home-background bg-cover bg-no-repeat bg-right-bottom bg-fixed h-[370px]">
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex pt-4">
          <div className="flex flex-col items-center p-5">
            <h1>
              ABOUT
            </h1>
            <div className="text-lg lg:text-2xl text-justify leading-snug">
              Founded in December 2023 by Chong , the company has grown from its
              begining as a freelance social marketing and web design in Kuala
              lumpur, we're making digitalization more straightforward,faster
              and most importantly, more affordable.
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center p-5">
          <h1>
            Our solution
          </h1>

          <Accordion type="single" collapsible className="w-full lg:pl-5">
            <AccordionItem value="item-1" className="py-4">
              <AccordionTrigger className="accordionStyle">
                Social Media Marketing
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                {" "}
                Creating and managing social media profiles to engage with
                audiences, build brand awareness, and drive traffic to websites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="py-4">
              <AccordionTrigger className="accordionStyle">
                Content Marketing
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                Developing and distributing valuable, relevant content to
                attract and retain a clearly defined audience, ultimately
                driving profitable customer action.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="py-4">
              <AccordionTrigger className="accordionStyle">
                Digital Advertising Campaigns
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                Planning, executing, and optimizing digital ad campaigns across
                various platforms such as Google Ads, Facebook Ads, and display
                networks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="py-4">
              <AccordionTrigger className="accordionStyle">
                Analytics and Reporting
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                Utilizing data analytics tools to track and analyze digital
                marketing performance, providing insights to optimize strategies
                and improve ROI.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div class="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/hero3.jpg"
            width="400"
            height="400"
            className="w-[600px]"
          />
        </div>
      </section> 

      {/* <section className="h-[600px] border-t-2 border-orange-500 pt-6 text-center">
        <div className="text-7xl font-semibold py-4 leading-snug underline underline-offset-8 decoration-orange-500">
          Why us
        </div>

        <div className="flex gap-6 justify-center pt-5">
          <div className="p-4 h-[300px] w-[400px] border-4 border-orange-500 flex flex-col">
            <div className="text-center py-3 flex items-center justify-center">
              <Image
                src="/content-writing.svg"
                width="48"
                height="48"
                className=""
              />
            </div>
            <div className="text-center">
              <div className="text-xl font-bold pb-3">Client-Centric Focus</div>
              <div>
                Your success is our priority. We go above and beyond to exceed
                your expectations, providing exceptional service and support
                every step of the journey.
              </div>
            </div>
          </div>

          <div className="p-4 h-[300px] w-[400px] border-4 border-orange-500 flex flex-col">
            <div className="text-center py-3 flex items-center justify-center">
              <Image
                src="/content-writing.svg"
                width="48"
                height="48"
                className=""
              />
            </div>
            <div className="text-center">
              <div className="text-xl font-bold pb-3">Proven Expertise</div>
              <div>
                Our team comprises seasoned professionals with years of
                experience and a track record of delivering tangible results for
                our clients.
              </div>
            </div>
          </div>

          <div className="p-4 h-[300px] w-[400px] border-4 border-orange-500 flex flex-col">
            <div className="text-center py-3 flex items-center justify-center">
              <Image
                src="/content-writing.svg"
                width="48"
                height="48"
                className=""
              />
            </div>
            <div className="text-center">
              <div className="text-xl font-bold pb-3">Creative Excellence</div>
              <div>
                Creativity is at the heart of everything we do. From compelling
                content to innovative campaigns, we're dedicated to capturing
                attention and making an impact.
              </div>
            </div>
          </div>

          <div className="p-4 h-[300px] w-[400px] border-4 border-orange-500 flex flex-col">
            <div className="text-center py-3 flex items-center justify-center">
              <Image
                src="/content-writing.svg"
                width="48"
                height="48"
                className=""
              />
            </div>
            <div className="text-center">
              <div className="text-xl font-bold pb-3">
                Transparent Communication
              </div>
              <div>
                We believe in open, honest communication every step of the way.
                You'll always know what we're doing, why we're doing it, and how
                it's benefiting your business
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <footer className="relative h-[300px] pt-10 border-t border-black">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex justify-center items-center">
                <Image src="/logo-ori.png" width={150} height={150} />
                <div className="pt-3 pb-5 w-[300px] text-center md:text-left">
                  Founded in December 2023 by Chong , the company has grown from
                  its begining as a freelance social marketing and web design in
                  Kuala lumpur, we're making digitalization more
                  straightforward,faster and most importantly, more affordable.
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-4xl border-b-4 border-black text-center pt-3">
                  Contact us
                </span>
                <div className="mt-3 flex justify-between items-center text-3xl py-6 px-4 ">
                  <div className="pl-4 cursor-pointer hover:scale-125 flex items-center">
                  <Image src="/insta.svg" width="48" height="48" alt="Instagram" className="pr-2"/> Instagram &#129185;
                  </div>
                </div>

                <div className="flex justify-between items-center text-3xl py-6 px-4">
                  <div className="pl-4 cursor-pointer hover:scale-125 flex items-center">
                  <Image src="/facebook.svg" width="48" height="48" alt="Facebook" className="pr-2"/> Facebook &#129185;
                  </div>
                </div>

                <div className="flex justify-between items-center text-3xl py-6 px-4">
                  <div className="pl-4 cursor-pointer hover:scale-125 flex items-center">
                  <Image src="/whatsapp.svg" width="48" height="48" alt="whatsapp" className="pr-2"/> Whatsapp &#129185;
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 text-center">
              copyright &#169; {year} - the byte lab
            </div>
          </div>
        </footer>
      </section> */}

      <div className="fixed bottom-7 right-4 bg-orange-500 p-4 hover:scale-110">
        <Image src="/whatsapp.svg" width="48" height="48" alt="whatsapp" />
      </div>
    </div>
  );
}
