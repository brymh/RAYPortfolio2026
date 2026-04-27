// Webtrends code removed 1/4/23

// change all links start with www1.nyc.gov -> www.nyc.gov
;(function () {
    const links = document.querySelectorAll('a[href*="www1.nyc.gov"]')
    // console.log(links)
    for ( const link of links ) {
        // console.log([link.getAttribute('href'), link.href])
      if (link.href.indexOf("/account")==-1) {
        const newlink = link.href.replace(/www1\.nyc\.gov/, 'www.nyc.gov')
        link.getAttribute('href', newlink)
        link.href = newlink
      }
    }
}());



// *** GA4 Configuration ***

var GA4_PRD = "G-X0W5WYPG3G";
var GA4_DEV = "G-RX85E7KWD4";

const idTable = {
  "dcs222hw5ulyu4c3h0uyj308g_4s1q": "G-J73862SWS4", //APP PRD LARS (www1.nyc.gov/LARS)
  "dcs2229lw09g9qc2y81mxxwmf_6q7u": "G-6THN7ZKKRD", //DCP CPC (a030-cpc.nyc.gov/html/cpc/index.aspx)
  "dcs222nsor5tv2djuwohyn2so_2m6k": "G-L5PWZ2D987", //DOB BISWeb (a810-bisweb.nyc.gov/bisweb/bsqpm01.jsp)
  "dcs222i5bp4ayppn9c3xvavj3_7h6w": "G-1TWHX0HLLH", //DOB eFiling (a810-efiling.nyc.gov/eRenewal/loginER.jsp)
  "dcs222keb3rlckhwyc4bd46vw_7d1p": "G-QDJPRHTWJF", //DOF CityPay (a836-citypay.nyc.gov)
  "dcs222zo991h9wzxd7h4prhif_6p2u": "G-06BRK0928Q", //DOH ChildCare (https://a816-healthpsi.nyc.gov/ChildCare)
  "dcs222tsdwkav3sv4xdw2zweg_8h6t": "G-BK7YKCZ5J8", //DOHMH ABC Eats Restaurants (a816-health.nyc.gov/ABCEatsRestaurants)
  "dcs222pxtc4bxdjgwc2ngla29_6n3r": "G-4QSRD9YQEV", //DOHMH HDI (a816-health.nyc.gov/hdi)
  "dcs22292puxs6sq6r5a1fj4hd_7b3c": "G-E7VQCHHV11", //DOHMH HL7 2.5.1 Validation Tool (a816-nychl7validation.nyc.gov/NYCHL7Validation)
  "dcs222d71v5gjxke3u8nuygva_9i2j": "G-Y99RE5LY0C", //DOHMH NYC Health Map (https://a816-healthpsi.nyc.gov/NYCHealthMap)
  "dcs222j6qj36clbki681b8zi3_8t5t": "G-D4QGEHR6JH", //DOHMH NYCMED (https://a816-healthpsi.nyc.gov/NYCMED)
  "dcs2227q4ipiwmbifnu2iig3c_9c7v": "G-74JJ9XN6HR", //DOHMH Payment Portal (a816-ppl.nyc.gov/PaymentPortal)
  "dcs2222socij3md49cfx9nvcf_5d6y": "G-RNZXP58MYG", //DOITT Open Data Portal (http://data.cityofnewyork.us)
  "dcs222l8uimwe9f3njenkj18r_9w2c": "G-3Z44K2V10C", //DOITT Vaccine Finder App (https://vaccinefinder.nyc.gov)
  "dcs222w4h005mgppvl8mpq33o_3k7w": "G-VNTFQX1G7W", //DSNY External Blade Runner (https://a827-bladerunner.nyc.gov/BRWeb/ )
  "dcs222men5xf4obsa0rljo7vk_4u5b": "G-NQ55QY9KV9", //DSNY Internal Blade Runner (https://dsnyavl_prd2.csc.nycnet/BRWeb/ )
  "dcs2220acs1yduzoq5mqd20lx_8w2s": "G-JC7MLQ01VN", //DSNY ZWS (https://nyc.gov/zws/)
  "dcs22211jga8pgj52t4yz2st7_6p2f": "G-517CC9Q02G", //GIS - DOF Digital Tax Map Application (maps.nyc.gov/taxmap)
  "dcs222wajryu3vhz7u2tasztx_3k7j": "G-ECE4ZPTZZT", //GIS - Speed (maps.nyc.gov/moer/speed) (INTERNAL)
  "dcs2227rsagfqutu7ist718s5_3s9s": "G-R47EKGNEF8", //GIS - Street Closure (maps.nyc.gov/streetclosure)
  "dcs2221wb0wdhrh2qlf0eelqz_3e1p": "G-F45GSK6JB3", //GIS - NYCITYMAP (maps.nyc.gov/doitt/nycitymap)
  "dcs222viqww0txf1nujrjyybv_3i9q": "G-ZXW91L307B", //HHS Access Front Door (access.nyc.gov)
  "dcs222rz4c81fx7htkc594e0z_3z5i": "G-DCWVJQMQX8", //MOIA We Speak NYC (https://wespeaknyc.cityofnewyork.us)
  "dcs222ci3tjsous4tvmpk09d9_4n2z": "G-NQLKRW7HFN", //My NYCHA (my.nycha.info/MyNYCHA/)
  "dcs222vap7aozvfck55mb912x_9m5j": "G-9BX50YYRCP", //NYC DoITT PoleTop Site (poletop-manager.nyc.gov) moved to OTI
  "dcs222fxef021bzs8q1136m18_7m5s": "G-M9VWDSD48F", //NYC SPEED 2.0 (speed.cityofnewyork.us)
  "dcs222r20xbxteseix5fl00fh_2w4n": "G-W821PQYB84", //NYCHA Metrics (eapps.nycha.info/NychaMetrics)
  "dcs2221a2r8e09wzjkexqnssg_8u1i": "G-RHYG37QY0P", //Notify NYC (nyc.gov/notifynyc)
  "dcs222ogw7jvr5kb60euurxzz_7v4m": "G-1R3QTFYHJX", //OTI COVID-19 Test Finder (maps.nyc.gov/covid-testing)
  "dcs222uc35v4c94cw10nuhioj_8n3u": "G-YYR5ZBMH02", //SBS NYC Connect (sbsconnect.nyc.gov/)
};

