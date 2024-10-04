import { useContext, useState, type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from 'src/context/Theme'
import { mergeClassNames } from 'src/utils'
import './Sidebar.scss'

const NavItem = (props: {
  text: string
  icon?: ReactNode
  route?: string
  link?: string
  end?: boolean
}) => {
  const { route, link, text, icon, end } = props
  return (
    <li className="navbar__nav__item">
      {(route && (
        <NavLink to={route} end={end}>
          {icon && <div className="navbar__nav__item__icon">{icon}</div>}
          <span className="navbar__nav__item__text">{text}</span>
        </NavLink>
      )) ||
        (link && (
          <a href={link}>
            <div className="navbar__nav__item__icon">{icon}</div>
            <span className="navbar__nav__item__text">{text}</span>
          </a>
        ))}
    </li>
  )
}

export const Sidebar = (props: { className?: string }) => {
  const { navOpen, toggleNavOpen } = useContext(ThemeContext)
  const { className } = props
  const { toggleMode, mode } = useContext(ThemeContext)

  const handleModeClick = () => {
    toggleMode()
  }

  const JukeboxIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <g clip-path="url(#clip0_489_1453)">
        <path
          d="M16.9998 1.36401C8.3725 1.36401 1.36377 8.37274 1.36377 17C1.36377 25.6273 8.3725 32.636 16.9998 32.636C25.6271 32.636 32.6358 25.6273 32.6358 17C32.6358 8.37274 25.6271 1.36401 16.9998 1.36401ZM16.9998 2.71605C24.8969 2.71605 31.2838 9.10296 31.2838 17C31.2838 24.8971 24.8969 31.284 16.9998 31.284C9.10272 31.284 2.7158 24.8971 2.7158 17C2.7158 9.10296 9.10272 2.71605 16.9998 2.71605ZM25.4958 7.31933L21.9564 11.3741C22.2181 11.5536 22.4442 11.781 22.6231 12.0435L26.6792 8.50401C26.3623 8.03889 25.9596 7.63689 25.4958 7.31933ZM16.9998 10.884C13.6302 10.884 10.8838 13.6305 10.8838 17C10.8838 20.3696 13.6302 23.116 16.9998 23.116C20.3693 23.116 23.1158 20.3696 23.1158 17C23.1158 13.6305 20.3693 10.884 16.9998 10.884ZM16.9998 12.236C19.6391 12.236 21.7638 14.3607 21.7638 17C21.7638 19.6393 19.6391 21.764 16.9998 21.764C14.3605 21.764 12.2358 19.6393 12.2358 17C12.2358 14.3607 14.3605 12.236 16.9998 12.236ZM16.9998 15.64C16.6391 15.64 16.2932 15.7833 16.0381 16.0384C15.7831 16.2934 15.6398 16.6393 15.6398 17C15.6398 17.3607 15.7831 17.7066 16.0381 17.9617C16.2932 18.2167 16.6391 18.36 16.9998 18.36C17.3605 18.36 17.7064 18.2167 17.9615 17.9617C18.2165 17.7066 18.3598 17.3607 18.3598 17C18.3598 16.6393 18.2165 16.2934 17.9615 16.0384C17.7064 15.7833 17.3605 15.64 16.9998 15.64ZM11.3871 21.9221L7.28721 25.508C7.60409 25.9731 8.00548 26.3751 8.46924 26.6927L12.0552 22.5914C11.7934 22.4119 11.566 22.1845 11.3871 21.9221Z"
          fill="#E7BDB1"
          stroke="#E7BDB1"
        />
      </g>
      <defs>
        <clipPath id="clip0_489_1453">
          <rect width="34" height="34" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

  const HomeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.98529 0.421882C9.90134 0.424778 9.82043 0.454024 9.75403 0.505476L0.554036 7.68438C0.470328 7.74965 0.415975 7.8455 0.402935 7.95084C0.389896 8.05618 0.419237 8.16239 0.484505 8.2461C0.549774 8.32981 0.645622 8.38416 0.750964 8.3972C0.856307 8.41024 0.962515 8.3809 1.04622 8.31563L1.60013 7.8836V18.4C1.60014 18.5061 1.64229 18.6078 1.7173 18.6828C1.79231 18.7579 1.89405 18.8 2.00013 18.8H7.53294C7.57614 18.8071 7.62021 18.8071 7.66341 18.8H12.3329C12.3761 18.8071 12.4202 18.8071 12.4634 18.8H18.0001C18.1062 18.8 18.2079 18.7579 18.283 18.6828C18.358 18.6078 18.4001 18.5061 18.4001 18.4V7.8836L18.954 8.31563C18.9955 8.34795 19.0429 8.37179 19.0936 8.38579C19.1442 8.39979 19.1971 8.40368 19.2493 8.39722C19.3015 8.39077 19.3518 8.3741 19.3976 8.34817C19.4433 8.32225 19.4835 8.28757 19.5158 8.24612C19.5481 8.20467 19.5719 8.15726 19.5859 8.10659C19.5999 8.05593 19.6038 8.00301 19.5973 7.95084C19.5909 7.89868 19.5742 7.8483 19.5483 7.80258C19.5224 7.75686 19.4877 7.7167 19.4462 7.68438L16.4001 5.30782V2.40001H14.0001V3.43438L10.2462 0.505476C10.1718 0.447764 10.0794 0.418162 9.98529 0.421882ZM10.0001 1.32891L17.6001 7.25938V18H12.8001V10.4H7.20013V18H2.40013V7.25938L10.0001 1.32891ZM14.8001 3.20001H15.6001V4.6836L14.8001 4.0586V3.20001ZM8.00013 11.2H12.0001V18H8.00013V11.2Z"
        fill="#F8F7F7"
      />
    </svg>
  )

  const SpeakerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.4748 1.18752C10.3498 1.18908 10.2217 1.21095 10.0998 1.25002C9.8623 1.32658 9.63418 1.47033 9.4373 1.67502C9.43262 1.6797 9.42949 1.68283 9.4248 1.68752L4.6748 6.40002H1.9998C1.34199 6.40002 0.799805 6.9422 0.799805 7.60002V12.4C0.799805 13.0578 1.34199 13.6 1.9998 13.6H4.7248L9.39981 18.2875C9.85137 18.7391 10.4279 18.9235 10.8998 18.7C11.3717 18.4766 11.5998 17.9422 11.5998 17.325V2.52502C11.5998 1.92814 11.3061 1.42033 10.8373 1.25002C10.7201 1.20783 10.5998 1.18595 10.4748 1.18752ZM10.4623 1.98752C10.4998 1.98752 10.5342 1.99064 10.5623 2.00002C10.6732 2.04064 10.7998 2.16095 10.7998 2.52502V17.325C10.7998 17.7469 10.6482 17.9281 10.5498 17.975C10.4514 18.0219 10.2701 18.0203 9.96231 17.7125L4.9248 12.675C4.93105 12.6813 4.7998 12.4406 4.7998 12.275V7.67502C4.7998 7.62189 4.81855 7.51408 4.8498 7.42502C4.88105 7.33595 4.94355 7.26877 4.9248 7.28752L9.9998 2.25002C10.0045 2.24533 10.0076 2.2422 10.0123 2.23752C10.1936 2.04533 10.3482 1.98908 10.4623 1.98752ZM12.3998 3.20002V4.00002C15.7014 4.00002 18.3998 6.69845 18.3998 10C18.3998 13.3016 15.7014 16 12.3998 16V16.8C16.1373 16.8 19.1998 13.7375 19.1998 10C19.1998 6.26252 16.1373 3.20002 12.3998 3.20002ZM12.3998 5.60002V6.40002C14.3811 6.40002 15.9998 8.01877 15.9998 10C15.9998 11.9813 14.3811 13.6 12.3998 13.6V14.4C14.8186 14.4 16.7998 12.4188 16.7998 10C16.7998 7.58127 14.8186 5.60002 12.3998 5.60002ZM1.9998 7.20002H4.0873C4.03574 7.35002 3.9998 7.50314 3.9998 7.67502V12.275C3.9998 12.4672 4.02949 12.6422 4.0873 12.8H1.9998C1.77793 12.8 1.5998 12.6219 1.5998 12.4V7.60002C1.5998 7.37814 1.77793 7.20002 1.9998 7.20002ZM12.3998 8.00002V8.80002C13.0623 8.80002 13.5998 9.33752 13.5998 10C13.5998 10.6625 13.0623 11.2 12.3998 11.2V12C13.4982 12 14.3998 11.0985 14.3998 10C14.3998 8.90158 13.4982 8.00002 12.3998 8.00002Z"
        fill="#EFEFEF"
      />
    </svg>
  )

  const BoardIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M0 2.79999V15.6H20V2.79999H0ZM0.8 3.59999H19.2V14.8H0.8V3.59999ZM4.325 16.4C4.10469 16.4203 3.94219 16.6172 3.9625 16.8375C3.98281 17.0578 4.17969 17.2203 4.4 17.2H15.6C15.7438 17.2015 15.8781 17.1265 15.9516 17.0015C16.0234 16.8765 16.0234 16.7234 15.9516 16.5984C15.8781 16.4734 15.7438 16.3984 15.6 16.4H4.4C4.3875 16.4 4.375 16.4 4.3625 16.4C4.35 16.4 4.3375 16.4 4.325 16.4Z"
        fill="white"
      />
    </svg>
  )

  const MusicIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.2001 1.59998C3.21669 1.59998 1.6001 3.21657 1.6001 5.19998V14.8C1.6001 16.7834 3.21669 18.4 5.2001 18.4H14.8001C16.7835 18.4 18.4001 16.7834 18.4001 14.8V5.19998C18.4001 3.21657 16.7835 1.59998 14.8001 1.59998H5.2001ZM5.2001 2.39998H14.8001C16.3511 2.39998 17.6001 3.64898 17.6001 5.19998V14.8C17.6001 16.351 16.3511 17.6 14.8001 17.6H5.2001C3.6491 17.6 2.4001 16.351 2.4001 14.8V5.19998C2.4001 3.64898 3.6491 2.39998 5.2001 2.39998ZM13.4243 4.40076C13.3802 4.39855 13.335 4.4017 13.2899 4.41013H13.2892L8.25244 5.35466C7.87678 5.42535 7.6001 5.75882 7.6001 6.14138V11.5945C7.60008 11.5963 7.60008 11.5982 7.6001 11.6C7.6001 12.0466 7.24676 12.4 6.8001 12.4H6.06807C5.21879 12.4 4.44838 13.0376 4.40244 13.9148C4.35486 14.8295 5.09294 15.6 6.0001 15.6H6.2001C7.41033 15.6 8.4001 14.6102 8.4001 13.4V11.6V8.18201L13.2001 7.28201V10.4C13.2001 10.8466 12.8468 11.2 12.4001 11.2H11.6681C10.8188 11.2 10.0484 11.8376 10.0024 12.7148C9.95486 13.6295 10.6929 14.4 11.6001 14.4H11.8001C13.0103 14.4 14.0001 13.4102 14.0001 12.2V10.4V4.99998C14.0001 4.67895 13.7329 4.41619 13.4243 4.40076ZM13.2001 5.24138V6.46794L8.4001 7.36794V6.14138L13.2001 5.24138ZM13.2001 11.7523V12.2C13.2001 12.9777 12.5779 13.6 11.8001 13.6H11.6001C11.1393 13.6 10.7765 13.2256 10.8009 12.7562C10.8229 12.335 11.2181 12 11.6681 12H12.4001C12.6972 12 12.9608 11.8953 13.2001 11.7523ZM7.6001 12.9523V13.4C7.6001 14.1777 6.97787 14.8 6.2001 14.8H6.0001C5.53926 14.8 5.17646 14.4256 5.20088 13.9562C5.22294 13.535 5.61814 13.2 6.06807 13.2H6.8001C7.09716 13.2 7.36085 13.0953 7.6001 12.9523Z"
        fill="white"
      />
    </svg>
  )

  const JamIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.6 1.20001C4.72188 1.20001 4 1.92189 4 2.80001V17.2C4 18.0781 4.72188 18.8 5.6 18.8H14.4C15.2781 18.8 16 18.0781 16 17.2V2.80001C16 1.92189 15.2781 1.20001 14.4 1.20001H5.6ZM5.6 2.00001H14.4C14.8422 2.00001 15.2 2.35782 15.2 2.80001V17.2C15.2 17.6422 14.8422 18 14.4 18H5.6C5.15781 18 4.8 17.6422 4.8 17.2V2.80001C4.8 2.35782 5.15781 2.00001 5.6 2.00001ZM5.925 2.80001C5.73438 2.83595 5.59688 3.0047 5.6 3.20001V8.00001C5.6 8.22033 5.77969 8.40001 6 8.40001H14C14.2203 8.40001 14.4 8.22033 14.4 8.00001V3.20001C14.4 2.9797 14.2203 2.80001 14 2.80001H6C5.9875 2.80001 5.975 2.80001 5.9625 2.80001C5.95 2.80001 5.9375 2.80001 5.925 2.80001ZM6.4 3.60001H13.6V7.60001H6.4V3.60001ZM10 9.20001C7.79531 9.20001 6 10.9953 6 13.2C6 15.4047 7.79531 17.2 10 17.2C12.2047 17.2 14 15.4047 14 13.2C14 10.9953 12.2047 9.20001 10 9.20001ZM10 10C11.7719 10 13.2 11.4281 13.2 13.2C13.2 14.9719 11.7719 16.4 10 16.4C8.22813 16.4 6.8 14.9719 6.8 13.2C6.8 11.4281 8.22813 10 10 10ZM10 12C9.34219 12 8.8 12.5422 8.8 13.2C8.8 13.8578 9.34219 14.4 10 14.4C10.6578 14.4 11.2 13.8578 11.2 13.2C11.2 12.5422 10.6578 12 10 12ZM10 12.8C10.225 12.8 10.4 12.975 10.4 13.2C10.4 13.425 10.225 13.6 10 13.6C9.775 13.6 9.6 13.425 9.6 13.2C9.6 12.975 9.775 12.8 10 12.8Z"
        fill="#F8F7F7"
      />
    </svg>
  )

  const PartyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_489_1445)">
        <path
          d="M18.0248 0.97499C17.4842 0.951552 16.978 1.31093 16.8373 1.84999L16.2873 3.98749L14.7873 6.14999L12.3998 6.68749C11.9952 6.77968 11.6248 6.98905 11.3498 7.29999L9.69985 9.13749C9.49047 9.3703 9.3311 9.65937 9.24985 9.96249L8.68735 12.0875C8.53422 12.6578 8.8686 13.2547 9.43735 13.4125C9.99985 13.5687 10.5936 13.2344 10.7623 12.675L11.3248 10.8125L12.2123 9.92499C12.2045 10.1656 12.2639 10.325 12.2123 10.575C12.103 11.1141 11.9373 11.5625 11.9373 11.5625L10.3873 14.55C10.303 14.7125 10.2373 14.8859 10.1998 15.0625L9.63735 17.775C9.48266 18.5094 10.0498 19.225 10.7998 19.225H10.9248C11.4905 19.225 11.9873 18.8156 12.0998 18.2625L12.6248 15.675L13.9623 13.275L15.0498 14.6875L15.4373 18.1625C15.5045 18.7641 16.0202 19.225 16.6248 19.225C17.3264 19.225 17.8842 18.5984 17.8123 17.9L17.4373 14.2C17.4139 13.975 17.3467 13.7547 17.2498 13.55L16.1123 11.15C16.1983 10.9125 16.6248 9.63437 16.4748 8.19999L18.3498 5.03749C18.3655 5.00937 18.378 4.98124 18.3873 4.94999L19.0998 2.46249C19.2811 1.83124 18.8998 1.17186 18.2623 1.01249C18.1858 0.99374 18.1014 0.978115 18.0248 0.97499ZM7.69985 1.09999C7.55297 1.10311 7.40297 1.13436 7.26235 1.19999C6.73579 1.44374 6.48422 2.06093 6.69985 2.59999L7.39985 4.37499L6.26235 6.39999L4.34985 6.66249L3.14985 5.28749L3.21235 4.73749C3.28422 5.66249 4.05766 6.39999 4.99985 6.39999C5.98891 6.39999 6.79985 5.58905 6.79985 4.59999C6.79985 3.61093 5.98891 2.79999 4.99985 2.79999C4.20297 2.79999 3.52172 3.32811 3.28735 4.04999L3.39985 3.11249C3.47329 2.48749 2.99047 1.9203 2.36235 1.88749H2.27485C1.69672 1.8578 1.18579 2.28593 1.12485 2.86249L0.837349 5.54999C0.796724 5.92812 0.907662 6.29687 1.13735 6.59999L3.07485 9.16249L2.37485 10.7125C2.09047 11.3391 1.97797 12.0281 2.04985 12.7125L2.61235 18.0875C2.67797 18.7125 3.20922 19.2 3.83735 19.2C4.55297 19.2 5.12172 18.5766 5.06235 17.8625L4.66235 13.05L4.71235 13.0125L5.96235 14.7625L5.32485 17.75C5.16547 18.4891 5.7436 19.2 6.49985 19.2C7.0436 19.2 7.51391 18.8281 7.64985 18.3L8.49985 15.0375C8.59985 14.65 8.54985 14.2422 8.36235 13.8875L7.02485 11.35L7.66235 8.49999L9.58735 5.27499C9.79516 4.92655 9.83891 4.50155 9.68735 4.12499L8.73735 1.78749C8.62172 1.49843 8.39516 1.28124 8.12485 1.17499C7.99047 1.12186 7.84672 1.09686 7.69985 1.09999ZM17.9123 1.77499C17.9592 1.76874 18.0123 1.77499 18.0623 1.78749C18.2702 1.83905 18.3842 2.04374 18.3248 2.24999L17.6123 4.72499L15.7373 7.88749C15.6873 7.96562 15.6639 8.0578 15.6748 8.14999C15.8623 9.48749 15.3123 11.05 15.3123 11.05C15.2733 11.1516 15.278 11.2641 15.3248 11.3625L16.5248 13.8875C16.5827 14.0109 16.6233 14.1516 16.6373 14.2875L17.0123 17.9875C17.0373 18.2266 16.8655 18.425 16.6248 18.425C16.4202 18.425 16.2608 18.2781 16.2373 18.075L15.8248 14.475C15.8186 14.4031 15.792 14.3344 15.7498 14.275L14.2373 12.3125C14.1577 12.2016 14.0264 12.1375 13.8889 12.1453C13.753 12.1531 13.6295 12.2297 13.5623 12.35L11.8998 15.325C11.8811 15.3609 11.8686 15.3984 11.8623 15.4375L11.3123 18.1C11.2748 18.2859 11.1139 18.425 10.9248 18.425H10.7998C10.5405 18.425 10.3592 18.2047 10.4123 17.95L10.9873 15.225C11.0108 15.1172 11.0498 15.0078 11.0998 14.9125L12.6748 11.875C12.6842 11.8594 12.692 11.8422 12.6998 11.825C12.6998 11.825 12.878 11.3391 12.9998 10.7375C13.1217 10.1359 13.2373 9.4328 12.9498 8.83749C12.8936 8.72187 12.7858 8.64061 12.6592 8.61874C12.5342 8.59687 12.4045 8.63593 12.3123 8.72499L10.6998 10.3C10.6514 10.3484 10.617 10.4094 10.5998 10.475L9.99985 12.45C9.95454 12.6016 9.80141 12.6797 9.64985 12.6375C9.49672 12.5953 9.42016 12.4422 9.46235 12.2875L10.0248 10.1625C10.0733 9.98124 10.1608 9.81562 10.2873 9.67499L11.9498 7.83749C11.9498 7.8328 11.9498 7.82968 11.9498 7.82499C12.1139 7.64061 12.3327 7.51718 12.5748 7.46249L15.1123 6.88749C15.2139 6.86718 15.303 6.80937 15.3623 6.72499L16.9873 4.37499C17.017 4.3328 17.0373 4.28749 17.0498 4.23749L17.6123 2.04999C17.6514 1.89843 17.7702 1.7953 17.9123 1.77499ZM7.72485 1.89999C7.8436 1.89686 7.94985 1.96561 7.99985 2.08749L8.93735 4.42499C8.99516 4.5703 8.97954 4.72812 8.89985 4.86249L6.93735 8.14999C6.91547 8.18437 6.89829 8.22187 6.88735 8.26249L6.19985 11.3125C6.17954 11.4062 6.19204 11.5031 6.23735 11.5875L7.66235 14.2625C7.7561 14.4391 7.77485 14.6437 7.72485 14.8375L6.87485 18.1C6.82797 18.2781 6.68422 18.4 6.49985 18.4C6.23579 18.4 6.0436 18.1703 6.09985 17.9125L6.78735 14.7625C6.81079 14.6547 6.78735 14.5406 6.72485 14.45L5.12485 12.2125C5.06235 12.125 4.96704 12.0672 4.86235 12.0516C4.7561 12.0344 4.64829 12.0609 4.56235 12.125L3.99985 12.5625C3.8936 12.6469 3.83735 12.7781 3.84985 12.9125L4.27485 17.925C4.29672 18.1844 4.09672 18.4 3.83735 18.4C3.61235 18.4 3.42329 18.2375 3.39985 18.0125L2.84985 12.625C2.7936 12.0812 2.87329 11.5344 3.09985 11.0375L3.89985 9.27499C3.96079 9.1453 3.94516 8.99218 3.86235 8.87499L1.77485 6.12499C1.6686 5.98437 1.6186 5.79999 1.63735 5.62499L1.92485 2.94999C1.94204 2.78905 2.06391 2.67968 2.22485 2.68749H2.32485C2.50297 2.69686 2.62016 2.84843 2.59985 3.02499L2.32485 5.36249C2.31235 5.47655 2.34829 5.59062 2.42485 5.67499L3.89985 7.34999C3.98891 7.45468 4.12641 7.5078 4.26235 7.48749L6.57485 7.16249C6.69672 7.14374 6.80297 7.0703 6.86235 6.96249L8.19985 4.58749C8.25766 4.48437 8.26704 4.36093 8.22485 4.24999L7.44985 2.29999C7.38891 2.14843 7.45297 1.99374 7.59985 1.92499C7.63891 1.90624 7.68579 1.90155 7.72485 1.89999ZM12.9998 2.79999C12.0108 2.79999 11.1998 3.61093 11.1998 4.59999C11.1998 5.58905 12.0108 6.39999 12.9998 6.39999C13.9889 6.39999 14.7998 5.58905 14.7998 4.59999C14.7998 3.61093 13.9889 2.79999 12.9998 2.79999ZM4.99985 3.59999C5.5561 3.59999 5.99985 4.04374 5.99985 4.59999C5.99985 5.15624 5.5561 5.59999 4.99985 5.59999C4.4436 5.59999 3.99985 5.15624 3.99985 4.59999C3.99985 4.04374 4.4436 3.59999 4.99985 3.59999ZM12.9998 3.59999C13.5561 3.59999 13.9998 4.04374 13.9998 4.59999C13.9998 5.15624 13.5561 5.59999 12.9998 5.59999C12.4436 5.59999 11.9998 5.15624 11.9998 4.59999C11.9998 4.04374 12.4436 3.59999 12.9998 3.59999Z"
          fill="#F8F7F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_489_1445">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

  const SettingsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_489_1449)">
        <path
          d="M8.88203 0.799988C8.78722 0.800038 8.69551 0.833763 8.62325 0.895147C8.55099 0.956532 8.50288 1.04159 8.4875 1.13514L8.09844 3.51718C7.6306 3.65327 7.1845 3.8369 6.76406 4.06561L4.79844 2.66171C4.72148 2.60675 4.62754 2.58084 4.53329 2.58856C4.43905 2.59628 4.35058 2.63715 4.28359 2.70389L2.72734 4.25858C2.66084 4.32513 2.61992 4.41299 2.61178 4.50672C2.60363 4.60046 2.62878 4.69406 2.68281 4.77108L4.06563 6.74921C3.83338 7.1721 3.64568 7.62072 3.50625 8.09296L1.13438 8.48749C1.0411 8.5032 0.956416 8.55145 0.895345 8.62368C0.834274 8.6959 0.800771 8.78743 0.800782 8.88202V11.082C0.800611 11.176 0.833562 11.2671 0.893851 11.3393C0.95414 11.4114 1.03791 11.46 1.13047 11.4766L3.50391 11.8969C3.64258 12.3683 3.82909 12.8172 4.06172 13.2406L2.66172 15.1992C2.60677 15.2762 2.58085 15.3701 2.58857 15.4644C2.5963 15.5586 2.63716 15.6471 2.70391 15.7141L4.25938 17.2703C4.32578 17.3367 4.41344 17.3777 4.507 17.386C4.60056 17.3942 4.69405 17.3693 4.77109 17.3156L6.75313 15.9281C7.1748 16.1582 7.622 16.3432 8.09141 16.4805L8.4875 18.8656C8.50305 18.959 8.55123 19.0439 8.62347 19.1051C8.69571 19.1664 8.78733 19.2 8.88203 19.2H11.082C11.1762 19.2001 11.2673 19.1671 11.3395 19.1066C11.4117 19.0462 11.4602 18.9622 11.4766 18.8695L11.9008 16.475C12.3683 16.3356 12.8133 16.1479 13.2328 15.9164L15.2281 17.3164C15.3051 17.3704 15.3988 17.3956 15.4925 17.3874C15.5862 17.3793 15.6741 17.3384 15.7406 17.2719L17.2961 15.7148C17.3631 15.6477 17.4041 15.5588 17.4117 15.4642C17.4193 15.3696 17.393 15.2754 17.3375 15.1984L15.9148 13.2234C16.1423 12.806 16.3256 12.3635 16.4617 11.8992L18.8687 11.4773C18.9614 11.461 19.0454 11.4124 19.1059 11.3403C19.1663 11.2681 19.1994 11.1769 19.1992 11.0828V8.8828C19.1992 8.78799 19.1654 8.69627 19.1041 8.62401C19.0427 8.55175 18.9576 8.50365 18.8641 8.48827L16.4609 8.0953C16.3239 7.63152 16.1401 7.18988 15.9125 6.77264L17.3156 4.77343C17.3697 4.6964 17.3948 4.6028 17.3867 4.50907C17.3785 4.41534 17.3376 4.32748 17.2711 4.26093L15.7148 2.70546C15.6477 2.63842 15.5588 2.59745 15.4642 2.58987C15.3697 2.58228 15.2754 2.60858 15.1984 2.66405L13.2289 4.08046C12.8093 3.84991 12.3639 3.66318 11.8953 3.52499L11.4766 1.13124C11.4604 1.0384 11.4119 0.954257 11.3397 0.893655C11.2675 0.833054 11.1763 0.799882 11.082 0.799988H8.88203ZM9.22266 1.59999H10.7461L11.1445 3.87421C11.1578 3.95048 11.1929 4.02127 11.2456 4.07799C11.2983 4.13471 11.3663 4.17492 11.4414 4.19374C12.0264 4.33952 12.5758 4.57061 13.0773 4.87421C13.1444 4.91483 13.2219 4.93486 13.3002 4.93181C13.3786 4.92875 13.4543 4.90274 13.518 4.85702L15.3898 3.51171L16.4672 4.58905L15.1344 6.48827C15.0899 6.55163 15.0647 6.62654 15.0619 6.70392C15.0591 6.7813 15.0789 6.85783 15.1188 6.92421C15.4193 7.42458 15.6473 7.97054 15.793 8.55233C15.8119 8.62811 15.8527 8.69667 15.9101 8.74956C15.9676 8.80246 16.0393 8.83737 16.1164 8.84999L18.3992 9.22343V10.7469L16.1117 11.1484C16.0354 11.1619 15.9646 11.1973 15.908 11.2503C15.8514 11.3033 15.8115 11.3716 15.793 11.4469C15.649 12.0279 15.4209 12.5739 15.1203 13.0742C15.08 13.1412 15.0602 13.2186 15.0634 13.2968C15.0666 13.375 15.0926 13.4505 15.1383 13.5141L16.4898 15.3898L15.4125 16.468L13.5164 15.1375C13.4527 15.0929 13.3774 15.0678 13.2998 15.0653C13.2221 15.0628 13.1453 15.083 13.0789 15.1234C12.5799 15.427 12.0299 15.6592 11.4469 15.807C11.3721 15.8259 11.3044 15.8659 11.2519 15.9223C11.1994 15.9787 11.1643 16.0491 11.1508 16.125L10.7469 18.4H9.2211L8.84453 16.1351C8.83171 16.0581 8.79663 15.9865 8.74359 15.9292C8.69056 15.8718 8.62191 15.8313 8.54609 15.8125C7.96074 15.6682 7.40884 15.4375 6.90391 15.1344C6.83761 15.0947 6.76124 15.075 6.68402 15.0778C6.60679 15.0806 6.53203 15.1056 6.46875 15.15L4.5875 16.468L3.50938 15.3883L4.83906 13.5297C4.88451 13.466 4.91028 13.3904 4.9132 13.3122C4.91611 13.234 4.89604 13.1567 4.85547 13.0898C4.54906 12.5835 4.31733 12.0317 4.17109 11.4437C4.15238 11.3689 4.11241 11.301 4.05599 11.2483C3.99957 11.1956 3.92912 11.1604 3.85313 11.1469L1.60078 10.7469V9.22108L3.85156 8.84686C3.92851 8.8341 4.00004 8.79913 4.05737 8.74625C4.11469 8.69336 4.15531 8.62487 4.17422 8.54921C4.32171 7.95925 4.55333 7.40748 4.85859 6.90233C4.89885 6.83601 4.91895 6.75942 4.91646 6.68188C4.91396 6.60434 4.88897 6.5292 4.84453 6.46561L3.53047 4.58749L4.60938 3.50936L6.47422 4.84218C6.53766 4.88741 6.61294 4.91314 6.69079 4.91619C6.76865 4.91924 6.84571 4.89949 6.9125 4.85936C7.41476 4.55771 7.96795 4.32882 8.55391 4.18514C8.63008 4.16639 8.69905 4.12566 8.75225 4.06801C8.80545 4.01037 8.84053 3.93835 8.85313 3.86093L9.22266 1.59999ZM10 6.79999C8.23743 6.79999 6.8 8.23741 6.8 9.99999C6.8 11.7626 8.23743 13.2 10 13.2C11.7626 13.2 13.2 11.7626 13.2 9.99999C13.2 8.23741 11.7626 6.79999 10 6.79999ZM10 7.59999C11.3302 7.59999 12.4 8.66977 12.4 9.99999C12.4 11.3302 11.3302 12.4 10 12.4C8.66978 12.4 7.6 11.3302 7.6 9.99999C7.6 8.66977 8.66978 7.59999 10 7.59999Z"
          fill="#F8F7F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_489_1449">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

  const DropdownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M17.0957 5.81403C16.9963 5.817 16.9012 5.85856 16.8315 5.9313L9.50016 13.2626L2.16883 5.9313C2.09758 5.85708 1.99961 5.817 1.89719 5.81552C1.74133 5.817 1.60328 5.91052 1.5439 6.05302C1.48601 6.197 1.52016 6.36028 1.63148 6.46864L9.23148 14.0686C9.37992 14.2171 9.62039 14.2171 9.76883 14.0686L17.3688 6.46864C17.4816 6.36028 17.5158 6.19255 17.4564 6.04857C17.3955 5.90458 17.253 5.81106 17.0957 5.81403Z"
        fill="white"
      />
    </svg>
  )

  // Create state variables for each dropdown
  const [isDropdown1Open, setIsDropdown1Open] = useState(false)
  const [isDropdown2Open, setIsDropdown2Open] = useState(false)
  const [isDropdown3Open, setIsDropdown3Open] = useState(false)

  // Function to toggle dropdown 1
  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open)
  }

  // Function to toggle dropdown 2
  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open)
  }

  // Function to toggle dropdown 3
  const toggleDropdown3 = () => {
    setIsDropdown3Open(!isDropdown3Open)
  }

  return (
    <div className={mergeClassNames(className, 'navbar')}>
      <div className="navbar__inner">
        <div className="navbar__row">
          <div className="navbar__logobox">
            <div className="navbar__logobox__item">
              <JukeboxIcon />
              <div className="navbar__logobox__text">
                <h2 className="navbar__logobox__title">Jukebox</h2>
                <p className="navbar__logobox__subtitle">
                  By UF Open Source Club
                </p>
              </div>
            </div>
          </div>
          <nav className="navbar__nav">
            <ul className="navbar__nav__list">
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <HomeIcon />
                  <NavItem route="/admin" text="Home" end />
                </span>
              </li>
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <SpeakerIcon />
                  <NavItem route="/admin" text="Player" end />
                </span>
              </li>
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <BoardIcon />
                  <NavItem route="boards" text="Boards" end />
                </span>
              </li>
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <MusicIcon />
                  <NavItem route="music" text="Music" end />
                  <button
                    className="navbar__dropdown__button"
                    onClick={toggleDropdown1}
                  >
                    <DropdownIcon />
                  </button>
                </span>
                {isDropdown1Open && (
                  <div className="navbar__dropdown__content">
                    <a href="#">Track Queue</a>
                    <a href="#">Search</a>
                  </div>
                )}
              </li>
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <JamIcon />
                  <NavItem route="jam-sessions" text="Juke Session" end />
                  <button
                    className="navbar__dropdown__button"
                    onClick={toggleDropdown2}
                  >
                    <DropdownIcon />
                  </button>
                </span>
                {isDropdown2Open && (
                  <div className="navbar__dropdown__content">
                    <a href="#">Leaderboard</a>
                    <a href="#">Invite Guests</a>
                  </div>
                )}
              </li>
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <JamIcon />
                  <NavItem route="members" text="Members" end />
                  <button
                    className="navbar__dropdown__button"
                    onClick={toggleDropdown3}
                  >
                    <DropdownIcon />
                  </button>
                </span>
                {isDropdown3Open && (
                  <div className="navbar__dropdown__content">
                    <a href="#">All Members</a>
                    <NavItem route="/members/register" text="Add Member" end />
                  </div>
                )}
              </li>
              <li className="navbar__nav__list__item">
                <span className="navbar__nav__item">
                  <SettingsIcon />
                  <NavItem route="settings" text="Settings" end />
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar__row">
          <label htmlFor="theme" className="switch">
            <input
              type="checkbox"
              id="theme"
              onClick={handleModeClick}
              value={mode === 'light' ? 'checked' : ''}
            />
            <div className="slider">
              <span className="slider__toggle color-role-primary-inverse">
                O
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}
