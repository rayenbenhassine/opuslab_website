import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import {
  BsFillTelephoneFill,
  BsInstagram,
  BsEyeFill,
  BsClock,
  BsFillTriangleFill,
  BsTriangleFill,
} from 'react-icons/bs'
import { FaFacebookSquare, FaInstagramSquare, FaRegUser } from 'react-icons/fa'
import { GiPositionMarker, GiCheckMark } from 'react-icons/gi'
import { GoTriangleDown, GoTriangleLeft, GoTriangleRight } from 'react-icons/go'
import { TbCalendarStats } from 'react-icons/tb'
import {
  IoIosMail,
  IoIosListBox,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from 'react-icons/io'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'

import type { Course } from 'types'
import Tips from './cards/Tips'
import blueStripedLines from '../public/images/blueStripedLines.png'
import arrowBanner from '../public/images/arrowBanner.png'
import BannerImage from '../public/images/bannerImage.png'
import darkQuaterCircle from '../public/images/darkQuaterCircle.png'
import endPageCircles from '../public/images/endPageCircles.png'
import glowingDay from '../public/images/glowingDay.png'
import halfSidePoints from '../public/images/halfSidepoints.png'
import leftQuaterCircle from '../public/images/leftQuaterCircle.png'
import linesSidePoints from '../public/images/linesSidePoints.png'
import opusien from '../public/images/opusien.png'
import opusLogo from '../public/images/opus_logo.png'
import pinkCircle from '../public/images/pinkCircle.png'
import pink_line from '../public/images/pink_line.png'
import points from '../public/images/points.png'
import quaterCircle from '../public/images/quaterCircle.png'
import QuaterCircle_pinkLine from '../public/images/QuaterCircle_pinkLine.png'
import quotes from '../public/images/quotes.png'
import rectangleDarkBlue from '../public/images/rectangleDdarkBlue.png'
import rightDarkBluePoints from '../public/images/rightDarkBluePoints.png'
import rightSideCircles from '../public/images/rightSideCircles.png'
import rocket from '../public/images/rocket.png'
import Checked from '../public/images/checked.png'
import semiCircle from '../public/images/semiCircle.png'
import shapes from '../public/images/shapes.png'
import sidePoints from '../public/images/sidepoints.png'
import team1 from '../public/images/team1.png'
import team2 from '../public/images/team2.png'
import team3 from '../public/images/team3.png'
import teamDecor from '../public/images/teamDecor.png'
import teamPoints from '../public/images/teamPoints.png'
import teamRectangle from '../public/images/TeamRectangle.png'
import threeHorizontalCircles from '../public/images/threeHorizontalCircles.png'
import whiteEllipse from '../public/images/whiteEllipse.png'
import whiteLamp from '../public/images/whiteLamp.png'
import whitePoints from '../public/images/whitePoints.png'
import whyOpusPoints from '../public/images/whyOpusPoints.png'
import whyOpusIcon1 from '../public/images/whyOpus_icon1.png'
import whyOpusIcon2 from '../public/images/whyOpus_icon2.png'
import whyOpusIcon3 from '../public/images/whyOpus_icon3.png'
import yellowStar from '../public/images/yellowStar.png'
import littleRightSidePoints from '../public/images/littleRightSidePoints .png'
import Card from './cards/Card'
import Rectangle from './cards/Rectangle'
import SkillCard from './cards/SkillCard'
import NewsLetterForm from './forms/NewsLetterForm'
import FooterList from './lists/FooterList'
import stripedBlueLine from '../public/images/stripedBlueLine.png'
import threeLineSidePoints from '../public/images/threeLineSidePoints.png'
import blueHalfRectangle from '../public/images/blueHalfRectangle.png'
import paymentBoy from '../public/images/paymentBoy.png'
import TrackingProgressBar from './progressBars/TrackingProgressBar'
import SuiviList from './lists/SuiviList'
import NavLink from './nav/NavLink'
import Salary from './asides/Salary'
import ImageCard from './cards/ImageCard'
import { paginateCourses } from '../lib/utils'
import lines from '../public/images/lines.png'
import yellowRectangle from '../public/images/yellowRectangle.png'
import leftTwoLinesPoints from '../public/images/leftTwoLinesPoints.png'
import littleBlueBar from '../public/images/littleBlueBar.png'
import Slider from './sliders/Slider'
// import { StaticImageData } from 'next/image'
import ContactOpus from './sections/ContactOpus'
import threeLineLeftSidePoints from '../public/images/threeLineLeftSidePoints.png'
import rectangle_yellow from '../public/images/rectangle_yellow.png'
import fourLinesRightSidePoints from '../public/images/fourLinesRightSidePoints.png'
import points_white from '../public/images/points_white.png'
import man from '../public/images/man.png'
import GIRL from '../public/images/GIRL.png'
import lamp from '../public/images/lamp.png'
import leftSideCircles from '../public/images/leftSideCircles.png'
import rightTopCircles from '../public/images/rightTopCircles.png'
import opusBusiness from '../public/images/opusBusiness.png'
import yellow_rectangle from '../public/images/yellow_rectangle.png'
import RightRocket from '../public/images/RightRocket.png'
import teamPower from '../public/images/teamPower.png'
import intercourse from '../public/images/intercourse.png'
import blue_rectangle from '../public/images/blue_rectangle.png'
import whiteBottomPoints from '../public/images/whiteBottomPoints.png'
import pinkQuaterCircle from '../public/images/pinkQuaterCircle.png'
import blueLines from '../public/images/blueLines.png'
import triangleSidePoints from '../public/images/triangleSidePoints.png'
import pinkSquare from '../public/images/pinkSquare.png'
import timer from '../public/images/timer.png'
import envelope from '../public/images/envelope.png'
import figure from '../public/images/figure.png'
//import yellowLine from '../public/images/yellowLine.png'
import fourLinePoints from '../public/images/fourLinePoints.png'
import opusLab from '../public/images/opusLab.png'
import opusLabRocket from '../public/images/opusLabRocket.png'
import { VscCalendar } from 'react-icons/vsc'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Informations from './lists/Informations'
import pinkLamp from '../public/images/pinkLamp.png'
import Value from './cards/Value'
import heart from '../public/images/heart.png'
import share from '../public/images/share.png'
import professionalism from '../public/images/professionalism.png'
import engagement from '../public/images/engagement.png'
import CoursesPagination from './pagination/CoursesPagination'
import SKillButton from '../components/buttons/SkillButton'
import circleIcon1 from '../public/images/circleIcon1.png'
import circleIcon2 from '../public/images/circleIcon2.png'
import circleIcon3 from '../public/images/circleIcon3.png'
import circleIcon4 from '../public/images/circleIcon4.png'
import DRAGON_girl from '../public/images/DRAGON_girl.png'
import endQuotes from '../public/images/endQuotes.png'
import halfSemiCircle from '../public/images/halfSemiCircle.png'
import fiveLinesTriangleSidePoints from '../public/images/fiveLinesTriangleSidePoints.png'
import blueCircles from '../public/images/blueCircles.png'
import shape from '../public/images/shape.png'
import rocketTop from '../public/images/rocketTop.png'
import yellowPoints from '../public/images/yellowPoints.png'
import rectangleBlueCircles from '../public/images/rectangleBlueCircles.png'
import arrowZigzag from '../public/images/arrowZigzag.png'
//import yellow_Line from '../public/images/yellow_Line.png'
import rightsidePoints from '../public/images/rightSidepoints.png'
import rocket2 from '../public/images/rocket2.jpg'
import coursesRectongle from '../public/images/coursesRectongle.png'

import React, {
  useState,
  Dispatch,
  MouseEvent,
  SetStateAction,
  ReactNode,
  useLayoutEffect,
  useEffect,
} from 'react'

import CoursesProgressBar from './progressBars/CoursesProgressBar'
import rightPointsSide from '../public/images/rightPointsSide.png'
import TeamMembers from './cards/TeamMembers'
import yellowLine2 from '../public/images/yellowLine2.png'
import dragons from '../public/images/dragons.png'
import succesMan from '../public/images/succesMan.png'
import leftSidePoints from '../public/images/leftSidePoints.png'
import ourTeamPoints from '../public/images/ourTeamPoints.png'
import contactPoints from '../public/images/contactPoints.png'
import contactRocket from '../public/images/contactRocket.png'
import contactLamp from '../public/images/contactLamp.png'
import endtrianglePoints from '../public/images/endtrianglePoints.png'
import letter from '../public/images/letter.png'
import bag from '../public/images/bag.png'
//import pinkLine from '../public/images/pinkLine.png'
import shapeLine from '../public/images/shapeLine.png'
import rightSidePoints from '../public/images/rightSidepoints.png'
import twoYellowLines from '../public/images/twoYellowLines.png'
import triangleBottomCircles from '../public/images/TriangleBottomCircles.png'
import triangleTopCircles from '../public/images/TriangleTopCircles.png'
import yellowPentagone from '../public/images/yellowPentagone.png'
import { submitOpusBusinessForm } from 'lib/api'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { submitNewsLetterForm } from 'lib/api'
import { handleBusinessForm } from 'lib/formHandlers'
import Aos from 'aos'
import { Typewriter } from 'react-simple-typewriter'
import goalsPoints from '../public/images/goalsPoints.png'
import { lg } from 'data/breakPoints'
export type {
  Dispatch,
  MouseEvent,
  SetStateAction,
  Course,
  ReactNode,
  // StaticImageData,
}

export {
  blueStripedLines,
  goalsPoints,
  coursesRectongle,
  useEffect,
  useLayoutEffect,
  lg,
  Checked,
  Typewriter,
  Aos,
  handleBusinessForm,
  submitNewsLetterForm,
  Yup,
  Form,
  Formik,
  Field,
  ErrorMessage,
  //pinkLine,
  submitOpusBusinessForm,
  letter,
  endtrianglePoints,
  contactLamp,
  contactRocket,
  contactPoints,
  ourTeamPoints,
  leftSidePoints,
  succesMan,
  dragons,
  endQuotes,
  DRAGON_girl,
  rocket2,
  rightsidePoints,
  yellowPentagone,
  triangleTopCircles,
  triangleBottomCircles,
  twoYellowLines,
  bag,
  rightSidePoints,
  shapeLine,
  //yellow_Line,
  arrowZigzag,
  rectangleBlueCircles,
  yellowPoints,
  rocketTop,
  shape,
  fiveLinesTriangleSidePoints,
  blueCircles,
  halfSemiCircle,
  circleIcon1,
  circleIcon2,
  circleIcon3,
  circleIcon4,
  ImageCard,
  IoMdArrowDropright,
  IoMdArrowDropleft,
  BsFillTriangleFill,
  BsTriangleFill,
  blueLines,
  pinkQuaterCircle,
  whiteBottomPoints,
  blue_rectangle,
  intercourse,
  teamPower,
  RightRocket,
  yellow_rectangle,
  opusBusiness,
  rightTopCircles,
  leftSideCircles,
  lamp,
  man,
  GIRL,
  points_white,
  fourLinesRightSidePoints,
  rectangle_yellow,
  threeLineLeftSidePoints,
  littleBlueBar,
  leftTwoLinesPoints,
  paymentBoy,
  yellowLine2,
  TeamMembers,
  rightPointsSide,
  Slider,
  MdOutlineClose,
  FiMenu,
  yellowRectangle,
  lines,
  Salary,
  CoursesPagination,
  CoursesProgressBar,
  paginateCourses,
  useState,
  NewsLetterForm,
  whitePoints,
  BsEyeFill,
  whiteEllipse,
  pinkCircle,
  whiteLamp,
  yellowStar,
  rocket,
  shapes,
  opusien,
  whyOpusIcon3,
  quotes,
  rectangleDarkBlue,
  QuaterCircle_pinkLine,
  points,
  GoTriangleRight,
  GoTriangleLeft,
  sidePoints,
  quaterCircle,
  pink_line,
  Rectangle,
  threeHorizontalCircles,
  darkQuaterCircle,
  rightSideCircles,
  leftQuaterCircle,
  halfSidePoints,
  linesSidePoints,
  Card,
  React,
  Image,
  opusLogo,
  Link,
  useTranslations,
  NavLink,
  arrowBanner,
  semiCircle,
  GoTriangleDown,
  BannerImage,
  BsInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  BsFillTelephoneFill,
  IoIosMail,
  GiPositionMarker,
  AiFillLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  endPageCircles,
  FooterList,
  whyOpusIcon1,
  whyOpusIcon2,
  stripedBlueLine,
  team1,
  team2,
  team3,
  teamPoints,
  teamRectangle,
  teamDecor,
  whyOpusPoints,
  SkillCard,
  BsClock,
  TbCalendarStats,
  SKillButton,
  SuiviList,
  threeLineSidePoints,
  blueHalfRectangle,
  IoIosListBox,
  GiCheckMark,
  HiOutlineDesktopComputer,
  FaRegUser,
  TrackingProgressBar,
  littleRightSidePoints,
  triangleSidePoints,
  glowingDay,
  pinkSquare,
  timer,
  Tips,
  envelope,
  figure,
  rightDarkBluePoints,
  ContactOpus,
  fourLinePoints,
  opusLab,
  opusLabRocket,
  VscCalendar,
  HiOutlineLocationMarker,
  Informations,
  pinkLamp,
  Value,
  heart,
  share,
  professionalism,
  engagement,
}
