import React, { useEffect, useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const MyReview = () => {
  const outerRef = useRef(null);
  const cardsRef = useRef(null);
  const reviews = portfolioData.reviews;

  useEffect(() => {
    const outer = outerRef.current;
    const cards = cardsRef.current;
    if (!outer || !cards) return;

    // total width of cards
    const totalWidth = cards.scrollWidth;
    const viewportW = window.innerWidth;
    const maxTranslate = totalWidth - viewportW;

    // give outer enough height to allow scroll
    outer.style.height = `${maxTranslate + window.innerHeight}px`;

    // GSAP horizontal scroll
    gsap.to(cards, {
      x: () => -maxTranslate,
      ease: "none",
      scrollTrigger: {
        trigger: outer,
        start: "top top",
        end: () => `+=${maxTranslate}`,
        scrub: true,
        invalidateOnRefresh: true,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <>
      <div id="ScrollCardsHorizontal" ref={outerRef} className="cards-outer relative overflow-hidden">
        <div ref={cardsRef} className="cards flex lg:px-0 px-[16px]">
          {reviews.map((review, index) => (
            <div key={index} className="card min-w-[80vw] sm:min-w-[500px] mr-8">
              <div className="card__inner">
                <div className="card__content">
                  <div className="flex items-center justify-between mb-10">
                    <div id='Quote' className='bg-Primary w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                      <FaQuoteLeft />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-brand font-poppins font-medium">Reviews</p>
                      <div className="flex items-center gap-1 text-[#FBBF24]">
                        {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                      </div>
                    </div>
                  </div>
                  <p className="card__description">
                    {review.content}
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img src={review.image} alt="review profile" />
                    </div>
                    <div>
                      <h2 className="text-brand font-poppins font-semibold text-md">{review.name}</h2>
                      <p className="text-[#e5e3dc9d] font-poppins font-semibold text-sm mt-1">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* ----------------Empty Card------------------- */}
          <div className="card lg:block hidden"> 
            <div className="card__inner">
            <div className="card__image-container" /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReview;
