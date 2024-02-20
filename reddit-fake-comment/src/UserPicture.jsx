export default function UserPicture() {
  const colorlist = [
    "ff99aa",
    "ffb470",
    "ffd635",
    "7eed56",
    "00f4cb",
    "51e9f4",
    "94b3ff",
    "e4abff",
  ];

  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 rounded-full"
    >
      <g>
        <path
          d="M320 0H0V320H320V0Z"
          fill={`#${colorlist[Math.floor(Math.random() * colorlist.length)]}`}
        />
        <path
          d="M266.6 161.4C266.6 163.6 266.4 165.8 265.8 167.9C265.2 170 264.4 172 263.2 173.9C262.1 175.8 260.7 177.5 259 179C257.4 180.5 255.6 181.7 253.6 182.7C253.6 183.3 253.7 183.9 253.7 184.5C253.7 185.7 253.7 186.8 253.7 188C253.7 188.6 253.6 189.2 253.6 189.8C253.6 225.6 211.8 254.8 160.3 254.8C108.8 254.8 67 225.6 67 189.7C67 189.1 66.9 188.5 66.9 187.9C66.9 186.7 66.9 185.6 66.9 184.4C66.9 183.8 67 183.2 67 182.6C60.8 179.7 56.1 174.3 54.3 167.7C52.4 161.1 53.6 154 57.4 148.3C61.2 142.6 67.4 138.9 74.2 138.1C81 137.3 87.8 139.6 92.8 144.3C97.4 141.2 102.2 138.4 107.2 136C112.2 133.6 117.3 131.5 122.6 129.9C127.9 128.3 133.3 127 138.7 126.1C144.2 125.2 149.7 124.7 155.2 124.6L167 69.3C167.1 68.7 167.4 68 167.8 67.5C168.2 67 168.6 66.5 169.2 66.1C169.8 65.7 170.4 65.5 171 65.4C171.6 65.3 172.3 65.3 172.9 65.4L212.1 73.2C216.1 66.4 224.4 63.5 231.7 66.3C239 69.1 243.2 76.9 241.6 84.6C240 92.3 233 97.6 225.1 97.2C217.2 96.8 210.9 90.7 210 82.9L175.8 75.7L165.4 125.6C170.9 125.7 176.3 126.2 181.7 127.1C192.5 128.9 203 132.2 212.8 137C217.7 139.4 222.5 142.1 227 145.2C230.3 142.1 234.3 140 238.8 139.1C243.2 138.2 247.8 138.7 252 140.4C256.2 142.1 259.8 145 262.4 148.6C264.9 152.6 266.4 156.9 266.6 161.4ZM107.8 183.5C108.6 185.4 109.8 187.2 111.3 188.7C112.8 190.2 114.5 191.4 116.5 192.2C118.4 193 120.5 193.4 122.6 193.4C129.1 193.4 134.9 189.5 137.4 183.5C139.9 177.5 138.5 170.6 133.9 166.1C129.3 161.5 122.4 160.2 116.5 162.6C110.5 165.1 106.6 170.9 106.6 177.4C106.6 179.5 107 181.6 107.8 183.5ZM199.4 221.9C200.2 221.1 200.7 220 200.7 218.9C200.7 217.8 200.3 216.6 199.5 215.8C198.7 215 197.6 214.5 196.5 214.5C195.4 214.5 194.2 214.9 193.3 215.6C190.9 217.3 188.3 218.8 185.7 220.1C183 221.4 180.3 222.5 177.4 223.3C174.6 224.1 171.7 224.7 168.7 225.1C165.8 225.4 162.8 225.5 159.8 225.4C156.8 225.5 153.9 225.4 151 225C148.1 224.6 145.2 224 142.3 223.2C139.5 222.3 136.7 221.2 134.1 219.9C131.5 218.6 128.9 217 126.5 215.3C125.7 214.6 124.6 214.3 123.5 214.3C122.4 214.3 121.4 214.8 120.7 215.6C119.9 216.4 119.5 217.4 119.4 218.4C119.3 219.5 119.7 220.5 120.4 221.4C123.2 223.5 126.2 225.4 129.3 227C132.4 228.6 135.7 229.9 139.1 231C142.5 232 145.9 232.8 149.4 233.3C152.9 233.8 156.4 233.9 159.9 233.8C163.4 233.9 166.9 233.8 170.4 233.3C177.4 232.4 184.2 230.3 190.5 227C193.6 225.4 196.6 223.5 199.4 221.4V221.9ZM196.5 194.7C198.7 194.7 200.8 194.3 202.8 193.5C204.8 192.7 206.6 191.4 208.1 189.9C209.6 188.3 210.8 186.5 211.6 184.5C212.4 182.5 212.7 180.3 212.6 178.1C212.6 171.6 208.7 165.8 202.7 163.3C196.7 160.8 189.8 162.2 185.3 166.8C180.7 171.4 179.4 178.3 181.8 184.2C184.3 190.2 190.1 194.1 196.6 194.1L196.5 194.7Z"
          fill="white"
        />
        <path
          d="M208 206.7H207.8V206.9H207.6V207.1H207.4V207.3H207.2V207.5H206.6V207.3L206.8 207.1V206.7H207V206.5H207.2V206.3L207.6 205.9V205.7C207.6 205.7 207.8 205.6 208.2 205.3C208.4 204.9 209.1 204.5 210 204C211 203.5 212 203.3 213.1 203.3C214.3 203.3 215.3 203.5 216.1 203.9C217 204.3 217.9 204.8 218.9 205.6C219.8 206.3 220.6 207.3 221.5 208.4C222.4 209.5 223 210.7 223.3 211.9C223.7 213.3 223.9 214.6 223.9 216C223.9 217.5 223.7 218.8 223.3 220.1C222.9 221.5 222.3 222.8 221.3 224.2C220.6 225.6 219.7 226.7 218.7 227.5C217.7 228.4 216.4 229.2 214.8 230.1C213.2 231.1 211.3 231.8 209.3 232.3C207.2 233 204.9 233.5 202.5 233.8C200.2 234 197.4 234 194.4 233.8C191.2 233.8 187.9 233.4 184.4 232.7C180.9 232 177.7 231.1 174.8 230.1C171.8 229.1 169.3 228 167 226.8C164.9 225.6 163.3 224.5 162.2 223.5C161 222.5 160.2 222 160 221.8C159.8 221.7 159.4 221.8 158.9 222.2C158.5 222.6 157.5 223.4 155.9 224.6C154.3 225.8 152.4 226.9 150.2 227.9C148 228.9 145.3 229.9 142.3 230.9C139.3 231.9 136 232.7 132.3 233.3C128.6 233.9 125.5 234.3 123.1 234.4C120.8 234.5 119 234.5 117.9 234.2C116.8 234.2 115.1 233.9 112.7 233.3C110.2 232.7 108.1 232 106.4 231.3C104.8 230.6 103.4 229.8 102.3 229.1C101.2 228.1 100.2 227.1 99.3 226C98.3 224.8 97.6 223.4 97.1 221.9C96.6 220.4 96.3 218.9 96.2 217.3C96.1 215.8 96.1 214.6 96.4 213.6C96.6 212.7 97 211.7 97.5 210.5C98.2 209.3 98.8 208.5 99.2 208.1C99.7 207.6 99.9 207.3 99.9 207.2C99.9 207.1 100 207 100.3 206.8C100.6 206.6 101.2 206.3 102.3 205.7C103.4 205.1 104.6 204.8 106 204.8C107.5 204.8 108.7 205 109.7 205.4L111.2 206V206.2H111.4V206.4H111.6L112 206.8H112.2V207H112.4V207.4H112L111.4 207.2H111V207H110.8V206.8H110C109.6 206.6 109 206.5 108 206.6C107 206.7 106.2 207 105.4 207.5C104.8 208.1 104.2 208.9 103.7 209.7C103.2 210.6 103 211.8 103 213.4C103 215.1 103.2 216.3 103.7 216.9C104.1 217.5 104.6 218 105.2 218.4C105.8 218.8 106.7 219 107.8 219C109 219 110.5 218.6 112.2 217.9C114 217.2 116.4 216 119.2 214.4C122.2 212.8 125.1 211.1 127.9 209.4C130.9 207.7 133.4 206.3 135.5 205.3C137.7 204.3 139.6 203.7 141 203.5C142.6 203 144.4 202.8 146.4 202.9C148.4 203 150.3 203.3 152.1 203.8C153.9 204.5 155.6 205.3 156.9 206.2C158.4 207.1 159.2 207.6 159.3 207.7C159.4 207.8 160.2 207.4 161.5 206.4C162.9 205.4 164.5 204.7 166.3 204.2C168.1 203.5 169.5 203.1 170.4 203.1C171.3 202.9 172.8 202.8 175 202.9C177.2 203 179.2 203.3 180.9 203.6C182.5 204 184.5 204.8 186.8 206C189.1 207.2 192.5 209.3 197 212.3C201.4 215.3 204.5 217 206.1 217.5C207.6 218.2 209 218.6 210.4 218.6C211.8 218.6 212.9 218.4 213.9 217.9C214.9 217.4 215.6 216.9 216.1 216.4C216.6 215.8 216.8 214.7 216.8 213.3C216.8 211.9 216.6 210.7 216.1 209.8C215.6 208.9 215.1 208.2 214.4 207.6C213.8 207.1 213.2 206.7 212.7 206.5C212.1 206.3 211.3 206.1 210.5 206.1C209.8 206.1 209.1 206.3 208.7 206.7C208.4 206.5 208.1 206.7 208 206.7Z"
          fill="#010101"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_14">
          <rect width="320" height="320" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}