// Position eines Gestirns, englische Texte und Defaultwerte
// Letzte �nderung 25.03.2016

// Texte in HTML-Schreibweise:

var text101 = "الطول الجغرافي:";
var text103 = "العرض الجغرافي:";
var text105 = "التاريخ:";
var text106 = "الوقت:";
var text107 = "h (UT)";
var text108 = "المطلع المستقيم:";
var text109 = "الميل:";
var text110 = "إعادة تعيين";
var text111 = ["إبدأ", "توقف مؤقت", "متابعة"];
var text12 = "تركيز الاهتمام على:";

var author = "&copy;&nbsp; W. Fendt 1999";

// Symbole und Einheiten:

var dateSeparator = "/";
var timeSeparator = ":";
var decimalSeparator = ".";                                // Dezimaltrennzeichen (Komma/Punkt)
var degree = "&deg;";

// Texte in Unicode-Schreibweise:

var text102 = ["(طول شرقي)", "(طول غربي)"];
var text104 = ["(عرض شمالي)", "(عرض جنوبي)"];
var text13 = ["", "نقطة الرصد", "الأفق",
              "نقطة الشمال", "نقطة الغرب", "نقطة الجنوب", "نقطة الشرق", 
              "سمت الرأس", "النظير", "خط منتصف النهار", "دائرة الارتفاع", 
              "القطب السماوي الشمالي", "القطب السماوي الجنوبي", "محور القبة السماوية", "دائرة الاستواء السماوية",
              "اعتدال ربيعي", "دائرة الساعة", "وقت نجمي",
              "زاوية الساعة", "النجم", "مسار النجم",
              "مطلع مستقيم", "الميل", "زاوية الانحراف", "الارتفاع", "المثلث البحري"];
var text14 = "الوقت:";
var text15 = "زمن نجمي:";
var text16 = "زاوية الانحراف:";
var text17 = "زاوية الساعة:";
var text18 = "الارتفاع:";

// Symbole und Einheiten:

var symbolObserver = "موقع الراصد";                                  // Beobachtungsort
var symbolNorth = "شمال";                                     // Nordpunkt
var symbolWest = "غرب";                                      // Westpunkt
var symbolSouth = "جنوب";                                     // S�dpunkt
var symbolEast = "شرق";                                      // Ostpunkt
var symbolZenith = "سمت الرأس";                                   // Zenit
var symbolNadir = "النظير";                                    // Nadir
var symbolNorthPole = "القطب السماوي الشمالي";                                // Himmelsnordpol
var symbolSouthPole = "القطب السماوي الجنوبي";                                // Himmelss�dpol
var symbolVernalEquinox = "نقطة الاعتدال الربيعي";                             // Fr�hlingspunkt
var symbolStar = "نجم";                                     // Stern
var symbolHour = "h";                                      // Stunde

// Defaultwerte:

var defaultLongitude = 0*DEG;                              // Geographische L�nge (London)
var defaultLatitude = 50*DEG;                              // Geographische Breite (London)
var defaultDay = 1;                                        // Tag
var defaultMonth = 1;                                      // Monat
var defaultYear = 2000;                                    // Jahr
var defaultTimeZone = 0;                                   // Zeitzone relativ zu UT (h)