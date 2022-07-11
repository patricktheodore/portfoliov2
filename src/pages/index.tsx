import * as React from "react";
import "../styles/styles.css";
import { gsap } from "gsap";

const IndexPage = () => {
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

  React.useEffect(() => {
    tl.from(".nav", { opacity: 0 });
  });

  return (
    <main>
      <div className="nav">
        <a href="/">
          <svg
            width="435"
            height="155"
            viewBox="0 0 435 155"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <path d="M10.5043 98.4545V23.4545H27.6918V32.794H28.2244C28.9347 31.1368 29.9408 29.5388 31.2429 28C32.5687 26.4612 34.2495 25.2064 36.2855 24.2358C38.3452 23.2415 40.8073 22.7443 43.6719 22.7443C47.4598 22.7443 50.9991 23.7386 54.2898 25.7273C57.6042 27.7159 60.2794 30.7817 62.3153 34.9247C64.3513 39.0677 65.3693 44.3471 65.3693 50.7628C65.3693 56.9418 64.3868 62.1146 62.4219 66.2812C60.4806 70.4479 57.8527 73.5729 54.5384 75.6562C51.2476 77.7396 47.59 78.7812 43.5653 78.7812C40.8191 78.7812 38.4399 78.3314 36.4276 77.4318C34.4152 76.5322 32.7225 75.3485 31.3494 73.8807C30 72.4129 28.9583 70.8385 28.2244 69.1577H27.8693V98.4545H10.5043ZM27.5142 50.7273C27.5142 53.6629 27.9048 56.2197 28.6861 58.3977C29.491 60.5758 30.6392 62.2685 32.1307 63.4759C33.6458 64.6596 35.4569 65.2514 37.5639 65.2514C39.6946 65.2514 41.5057 64.6596 42.9972 63.4759C44.4886 62.2685 45.6132 60.5758 46.3707 58.3977C47.152 56.2197 47.5426 53.6629 47.5426 50.7273C47.5426 47.7917 47.152 45.2467 46.3707 43.0923C45.6132 40.938 44.4886 39.2689 42.9972 38.0852C41.5294 36.9015 39.7183 36.3097 37.5639 36.3097C35.4332 36.3097 33.6222 36.8897 32.1307 38.0497C30.6392 39.2098 29.491 40.867 28.6861 43.0213C27.9048 45.1757 27.5142 47.7443 27.5142 50.7273ZM84.8455 78.9233C81.3654 78.9233 78.2759 78.3433 75.5771 77.1832C72.9019 75.9995 70.783 74.224 69.2205 71.8565C67.6817 69.4654 66.9123 66.4706 66.9123 62.8722C66.9123 59.8419 67.445 57.285 68.5103 55.2017C69.5756 53.1184 71.0434 51.4257 72.9137 50.1236C74.784 48.8215 76.9383 47.839 79.3768 47.1761C81.8152 46.4896 84.4194 46.0279 87.1893 45.7912C90.2906 45.5071 92.7882 45.2112 94.6822 44.9034C96.5761 44.572 97.9492 44.1103 98.8015 43.5185C99.6774 42.9029 100.115 42.0388 100.115 40.9261V40.7486C100.115 38.9257 99.488 37.517 98.2333 36.5227C96.9786 35.5284 95.2859 35.0312 93.1552 35.0312C90.8588 35.0312 89.0122 35.5284 87.6154 36.5227C86.2186 37.517 85.3308 38.8902 84.9521 40.642L68.9364 40.0739C69.4099 36.7595 70.6291 33.8002 72.5941 31.196C74.5827 28.5682 77.3053 26.5085 80.7617 25.017C84.2418 23.5019 88.4203 22.7443 93.2972 22.7443C96.7773 22.7443 99.9852 23.1586 102.921 23.9872C105.856 24.7921 108.413 25.9759 110.591 27.5384C112.769 29.0772 114.45 30.9711 115.634 33.2202C116.841 35.4692 117.445 38.0379 117.445 40.9261V78H101.11V70.4006H100.684C99.7129 72.2472 98.4701 73.8097 96.9549 75.0881C95.4634 76.3665 93.6997 77.3253 91.6637 77.9645C89.6514 78.6037 87.3787 78.9233 84.8455 78.9233ZM90.2077 67.5597C92.078 67.5597 93.7589 67.1809 95.2504 66.4233C96.7655 65.6657 97.9729 64.6241 98.8725 63.2983C99.7721 61.9489 100.222 60.3864 100.222 58.6108V53.4261C99.7248 53.6866 99.1211 53.9233 98.4109 54.1364C97.7243 54.3494 96.9667 54.5507 96.1381 54.7401C95.3095 54.9295 94.4573 55.0952 93.5813 55.2372C92.7054 55.3793 91.8649 55.5095 91.06 55.6278C89.4265 55.8883 88.0297 56.2907 86.8697 56.8352C85.7333 57.3797 84.8574 58.09 84.2418 58.9659C83.65 59.8182 83.354 60.8362 83.354 62.0199C83.354 63.8191 83.9933 65.1922 85.2717 66.1392C86.5737 67.0862 88.2191 67.5597 90.2077 67.5597ZM153.851 23.4545V36.2386H119.441V23.4545H153.851ZM126.65 10.3864H144.015V60.848C144.015 61.9134 144.18 62.7775 144.512 63.4403C144.867 64.0795 145.376 64.5412 146.039 64.8253C146.702 65.0857 147.495 65.2159 148.418 65.2159C149.081 65.2159 149.779 65.1567 150.513 65.0384C151.271 64.8963 151.839 64.7779 152.218 64.6832L154.846 77.2188C154.017 77.4555 152.845 77.7514 151.33 78.1065C149.838 78.4616 148.051 78.6866 145.968 78.7812C141.896 78.9706 138.404 78.4972 135.492 77.3608C132.604 76.2008 130.39 74.4015 128.851 71.9631C127.336 69.5246 126.602 66.4588 126.65 62.7656V10.3864ZM157.711 78V23.4545H174.579V33.3977H175.147C176.142 29.7992 177.763 27.1241 180.012 25.3722C182.261 23.5966 184.877 22.7088 187.86 22.7088C188.665 22.7088 189.494 22.768 190.346 22.8864C191.199 22.9811 191.992 23.1349 192.725 23.348V38.4403C191.897 38.1562 190.808 37.9313 189.458 37.7656C188.133 37.5999 186.949 37.517 185.907 37.517C183.848 37.517 181.989 37.9787 180.332 38.902C178.699 39.8016 177.408 41.0682 176.461 42.7017C175.538 44.3116 175.076 46.2055 175.076 48.3835V78H157.711ZM194.801 78V23.4545H212.166V78H194.801ZM203.501 17.098C201.063 17.098 198.968 16.2931 197.216 14.6832C195.464 13.0497 194.588 11.0848 194.588 8.78835C194.588 6.51562 195.464 4.57433 197.216 2.96449C198.968 1.33096 201.063 0.5142 203.501 0.5142C205.964 0.5142 208.059 1.33096 209.787 2.96449C211.539 4.57433 212.415 6.51562 212.415 8.78835C212.415 11.0848 211.539 13.0497 209.787 14.6832C208.059 16.2931 205.964 17.098 203.501 17.098ZM243.681 79.0298C237.928 79.0298 232.992 77.8461 228.873 75.4787C224.777 73.1113 221.628 69.8205 219.426 65.6065C217.225 61.3688 216.124 56.4683 216.124 50.9048C216.124 45.3177 217.225 40.4171 219.426 36.2031C221.652 31.9654 224.812 28.6629 228.908 26.2955C233.027 23.928 237.94 22.7443 243.645 22.7443C248.688 22.7443 253.079 23.6558 256.82 25.4787C260.584 27.3016 263.52 29.8821 265.627 33.2202C267.757 36.5346 268.882 40.429 269 44.9034H252.772C252.44 42.1098 251.493 39.92 249.931 38.3338C248.392 36.7476 246.38 35.9545 243.894 35.9545C241.882 35.9545 240.118 36.5227 238.603 37.6591C237.087 38.7718 235.904 40.429 235.051 42.6307C234.223 44.8087 233.809 47.5076 233.809 50.7273C233.809 53.947 234.223 56.6695 235.051 58.8949C235.904 61.0966 237.087 62.7656 238.603 63.902C240.118 65.0147 241.882 65.571 243.894 65.571C245.504 65.571 246.924 65.2277 248.155 64.5412C249.41 63.8546 250.44 62.8485 251.245 61.5227C252.05 60.1733 252.559 58.5398 252.772 56.6222H269C268.835 61.1203 267.71 65.0502 265.627 68.4119C263.567 71.7737 260.667 74.3897 256.926 76.2599C253.21 78.1065 248.794 79.0298 243.681 79.0298ZM288.548 63.6889L288.619 42.9858H291.033L306.374 23.4545H326.048L303.249 51.4375H298.668L288.548 63.6889ZM272.887 78V5.27273H290.252V78H272.887ZM306.765 78L292.489 55.3438L303.924 43.0213L326.829 78H306.765Z" />
            <path d="M38.2926 98.4545V111.239H3.8821V98.4545H38.2926ZM11.0909 85.3864H28.456V135.848C28.456 136.913 28.6217 137.777 28.9531 138.44C29.3082 139.08 29.8172 139.541 30.4801 139.825C31.143 140.086 31.9361 140.216 32.8594 140.216C33.5223 140.216 34.2206 140.157 34.9545 140.038C35.7121 139.896 36.2803 139.778 36.6591 139.683L39.2869 152.219C38.4583 152.455 37.2865 152.751 35.7713 153.107C34.2798 153.462 32.4924 153.687 30.4091 153.781C26.3371 153.971 22.8452 153.497 19.9332 152.361C17.045 151.201 14.8314 149.402 13.2926 146.963C11.7775 144.525 11.0436 141.459 11.0909 137.766V85.3864ZM60.6896 121.892V153H43.3246V80.2727H60.1214V108.469H60.7251C61.9562 105.107 63.9685 102.479 66.7621 100.585C69.5793 98.6913 73.0239 97.7443 77.0959 97.7443C80.9311 97.7443 84.2692 98.5966 87.1101 100.301C89.951 101.982 92.1527 104.361 93.7152 107.439C95.3014 110.517 96.0826 114.115 96.0589 118.234V153H78.6939V121.643C78.7176 118.613 77.96 116.246 76.4212 114.541C74.8823 112.837 72.7161 111.984 69.9226 111.984C68.0997 111.984 66.4898 112.387 65.093 113.192C63.7199 113.973 62.6428 115.098 61.8615 116.565C61.1039 118.033 60.7133 119.809 60.6896 121.892ZM127.396 154.03C121.69 154.03 116.766 152.905 112.623 150.656C108.504 148.384 105.332 145.152 103.106 140.962C100.904 136.748 99.8036 131.741 99.8036 125.94C99.8036 120.306 100.916 115.382 103.142 111.168C105.367 106.93 108.504 103.639 112.552 101.295C116.6 98.928 121.371 97.7443 126.863 97.7443C130.746 97.7443 134.297 98.348 137.517 99.5554C140.736 100.763 143.518 102.55 145.862 104.918C148.206 107.285 150.029 110.209 151.331 113.689C152.633 117.145 153.284 121.111 153.284 125.585V129.918H105.876V119.832H137.126C137.102 117.986 136.664 116.34 135.812 114.896C134.96 113.452 133.788 112.328 132.297 111.523C130.829 110.694 129.136 110.28 127.218 110.28C125.277 110.28 123.537 110.718 121.998 111.594C120.459 112.446 119.24 113.618 118.341 115.109C117.441 116.577 116.967 118.246 116.92 120.116V130.379C116.92 132.605 117.358 134.558 118.234 136.239C119.11 137.896 120.353 139.186 121.963 140.109C123.573 141.033 125.49 141.494 127.716 141.494C129.254 141.494 130.651 141.281 131.906 140.855C133.161 140.429 134.238 139.802 135.137 138.973C136.037 138.144 136.712 137.126 137.162 135.919L153.106 136.381C152.443 139.955 150.987 143.069 148.738 145.72C146.513 148.348 143.589 150.396 139.967 151.864C136.345 153.308 132.154 154.03 127.396 154.03ZM182.614 154.03C176.885 154.03 171.961 152.858 167.842 150.514C163.746 148.147 160.585 144.856 158.36 140.642C156.158 136.404 155.058 131.492 155.058 125.905C155.058 120.294 156.158 115.382 158.36 111.168C160.585 106.93 163.746 103.639 167.842 101.295C171.961 98.928 176.885 97.7443 182.614 97.7443C188.344 97.7443 193.256 98.928 197.352 101.295C201.471 103.639 204.631 106.93 206.833 111.168C209.058 115.382 210.171 120.294 210.171 125.905C210.171 131.492 209.058 136.404 206.833 140.642C204.631 144.856 201.471 148.147 197.352 150.514C193.256 152.858 188.344 154.03 182.614 154.03ZM182.721 140.926C184.804 140.926 186.568 140.287 188.012 139.009C189.456 137.73 190.557 135.955 191.315 133.682C192.096 131.409 192.487 128.781 192.487 125.798C192.487 122.768 192.096 120.116 191.315 117.844C190.557 115.571 189.456 113.795 188.012 112.517C186.568 111.239 184.804 110.599 182.721 110.599C180.567 110.599 178.744 111.239 177.252 112.517C175.784 113.795 174.66 115.571 173.879 117.844C173.121 120.116 172.742 122.768 172.742 125.798C172.742 128.781 173.121 131.409 173.879 133.682C174.66 135.955 175.784 137.73 177.252 139.009C178.744 140.287 180.567 140.926 182.721 140.926ZM233.989 153.781C229.964 153.781 226.306 152.74 223.016 150.656C219.725 148.573 217.097 145.448 215.132 141.281C213.167 137.115 212.185 131.942 212.185 125.763C212.185 119.347 213.203 114.068 215.239 109.925C217.275 105.782 219.938 102.716 223.229 100.727C226.543 98.7386 230.106 97.7443 233.918 97.7443C236.782 97.7443 239.232 98.2415 241.268 99.2358C243.304 100.206 244.985 101.461 246.311 103C247.637 104.539 248.643 106.137 249.33 107.794H249.685V80.2727H267.05V153H249.862V144.158H249.33C248.596 145.839 247.554 147.413 246.205 148.881C244.855 150.348 243.162 151.532 241.126 152.432C239.114 153.331 236.735 153.781 233.989 153.781ZM240.026 140.251C242.133 140.251 243.932 139.66 245.423 138.476C246.915 137.268 248.063 135.576 248.868 133.398C249.673 131.22 250.075 128.663 250.075 125.727C250.075 122.744 249.673 120.176 248.868 118.021C248.087 115.867 246.938 114.21 245.423 113.05C243.932 111.89 242.133 111.31 240.026 111.31C237.871 111.31 236.048 111.902 234.557 113.085C233.065 114.269 231.929 115.938 231.148 118.092C230.39 120.247 230.011 122.792 230.011 125.727C230.011 128.663 230.402 131.22 231.183 133.398C231.964 135.576 233.089 137.268 234.557 138.476C236.048 139.66 237.871 140.251 240.026 140.251ZM298.493 154.03C292.764 154.03 287.84 152.858 283.721 150.514C279.625 148.147 276.464 144.856 274.239 140.642C272.037 136.404 270.936 131.492 270.936 125.905C270.936 120.294 272.037 115.382 274.239 111.168C276.464 106.93 279.625 103.639 283.721 101.295C287.84 98.928 292.764 97.7443 298.493 97.7443C304.222 97.7443 309.135 98.928 313.23 101.295C317.35 103.639 320.51 106.93 322.712 111.168C324.937 115.382 326.05 120.294 326.05 125.905C326.05 131.492 324.937 136.404 322.712 140.642C320.51 144.856 317.35 148.147 313.23 150.514C309.135 152.858 304.222 154.03 298.493 154.03ZM298.6 140.926C300.683 140.926 302.447 140.287 303.891 139.009C305.335 137.73 306.436 135.955 307.194 133.682C307.975 131.409 308.365 128.781 308.365 125.798C308.365 122.768 307.975 120.116 307.194 117.844C306.436 115.571 305.335 113.795 303.891 112.517C302.447 111.239 300.683 110.599 298.6 110.599C296.445 110.599 294.623 111.239 293.131 112.517C291.663 113.795 290.539 115.571 289.757 117.844C289 120.116 288.621 122.768 288.621 125.798C288.621 128.781 289 131.409 289.757 133.682C290.539 135.955 291.663 137.73 293.131 139.009C294.623 140.287 296.445 140.926 298.6 140.926ZM329.946 153V98.4545H346.814V108.398H347.382C348.376 104.799 349.998 102.124 352.247 100.372C354.496 98.5966 357.112 97.7088 360.095 97.7088C360.9 97.7088 361.728 97.768 362.581 97.8864C363.433 97.9811 364.226 98.1349 364.96 98.348V113.44C364.131 113.156 363.042 112.931 361.693 112.766C360.367 112.6 359.183 112.517 358.142 112.517C356.082 112.517 354.224 112.979 352.566 113.902C350.933 114.802 349.643 116.068 348.696 117.702C347.772 119.312 347.311 121.205 347.311 123.384V153H329.946ZM389.701 154.03C383.995 154.03 379.071 152.905 374.928 150.656C370.809 148.384 367.636 145.152 365.411 140.962C363.209 136.748 362.108 131.741 362.108 125.94C362.108 120.306 363.221 115.382 365.446 111.168C367.672 106.93 370.809 103.639 374.857 101.295C378.905 98.928 383.676 97.7443 389.168 97.7443C393.051 97.7443 396.602 98.348 399.821 99.5554C403.041 100.763 405.823 102.55 408.167 104.918C410.51 107.285 412.333 110.209 413.635 113.689C414.937 117.145 415.588 121.111 415.588 125.585V129.918H368.181V119.832H399.431C399.407 117.986 398.969 116.34 398.117 114.896C397.265 113.452 396.093 112.328 394.601 111.523C393.133 110.694 391.441 110.28 389.523 110.28C387.582 110.28 385.842 110.718 384.303 111.594C382.764 112.446 381.545 113.618 380.645 115.109C379.746 116.577 379.272 118.246 379.225 120.116V130.379C379.225 132.605 379.663 134.558 380.539 136.239C381.415 137.896 382.658 139.186 384.267 140.109C385.877 141.033 387.795 141.494 390.02 141.494C391.559 141.494 392.956 141.281 394.211 140.855C395.465 140.429 396.542 139.802 397.442 138.973C398.342 138.144 399.016 137.126 399.466 135.919L415.411 136.381C414.748 139.955 413.292 143.069 411.043 145.72C408.818 148.348 405.894 150.396 402.272 151.864C398.65 153.308 394.459 154.03 389.701 154.03Z" />
            <path d="M28.5 100L28.5 68.5" strokeWidth="2" />
          </svg>
        </a>
        <ul className="nav-list">
          <li className="nav-item">Work</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Shhhh</li>
        </ul>
      </div>
    </main>
  );
};

export default IndexPage;