// convert DCSID to GA4 or return default
function idLookup(dcsId) {
  return idTable[dcsId] || GA4_PRD;
}

// check env
var validDomains = /(nyc.gov|nycha.info|cityofnewyork.us)/;
if (window.location.host.match(validDomains)) {
	// set NYC.gov GA4 ID if none is set
	if (typeof(GA4_ID) == 'undefined'||GA4_ID == "") {
		if (typeof(prod_dcsId_val) == 'undefined') { var prod_dcsId_val = ""; }
		GA4_ID = idLookup(prod_dcsId_val);
	}
} else {
	// set ID for csc.nycnet
	GA4_ID = GA4_DEV;
}

// GTM: Agency
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJFTZR87');

	
// Polyfill the gtag function
var gtag = function (){ dataLayer.push(arguments); }; 


// initialization custom tracking
window.addEventListener('load', function initCustomGAEvent (e) {

    // push program custom GA event
    var elProgramTiles = document.querySelectorAll('div.initiative')

    elProgramTiles.length && elProgramTiles.forEach(function (ele, i) {
        ele.addEventListener('click', function(e) {
        	var title = ele.querySelector('h3') || ele.querySelector('h4')
            window.dataLayer.push({
                event: 'programs_click',
                link_details: {
                    destination: ele.getAttribute('data-link'),
                    title: title.textContent.replace(/\\n+/g, '').trim()
                }
            })    
        })
    })
  
    // push exitlinks custom GA event
    var elExitlinks = document.querySelectorAll('a.exitlink')

    elExitlinks.length && elExitlinks.forEach(function(ele, i) {
        
        ele.addEventListener('click', function(e) {
            console.log(e.currentTarget)
            window.dataLayer.push({
                event: 'exitlink_click',
                link_details: {
                    destination: ele.getAttribute('href'),
                    title: ele.textContent || ''
                }
            })
        })
    })


    // push hero slide custom GA event
    var elHeroSlideWrapper = document.querySelector('div.rsContainer')
    window.heroSlideshow && window.heroSlideshow.rsi.ev.on('rsAfterSlideChange', function (evt) {
        var target = elHeroSlideWrapper.querySelector('.rsActiveSlide a') || elHeroSlideWrapper.querySelector('.rsActiveSlide .hero-title')
        var destination = target.getAttribute('href')
        // console.log(target)
        window.dataLayer.push({
          event: 'hero_slide_show_mutation',
          link_details: {
            destination: destination,
            title: target.textContent + ( destination ? ' (ar)' : ' (vid)' ) 
          }
        })
    })

    // push language custom GA event
    var clang = 'en'
    var elHTML = document.querySelector('html')

    setInterval(function () {

        var nlang = elHTML.getAttribute('lang') || 'en'

        if ( nlang === clang ) return;

        // save the new text and send the data to GTM
        window.dataLayer.push({
            event: 'lang_change',
            link_details: { destination: null, title: clang = nlang }
        })
    }, 333)

    window.removeEventListener('load', initCustomGAEvent)
})

// update search form action
function updateFormActions() {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    if (form.action.indexOf("/home/search/index.page") != -1 ) {
        form.action = "/assets/home/html/search-redirect.html";
    }
  });
}

// update search link
function updateSearchLink(oldUrl, newUrl) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.href.indexOf("/home/search/index.page") != -1) {
            link.href = "/main/search";
        }
    });
}

updateFormActions();
updateSearchLink();