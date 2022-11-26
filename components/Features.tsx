/** @format */

import React from "react";
import Carousel from "./Carosel";

type Props = {};

let svgClassName =
  "flex-grow-0 flex-shrink-0 md:w-14 md:h-14 relative xl:w-16 xl:h-16 text-primary";
const svgColor = "#bd9575";
const FeaturedData = [
  {
    svg: (
      <svg
        width={56}
        height={57}
        viewBox="0 0 56 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M21.7132 24.7031C21.6723 23.9079 21.6723 23.1108 21.7132 22.3157C21.7572 21.7495 21.9022 21.1985 22.1399 20.6946C23.8044 17.5942 26.0952 14.9613 28.8332 13.002C31.2332 11.1157 33.7399 9.34726 36.0599 7.34305C37.5983 5.9382 39.0421 4.41135 40.3799 2.77462C40.9399 2.15567 41.4198 1.97884 41.9265 2.59779C43.7006 4.44729 44.9818 6.79919 45.6307 9.39754C46.2795 11.9959 46.2712 14.7412 45.6065 17.3346C44.9647 19.8188 43.7197 22.0613 42.0065 23.8188C41.1813 24.5023 40.2863 25.076 39.3398 25.5283L38.6732 25.9115L39.1532 26.1178C39.8999 26.383 40.1665 27.002 39.7132 27.7094C37.4999 31.2462 35.3132 34.8125 32.9932 38.2904C31.7014 40.3484 30.0175 42.0687 28.0599 43.3304C27.0058 43.9073 25.8967 44.3522 24.7532 44.6567C24.5792 44.6791 24.4152 44.7584 24.2821 44.8844C24.1491 45.0104 24.0531 45.1774 24.0065 45.3641L21.0465 55.0609C20.6999 56.2399 20.1666 56.7409 19.4199 56.5936C18.6732 56.4462 18.4332 55.7978 18.4332 54.5599C18.5461 51.3875 19.0394 48.2457 19.8999 45.2167C19.8846 45.0797 19.8846 44.9411 19.8999 44.8041C20.0699 44.4673 20.1256 44.0746 20.0572 43.6965C19.9888 43.3183 19.8006 42.9796 19.5265 42.741C18.1989 41.1147 17.4175 39.0335 17.3132 36.8462C16.8916 32.7523 17.6772 28.6174 19.5532 25.0567C20.2732 23.7304 20.6999 23.6715 21.7132 24.7031ZM41.2332 4.83779C40.2617 5.9674 39.2286 7.03041 38.1399 8.02093C35.4732 10.1725 32.8065 12.1767 30.2999 14.2399C27.7485 16.0509 25.5758 18.4423 23.9265 21.2546C23.6334 21.7553 23.4762 22.3383 23.4732 22.9346C23.4732 25.2631 23.7399 27.6209 23.8999 29.9494C23.8999 30.5388 23.8999 31.0399 23.3132 31.2167C22.7266 31.3936 22.4332 31.0399 22.2199 30.4799C21.7399 29.3599 21.2332 28.2399 20.6732 26.9725C20.5409 27.2183 20.4252 27.4744 20.3266 27.7388C19.9459 28.8194 19.6165 29.9213 19.3398 31.0399C18.7026 33.7332 18.8047 36.5751 19.6332 39.2041C19.9338 40.2666 20.5084 41.209 21.2865 41.9157C22.2199 42.7115 22.2999 42.8883 21.9532 44.0967C21.9532 44.3915 21.7665 44.6567 21.6865 44.9515L20.6999 49.0483H20.8599L21.0998 48.2525L22.5399 43.7136C22.597 43.3887 22.7575 43.0971 22.9923 42.8916C23.2271 42.6862 23.5207 42.5805 23.8199 42.5936C24.9763 42.6847 26.1233 42.3076 27.0465 41.5325C28.3965 40.4751 29.6393 39.2596 30.7532 37.9072C32.7266 35.2546 34.4865 32.4252 36.2999 29.6252C36.6732 29.0946 36.9399 28.4757 37.3132 27.8273H35.2332C34.5932 27.8273 33.8999 28.0631 33.6332 27.1494C33.3665 26.2357 33.6332 26.1767 34.7532 25.6462C36.2732 24.8209 37.7399 23.9367 39.2865 23.1704C40.5111 22.5379 41.5338 21.5103 42.2199 20.223L42.6732 19.4567C43.9187 17.1891 44.4599 14.5337 44.2144 11.8948C43.9689 9.2559 42.9502 6.77788 41.3132 4.83779H41.2332Z"
          fill={svgColor}
        />
        <path
          d="M11.3666 36.3153C11.3159 38.8038 11.7356 41.2766 12.5989 43.5757C13.4621 45.8747 14.7499 47.9493 16.38 49.6669L16.62 49.9321C16.7108 50.0206 16.7835 50.1295 16.8333 50.2515C16.8831 50.3734 16.9089 50.5057 16.9089 50.6395C16.9089 50.7733 16.8831 50.9056 16.8333 51.0275C16.7835 51.1495 16.7108 51.2584 16.62 51.3469C16.5373 51.4529 16.435 51.5379 16.32 51.5962C16.2049 51.6545 16.0799 51.6846 15.9533 51.6846C15.8267 51.6846 15.7016 51.6545 15.5866 51.5962C15.4715 51.5379 15.3692 51.4529 15.2866 51.3469C14.7266 50.7279 14.14 50.0795 13.6333 49.4016C10.9617 45.8728 9.49851 41.4176 9.5 36.8163C9.56641 30.1345 11.1725 23.5816 14.1667 17.7764C17.3433 11.3555 21.5025 5.59159 26.46 0.740568C27.42 -0.232064 27.66 -0.261538 28.5667 0.740568C30.14 2.39109 31.6333 4.10056 33.1799 5.78056L33.3133 5.9574C33.74 6.54687 33.74 7.10686 33.3133 7.49002C32.8866 7.87318 32.4333 7.7553 31.98 7.22477L29.1799 3.98267L28.22 2.98055C27.5533 2.27318 27.5266 2.27318 26.8866 2.98055C24.0755 5.86919 21.5298 9.05806 19.2866 12.5006C16.0215 17.3199 13.6144 22.7809 12.1933 28.5932C11.6451 31.1226 11.3677 33.7144 11.3666 36.3153V36.3153Z"
          fill={svgColor}
        />
        <path
          d="M45.7135 36.3151C45.7592 39.1493 45.2581 41.9617 44.2434 44.565C43.2288 47.1684 41.724 49.5029 39.8291 51.4131C37.9343 53.3234 35.693 54.7655 33.2544 55.6434C30.8159 56.5213 28.236 56.8149 25.6868 56.5046C25.1268 56.5046 24.5668 56.3278 24.0068 56.2099C23.4468 56.092 22.9935 55.5909 23.1001 55.0309C23.2068 54.4709 23.6868 54.1467 24.4068 54.2941C27.3598 54.9763 30.4266 54.7312 33.2601 53.5867C36.6429 52.1998 39.5195 49.6223 41.4469 46.2512C43.3743 42.88 44.2456 38.9021 43.9268 34.9299C43.7203 32.1243 43.2557 29.3492 42.5401 26.6477C42.3535 25.9109 42.5401 25.4099 43.1001 25.233C43.6601 25.0562 44.0335 25.233 44.2469 26.1172C45.16 29.4252 45.6535 32.8572 45.7135 36.3151V36.3151Z"
          fill={svgColor}
        />
        <path
          d="M33.8468 49.2252C33.5535 48.9304 33.1801 48.7831 33.1001 48.4883C33.0684 48.128 33.1141 47.7644 33.2335 47.4273C33.2335 47.4273 33.4735 47.221 33.6068 47.1325C34.878 46.2744 35.9749 45.135 36.8285 43.7858C37.6821 42.4365 38.274 40.9067 38.5668 39.2925C38.7268 38.4083 39.4201 37.9957 39.9268 38.4968C40.0576 38.6596 40.1542 38.8523 40.2095 39.0613C40.2648 39.2702 40.2776 39.4901 40.2469 39.7052C39.6838 43.1293 37.9204 46.1693 35.3401 48.1641C34.8868 48.5178 34.4068 48.901 33.8468 49.2252Z"
          fill={svgColor}
        />
        <path
          d="M40.3801 34.4589C40.3934 34.6059 40.3934 34.7541 40.3801 34.9011C40.3801 35.579 40.0601 36.0505 39.5534 36.0211C39.0467 35.9916 38.7001 35.6084 38.6468 34.9895C38.5934 34.3705 38.6468 34.2232 38.6468 33.84C38.6468 33.4568 39.0201 32.779 39.5001 32.8084C39.9801 32.8379 40.3534 33.221 40.4068 33.8105C40.4201 34.0264 40.4201 34.2431 40.4068 34.4589H40.3801Z"
          fill={svgColor}
        />
        <path
          d="M24.0065 39.6162C23.8547 39.6336 23.7016 39.6057 23.5628 39.5355C23.4241 39.4652 23.3049 39.3551 23.2178 39.2167C23.1306 39.0782 23.0787 38.9165 23.0673 38.7483C23.0559 38.5801 23.0857 38.4116 23.1532 38.2604C23.8732 36.2267 24.5399 34.193 25.4199 32.3656C27.8174 27.579 30.806 23.1845 34.2999 19.3088C36.0911 17.2813 37.6577 15.0255 38.9666 12.5888C39.0173 12.4673 39.0903 12.3586 39.1808 12.2697C39.2714 12.1808 39.3775 12.1135 39.4926 12.072C39.6077 12.0305 39.7294 12.0157 39.8499 12.0285C39.9705 12.0414 40.0874 12.0816 40.1932 12.1467C40.3073 12.2111 40.4067 12.3031 40.4842 12.4159C40.5617 12.5286 40.6153 12.6592 40.6409 12.7979C40.6665 12.9366 40.6636 13.0799 40.6322 13.2172C40.6009 13.3545 40.542 13.4822 40.4599 13.5909C39.3932 15.3298 38.3266 17.0688 37.1266 18.6899C34.7532 21.9025 32.1932 24.9383 29.8732 28.1804C27.6584 31.3432 25.97 34.916 24.8866 38.732C24.7266 39.1446 24.5398 39.5572 24.0065 39.6162Z"
          fill={svgColor}
        />
      </svg>
    ),
    title: "Hypoallergenic ",
    description: "All-natural alpaca wool is gentle on your skin",
  },
  {
    svg: (
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M28 56C22.4622 56 17.0486 54.3578 12.4441 51.2812C7.83952 48.2045 4.25062 43.8315 2.13138 38.7151C0.0121287 33.5988 -0.542359 27.969 0.538024 22.5375C1.61841 17.106 4.28528 12.1169 8.20113 8.20103C12.117 4.28516 17.106 1.61841 22.5374 0.538026C27.9689 -0.54236 33.5987 0.0121287 38.7151 2.13138C43.8314 4.25064 48.2045 7.83948 51.2811 12.4441C54.3578 17.0486 56 22.4621 56 28C55.9926 35.4238 53.0402 42.5415 47.7908 47.7909C42.5414 53.0403 35.4238 55.9926 28 56ZM28 1.91668C22.8413 1.91668 17.7983 3.44645 13.509 6.31252C9.2196 9.17859 5.87642 13.2523 3.90224 18.0184C1.92806 22.7845 1.41147 28.0289 2.4179 33.0886C3.42433 38.1483 5.90847 42.7959 9.55628 46.4437C13.2041 50.0915 17.8518 52.5757 22.9114 53.5822C27.9711 54.5886 33.2155 54.072 37.9816 52.0979C42.7477 50.1237 46.8214 46.7805 49.6875 42.4911C52.5535 38.2017 54.0833 33.1588 54.0833 28C54.076 21.0845 51.3254 14.4544 46.4355 9.56442C41.5455 4.67444 34.9155 1.92403 28 1.91668Z"
          fill={svgColor}
        />
        <path
          d="M31.8612 43.6388C28.5884 43.2431 25.3725 42.4694 22.2778 41.3333C21.3056 41.3333 18.8057 39.9444 11.3612 27.4444C10.5337 25.7147 10.1608 23.8026 10.2779 21.8888C10.2851 21.6284 10.3936 21.3812 10.5803 21.1996C10.7671 21.018 11.0173 20.9165 11.2778 20.9166C11.5259 20.9308 11.7592 21.0395 11.9297 21.2203C12.1002 21.4011 12.1949 21.6403 12.1945 21.8888C12.099 23.465 12.365 25.0422 12.9722 26.4999C19.3055 37.2221 21.7777 39.1666 22.3333 39.4999H22.639C25.5585 40.5228 28.5601 41.2942 31.6111 41.8055L40.6389 39.0277C40.6389 38.861 40.1111 38.5833 38.9445 38.4721C36.3561 38.4595 33.79 38.9501 31.3888 39.9166L30.8889 40.111L30.4723 39.8055C25.2501 36.0555 23.3056 34.4721 23.5001 32.8055C23.5614 32.4195 23.7329 32.0594 23.9941 31.7687C24.2553 31.4779 24.595 31.2688 24.9722 31.1666C27.6111 30.111 29.4722 31.4999 32.0555 33.4166L33.0834 34.1666C35.3334 35.8055 36.9722 36.3055 37.5278 36.0555C37.5278 36.0555 37.7221 36.0555 37.7777 35.5833C37.9999 34.2499 36.5278 33.2222 33.8889 31.9444C32.3574 31.265 31.0896 30.1044 30.2778 28.6388C29.8346 27.6004 29.1495 26.6829 28.2798 25.963C27.41 25.243 26.3807 24.7414 25.2777 24.4999C22.7777 24.1666 21.4723 23.6388 21.0556 22.7777C20.9519 22.481 20.9519 22.1578 21.0556 21.861L21.3889 17.7499C21.4102 17.4969 21.5297 17.2622 21.7218 17.0961C21.9138 16.93 22.1632 16.8456 22.4167 16.861C22.6697 16.8823 22.9043 17.0018 23.0705 17.1939C23.2366 17.3859 23.321 17.6353 23.3056 17.8888L22.9723 21.9444C23.8514 22.3254 24.7929 22.542 25.7501 22.5833C27.1903 22.8547 28.5396 23.4824 29.6749 24.4091C30.8103 25.3359 31.6956 26.5321 32.2499 27.8888C32.8998 28.9589 33.8724 29.7953 35.0277 30.2777C37.1944 31.3332 40.5833 33.0555 39.9722 35.8332C39.9403 36.0817 39.8748 36.3246 39.7778 36.5555C40.3283 36.5736 40.8669 36.7214 41.3496 36.9868C41.8323 37.2523 42.2454 37.628 42.5555 38.0833C42.7332 38.4217 42.826 38.7982 42.826 39.1805C42.826 39.5627 42.7332 39.9392 42.5555 40.2777L42.3889 40.5832L33.1945 43.361C33.021 43.5283 32.8038 43.6432 32.5678 43.6924C32.3319 43.7415 32.087 43.723 31.8612 43.6388ZM25.3889 32.9721C27.0474 34.8753 28.9863 36.5146 31.1389 37.8333C32.0438 37.4821 32.9719 37.1944 33.9167 36.9721C33.1797 36.5574 32.4656 36.1031 31.7778 35.611L30.75 34.8332C28.1945 32.9444 27.0833 32.0555 25.5278 32.8333L25.3889 32.9721Z"
          fill={svgColor}
        />
        <path
          d="M12.3333 41.2223C11.3526 41.1793 10.398 40.8929 9.55551 40.389C9.41615 40.3072 9.29692 40.1953 9.20642 40.0614C9.11592 39.9276 9.05644 39.7752 9.03247 39.6154C9.0085 39.4556 9.02066 39.2924 9.06791 39.1379C9.11515 38.9834 9.1962 38.8414 9.30543 38.7223L9.11114 38.9168C9.28434 38.7296 9.51527 38.6059 9.7671 38.5656C10.0189 38.5253 10.2771 38.5708 10.5 38.6946C11.1661 39.1298 11.9564 39.3347 12.75 39.2779C13.9805 39.0165 15.1744 38.6061 16.3055 38.0557C17.3754 37.4393 18.5732 37.0781 19.8055 37.0001L19.5 38.889C18.6606 39.1246 17.8428 39.4313 17.0555 39.8057C15.7577 40.4371 14.3858 40.9037 12.9721 41.1945L12.3333 41.2223Z"
          fill={svgColor}
        />
        <path
          d="M46.9722 40.3335C46.7992 40.4733 46.5834 40.5496 46.361 40.5496C46.1385 40.5496 45.9229 40.4733 45.7499 40.3335C43.9835 39.0048 41.8208 38.3101 39.611 38.3613H39.4443V36.4446H39.611C42.2397 36.4063 44.8076 37.2362 46.9165 38.8057C47.0223 38.897 47.1073 39.01 47.1654 39.137C47.2236 39.2641 47.2536 39.4021 47.2536 39.5418C47.2536 39.6816 47.2236 39.8196 47.1654 39.9467C47.1073 40.0737 47.0223 40.1867 46.9165 40.278L46.9722 40.3335Z"
          fill={svgColor}
        />
      </svg>
    ),
    title: "Fluffy",
    description: "Alpaca wool is unbelievably cushy.",
  },
  {
    svg: (
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M3.34303 27.5329C1.65904 25.0783 0.610986 22.2054 0.301562 19.1962C-0.0590966 15.9168 0.484286 12.5976 1.86698 9.63393C3.24968 6.67024 5.41337 4.18702 8.10032 2.48015C10.7873 0.773274 13.8841 -0.0853063 17.022 0.00668902C20.1599 0.0986844 23.2065 1.13738 25.7988 2.99903C26.4136 3.44139 26.7696 3.20319 27.2549 2.99903C29.0833 1.71772 31.1381 0.836512 33.2971 0.40789C35.4561 -0.0207322 37.675 0.0120056 39.8217 0.504153C41.9684 0.996301 43.999 1.93778 45.7924 3.27253C47.5859 4.60727 49.1055 6.30798 50.2608 8.27331C51.9135 11.0037 52.7914 14.1731 52.7914 17.4097C52.7914 20.6463 51.9135 23.8158 50.2608 26.5461L49.5813 27.7371C51.2639 29.4385 52.8171 31.1398 54.4996 32.8412C55.1192 33.4883 55.5698 34.2924 55.8077 35.176C56.0457 36.0596 56.0631 36.9927 55.8582 37.8854C55.6533 38.7781 55.233 39.6002 54.638 40.2723C54.0429 40.9444 53.2932 41.4438 52.4611 41.7224C51.7816 41.7224 51.0697 41.9266 50.3578 42.0286C49.5166 46.0099 47.8017 47.405 44.0807 47.0988C43.9951 47.91 43.735 48.6901 43.3201 49.3798C42.9053 50.0696 42.3465 50.651 41.6862 51.08C41.0101 51.4696 40.2666 51.7126 39.4995 51.7944C38.7325 51.8763 37.9576 51.7953 37.2209 51.5564C37.0254 52.7938 36.4089 53.9143 35.4863 54.7093C34.5637 55.5043 33.3977 55.9196 32.2056 55.8779C29.5199 55.8779 28.0962 53.9043 26.2195 52.0327C25.6694 52.6793 25.2488 53.3258 24.7311 53.8703C24.1394 54.6811 23.3425 55.3004 22.4317 55.6573C21.5209 56.0142 20.533 56.0943 19.581 55.8884C18.629 55.6825 17.7514 55.1989 17.0485 54.493C16.3456 53.787 15.8458 52.8873 15.6064 51.8967C10.2351 52.373 8.48786 50.8078 8.55257 45.5675C4.73444 44.0363 4.21671 43.2537 4.18435 38.762C3.04012 38.5921 1.99107 37.9983 1.22592 37.0876C0.460776 36.1769 0.0297196 35.0091 0.0102616 33.794C-0.151524 30.7996 1.62811 29.2343 3.34303 27.5329ZM24.2134 5.04068C21.5406 3.02021 18.2698 2.06963 14.9897 2.36008C11.7097 2.65053 8.63595 4.16294 6.3221 6.62497C4.00825 9.08701 2.60629 12.3369 2.36861 15.7895C2.13093 19.242 3.07316 22.6704 5.02566 25.4572C5.96402 24.4364 6.90233 23.4156 7.80832 22.3607C8.43146 21.6555 9.21935 21.1342 10.0936 20.8486C10.9678 20.5631 11.898 20.5233 12.7914 20.7333C13.6848 20.9432 14.5104 21.3955 15.1859 22.0452C15.8615 22.6949 16.3634 23.5193 16.6418 24.4364C16.6934 24.579 16.7584 24.7158 16.836 24.8447C18.3093 24.4149 19.8797 24.5475 21.2689 25.219C21.893 27.0119 23.079 28.5279 24.6317 29.5175C26.1843 30.5071 28.011 30.9112 29.8112 30.6634C30.4781 31.6047 30.8568 32.737 30.8973 33.91C30.9377 35.083 30.6379 36.2412 30.0376 37.2308C31.3386 37.6779 32.4266 38.6334 33.0769 39.8998C33.7272 41.1663 33.8903 42.6471 33.5322 44.0363C33.5303 44.2198 33.5638 44.4018 33.6305 44.5714C33.6972 44.741 33.7959 44.8946 33.9205 45.0231C35.0206 46.2481 36.1531 47.405 37.1562 48.4258C37.3531 48.7217 37.6114 48.9666 37.9115 49.1421C38.2116 49.3176 38.5457 49.419 38.8886 49.4386C39.2315 49.4583 39.5741 49.3957 39.8906 49.2556C40.2071 49.1155 40.4892 48.9016 40.7155 48.63C41.8803 47.405 41.848 46.2141 40.7155 44.8189C39.583 43.4238 37.4797 41.1099 35.7972 39.2044C34.9559 38.2176 35.1501 37.1287 36.1531 36.6863C37.1562 36.244 37.5121 36.6863 38.0298 37.3669L43.4982 43.5599C44.7277 44.921 45.9896 45.0571 47.1221 43.9342C48.2546 42.8113 48.3517 41.4502 47.1221 40.021L40.0683 32.637C39.7645 32.3407 39.5221 31.9816 39.3565 31.5822C39.275 31.0995 39.3673 30.6021 39.6154 30.1871C39.7823 30.0192 39.9809 29.8901 40.1983 29.808C40.4156 29.726 40.6469 29.6928 40.8772 29.7107C41.3702 29.8914 41.8143 30.195 42.1715 30.5954L49.5813 38.4558C49.8178 38.7701 50.1241 39.0186 50.4733 39.1795C50.8224 39.3404 51.2038 39.4087 51.584 39.3785C51.9641 39.3483 52.3313 39.2204 52.6535 39.0061C52.9757 38.7918 53.2429 38.4977 53.4318 38.1495C54.2407 36.9926 54.0789 35.9037 52.817 34.7468L32.5938 13.4455L31.8497 12.7309C30.1348 14.5684 28.6139 16.3719 26.8019 18.1073C26.0773 18.8748 25.1518 19.398 24.1433 19.6101C23.1348 19.8223 22.089 19.7137 21.1394 19.2982C20.221 18.9888 19.4166 18.3873 18.8371 17.5767C18.2575 16.7661 17.9314 15.7863 17.9037 14.7726C17.8224 13.9197 17.929 13.0586 18.2152 12.2561C18.5013 11.4535 18.9594 10.7311 19.554 10.1448L24.2134 5.04068ZM47.8988 25.4572C48.9584 24.0268 49.7265 22.3822 50.1551 20.6259C50.5838 18.8696 50.6638 17.0392 50.3902 15.249C50.115 12.6106 49.1499 10.1041 47.6019 8.00776C46.054 5.9114 43.984 4.30722 41.6215 3.37333C39.4049 2.31512 36.9461 1.94819 34.5372 2.31613C32.1282 2.68407 29.8702 3.77142 28.0315 5.44902C25.6088 7.64529 23.3076 9.98568 21.1394 12.4587C20.7517 12.8248 20.5023 13.3255 20.4369 13.8692C20.3716 14.4128 20.4946 14.963 20.7835 15.4191C20.9665 15.7925 21.2342 16.1126 21.563 16.351C21.8919 16.5895 22.2716 16.7389 22.6685 16.786C23.0654 16.8332 23.4672 16.7766 23.8383 16.6212C24.2094 16.4658 24.5383 16.2166 24.7958 15.8955L30.6201 9.7365C30.7577 9.53284 30.9396 9.36675 31.1507 9.25215C31.3618 9.13755 31.5959 9.07777 31.8335 9.07777C32.0711 9.07777 32.3051 9.13755 32.5162 9.25215C32.7273 9.36675 32.9093 9.53284 33.0469 9.7365L47.0898 24.5385C47.3487 24.8107 47.6399 25.0489 47.8988 25.2531V25.4572ZM28.8081 34.2704C28.8227 33.6341 28.6545 33.008 28.3255 32.4738C27.9964 31.9396 27.5219 31.5221 26.9637 31.2759C26.5258 31.0781 26.0381 31.0375 25.576 31.1605C25.1139 31.2836 24.7032 31.5633 24.4075 31.9565C20.0393 36.5162 15.6387 41.1099 11.4647 45.5675C11.2013 45.7908 10.9889 46.0732 10.8429 46.3941C10.6969 46.715 10.6211 47.0663 10.6211 47.422C10.6211 47.7778 10.6969 48.129 10.8429 48.4499C10.9889 48.7708 11.2013 49.0533 11.4647 49.2765C11.6795 49.5664 11.9544 49.8009 12.2684 49.9622C12.5824 50.1235 12.9272 50.2073 13.2767 50.2073C13.6261 50.2073 13.971 50.1235 14.285 49.9622C14.599 49.8009 14.8738 49.5664 15.0887 49.2765C15.8976 48.4939 16.6418 47.6432 17.4184 46.8265C20.8806 43.1516 24.4075 39.5446 27.8697 35.8356C28.2942 35.3123 28.6631 34.7418 28.9699 34.1343L28.8081 34.2704ZM8.84377 43.2877C9.31736 43.0762 9.76322 42.8017 10.1704 42.471C13.6973 38.796 17.2243 35.087 20.6865 31.378C20.9329 31.1544 21.1307 30.8776 21.2662 30.5664C21.4017 30.2552 21.4719 29.9169 21.4719 29.5746C21.4719 29.2323 21.4017 28.894 21.2662 28.5828C21.1307 28.2716 20.9329 27.9947 20.6865 27.7711C20.4769 27.5068 20.2147 27.2941 19.9183 27.1482C19.622 27.0022 19.2988 26.9266 18.9715 26.9266C18.6443 26.9266 18.321 27.0022 18.0247 27.1482C17.7283 27.2941 17.4662 27.5068 17.2566 27.7711C16.5448 28.4857 15.8976 29.2683 15.1857 29.9829L6.87004 38.6259C6.43233 38.9545 6.11811 39.4342 5.98212 39.9813C5.84613 40.5285 5.89694 41.1085 6.12579 41.6203C6.39716 42.1175 6.79578 42.5246 7.27628 42.7953C7.75678 43.066 8.29986 43.1894 8.84377 43.1516V43.2877ZM18.0008 51.1481C17.9345 51.7715 18.0627 52.4008 18.3662 52.941C18.6697 53.4811 19.1321 53.9028 19.6834 54.1425C20.1245 54.38 20.6305 54.4488 21.1145 54.337C21.5986 54.2253 22.0307 53.94 22.3367 53.53C25.1841 50.5696 28.0315 47.5751 30.8465 44.5807C31.3185 44.0889 31.5855 43.42 31.5885 42.7212C31.5915 42.0225 31.3304 41.3511 30.8627 40.8547C30.6311 40.609 30.3558 40.4136 30.0524 40.2797C29.749 40.1458 29.4236 40.0761 29.0946 40.0745C28.4301 40.0713 27.7916 40.3459 27.3196 40.8377C24.4398 43.8321 21.6248 46.7925 18.8097 49.821C18.4945 50.1815 18.2228 50.5815 18.0008 51.012V51.1481ZM1.49876 32.8752C1.42657 33.4908 1.54898 34.1142 1.84723 34.6492C2.14548 35.1843 2.60291 35.6012 3.1489 35.8356C3.56832 36.0733 4.05371 36.149 4.52068 36.0496C4.98765 35.9501 5.40672 35.6818 5.70514 35.2912L13.4708 27.1246C13.7035 26.9138 13.8902 26.6526 14.0182 26.359C14.1461 26.0654 14.2124 25.7462 14.2124 25.4232C14.2124 25.1002 14.1461 24.781 14.0182 24.4874C13.8902 24.1938 13.7035 23.9327 13.4708 23.7218C13.2824 23.4719 13.0482 23.2644 12.7821 23.1114C12.5159 22.9585 12.2233 22.8634 11.9215 22.8317C11.6197 22.7999 11.3149 22.8322 11.0253 22.9267C10.7356 23.0212 10.4669 23.1758 10.2351 23.3815C7.61418 26.0697 5.02561 28.7579 2.43704 31.5141C2.08214 31.8847 1.76751 32.2956 1.49876 32.7391V32.8752ZM31.979 47.0988L28.5492 50.6717C29.2611 51.4203 30.0052 52.339 30.8465 53.1217C31.0719 53.3417 31.3393 53.5089 31.6309 53.612C31.9224 53.715 32.2314 53.7517 32.5375 53.7195C32.8435 53.6874 33.1396 53.587 33.4059 53.4253C33.6723 53.2635 33.9028 53.044 34.0822 52.7814C34.3252 52.5848 34.5258 52.3363 34.6708 52.0523C34.8157 51.7682 34.9017 51.4551 34.9231 51.1336C34.9445 50.812 34.9008 50.4893 34.7949 50.1868C34.689 49.8843 34.5233 49.6088 34.3088 49.3786C33.4675 48.4939 32.6585 47.6773 31.979 46.9627V47.0988Z"
          fill={svgColor}
        />
      </svg>
    ),
    title: "Fairtrade",
    description: "Support Peruvians & their traditional way of life",
  },
  {
    svg: (
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M8.1327 37.3909C8.12258 37.5165 8.08503 37.6383 8.02279 37.7475C7.96055 37.8568 7.87514 37.9508 7.77267 38.0229C7.67019 38.095 7.55323 38.1434 7.43006 38.1646C7.30688 38.1857 7.18058 38.1792 7.0602 38.1454C5.43127 37.7613 3.94067 36.9272 2.75557 35.7366C1.57046 34.546 0.737704 33.046 0.350692 31.4048C-0.069698 29.7921 -0.112751 28.1029 0.224869 26.4705C0.56249 24.838 1.27155 23.307 2.2962 21.9982C0.86668 19.0395 0.582086 15.6498 1.49802 12.4909C1.95068 11.3832 2.62848 10.3835 3.48767 9.55608C4.34686 8.72867 5.36839 8.09194 6.4865 7.68693C8.57962 6.84529 10.9 6.7748 13.0396 7.48784C15.1792 8.20088 17.001 9.65179 18.1846 11.5854C19.8914 10.5753 21.9133 10.2519 23.8464 10.68C25.7227 11.1802 27.3809 12.295 28.5605 13.8491C30.492 12.7478 32.7707 12.4414 34.9208 12.9939C36.982 13.6971 38.7424 15.0906 39.9093 16.9427C41.2436 17.0869 42.5149 17.5902 43.59 18.4C44.6652 19.2098 45.5045 20.2962 46.0202 21.5454C46.0678 21.6572 46.092 21.7777 46.0911 21.8994C46.0903 22.021 46.0644 22.1412 46.0152 22.2523C45.966 22.3633 45.8945 22.4629 45.8052 22.5447C45.7159 22.6265 45.6107 22.6888 45.4963 22.7276V22.7276C45.2969 22.7912 45.0815 22.7805 44.8892 22.6974C44.697 22.6143 44.5407 22.4643 44.4488 22.2748C44.0463 21.2544 43.3627 20.3712 42.4789 19.7295C41.595 19.0878 40.5477 18.7143 39.4603 18.653H38.9365L38.6871 18.2003C37.748 16.5379 36.2407 15.2772 34.4469 14.6539C33.4714 14.4409 32.4636 14.4269 31.4827 14.6127C30.5018 14.7984 29.5676 15.1801 28.7351 15.7354L28.0119 16.163L27.5628 15.4336C26.6119 14.015 25.2009 12.9745 23.572 12.4909C22.7093 12.3324 21.824 12.3487 20.9676 12.5387C20.1112 12.7287 19.3007 13.0886 18.5836 13.5976L17.8104 14.1006L17.3614 13.2957C16.4515 11.5356 14.9358 10.1709 13.0989 9.45774C11.2619 8.74458 9.22996 8.732 7.38446 9.42239C6.47675 9.73256 5.64483 10.2338 4.94389 10.8929C4.24295 11.5521 3.689 12.354 3.31884 13.2454C2.54209 16.1494 2.88982 19.2426 4.29156 21.8976L4.54099 22.4509L4.11702 22.9036C3.15111 24.0093 2.47412 25.3405 2.14746 26.7767C1.8208 28.2129 1.8548 29.7086 2.24634 31.1282C2.53863 32.4704 3.20601 33.7 4.16961 34.6717C5.13322 35.6434 6.35273 36.3165 7.68376 36.6112C7.88154 36.6587 8.05584 36.7762 8.17487 36.9424C8.29391 37.1086 8.34977 37.3124 8.33229 37.5167L8.1327 37.3909Z"
          fill={svgColor}
        />
        <path
          d="M36.6168 49.9668H35.8685C34.2307 49.8879 32.632 49.4349 31.1932 48.6419C29.7544 47.8489 28.5129 46.7367 27.5627 45.3892C26.0217 47.5312 23.8059 49.0828 21.2773 49.7907C20.0554 50.0379 18.7951 50.0176 17.5816 49.7312C16.3682 49.4448 15.2298 48.899 14.2435 48.1307C7.03519 43.1004 10.7765 34.7752 11.7493 32.7128C10.4876 30.4164 10.0473 27.7523 10.5022 25.1674C10.8126 23.9948 11.3608 22.9 12.1121 21.9519C12.8634 21.0038 13.8015 20.2231 14.8671 19.6592C16.9205 18.3254 19.4051 17.8425 21.803 18.3111C24.2008 18.7797 26.3267 20.1636 27.7373 22.1743C29.4872 21.0597 31.6036 20.689 33.6238 21.1431C35.5809 21.7565 37.2596 23.0484 38.3628 24.7901C40.3627 23.7462 42.6826 23.5122 44.8479 24.1361C46.9578 24.9382 48.7228 26.4599 49.8364 28.437C51.228 28.9517 52.4783 29.7925 53.4844 30.8901C54.4905 31.9877 55.2234 33.3107 55.6229 34.7501C56.0592 36.1393 56.1181 37.6211 55.7935 39.0411C55.4689 40.4611 54.7726 41.7673 53.7772 42.8237C52.4721 44.2356 50.7497 45.1844 48.8665 45.5289C46.9832 45.8734 45.0399 45.595 43.3263 44.7352C42.9322 46.2288 42.0618 47.5502 40.8493 48.4957C39.6367 49.4411 38.1495 49.958 36.6168 49.9668ZM27.7123 41.8428L28.3858 43.4022C29.1385 44.8046 30.2404 45.9851 31.5831 46.8275C32.9258 47.6698 34.463 48.145 36.0432 48.2062C36.769 48.279 37.5019 48.2065 38.1999 47.9929C38.8979 47.7792 39.5471 47.4286 40.1103 46.9612C40.6735 46.4938 41.1396 45.9187 41.4818 45.2691C41.8239 44.6195 42.0354 43.9081 42.1041 43.1758L42.2787 41.8428L43.4262 42.5471C44.8699 43.4675 46.5825 43.8622 48.2794 43.6655C49.9764 43.4687 51.5556 42.6924 52.7546 41.4655C53.5404 40.6232 54.0906 39.5858 54.3491 38.4591C54.6076 37.3324 54.5651 36.1567 54.2261 35.0519C53.889 33.8288 53.2572 32.7088 52.3868 31.7916C51.5164 30.8745 50.4345 30.1886 49.2376 29.7952H48.8636L48.689 29.4431C47.7553 27.7119 46.2311 26.3806 44.3988 25.6955C43.4176 25.4356 42.3943 25.3796 41.3909 25.531C40.3876 25.6823 39.4252 26.0378 38.5624 26.5758L37.7892 27.0034L37.39 26.2237C36.4955 24.5841 35.0289 23.3381 33.2746 22.7277C32.3727 22.5491 31.4433 22.5666 30.5486 22.7792C29.654 22.9917 28.8146 23.3943 28.0865 23.9601L27.3383 24.4631L26.8893 23.7086C26.3461 22.7929 25.6282 21.995 24.7772 21.3608C23.9263 20.7267 22.9591 20.2689 21.9316 20.014C20.9041 19.759 19.8368 19.712 18.7911 19.8756C17.7455 20.0392 16.7424 20.4102 15.8398 20.9671C14.9738 21.4158 14.2097 22.0409 13.5958 22.8029C12.9818 23.5649 12.5314 24.4471 12.2731 25.3937C11.896 27.7408 12.3555 30.1467 13.57 32.1846L13.8693 32.6374L13.57 33.0901C13.3705 33.4422 8.33215 41.868 15.2163 46.6468C16.0149 47.2667 16.934 47.7103 17.9138 47.9486C18.8936 48.187 19.912 48.2147 20.9031 48.0301C23.3925 47.2201 25.5089 45.5324 26.8644 43.2765L27.7123 41.8428Z"
          fill={svgColor}
        />
      </svg>
    ),
    title: "Soft as a cloud",
    description:
      "Feathery alpaca wool is one of the softest natural materials.",
  },
  {
    svg: (
      <svg
        width={34}
        height={55}
        viewBox="0 0 34 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[4rem] h-[5rem] relative"
        preserveAspectRatio="none"
      >
        <path
          d="M17.5226 20.866V20.7396L17.0233 20.7389C13.8646 20.7341 10.7774 21.7052 8.15221 23.5268C5.5273 25.3483 3.48307 27.9375 2.27532 30.9645C1.06762 33.9914 0.749576 37.3222 1.36057 40.5363C1.97157 43.7505 3.4848 46.7064 5.7118 49.029C7.93901 51.3517 10.7804 52.9368 13.8774 53.5801C16.9746 54.2235 20.1852 53.8956 23.1021 52.6386C26.0187 51.3818 28.5086 49.2538 30.2589 46.5269C32.0092 43.8002 32.9422 40.5962 32.9422 37.3201L32.9422 37.3159C32.9055 32.952 31.2183 28.7752 28.2407 25.6926C25.3802 22.7312 21.5498 21.0088 17.5226 20.866ZM17.0219 54.5C13.7613 54.5045 10.5709 53.5016 7.85459 51.6156C5.138 49.7294 3.01687 47.044 1.76286 43.8972C0.508797 40.7502 0.179236 37.2854 0.816705 33.9422C1.45416 30.5991 3.02944 27.5308 5.33994 25.1247C7.65023 22.7188 10.5915 21.0833 13.7903 20.4218C16.9889 19.7604 20.3043 20.1019 23.3177 21.4042C26.3313 22.7066 28.9094 24.9123 30.7232 27.7454C32.5372 30.5786 33.5043 33.9106 33.5 37.3195C33.4942 41.8806 31.7515 46.2493 28.6601 49.4685C25.5694 52.6871 21.3837 54.494 17.0219 54.5Z"
          fill={svgColor}
          stroke={svgColor}
        />
        <path
          d="M13.5233 38.3842H13.5477L13.5721 38.3818C14.5199 38.2889 15.3496 38.1496 15.9201 37.7634C16.2243 37.5575 16.4547 37.2832 16.5927 36.928C16.727 36.5824 16.7627 36.1892 16.7312 35.7555L16.7312 35.7555L16.7307 35.7499C16.6705 35.0324 16.3692 34.3565 15.8752 33.842C15.3808 33.3272 14.7245 33.0069 14.0202 32.9428L13.9976 32.9407H13.9749H2.0127V32.3185H14.0247C14.8742 32.3815 15.6767 32.7655 16.2795 33.4047C16.8868 34.0486 17.2485 34.9061 17.2908 35.815L17.2906 35.815L17.2916 35.8279C17.3481 36.6098 17.2137 37.1733 16.9928 37.5863C16.7719 37.9991 16.4455 38.297 16.0606 38.5168C15.2774 38.9643 14.3032 39.0639 13.6363 39.124H13.1621H13.131L13.1002 39.1278C12.7313 39.1739 12.3759 39.2965 12.0552 39.4874C11.7344 39.6782 11.4552 39.9333 11.233 40.2364C11.0109 40.5395 10.8501 40.8848 10.7594 41.2518C10.6714 41.6074 10.6507 41.9772 10.6982 42.3407C10.7046 42.6873 10.8053 43.3298 11.3531 43.893C11.9242 44.4802 12.8987 44.8966 14.4941 44.8966H14.518L14.5419 44.8943C14.8534 44.8644 15.1677 44.9016 15.4656 45.0039C15.7635 45.1062 16.0395 45.2718 16.2757 45.4915L16.2888 45.5038L16.3028 45.515C16.6367 45.7837 16.9353 46.3528 17.1136 47.7514C17.2797 49.054 17.3301 50.9621 17.2969 53.7711H16.7324C16.7318 52.0571 16.7244 50.3888 16.6383 49.0318C16.5912 48.288 16.5195 47.6204 16.4077 47.0812C16.3018 46.5702 16.1414 46.0721 15.8481 45.7666C15.5617 45.4684 15.1725 45.3778 14.4941 45.3778C12.6859 45.3778 11.6568 44.8628 11.0604 44.2664C10.4557 43.6617 10.2306 42.908 10.1594 42.317C10.0564 41.3961 10.3001 40.4715 10.8352 39.7375C11.3623 39.0145 12.13 38.5334 12.9784 38.3842H13.5233Z"
          fill={svgColor}
          stroke={svgColor}
        />
        <path
          d="M26.4039 45.4515L26.3716 45.4478L26.3391 45.4483C25.3353 45.4632 24.3546 45.1184 23.5616 44.4678C23.2414 44.1649 22.9839 43.7948 22.8066 43.3803C22.6273 42.9609 22.5344 42.5061 22.5345 42.0456L22.5345 42.0364L22.5342 42.0272C22.5154 41.5133 22.5957 41.0011 22.77 40.521C22.9444 40.0409 23.2089 39.6035 23.547 39.234C23.885 38.8645 24.2897 38.5706 24.7363 38.3685C25.1822 38.1668 25.6615 38.0604 26.1461 38.0549H32.6872V38.6772H26.2563C25.9827 38.6772 25.1872 38.7975 24.4618 39.2574C23.7036 39.7382 23.0197 40.5977 23.092 42.0073C23.0865 42.3805 23.1556 42.7514 23.2957 43.0966C23.4382 43.4479 23.6513 43.7653 23.9219 44.0271L23.9435 44.0479L23.9674 44.0661C24.7138 44.6321 25.6299 44.9104 26.5568 44.8486L31.0616 44.6172V45.2382L26.5657 45.4702L26.4039 45.4515Z"
          fill={svgColor}
          stroke={svgColor}
        />
        <path
          d="M16.7324 10.8771H17.2902V19.9396H16.7324V10.8771Z"
          fill={svgColor}
          stroke={svgColor}
        />
        <path
          d="M17.1322 16.3014V16.4597H17H16.9852L16.9705 16.4605L15.7752 16.531C15.7749 16.531 15.7747 16.531 15.7745 16.531C14.2887 16.6153 12.8018 16.3779 11.4074 15.8334C10.0203 15.2917 8.75392 14.4574 7.688 13.3815C5.35093 10.4827 4.19455 6.74181 4.47219 2.96048L4.47353 2.9422V2.92387V2.71855H4.65079H4.68659L4.72204 2.71344C6.48092 2.46023 8.27227 2.63072 9.95867 3.21222C11.6353 3.79034 13.1649 4.75981 14.4302 6.04823C15.499 7.47216 16.2891 9.10246 16.7543 10.8464C17.2222 12.6008 17.3519 14.4347 17.1357 16.242L17.1322 16.2716V16.3014ZM8.03058 12.9226L8.04987 12.9467L8.07197 12.9682C9.15575 14.0247 10.4433 14.8315 11.8506 15.3342C13.258 15.837 14.7523 16.0239 16.2348 15.8822L16.6526 15.8423L16.6857 15.4238C16.9394 12.2122 16.0184 9.01695 14.103 6.47845L14.0827 6.45142L14.0588 6.42739C12.9274 5.28739 11.5714 4.41426 10.083 3.86922C8.59461 3.32416 7.00993 3.12046 5.43795 3.27256L5.4861 3.77023L4.98629 3.75635C4.89363 7.09326 5.97475 10.3531 8.03058 12.9226Z"
          fill={svgColor}
          stroke={svgColor}
        />
        <path
          d="M31.381 0.62659H31.5584V0.831896V0.849786L31.5597 0.86763C31.8731 5.24248 30.54 9.56962 27.8478 12.9344C26.5975 14.1756 25.1165 15.1349 23.4976 15.7536C21.8702 16.3755 20.1377 16.6402 18.4085 16.5317L18.3772 17.0307V16.5307H17.0677H16.9355V16.3724V16.3421L16.9318 16.3121C16.6777 14.2198 16.8239 12.096 17.3617 10.0632C17.8966 8.04148 18.8081 6.15049 20.0434 4.49776C21.5186 3.0118 23.295 1.8923 25.24 1.22104C27.1954 0.546199 29.2715 0.34152 31.3129 0.621939L31.3468 0.62659H31.381ZM27.395 12.4754L27.4175 12.4535L27.437 12.4291C29.8588 9.39818 31.1254 5.55003 31.0004 1.61539L30.9865 1.17991L30.5532 1.13404C28.7034 0.938224 26.835 1.16592 25.0794 1.80073C23.3238 2.43552 21.7245 3.46168 20.3925 4.80592L20.3696 4.829L20.3499 4.85485C18.0713 7.84589 16.9933 11.635 17.3372 15.4301L17.8352 15.3849L17.786 15.8825C19.5295 16.0549 21.2881 15.8398 22.9449 15.252C24.6018 14.6642 26.1183 13.7173 27.395 12.4754Z"
          fill={svgColor}
          stroke={svgColor}
        />
        <path
          d="M23.2278 32.3592C23.2278 32.7386 22.9375 33.0112 22.6216 33.0112C22.3057 33.0112 22.0154 32.7386 22.0154 32.3592C22.0154 31.9798 22.3057 31.7072 22.6216 31.7072C22.9375 31.7072 23.2278 31.9798 23.2278 32.3592Z"
          fill={svgColor}
          stroke={svgColor}
        />
      </svg>
    ),
    title: "Sustainable",
    description: "Wool is renewable & kind to the planet .",
  },
];
function Features({}: Props) {
  return (
    <div className="py-16">
      <div className=" m-auto px-6 text-gray-500 md:px-12  !w-full">
        <div>
          <h2 className="mt-4 text-2xl font-bold text-gray-700  md:text-4xl text-center">
            Sabemos que amas las
            <br className="lg:block" />
            alpacas
          </h2>
        </div>
        <div className="mt-16  divide-x divide-y divide-gray-100  overflow-hidden rounded-3xl md:border flex justify-center items-center">
          <Carousel features={FeaturedData} />
        </div>
      </div>
    </div>
  );
}

export default Features;
