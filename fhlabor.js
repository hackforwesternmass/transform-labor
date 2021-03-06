
function getData(dataFn)
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Industry');
	data.addColumn('date', 'Year');
	data.addColumn('number', 'Employment');
	data.addColumn('number', 'WagesWeekly');
	data.addColumn('number', 'Growth');
	data.addColumn('string', 'County');
	dataFn(data);
	return data;
}

    function getFrankHamp2013(data) {
      return [
            ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2013,0,1), 1193, 456, 0.310989011, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2013,0,1), 55, 857, 0.2222222222, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2013,0,1), 3602, 926, 0.1059256985, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2013,0,1), 7394, 943, -0.04272397721, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2013,0,1), 358, 1362, 0.1699346405, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2013,0,1), 2501, 907, -0.06399700599, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2013,0,1), 10665, 499, 0.00234962406, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2013,0,1), 2424, 731, 0.1284916201, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2013,0,1), 1392, 801, -0.04853041695, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2013,0,1), 1799, 1053, -0.01316511245, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2013,0,1), 824, 749, 0.0813648294, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2013,0,1), 2379, 1012, 0.07598371777, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2013,0,1), 1128, 1369, -0.0275862069, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2013,0,1), 2389, 615, 0.04186655037, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2013,0,1), 19724, 1088, -0.0518219402, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2013,0,1), 14269, 735, 0.1520264815, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2013,0,1), 1856, 357, 0.09048178613, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2013,0,1), 8189, 295, 0.07509518183, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2013,0,1), 2776, 515, -0.4077234905, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2013,0,1), 4594, 903, 0.03235955056, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2012(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2012,0,1), 941, 466, 0.09801633606, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2012,0,1), 51, 852, 0.1333333333, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2012,0,1), 3352, 881, 0.06581875994, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2012,0,1), 7685, 954, 0.0009116957541, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2012,0,1), 323, 1481, 0.0253968254, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2012,0,1), 2383, 930, -0.05398967844, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2012,0,1), 10651, 493, 0.006045149712, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2012,0,1), 2438, 741, 0.1204044118, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2012,0,1), 1462, 885, -0.02468312208, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2012,0,1), 1813, 1082, -0.01037117904, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2012,0,1), 780, 702, -0.002557544757, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2012,0,1), 2363, 977, 0.1338771593, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2012,0,1), 1173, 1391, 0.04919499106, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2012,0,1), 2412, 632, -0.0008285004143, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2012,0,1), 21178, 960, 0.03717126206, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2012,0,1), 12306, 793, -0.02069075283, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2012,0,1), 1749, 342, 0.06907090465, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2012,0,1), 7979, 289, 0.06585626503, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2012,0,1), 4772, 407, 0.02889176369, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2012,0,1), 4610, 850, 0.01207464325, 'Franklin/Hampshire']
      ];
    }

    function getFrankHamp2011(data) {
      return [
            ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2011,0,1), 910, 467, 0.2133333333, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2011,0,1), 45, 846, -0.1346153846, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2011,0,1), 3257, 862, 0.03561208267, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2011,0,1), 7724, 923, -0.01252876502, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2011,0,1), 306, 1544, 0.05517241379, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2011,0,1), 2672, 889, 0.1004942339, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2011,0,1), 10640, 486, 0.01827926117, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2011,0,1), 2148, 735, -0.0508174989, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2011,0,1), 1463, 874, 0.008270158511, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2011,0,1), 1823, 1027, -0.006539509537, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2011,0,1), 762, 660, -0.02307692308, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2011,0,1), 2211, 967, 0.1297904957, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2011,0,1), 1160, 1431, 0.0861423221, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2011,0,1), 2293, 613, 0.003501094092, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2011,0,1), 20802, 925, 0.01875704001, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2011,0,1), 12386, 778, -0.01275306871, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2011,0,1), 1702, 331, 0.06109725686, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2011,0,1), 7617, 276, 0.03957963696, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2011,0,1), 4687, 395, 0.05658250676, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2011,0,1), 4450, 852, 0.01970669111, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2010(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2010,0,1), 857, 460, 0.1534320323, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2010,0,1), 45, 821, -0.2105263158, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2010,0,1), 3145, 845, -0.1050085373, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2010,0,1), 7678, 911, -0.1265073948, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2010,0,1), 315, 1435, 0.07508532423, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2010,0,1), 2519, 900, -0.07762724277, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2010,0,1), 10587, 484, -0.02207648254, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2010,0,1), 2176, 680, -0.0660944206, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2010,0,1), 1499, 830, -0.1013189448, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2010,0,1), 1832, 1026, 0.000546149645, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2010,0,1), 782, 619, -0.03575832306, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2010,0,1), 2084, 958, 0.04881731253, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2010,0,1), 1118, 1482, 0.04193849021, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2010,0,1), 2414, 577, 0.01088777219, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2010,0,1), 20419, 902, -0.00902693521, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2010,0,1), 12566, 781, 0.006487785342, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2010,0,1), 1636, 332, -0.00547112462, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2010,0,1), 7486, 271, 0.01408832295, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2010,0,1), 4638, 383, 0.1034975018, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2010,0,1), 4555, 823, 0.02914595572, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2009(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2009,0,1), 750, 462, 0.06685633001, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2009,0,1), 52, 775, -0.1034482759, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2009,0,1), 3145, 843, -0.1397702407, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2009,0,1), 7822, 877, -0.109821327, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2009,0,1), 290, 1407, 0.0394265233, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2009,0,1), 2428, 909, -0.1752717391, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2009,0,1), 10449, 480, -0.02727611246, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2009,0,1), 2263, 661, 0.01753597122, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2009,0,1), 1451, 858, -0.176036343, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2009,0,1), 1835, 1010, -0.02289669862, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2009,0,1), 780, 577, -0.06024096386, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2009,0,1), 1957, 964, 0, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2009,0,1), 1068, 1472, -0.03610108303, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2009,0,1), 2285, 594, -0.05304600083, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2009,0,1), 20419, 938, -0.0008807554925, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2009,0,1), 12546, 794, 0.02895103748, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2009,0,1), 1604, 313, -0.01655426119, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2009,0,1), 7327, 272, -0.04471968709, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2009,0,1), 4436, 396, 0.1051320379, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2009,0,1), 4364, 838, 0.007386888273, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2008(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2008,0,1), 743, 467, 0.1430769231, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2008,0,1), 57, 777, -0.03389830508, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2008,0,1), 3514, 839, -0.04380952381, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2008,0,1), 8790, 920, 0.01442585113, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2008,0,1), 293, 1465, -0.1628571429, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2008,0,1), 2731, 885, -0.1051769332, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2008,0,1), 10826, 475, -0.004414199007, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2008,0,1), 2330, 637, 0.1074144487, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2008,0,1), 1668, 845, -0.06397306397, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2008,0,1), 1831, 995, -0.03934942288, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2008,0,1), 811, 555, 0.09299191375, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2008,0,1), 1987, 961, -0.106162843, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2008,0,1), 1073, 1433, -0.1117549669, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2008,0,1), 2388, 562, -0.05500593589, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2008,0,1), 20605, 913, 0.01039572402, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2008,0,1), 12485, 773, 0.07148987298, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2008,0,1), 1645, 303, 0.0592401803, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2008,0,1), 7382, 269, -0.01389259952, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2008,0,1), 4203, 391, 0.06892166836, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2008,0,1), 4426, 825, 0.0478219697, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2007(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2007,0,1), 703, 460, 0.06033182504, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2007,0,1), 58, 792, 0.6571428571, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2007,0,1), 3656, 814, -0.01455525606, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2007,0,1), 8787, 858, -0.02658690595, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2007,0,1), 279, 1329, -0.01063829787, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2007,0,1), 2944, 854, 0.07484483388, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2007,0,1), 10742, 464, -0.03329733621, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2007,0,1), 2224, 625, 0.0132118451, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2007,0,1), 1761, 812, -0.05627009646, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2007,0,1), 1878, 958, -0.02795031056, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2007,0,1), 830, 527, 0.1096256684, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2007,0,1), 1957, 925, -0.01559356137, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2007,0,1), 1108, 1858, -0.07973421927, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2007,0,1), 2413, 550, -0.04321966693, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2007,0,1), 20437, 871, 0.00476892822, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2007,0,1), 12193, 728, 0.0775008837, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2007,0,1), 1631, 302, 0.07656765677, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2007,0,1), 7670, 257, 0.0350877193, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2007,0,1), 4014, 382, 0.0332046332, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2007,0,1), 4332, 821, 0.04184704185, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2006(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2006,0,1), 650, 435, -0.03703703704, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2006,0,1), 59, 844, 0.7352941176, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2006,0,1), 3675, 784, 0.009060955519, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2006,0,1), 8665, 874, -0.131415397, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2006,0,1), 350, 1343, -0.1025641026, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2006,0,1), 3052, 861, 0.01835168502, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2006,0,1), 10874, 456, -0.01369614512, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2006,0,1), 2104, 633, 0.09754825248, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2006,0,1), 1782, 781, -0.07954545455, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2006,0,1), 1906, 904, 0.04438356164, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2006,0,1), 742, 534, -0.1539338655, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2006,0,1), 2223, 830, 0.1566077003, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2006,0,1), 1208, 1040, 0.2092092092, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2006,0,1), 2527, 518, -0.06718346253, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2006,0,1), 20393, 816, 0.02420772437, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2006,0,1), 11652, 687, 0.01915507741, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2006,0,1), 1553, 287, 0.1927803379, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2006,0,1), 7486, 253, 0.02646373235, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2006,0,1), 3932, 372, 0.08498896247, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2006,0,1), 4224, 799, 0.01392222756, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2005(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2005,0,1), 663, 410, 0.01531393568, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2005,0,1), 35, 939, -0.05405405405, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2005,0,1), 3710, 751, 0.04448198198, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2005,0,1), 9027, 848, -0.103485947, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2005,0,1), 282, 1533, -0.1104100946, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2005,0,1), 2739, 843, 0.09735576923, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2005,0,1), 11112, 449, 0.01832844575, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2005,0,1), 2195, 610, 0.1024610748, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2005,0,1), 1866, 747, -0.05662285137, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2005,0,1), 1932, 839, 0.09523809524, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2005,0,1), 748, 524, -0.1519274376, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2005,0,1), 1988, 886, 0.02739018088, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2005,0,1), 1204, 988, 0.1086556169, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2005,0,1), 2522, 512, -0.05259203606, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2005,0,1), 20340, 822, 0.07607660565, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2005,0,1), 11316, 658, -0.01745246158, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2005,0,1), 1515, 288, 0.09862218999, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2005,0,1), 7410, 245, 0.01077615605, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2005,0,1), 3885, 365, 0.06906989543, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2005,0,1), 4158, 754, -0.02210724365, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2004(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2004,0,1), 675, 384, 0.04976671851, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2004,0,1), 34, 921, -0.05555555556, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2004,0,1), 3642, 730, 0.004412575841, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2004,0,1), 9976, 836, -0.04754630514, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2004,0,1), 390, 1308, 0.1142857143, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2004,0,1), 2997, 759, 0.09499451955, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2004,0,1), 11025, 424, 0.03598947566, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2004,0,1), 1917, 608, -0.03571428571, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2004,0,1), 1936, 734, -0.03344982526, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2004,0,1), 1825, 826, 0.07606132075, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2004,0,1), 877, 526, 0.006888633754, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2004,0,1), 1922, 802, 0.01585623679, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2004,0,1), 999, 738, -0.06197183099, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2004,0,1), 2709, 495, 0.01271028037, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2004,0,1), 19911, 793, 0.05684713376, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2004,0,1), 11433, 630, 0, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2004,0,1), 1302, 302, -0.02178812923, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2004,0,1), 7293, 241, 0.0354962374, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2004,0,1), 3624, 352, 0.0245971162, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2004,0,1), 4166, 722, -0.0400921659, 'Franklin/Hampshire']
      ];
    }
    
    function getFrankHamp2003(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2003,0,1), 653, 368, 0.01872074883, 'Franklin/Hampshire'],
    ['21 - Mining', new Date(2003,0,1), 37, 822, 0.08823529412, 'Franklin/Hampshire'],
    ['23 - Construction', new Date(2003,0,1), 3552, 723, 0.0259965338, 'Franklin/Hampshire'],
    ['31-33 - Manufacturing', new Date(2003,0,1), 10069, 784, -0.1301079914, 'Franklin/Hampshire'],
    ['22 - Utilities', new Date(2003,0,1), 317, 1387, -0.2075, 'Franklin/Hampshire'],
    ['42 - Wholesale Trade', new Date(2003,0,1), 2496, 812, -0.09891696751, 'Franklin/Hampshire'],
    ['44-45 - Retail Trade', new Date(2003,0,1), 10912, 408, -0.0008241003571, 'Franklin/Hampshire'],
    ['48-49 - Transportation and Warehousing', new Date(2003,0,1), 1991, 579, 0.01168699187, 'Franklin/Hampshire'],
    ['51 - Information', new Date(2003,0,1), 1978, 718, -0.05449330784, 'Franklin/Hampshire'],
    ['52 - Finance and Insurance', new Date(2003,0,1), 1764, 791, 0.1045710708, 'Franklin/Hampshire'],
    ['53 - Real Estate and Rental and Leasing', new Date(2003,0,1), 882, 500, 0.009153318078, 'Franklin/Hampshire'],
    ['54 - Professional and Technical Services', new Date(2003,0,1), 1935, 765, 0.02925531915, 'Franklin/Hampshire'],
    ['55 - Management of Companies and Enterprises', new Date(2003,0,1), 1086, 715, -0.0498687664, 'Franklin/Hampshire'],
    ['56 - Administrative and Waste Services', new Date(2003,0,1), 2662, 457, -0.0100409074, 'Franklin/Hampshire'],
    ['61 - Educational Services', new Date(2003,0,1), 18902, 812, 0.01514500537, 'Franklin/Hampshire'],
    ['62 - Health Care and Social Assistance', new Date(2003,0,1), 11517, 600, 0.0574786521, 'Franklin/Hampshire'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2003,0,1), 1379, 290, 0.1349794239, 'Franklin/Hampshire'],
    ['72 - Accommodation and Food Services', new Date(2003,0,1), 7331, 233, 0.08174708573, 'Franklin/Hampshire'],
    ['81 - Other Services, Ex. Public Admin', new Date(2003,0,1), 3634, 349, 0.07260920897, 'Franklin/Hampshire'],
    ['92 - Public Administration', new Date(2003,0,1), 4252, 646, -0.09666454217, 'Franklin/Hampshire']
      ];
    }

    function getHampden2013(data) {
      return [
            ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2013,0,1), 371, 404, 0.6271929825, 'Hampden'],
    ['21 - Mining', new Date(2013,0,1), 71, 1278, 0.02898550725, 'Hampden'],
    ['23 - Construction', new Date(2013,0,1), 8251, 1109, 0.1262626263, 'Hampden'],
    ['31-33 - Manufacturing', new Date(2013,0,1), 19531, 1074, -0.005195334386, 'Hampden'],
    ['22 - Utilities', new Date(2013,0,1), 1738, 1661, -0.001723147616, 'Hampden'],
    ['42 - Wholesale Trade', new Date(2013,0,1), 5795, 1156, 0.003115804051, 'Hampden'],
    ['44-45 - Retail Trade', new Date(2013,0,1), 22320, 515, 0.0004033884631, 'Hampden'],
    ['48-49 - Transportation and Warehousing', new Date(2013,0,1), 7682, 939, -0.04022988506, 'Hampden'],
    ['51 - Information', new Date(2013,0,1), 3339, 1090, 0.1152304609, 'Hampden'],
    ['52 - Finance and Insurance', new Date(2013,0,1), 8569, 1556, -0.0304367504, 'Hampden'],
    ['53 - Real Estate and Rental and Leasing', new Date(2013,0,1), 2230, 745, 0.03432282004, 'Hampden'],
    ['54 - Professional and Technical Services', new Date(2013,0,1), 5509, 1137, 0.015109637, 'Hampden'],
    ['55 - Management of Companies and Enterprises', new Date(2013,0,1), 2587, 1388, -0.03721622627, 'Hampden'],
    ['56 - Administrative and Waste Services', new Date(2013,0,1), 8495, 562, 0.1430301399, 'Hampden'],
    ['61 - Educational Services', new Date(2013,0,1), 17660, 862, -0.1356272331, 'Hampden'],
    ['62 - Health Care and Social Assistance', new Date(2013,0,1), 48003, 799, 0.2173306621, 'Hampden'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2013,0,1), 4644, 356, 0.2685058727, 'Hampden'],
    ['72 - Accommodation and Food Services', new Date(2013,0,1), 15182, 293, 0.0278943805, 'Hampden'],
    ['81 - Other Services, Ex. Public Admin', new Date(2013,0,1), 6475, 519, -0.4884657924, 'Hampden'],
    ['92 - Public Administration', new Date(2013,0,1), 9267, 1175, 0.04100202202, 'Hampden']
      ];
    }
    
    function getHampden2012(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2012,0,1), 213, 452, -0.04054054054, 'Hampden'],
    ['21 - Mining', new Date(2012,0,1), 71, 1158, 0.04411764706, 'Hampden'],
    ['23 - Construction', new Date(2012,0,1), 7777, 1160, 0.100155609, 'Hampden'],
    ['31-33 - Manufacturing', new Date(2012,0,1), 19651, 1082, -0.006772807683, 'Hampden'],
    ['22 - Utilities', new Date(2012,0,1), 1782, 1789, 0.03906705539, 'Hampden'],
    ['42 - Wholesale Trade', new Date(2012,0,1), 5790, 1165, 0.01383295395, 'Hampden'],
    ['44-45 - Retail Trade', new Date(2012,0,1), 22479, 503, 0.007846126255, 'Hampden'],
    ['48-49 - Transportation and Warehousing', new Date(2012,0,1), 7848, 892, -0.003048780488, 'Hampden'],
    ['51 - Information', new Date(2012,0,1), 3048, 1085, 0.04886441844, 'Hampden'],
    ['52 - Finance and Insurance', new Date(2012,0,1), 8472, 1700, -0.0543587454, 'Hampden'],
    ['53 - Real Estate and Rental and Leasing', new Date(2012,0,1), 2152, 757, -0.01510297483, 'Hampden'],
    ['54 - Professional and Technical Services', new Date(2012,0,1), 5568, 1222, 0.05135951662, 'Hampden'],
    ['55 - Management of Companies and Enterprises', new Date(2012,0,1), 2556, 1457, -0.05228031146, 'Hampden'],
    ['56 - Administrative and Waste Services', new Date(2012,0,1), 7896, 546, 0.1615180936, 'Hampden'],
    ['61 - Educational Services', new Date(2012,0,1), 20989, 833, 0.02801586913, 'Hampden'],
    ['62 - Health Care and Social Assistance', new Date(2012,0,1), 39555, 900, 0.0177275768, 'Hampden'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2012,0,1), 3595, 353, -0.04869012966, 'Hampden'],
    ['72 - Accommodation and Food Services', new Date(2012,0,1), 15041, 287, 0.01183989236, 'Hampden'],
    ['81 - Other Services, Ex. Public Admin', new Date(2012,0,1), 12961, 400, 0.0222415017, 'Hampden'],
    ['92 - Public Administration', new Date(2012,0,1), 8889, 1134, -0.02383044147, 'Hampden']
      ];
    }

    function getHampden2011(data) {
      return [
            ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2011,0,1), 228, 431, 0.008849557522, 'Hampden'],
    ['21 - Mining', new Date(2011,0,1), 69, 1144, -0.08, 'Hampden'],
    ['23 - Construction', new Date(2011,0,1), 7326, 1081, 0.0611239861, 'Hampden'],
    ['31-33 - Manufacturing', new Date(2011,0,1), 19633, 1041, -0.03759803922, 'Hampden'],
    ['22 - Utilities', new Date(2011,0,1), 1741, 1763, 0.008106543138, 'Hampden'],
    ['42 - Wholesale Trade', new Date(2011,0,1), 5777, 1114, 0.01564697609, 'Hampden'],
    ['44-45 - Retail Trade', new Date(2011,0,1), 22311, 496, 0.01220397423, 'Hampden'],
    ['48-49 - Transportation and Warehousing', new Date(2011,0,1), 8004, 883, -0.03601108033, 'Hampden'],
    ['51 - Information', new Date(2011,0,1), 2994, 1038, -0.09954887218, 'Hampden'],
    ['52 - Finance and Insurance', new Date(2011,0,1), 8838, 1623, -0.04865446717, 'Hampden'],
    ['53 - Real Estate and Rental and Leasing', new Date(2011,0,1), 2156, 744, -0.07507507508, 'Hampden'],
    ['54 - Professional and Technical Services', new Date(2011,0,1), 5427, 1192, -0.004768017605, 'Hampden'],
    ['55 - Management of Companies and Enterprises', new Date(2011,0,1), 2687, 1433, 0.01167168675, 'Hampden'],
    ['56 - Administrative and Waste Services', new Date(2011,0,1), 7432, 543, 0.2041477641, 'Hampden'],
    ['61 - Educational Services', new Date(2011,0,1), 20431, 827, 0.002551646303, 'Hampden'],
    ['62 - Health Care and Social Assistance', new Date(2011,0,1), 39433, 891, 0.03298056269, 'Hampden'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2011,0,1), 3661, 334, 0.02462916317, 'Hampden'],
    ['72 - Accommodation and Food Services', new Date(2011,0,1), 14770, 281, 0.009362400055, 'Hampden'],
    ['81 - Other Services, Ex. Public Admin', new Date(2011,0,1), 12658, 395, 0.06818565401, 'Hampden'],
    ['92 - Public Administration', new Date(2011,0,1), 8902, 1118, -0.002241649854, 'Hampden']
      ];
    }
    
    function getHampden2010(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2010,0,1), 222, 426, -0.07883817427, 'Hampden'],
    ['21 - Mining', new Date(2010,0,1), 68, 1196, -0.15, 'Hampden'],
    ['23 - Construction', new Date(2010,0,1), 7069, 1081, -0.09615138729, 'Hampden'],
    ['31-33 - Manufacturing', new Date(2010,0,1), 19785, 1026, -0.1377582149, 'Hampden'],
    ['22 - Utilities', new Date(2010,0,1), 1715, 1662, 0.0178041543, 'Hampden'],
    ['42 - Wholesale Trade', new Date(2010,0,1), 5711, 1066, -0.06971819515, 'Hampden'],
    ['44-45 - Retail Trade', new Date(2010,0,1), 22304, 494, -0.03181837913, 'Hampden'],
    ['48-49 - Transportation and Warehousing', new Date(2010,0,1), 7872, 883, -0.118674429, 'Hampden'],
    ['51 - Information', new Date(2010,0,1), 2906, 995, -0.1739624787, 'Hampden'],
    ['52 - Finance and Insurance', new Date(2010,0,1), 8959, 1584, -0.04437333333, 'Hampden'],
    ['53 - Real Estate and Rental and Leasing', new Date(2010,0,1), 2185, 771, -0.1203703704, 'Hampden'],
    ['54 - Professional and Technical Services', new Date(2010,0,1), 5296, 1152, -0.06215689747, 'Hampden'],
    ['55 - Management of Companies and Enterprises', new Date(2010,0,1), 2697, 1398, -0.03952991453, 'Hampden'],
    ['56 - Administrative and Waste Services', new Date(2010,0,1), 6798, 529, -0.05923055632, 'Hampden'],
    ['61 - Educational Services', new Date(2010,0,1), 20417, 809, 0.005664466555, 'Hampden'],
    ['62 - Health Care and Social Assistance', new Date(2010,0,1), 38866, 888, 0.02394815186, 'Hampden'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2010,0,1), 3779, 325, 0.07327463789, 'Hampden'],
    ['72 - Accommodation and Food Services', new Date(2010,0,1), 14865, 277, 0.02758191622, 'Hampden'],
    ['81 - Other Services, Ex. Public Admin', new Date(2010,0,1), 12679, 382, 0.09481046542, 'Hampden'],
    ['92 - Public Administration', new Date(2010,0,1), 9106, 1062, 0.0384308359, 'Hampden']
      ];
    }
    
    function getHampden2009(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2009,0,1), 226, 427, -0.1439393939, 'Hampden'],
 ['21 - Mining', new Date(2009,0,1), 75, 1168, -0.1176470588, 'Hampden'],
 ['23 - Construction', new Date(2009,0,1), 6904, 1035, -0.1322272499, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2009,0,1), 20400, 978, -0.1355199593, 'Hampden'],
 ['22 - Utilities', new Date(2009,0,1), 1727, 1605, 0.04857316333, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2009,0,1), 5688, 1028, -0.04403361345, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2009,0,1), 22042, 493, -0.06343743361, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2009,0,1), 8303, 878, -0.08355408389, 'Hampden'],
 ['51 - Information', new Date(2009,0,1), 3325, 1058, -0.04836863194, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2009,0,1), 9290, 1536, 0.03268119164, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2009,0,1), 2331, 740, -0.1366666667, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2009,0,1), 5453, 1131, -0.05771556938, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2009,0,1), 2656, 1435, -0.0774574505, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2009,0,1), 6172, 526, -0.1675209064, 'Hampden'],
 ['61 - Educational Services', new Date(2009,0,1), 20379, 816, 0.004040005912, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2009,0,1), 38174, 882, 0.02734269875, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2009,0,1), 3573, 342, 0.0226101889, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2009,0,1), 14633, 274, 0.01210402545, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2009,0,1), 11850, 409, 0.04802334837, 'Hampden'],
 ['92 - Public Administration', new Date(2009,0,1), 8922, 1062, 0.03407510431, 'Hampden']
      ];
    }
    
    function getHampden2008(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2008,0,1), 241, 394, -0.2827380952, 'Hampden'],
 ['21 - Mining', new Date(2008,0,1), 80, 1209, -0.1397849462, 'Hampden'],
 ['23 - Construction', new Date(2008,0,1), 7821, 1052, -0.05589087397, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2008,0,1), 22946, 973, -0.04780479708, 'Hampden'],
 ['22 - Utilities', new Date(2008,0,1), 1685, 1602, 0.08151476252, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2008,0,1), 6139, 1035, 0.03611814346, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2008,0,1), 23037, 486, -0.03140766902, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2008,0,1), 8932, 869, -0.01727362746, 'Hampden'],
 ['51 - Information', new Date(2008,0,1), 3518, 1063, 0.03501029715, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2008,0,1), 9375, 1635, 0.04398663697, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2008,0,1), 2484, 711, -0.1314685315, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2008,0,1), 5647, 1116, -0.02469775475, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2008,0,1), 2808, 1472, -0.07752956636, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2008,0,1), 7226, 515, -0.0605824233, 'Hampden'],
 ['61 - Educational Services', new Date(2008,0,1), 20302, 804, 0.01596356903, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2008,0,1), 37957, 853, 0.04455391051, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2008,0,1), 3521, 342, -0.01812604573, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2008,0,1), 14466, 273, 0.007030978072, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2008,0,1), 11581, 400, 0.03318761709, 'Hampden'],
 ['92 - Public Administration', new Date(2008,0,1), 8769, 996, 0.05282747028, 'Hampden']
      ];
    }
    
    function getHampden2007(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2007,0,1), 264, 387, -0.3282442748, 'Hampden'],
 ['21 - Mining', new Date(2007,0,1), 85, 1187, -0.08602150538, 'Hampden'],
 ['23 - Construction', new Date(2007,0,1), 7956, 985, -0.03305785124, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2007,0,1), 23598, 952, -0.04310449698, 'Hampden'],
 ['22 - Utilities', new Date(2007,0,1), 1647, 1515, 0.02425373134, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2007,0,1), 5950, 1017, -0.01064183572, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2007,0,1), 23535, 477, -0.02582888365, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2007,0,1), 9060, 852, 0.01195130124, 'Hampden'],
 ['51 - Information', new Date(2007,0,1), 3494, 1001, -0.003422703936, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2007,0,1), 8996, 1563, -0.00706401766, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2007,0,1), 2700, 682, -0.01567626686, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2007,0,1), 5787, 1021, 0.02388535032, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2007,0,1), 2879, 1351, -0.04637297118, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2007,0,1), 7414, 478, -0.04924339574, 'Hampden'],
 ['61 - Educational Services', new Date(2007,0,1), 20297, 774, 0.04167308186, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2007,0,1), 37158, 825, 0.03926833361, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2007,0,1), 3494, 339, -0.04613704614, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2007,0,1), 14458, 263, 0.01161488945, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2007,0,1), 11307, 398, 0.02697547684, 'Hampden'],
 ['92 - Public Administration', new Date(2007,0,1), 8628, 979, 0.05052964812, 'Hampden']
      ];
    }
    
    function getHampden2006(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2006,0,1), 336, 532, -0.125, 'Hampden'],
 ['21 - Mining', new Date(2006,0,1), 93, 1194, 0.2236842105, 'Hampden'],
 ['23 - Construction', new Date(2006,0,1), 8284, 959, 0.05340793489, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2006,0,1), 24098, 914, -0.02583175001, 'Hampden'],
 ['22 - Utilities', new Date(2006,0,1), 1558, 1444, -0.01392405063, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2006,0,1), 5925, 966, -0.08649398705, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2006,0,1), 23784, 471, -0.03840866823, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2006,0,1), 9089, 838, 0.01598479767, 'Hampden'],
 ['51 - Information', new Date(2006,0,1), 3399, 859, -0.05714285714, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2006,0,1), 8980, 1474, -0.05682176242, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2006,0,1), 2860, 657, 0.09746738296, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2006,0,1), 5790, 977, 0.07500928333, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2006,0,1), 3044, 1428, -0.01104613385, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2006,0,1), 7692, 470, 0.02219269103, 'Hampden'],
 ['61 - Educational Services', new Date(2006,0,1), 19983, 748, 0.02772063361, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2006,0,1), 36338, 790, 0.02452915304, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2006,0,1), 3586, 328, -0.03757380569, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2006,0,1), 14365, 255, -0.006363699246, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2006,0,1), 11209, 389, 0.06945902109, 'Hampden'],
 ['92 - Public Administration', new Date(2006,0,1), 8329, 975, 0.02763726095, 'Hampden']
      ];
    }
    
    function getHampden2005(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2005,0,1), 393, 486, 0.09776536313, 'Hampden'],
 ['21 - Mining', new Date(2005,0,1), 93, 1151, 0.2567567568, 'Hampden'],
 ['23 - Construction', new Date(2005,0,1), 8228, 927, 0.04178272981, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2005,0,1), 24661, 874, -0.01304678433, 'Hampden'],
 ['22 - Utilities', new Date(2005,0,1), 1608, 1389, 0.03808908974, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2005,0,1), 6014, 903, -0.0423566879, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2005,0,1), 24159, 465, -0.02745461133, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2005,0,1), 8953, 806, 0.002912512602, 'Hampden'],
 ['51 - Information', new Date(2005,0,1), 3506, 841, -0.1282943809, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2005,0,1), 9060, 1406, -0.07936185347, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2005,0,1), 2743, 637, 0.1109761037, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2005,0,1), 5652, 943, 0.04145936982, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2005,0,1), 3019, 1364, -0.001323188885, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2005,0,1), 7798, 460, 0.1181531402, 'Hampden'],
 ['61 - Educational Services', new Date(2005,0,1), 19485, 735, -0.01640585563, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2005,0,1), 35754, 754, 0.01288988357, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2005,0,1), 3663, 302, 0.01919866444, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2005,0,1), 14292, 251, 0.003369839933, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2005,0,1), 11010, 391, 0.06934731935, 'Hampden'],
 ['92 - Public Administration', new Date(2005,0,1), 8213, 940, 0.01045767717, 'Hampden']
      ];
    }
    
    function getHampden2004(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2004,0,1), 384, 496, 0.0756302521, 'Hampden'],
 ['21 - Mining', new Date(2004,0,1), 76, 1139, 0.02702702703, 'Hampden'],
 ['23 - Construction', new Date(2004,0,1), 7864, 894, -0.02985442882, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2004,0,1), 24737, 861, -0.08722925353, 'Hampden'],
 ['22 - Utilities', new Date(2004,0,1), 1580, 1331, 0.03267973856, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2004,0,1), 6486, 875, 0.02302839117, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2004,0,1), 24734, 461, -0.01296939223, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2004,0,1), 8946, 803, -0.0632460733, 'Hampden'],
 ['51 - Information', new Date(2004,0,1), 3605, 859, -0.1793762804, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2004,0,1), 9521, 1317, -0.05159876482, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2004,0,1), 2606, 624, 0.06715806716, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2004,0,1), 5386, 915, 0.01088588589, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2004,0,1), 3078, 1295, -0.1747989276, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2004,0,1), 7525, 449, 0.006823655339, 'Hampden'],
 ['61 - Educational Services', new Date(2004,0,1), 19444, 725, 0.01328886341, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2004,0,1), 35468, 726, 0.00947772876, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2004,0,1), 3726, 306, 0.07625649913, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2004,0,1), 14457, 245, 0.005214851898, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2004,0,1), 10481, 400, 0.09553674088, 'Hampden'],
 ['92 - Public Administration', new Date(2004,0,1), 8105, 904, -0.06268069851, 'Hampden']
      ];
    }
    
    function getHampden2003(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2003,0,1), 358, 378, 0.01994301994, 'Hampden'],
 ['21 - Mining', new Date(2003,0,1), 74, 1076, -0.01333333333, 'Hampden'],
 ['23 - Construction', new Date(2003,0,1), 7898, 883, -0.02070675759, 'Hampden'],
 ['31-33 - Manufacturing', new Date(2003,0,1), 24987, 832, -0.1501598531, 'Hampden'],
 ['22 - Utilities', new Date(2003,0,1), 1549, 1362, -0.07467144564, 'Hampden'],
 ['42 - Wholesale Trade', new Date(2003,0,1), 6280, 847, -0.04646219253, 'Hampden'],
 ['44-45 - Retail Trade', new Date(2003,0,1), 24841, 450, -0.03089767097, 'Hampden'],
 ['48-49 - Transportation and Warehousing', new Date(2003,0,1), 8927, 777, -0.1047934216, 'Hampden'],
 ['51 - Information', new Date(2003,0,1), 4022, 822, -0.1466157437, 'Hampden'],
 ['52 - Finance and Insurance', new Date(2003,0,1), 9841, 1214, -0.04074471196, 'Hampden'],
 ['53 - Real Estate and Rental and Leasing', new Date(2003,0,1), 2469, 608, 0.0118852459, 'Hampden'],
 ['54 - Professional and Technical Services', new Date(2003,0,1), 5427, 882, 0.02940060698, 'Hampden'],
 ['55 - Management of Companies and Enterprises', new Date(2003,0,1), 3023, 1230, -0.2080167671, 'Hampden'],
 ['56 - Administrative and Waste Services', new Date(2003,0,1), 6974, 459, -0.1166561115, 'Hampden'],
 ['61 - Educational Services', new Date(2003,0,1), 19810, 689, 0.05805693532, 'Hampden'],
 ['62 - Health Care and Social Assistance', new Date(2003,0,1), 35299, 694, 0.03029683897, 'Hampden'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2003,0,1), 3594, 317, 0.04995617879, 'Hampden'],
 ['72 - Accommodation and Food Services', new Date(2003,0,1), 14244, 244, -0.01117667477, 'Hampden'],
 ['81 - Other Services, Ex. Public Admin', new Date(2003,0,1), 10296, 387, 0.1542600897, 'Hampden'],
 ['92 - Public Administration', new Date(2003,0,1), 8128, 865, -0.09042076992, 'Hampden']
      ];
    }

    function getAllMass2013(data) {
      return [
            ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2013,0,1), 8458, 912, 0.2270419266, 'MA'],
    ['21 - Mining', new Date(2013,0,1), 953, 1132, -0.04890219561, 'MA'],
    ['23 - Construction', new Date(2013,0,1), 142311, 1229, 0.1710140873, 'MA'],
    ['31-33 - Manufacturing', new Date(2013,0,1), 251268, 1487, -0.01082600446, 'MA'],
    ['22 - Utilities', new Date(2013,0,1), 13712, 1768, -0.02579040853, 'MA'],
    ['42 - Wholesale Trade', new Date(2013,0,1), 124342, 1543, 0.006744447773, 'MA'],
    ['44-45 - Retail Trade', new Date(2013,0,1), 349092, 548, 0.01572356323, 'MA'],
    ['48-49 - Transportation and Warehousing', new Date(2013,0,1), 96677, 947, 0.003956550636, 'MA'],
    ['51 - Information', new Date(2013,0,1), 92672, 1697, 0.03137346555, 'MA'],
    ['52 - Finance and Insurance', new Date(2013,0,1), 166034, 1939, -0.01291860624, 'MA'],
    ['53 - Real Estate and Rental and Leasing', new Date(2013,0,1), 43575, 1464, 0.08665835411, 'MA'],
    ['54 - Professional and Technical Services', new Date(2013,0,1), 279245, 1971, 0.0688067425, 'MA'],
    ['55 - Management of Companies and Enterprises', new Date(2013,0,1), 64679, 1982, 0.1018193588, 'MA'],
    ['56 - Administrative and Waste Services', new Date(2013,0,1), 176274, 770, 0.08128964189, 'MA'],
    ['61 - Educational Services', new Date(2013,0,1), 293735, 1111, -0.09952207088, 'MA'],
    ['62 - Health Care and Social Assistance', new Date(2013,0,1), 583858, 993, 0.09861736238, 'MA'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2013,0,1), 68797, 634, 0.2584279939, 'MA'],
    ['72 - Accommodation and Food Services', new Date(2013,0,1), 298287, 402, 0.120141648, 'MA'],
    ['81 - Other Services, Ex. Public Admin', new Date(2013,0,1), 113954, 629, -0.1695585953, 'MA'],
    ['92 - Public Administration', new Date(2013,0,1), 136329, 1326, 0.02033499985, 'MA']
      ];
    }
    
    function getAllMass2012(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2012,0,1), 7174, 1003, 0.06312981624, 'MA'],
    ['21 - Mining', new Date(2012,0,1), 882, 1107, -0.1575931232, 'MA'],
    ['23 - Construction', new Date(2012,0,1), 126579, 1237, 0.07287614107, 'MA'],
    ['31-33 - Manufacturing', new Date(2012,0,1), 252017, 1530, -0.008911331076, 'MA'],
    ['22 - Utilities', new Date(2012,0,1), 13897, 1852, -0.01690718732, 'MA'],
    ['42 - Wholesale Trade', new Date(2012,0,1), 121866, 1586, -0.008881081345, 'MA'],
    ['44-45 - Retail Trade', new Date(2012,0,1), 346122, 544, 0.01671405743, 'MA'],
    ['48-49 - Transportation and Warehousing', new Date(2012,0,1), 97097, 943, 0.01146922788, 'MA'],
    ['51 - Information', new Date(2012,0,1), 92386, 1791, 0.01803876627, 'MA'],
    ['52 - Finance and Insurance', new Date(2012,0,1), 166361, 2414, -0.01611024041, 'MA'],
    ['53 - Real Estate and Rental and Leasing', new Date(2012,0,1), 41064, 1275, 0.0317069494, 'MA'],
    ['54 - Professional and Technical Services', new Date(2012,0,1), 270158, 2075, 0.06865029292, 'MA'],
    ['55 - Management of Companies and Enterprises', new Date(2012,0,1), 63297, 2226, 0.09538807649, 'MA'],
    ['56 - Administrative and Waste Services', new Date(2012,0,1), 164727, 788, 0.04381134634, 'MA'],
    ['61 - Educational Services', new Date(2012,0,1), 331495, 1059, 0.02797434832, 'MA'],
    ['62 - Health Care and Social Assistance', new Date(2012,0,1), 541000, 1034, 0.03590829627, 'MA'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2012,0,1), 55904, 674, 0.03449296817, 'MA'],
    ['72 - Accommodation and Food Services', new Date(2012,0,1), 275566, 386, 0.06567717135, 'MA'],
    ['81 - Other Services, Ex. Public Admin', new Date(2012,0,1), 141719, 551, 0.05398631563, 'MA'],
    ['92 - Public Administration', new Date(2012,0,1), 134321, 1236, -0.02335439495, 'MA']
      ];
    }

    function getAllMass2011(data) {
      return [
            ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2011,0,1), 6893, 1033, 0.05818237642, 'MA'],
    ['21 - Mining', new Date(2011,0,1), 1002, 1104, -0.1786885246, 'MA'],
    ['23 - Construction', new Date(2011,0,1), 121528, 1205, -0.009890664972, 'MA'],
    ['31-33 - Manufacturing', new Date(2011,0,1), 254018, 1495, -0.0189324888, 'MA'],
    ['22 - Utilities', new Date(2011,0,1), 14075, 1861, 0.01485326988, 'MA'],
    ['42 - Wholesale Trade', new Date(2011,0,1), 123509, 1579, -0.03106637692, 'MA'],
    ['44-45 - Retail Trade', new Date(2011,0,1), 343688, 536, 0.0269490153, 'MA'],
    ['48-49 - Transportation and Warehousing', new Date(2011,0,1), 96296, 931, 0.007080182809, 'MA'],
    ['51 - Information', new Date(2011,0,1), 89853, 1767, -0.006116850652, 'MA'],
    ['52 - Finance and Insurance', new Date(2011,0,1), 168207, 2312, -0.03147851722, 'MA'],
    ['53 - Real Estate and Rental and Leasing', new Date(2011,0,1), 40100, 1211, -0.007843234283, 'MA'],
    ['54 - Professional and Technical Services', new Date(2011,0,1), 261268, 1993, 0.02282354231, 'MA'],
    ['55 - Management of Companies and Enterprises', new Date(2011,0,1), 58702, 2366, -0.00510143552, 'MA'],
    ['56 - Administrative and Waste Services', new Date(2011,0,1), 163022, 765, 0.07836613197, 'MA'],
    ['61 - Educational Services', new Date(2011,0,1), 326199, 1038, 0.009048052117, 'MA'],
    ['62 - Health Care and Social Assistance', new Date(2011,0,1), 531448, 1012, 0.03973893445, 'MA'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2011,0,1), 54669, 666, 0.03732306174, 'MA'],
    ['72 - Accommodation and Food Services', new Date(2011,0,1), 266294, 378, 0.05424140812, 'MA'],
    ['81 - Other Services, Ex. Public Admin', new Date(2011,0,1), 137221, 545, 0.05730290329, 'MA'],
    ['92 - Public Administration', new Date(2011,0,1), 133612, 1221, -0.01695887932, 'MA']
      ];
    }
    
    function getAllMass2010(data) {
      return [
          ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2010,0,1), 6748, 911, 0.03595574677, 'MA'],
    ['21 - Mining', new Date(2010,0,1), 1047, 1084, -0.136543015, 'MA'],
    ['23 - Construction', new Date(2010,0,1), 117981, 1177, -0.03300908946, 'MA'],
    ['31-33 - Manufacturing', new Date(2010,0,1), 254283, 1444, -0.01618736429, 'MA'],
    ['22 - Utilities', new Date(2010,0,1), 14136, 1784, 0.01953467954, 'MA'],
    ['42 - Wholesale Trade', new Date(2010,0,1), 122958, 1525, -0.03304108345, 'MA'],
    ['44-45 - Retail Trade', new Date(2010,0,1), 340432, 533, 0.01655197371, 'MA'],
    ['48-49 - Transportation and Warehousing', new Date(2010,0,1), 95996, 906, 0.003723787793, 'MA'],
    ['51 - Information', new Date(2010,0,1), 90749, 1697, 0.003603054718, 'MA'],
    ['52 - Finance and Insurance', new Date(2010,0,1), 169085, 2218, -0.02549458608, 'MA'],
    ['53 - Real Estate and Rental and Leasing', new Date(2010,0,1), 39802, 1155, -0.01448626749, 'MA'],
    ['54 - Professional and Technical Services', new Date(2010,0,1), 252803, 1939, -0.01003801876, 'MA'],
    ['55 - Management of Companies and Enterprises', new Date(2010,0,1), 57785, 2010, -0.01981744521, 'MA'],
    ['56 - Administrative and Waste Services', new Date(2010,0,1), 157813, 741, 0.03931067156, 'MA'],
    ['61 - Educational Services', new Date(2010,0,1), 322474, 1018, -0.002511419109, 'MA'],
    ['62 - Health Care and Social Assistance', new Date(2010,0,1), 522247, 999, 0.02220654425, 'MA'],
    ['71 - Arts, Entertainment, and Recreation', new Date(2010,0,1), 54040, 650, 0.02459965803, 'MA'],
    ['72 - Accommodation and Food Services', new Date(2010,0,1), 258583, 372, 0.02330068385, 'MA'],
    ['81 - Other Services, Ex. Public Admin', new Date(2010,0,1), 134460, 530, 0.03605048301, 'MA'],
    ['92 - Public Administration', new Date(2010,0,1), 137533, 1143, 0.01178357882, 'MA']
      ];
    }
    
    function getAllMass2009(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2009,0,1), 6514, 891, -0.006254767353, 'MA'],
 ['21 - Mining', new Date(2009,0,1), 1220, 1023, -0.1806581598, 'MA'],
 ['23 - Construction', new Date(2009,0,1), 122742, 1172, -0.1777622959, 'MA'],
 ['31-33 - Manufacturing', new Date(2009,0,1), 258920, 1332, -0.123089845, 'MA'],
 ['22 - Utilities', new Date(2009,0,1), 13869, 1762, 0.03965517241, 'MA'],
 ['42 - Wholesale Trade', new Date(2009,0,1), 127469, 1471, -0.07734790634, 'MA'],
 ['44-45 - Retail Trade', new Date(2009,0,1), 334669, 533, -0.04225952678, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2009,0,1), 95619, 897, -0.06251286828, 'MA'],
 ['51 - Information', new Date(2009,0,1), 90406, 1561, -0.03698417095, 'MA'],
 ['52 - Finance and Insurance', new Date(2009,0,1), 173674, 2131, -0.04758405493, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2009,0,1), 40417, 1065, -0.07755334931, 'MA'],
 ['54 - Professional and Technical Services', new Date(2009,0,1), 255438, 1840, 0.01524226659, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2009,0,1), 59003, 1950, -0.03673289472, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2009,0,1), 151175, 740, -0.1331062522, 'MA'],
 ['61 - Educational Services', new Date(2009,0,1), 323274, 987, 0.02501387193, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2009,0,1), 511136, 981, 0.0446206134, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2009,0,1), 52702, 636, -0.01160893457, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2009,0,1), 252593, 368, -0.007843984446, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2009,0,1), 129784, 542, 0.02693464156, 'MA'],
 ['92 - Public Administration', new Date(2009,0,1), 135917, 1131, 0.01172380938, 'MA']
      ];
    }
    
    function getAllMass2008(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2008,0,1), 6508, 879, -0.0229695241, 'MA'],
 ['21 - Mining', new Date(2008,0,1), 1267, 996, -0.2625145518, 'MA'],
 ['23 - Construction', new Date(2008,0,1), 144233, 1178, -0.0553310497, 'MA'],
 ['31-33 - Manufacturing', new Date(2008,0,1), 286458, 1327, -0.04306344768, 'MA'],
 ['22 - Utilities', new Date(2008,0,1), 13668, 1712, 0.05316689783, 'MA'],
 ['42 - Wholesale Trade', new Date(2008,0,1), 136527, 1479, -0.002287342882, 'MA'],
 ['44-45 - Retail Trade', new Date(2008,0,1), 348176, 532, -0.008328111649, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2008,0,1), 101241, 899, 0.006491828051, 'MA'],
 ['51 - Information', new Date(2008,0,1), 95197, 1590, 0.02185463874, 'MA'],
 ['52 - Finance and Insurance', new Date(2008,0,1), 179999, 2286, -0.003487812035, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2008,0,1), 42454, 1086, -0.04916123541, 'MA'],
 ['54 - Professional and Technical Services', new Date(2008,0,1), 262502, 1855, 0.06761076632, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2008,0,1), 61461, 1934, -0.01575786692, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2008,0,1), 168860, 744, -0.007902235539, 'MA'],
 ['61 - Educational Services', new Date(2008,0,1), 318545, 977, 0.02819801878, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2008,0,1), 500348, 958, 0.06302543325, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2008,0,1), 54391, 655, 0.04678598922, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2008,0,1), 257074, 371, 0.0282836606, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2008,0,1), 129707, 542, 0.05403999772, 'MA'],
 ['92 - Public Administration', new Date(2008,0,1), 137140, 1108, 0.0316320006, 'MA']
      ];
    }
    
    function getAllMass2007(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2007,0,1), 6555, 883, -0.05096279137, 'MA'],
 ['21 - Mining', new Date(2007,0,1), 1489, 1056, -0.1907608696, 'MA'],
 ['23 - Construction', new Date(2007,0,1), 149278, 1120, -0.01461463312, 'MA'],
 ['31-33 - Manufacturing', new Date(2007,0,1), 295264, 1339, -0.03357532354, 'MA'],
 ['22 - Utilities', new Date(2007,0,1), 13340, 1625, 0.03999376316, 'MA'],
 ['42 - Wholesale Trade', new Date(2007,0,1), 138155, 1438, 0.0412176115, 'MA'],
 ['44-45 - Retail Trade', new Date(2007,0,1), 349436, 531, -0.01813205803, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2007,0,1), 101995, 892, 0.01262869454, 'MA'],
 ['51 - Information', new Date(2007,0,1), 93878, 1535, 0.007047768207, 'MA'],
 ['52 - Finance and Insurance', new Date(2007,0,1), 182351, 2230, 0.02977202266, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2007,0,1), 43815, 1087, -0.02868607152, 'MA'],
 ['54 - Professional and Technical Services', new Date(2007,0,1), 251603, 1784, 0.06593825597, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2007,0,1), 61253, 1917, -0.06883446588, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2007,0,1), 174387, 727, 0.05768577598, 'MA'],
 ['61 - Educational Services', new Date(2007,0,1), 315385, 934, 0.04097078278, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2007,0,1), 489303, 914, 0.06592439455, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2007,0,1), 53321, 648, 0.03664748425, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2007,0,1), 254590, 363, 0.03178559415, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2007,0,1), 126380, 532, 0.04781408306, 'MA'],
 ['92 - Public Administration', new Date(2007,0,1), 134342, 1082, 0.02576985042, 'MA']
      ];
    }
    
    function getAllMass2006(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2006,0,1), 6661, 826, -0.02900874636, 'MA'],
 ['21 - Mining', new Date(2006,0,1), 1718, 1032, -0.06068890104, 'MA'],
 ['23 - Construction', new Date(2006,0,1), 152681, 1056, 0.01679553007, 'MA'],
 ['31-33 - Manufacturing', new Date(2006,0,1), 299349, 1256, -0.04450175715, 'MA'],
 ['22 - Utilities', new Date(2006,0,1), 12978, 1545, -0.0555272542, 'MA'],
 ['42 - Wholesale Trade', new Date(2006,0,1), 136840, 1399, 0.0116438103, 'MA'],
 ['44-45 - Retail Trade', new Date(2006,0,1), 351100, 525, -0.014334402, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2006,0,1), 100588, 870, -0.01597519101, 'MA'],
 ['51 - Information', new Date(2006,0,1), 93161, 1491, 0.005808492491, 'MA'],
 ['52 - Finance and Insurance', new Date(2006,0,1), 180629, 2004, 0.04484112982, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2006,0,1), 44649, 1045, -0.003570711241, 'MA'],
 ['54 - Professional and Technical Services', new Date(2006,0,1), 245878, 1687, 0.0805259411, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2006,0,1), 62445, 1711, -0.03456965724, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2006,0,1), 170205, 687, 0.04536967657, 'MA'],
 ['61 - Educational Services', new Date(2006,0,1), 309809, 896, 0.03497360861, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2006,0,1), 470683, 878, 0.04257039321, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2006,0,1), 51960, 583, 0.01363609762, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2006,0,1), 250003, 350, 0.02069120379, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2006,0,1), 123057, 515, 0.0441301249, 'MA'],
 ['92 - Public Administration', new Date(2006,0,1), 132935, 1038, 0.02383703019, 'MA']
      ];
    }
    
    function getAllMass2005(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2005,0,1), 6907, 845, 0.01978443821, 'MA'],
 ['21 - Mining', new Date(2005,0,1), 1840, 969, 0.05142857143, 'MA'],
 ['23 - Construction', new Date(2005,0,1), 151492, 1017, 0.01761268221, 'MA'],
 ['31-33 - Manufacturing', new Date(2005,0,1), 305522, 1202, -0.06317803548, 'MA'],
 ['22 - Utilities', new Date(2005,0,1), 12827, 1514, -0.06638037703, 'MA'],
 ['42 - Wholesale Trade', new Date(2005,0,1), 132686, 1293, -0.01896473963, 'MA'],
 ['44-45 - Retail Trade', new Date(2005,0,1), 355889, 529, 0.003151328604, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2005,0,1), 100723, 842, -0.03552516925, 'MA'],
 ['51 - Information', new Date(2005,0,1), 93221, 1407, -0.03866144168, 'MA'],
 ['52 - Finance and Insurance', new Date(2005,0,1), 177079, 1895, -0.0009421933358, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2005,0,1), 45109, 966, 0.01338934693, 'MA'],
 ['54 - Professional and Technical Services', new Date(2005,0,1), 236039, 1602, 0.06182775141, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2005,0,1), 65781, 1557, 0.01488829919, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2005,0,1), 164876, 659, 0.04844935361, 'MA'],
 ['61 - Educational Services', new Date(2005,0,1), 302972, 877, 0.01955505601, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2005,0,1), 459041, 835, 0.03169191352, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2005,0,1), 51436, 571, 0.01238018383, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2005,0,1), 246747, 340, 0.0175595594, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2005,0,1), 120613, 502, 0.02760430423, 'MA'],
 ['92 - Public Administration', new Date(2005,0,1), 130967, 1000, -0.02772065538, 'MA']
      ];
    }
    
    function getAllMass2004(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2004,0,1), 6860, 750, 0.0433460076, 'MA'],
 ['21 - Mining', new Date(2004,0,1), 1829, 957, 0.2177097204, 'MA'],
 ['23 - Construction', new Date(2004,0,1), 150159, 990, -0.01741907199, 'MA'],
 ['31-33 - Manufacturing', new Date(2004,0,1), 313291, 1171, -0.09826152031, 'MA'],
 ['22 - Utilities', new Date(2004,0,1), 13741, 1443, -0.03565162468, 'MA'],
 ['42 - Wholesale Trade', new Date(2004,0,1), 135265, 1288, -0.00216879735, 'MA'],
 ['44-45 - Retail Trade', new Date(2004,0,1), 356206, 520, -0.003845282607, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2004,0,1), 102221, 831, -0.0486999088, 'MA'],
 ['51 - Information', new Date(2004,0,1), 92623, 1341, -0.1277204878, 'MA'],
 ['52 - Finance and Insurance', new Date(2004,0,1), 172877, 1977, -0.05109613252, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2004,0,1), 44809, 923, 0.01343435486, 'MA'],
 ['54 - Professional and Technical Services', new Date(2004,0,1), 227554, 1535, -0.01393595355, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2004,0,1), 64681, 1440, -0.1030107199, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2004,0,1), 162818, 635, 0.03055237324, 'MA'],
 ['61 - Educational Services', new Date(2004,0,1), 299340, 859, -0.004251242441, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2004,0,1), 451464, 801, 0.0240762164, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2004,0,1), 51261, 561, 0.04034664015, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2004,0,1), 244935, 333, 0.01363598742, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2004,0,1), 117856, 499, 0.01108403967, 'MA'],
 ['92 - Public Administration', new Date(2004,0,1), 129840, 981, -0.05052322138, 'MA']
      ];
    }
    
    function getAllMass2003(data) {
      return [
       ['11 - Agriculture, Forestry, Fishing & Hunting', new Date(2003,0,1), 6773, 676, 0.05696004994, 'MA'],
 ['21 - Mining', new Date(2003,0,1), 1750, 941, 0.2289325843, 'MA'],
 ['23 - Construction', new Date(2003,0,1), 148870, 978, -0.01586567066, 'MA'],
 ['31-33 - Manufacturing', new Date(2003,0,1), 326126, 1122, -0.1621295269, 'MA'],
 ['22 - Utilities', new Date(2003,0,1), 13739, 1434, -0.0921765561, 'MA'],
 ['42 - Wholesale Trade', new Date(2003,0,1), 135251, 1237, -0.04135775343, 'MA'],
 ['44-45 - Retail Trade', new Date(2003,0,1), 354771, 502, -0.01184600472, 'MA'],
 ['48-49 - Transportation and Warehousing', new Date(2003,0,1), 104433, 796, -0.07685984018, 'MA'],
 ['51 - Information', new Date(2003,0,1), 96970, 1265, -0.1764825776, 'MA'],
 ['52 - Finance and Insurance', new Date(2003,0,1), 177246, 1689, -0.0366489301, 'MA'],
 ['53 - Real Estate and Rental and Leasing', new Date(2003,0,1), 44513, 861, -0.008597073431, 'MA'],
 ['54 - Professional and Technical Services', new Date(2003,0,1), 222295, 1435, -0.1032514422, 'MA'],
 ['55 - Management of Companies and Enterprises', new Date(2003,0,1), 64816, 1304, -0.09883906847, 'MA'],
 ['56 - Administrative and Waste Services', new Date(2003,0,1), 157257, 610, -0.07578518031, 'MA'],
 ['61 - Educational Services', new Date(2003,0,1), 297161, 831, 0.01001995153, 'MA'],
 ['62 - Health Care and Social Assistance', new Date(2003,0,1), 444940, 765, 0.03531963114, 'MA'],
 ['71 - Arts, Entertainment, and Recreation', new Date(2003,0,1), 50807, 545, 0.08189774494, 'MA'],
 ['72 - Accommodation and Food Services', new Date(2003,0,1), 242489, 321, 0.01997989392, 'MA'],
 ['81 - Other Services, Ex. Public Admin', new Date(2003,0,1), 117373, 489, 0.03314027181, 'MA'],
 ['92 - Public Administration', new Date(2003,0,1), 134701, 920, -0.04134907587, 'MA']
      ];
    }
