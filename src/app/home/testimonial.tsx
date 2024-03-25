import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="text-center mx-auto text-xl w-3/4 font-bold bg-slate-600 rounded-xl backdrop-blur-sm opacity-95 mt-10">
        <h1 className="text-2xl">TESTIMONIAL FROM OUR CUSTOMERS </h1>
      </div>
      <div className="mx-auto text-center my-5 w-3/4">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://www.whatsapp.com</div>
          </div>
          <div className="text-start ml-2 flex gap-2">
            {" "}
            <Image
              src="/testimoni.jpeg"
              alt="testimoni"
              width={30}
              height={30}
              className="rounded-full"
            ></Image>
            <p className="ml-1">CONSOLE.LOG ("JCWD")</p>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <div className="text-start">
              <div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Bimbo
                    <time className="text-xs"> 12:45 </time>
                  </div>
                  <div className="chat-bubble">
                    {" "}
                    Eh guys tau gak PT. Marvel Company Unitoys? keren banget loh
                    detail figurenya dan bisa custom design juga
                  </div>
                  <div className="chat-footer">Delivered</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    filza
                    <time className="text-xs "> 12:46</time>
                  </div>
                  <div className="chat-bubble">
                    Oh iya, figure" marvel kan? sumpah aku member loh udah 2
                    tahun. emang keren sih
                  </div>
                  <div className="chat-footer ">Seen at 12:46</div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Muksal
                    <time className="text-xs "> 16.44</time>
                  </div>
                  <div className="chat-bubble"> Penipu kok ditipu.. Heleh</div>
                  <div className="chat-footer ">Delivered</div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Mamang Reza
                    <time className="text-xs "> 20.20</time>
                  </div>
                  <div className="chat-bubble"> info kos mamang sadam</div>
                  <div className="chat-footer ">Delivered</div>
                </div>

                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Aldo
                    <time className="text-xs "> 21:46</time>
                  </div>
                  <div className="chat-bubble">
                    <Image
                      src="/gif.webp"
                      alt="meme"
                      width={80}
                      height={80}
                    ></Image>
                  </div>
                  <div className="chat-footer ">Seen at 12:46</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
