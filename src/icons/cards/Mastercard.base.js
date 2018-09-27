import React from 'react'
import PropTypes from 'prop-types'

import BaseCardIcon from './CardIcon.base'

const Mastercard = ({ className }) => (
  <BaseCardIcon className={className} box='0 0 750 471'>
    <g fillRule='evenodd'>
    <path
       d='M 0,40.004771 C 0,17.910746 17.914349,0 39.991937,0 L 710.00806,0 C 732.095,0 750,17.906466 750,40.004771 l 0,390.990459 C 750,453.08925 732.08565,471 710.00806,471 L 39.991937,471 C 17.905,471 0,453.09353 0,430.99523 Z M 703.97468,235.48039 c 0,112.36221 -91.6058,203.80556 -204.19747,203.80556 -46.96116,0 -90.25335,-15.94211 -124.79115,-42.60197 -34.51495,26.65986 -77.80667,42.60197 -124.77013,42.60197 -112.58892,0 -204.190614,-91.44335 -204.190614,-203.80556 0,-112.36631 91.601694,-203.766344 204.190614,-203.766344 46.96346,0 90.25518,15.882374 124.77013,42.580996 34.5378,-26.698622 77.82999,-42.580996 124.79115,-42.580996 112.59167,0 204.19747,91.400034 204.19747,203.766344 z M 499.77721,49.935684 c -41.41885,0 -79.65762,13.54311 -110.54927,36.397678 28.01769,26.023748 48.73854,59.817678 58.63977,97.902548 l -18.92519,0 c -9.69562,-33.67082 -28.64823,-63.39726 -53.95646,-86.274626 -25.2808,22.877366 -44.24712,52.603806 -53.90619,86.274626 l -18.95261,0 c 9.92408,-38.08487 30.64493,-71.8788 58.66262,-97.902548 -30.90993,-22.854568 -69.13453,-36.397678 -110.57395,-36.397678 -102.66759,0 -185.896411,83.059846 -185.896411,185.544706 0,102.45842 83.228821,185.54425 185.896411,185.54425 41.43942,0 79.66402,-13.54265 110.57395,-36.39585 -26.36368,-24.50436 -46.25296,-55.89884 -56.76645,-91.23861 l 19.13538,0 c 10.16624,30.9435 28.21417,58.25544 51.82725,79.60704 23.64051,-21.3516 41.71128,-48.66354 51.87752,-79.60704 l 19.13081,0 c -10.53177,35.33977 -30.41648,66.73425 -56.76645,91.23861 30.89165,22.8532 69.13042,36.39585 110.54927,36.39585 102.66759,0 185.89824,-83.08583 185.89824,-185.54425 0,-102.48486 -83.23065,-185.544706 -185.89824,-185.544706 z m -324.80332,141.318476 -29.76721,0 -18.60261,55.34845 -0.77492,-55.34845 -27.58592,0 -14.974299,89.42693 17.951519,0 11.52966,-68.32111 1.61015,68.32111 13.07904,0 24.51045,-68.72923 -10.98182,68.72923 19.17239,0 14.83357,-89.42693 z m 35.65494,57.0174 c -2.0168,-0.2052 -2.89498,-0.28499 -4.27988,-0.28499 -10.88038,0 -16.36147,3.71728 -16.36147,11.04014 0,4.53671 2.68983,7.42226 6.84679,7.42226 7.82458,0 13.44639,-7.42226 13.79456,-18.17741 z m 13.93391,32.40953 -15.89177,0 0.36918,-7.54356 c -4.85101,5.95806 -11.30988,8.80804 -20.08757,8.80804 -10.41251,0 -17.50192,-8.11355 -17.50192,-19.84818 0,-17.73235 12.36488,-28.04016 33.63631,-28.04016 2.17946,0 4.97072,0.20291 7.82275,0.56817 0.59261,-2.42089 0.73562,-3.43594 0.73562,-4.73827 0,-4.79845 -3.32356,-6.60831 -12.28858,-6.60831 -9.3703,-0.12266 -17.11264,2.21752 -20.29136,3.27406 0.20516,-1.22024 2.67018,-16.3484 2.67018,-16.3484 9.53616,-2.80529 15.84883,-3.86321 22.94006,-3.86321 16.46291,0 25.18349,7.35979 25.16384,21.31057 0.0196,3.74054 -0.59261,8.35568 -1.54938,14.43868 -1.67046,10.50937 -5.23664,33.08122 -5.72736,38.59057 z m 250.44541,-91.62347 c -25.40875,0 -43.17796,22.32607 -43.17796,54.29419 0,23.74741 12.862,38.59376 33.50061,38.59376 5.29558,0 9.87838,-0.69448 16.9285,-2.64478 l 3.36286,-20.35616 c -6.33734,3.11354 -11.55068,4.59553 -16.28426,4.59553 -11.14403,0 -17.86974,-8.21524 -17.86974,-21.77932 0,-19.70226 10.01089,-33.51031 24.33044,-33.51031 5.31843,0 10.2896,1.38395 17.13411,4.84132 l 3.13897,-19.39765 c -2.81,-1.09713 -12.69295,-4.63658 -21.06353,-4.63658 z m 55.25407,59.21394 c -1.99669,-0.2052 -2.89223,-0.28499 -4.29952,-0.28499 -10.86074,0 -16.36193,3.71728 -16.36193,11.04014 0,4.53671 2.6912,7.42226 6.8902,7.42226 7.80401,0 13.44685,-7.42226 13.77125,-18.17741 z m 13.93575,32.40953 -15.86848,0 0.36553,-7.54356 c -4.87065,5.95806 -11.34963,8.80804 -20.11316,8.80804 -10.39012,0 -17.52248,-8.11355 -17.52248,-19.84818 0,-17.73235 12.40966,-28.04016 33.66053,-28.04016 2.17946,0 4.97118,0.20291 7.82686,0.56817 0.58484,-2.42089 0.73106,-3.43594 0.73106,-4.73827 0,-4.79845 -3.32174,-6.60831 -12.26803,-6.60831 -9.38949,-0.12266 -17.11126,2.21752 -20.29135,3.27406 0.18276,-1.22024 2.65007,-16.3484 2.65007,-16.3484 9.55398,-2.80529 15.86847,-3.86321 22.91859,-3.86321 16.4853,0 25.2077,7.35979 25.18486,21.31057 0.0411,3.74054 -0.58942,8.35568 -1.54893,14.43868 -1.64944,10.50937 -5.23161,33.08122 -5.72507,38.59057 z m -225.40265,-17.2034 c -1.28391,0.45098 -2.97448,0.6913 -5.15394,0.6913 -4.56453,0 -6.5795,-1.62472 -6.5795,-5.38806 0.0411,-2.31601 3.19837,-19.51896 5.40067,-33.327 l 9.83727,0 2.60895,-17.4884 -9.80071,0 2.22058,-10.97584 -19.05176,0 c 0,0 -7.21049,42.80124 -8.29017,49.57188 -1.22269,7.7483 -2.77024,16.18607 -2.65053,19.39766 0,10.3525 5.3399,15.98634 15.13833,15.98634 4.44573,0 8.53507,-0.73552 13.79867,-2.35978 l 2.52214,-16.1081 z m 58.63978,15.5381 c -6.56122,1.99499 -12.88028,2.92978 -19.5603,2.92978 -21.35596,-0.0442 -32.47713,-11.16463 -32.47713,-32.45422 0,-24.85001 14.15962,-43.15008 33.37267,-43.15008 15.70856,0 25.756,10.22756 25.756,26.332 0,5.32742 -0.71278,10.51256 -2.3668,17.89606 l -37.9372,0 c -1.28392,10.50936 5.48292,14.90335 16.56754,14.90335 6.82166,0 12.95796,-1.38395 19.80247,-4.5545 l -3.15725,18.09761 z M 366.716,235.88805 c 0.12337,-1.50479 2.01497,-13.01689 -8.86405,-13.01689 -6.07232,0 -10.43124,4.65756 -12.18121,13.01689 l 21.04526,0 z M 239.29625,230.9455 c 0,9.21251 4.4407,15.53582 14.58729,20.31467 7.76381,3.65892 8.96503,4.71501 8.96503,8.03375 0,4.50981 -3.42317,6.54401 -11.02295,6.54401 -5.70406,0 -11.04259,-0.85499 -17.17706,-2.84451 0,0 -2.52351,16.02237 -2.64687,16.79711 4.38176,0.93525 8.25133,1.82581 19.96695,2.15504 20.23058,0 29.56342,-7.70908 29.56342,-24.30145 0,-10.02281 -3.89287,-15.83859 -13.51128,-20.25447 -8.02424,-3.6995 -8.96136,-4.51346 -8.96136,-7.90835 0,-3.94575 3.19836,-5.93891 9.41142,-5.93891 3.74803,0 8.90243,0.40812 13.75161,1.09895 l 2.73278,-16.8769 c -4.97255,-0.77337 -12.49009,-1.42317 -16.87185,-1.42317 -21.45328,0 -28.86892,11.16281 -28.78713,24.60423 z m 412.88316,49.73559 -18.14845,0 0.91382,-6.76882 c -5.2773,5.59326 -10.67341,8.0333 -17.6824,8.0333 -13.94031,0 -23.14704,-11.97858 -23.14704,-30.15599 0,-24.22165 14.27843,-44.59514 31.18865,-44.59514 7.42021,0 13.08132,3.01004 18.32207,9.90335 l 4.23556,-25.84363 18.91148,0 -14.59369,89.42693 z M 623.883,263.88763 c 8.92345,0 15.21966,-10.10854 15.21966,-24.50482 0,-9.25172 -3.5639,-14.25492 -10.17081,-14.25492 -8.69956,0 -14.87241,10.10672 -14.87241,24.40268 0,9.53535 3.30346,14.35706 9.82356,14.35706 z m -59.14695,-55.9221 c -2.40334,22.4916 -6.66174,45.28461 -9.98347,67.81724 l -0.87727,4.89832 19.15365,0 c 6.86735,-44.46882 8.53507,-53.15237 19.27245,-52.05479 1.70884,-9.13088 4.88893,-17.07845 7.29228,-21.10445 -8.04161,-1.67077 -12.52847,2.88601 -18.37234,11.48748 0.46605,-3.74237 1.30219,-7.34247 1.11943,-11.0438 l -17.60473,0 z m -167.57616,0 c -2.40792,22.4916 -6.68459,45.28461 -10.00632,67.81724 l -0.87727,4.89832 19.17193,0 c 6.86735,-44.46882 8.51679,-53.15237 19.25417,-52.05479 1.73168,-9.13088 4.93005,-17.07845 7.29684,-21.10445 -8.00962,-1.67077 -12.52846,2.88601 -18.38147,11.48748 0.47062,-3.74237 1.30219,-7.34247 1.14227,-11.0438 l -17.60015,0 z'></path>
    </g>
  </BaseCardIcon>
)

Mastercard.propTypes = {
  className: PropTypes.string
}

export default Mastercard
