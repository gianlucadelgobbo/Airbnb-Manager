var _h = require('../helpers');
var path = require('path');

exports.get = function get(req, res) {
  const testFolder = './icals/';
  const fs = require('fs');
  console.log(testFolder);
  
  fs.readdir(testFolder, (err, files) => {
    res.render('index', {
      title: 'Home Page',
      sez: 'home',
      files: files,
      result: {}
    });
  })
};
exports.post = function post(req, res) {
  console.log("POST");
  console.log(req.body.s);
  var fs = require('fs');
  var filePath = './icals/'+req.body.s;

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        res.send(_h.parse(data));
      } else {
        console.log(err);
    }
  });
  /*
  var body = "BEGIN:VCALENDAR\nPRODID;X-RICAL-TZSOURCE=TZINFO:-//Airbnb Inc//Hosting Calendar 0.8.8//EN\nCALSCALE:GREGORIAN\nVERSION:2.0\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161120\nDTSTART;VALUE=DATE:20161119\nUID:-sxmjcrqqptb3-qi4ip8hyk8j1@airbnb.com\nDESCRIPTION:CHECKIN: 11/16/2016\nCHECKOUT: 11/20/2016\nNIGHTS: 4\nPHONE: \n +49 162 8295 257\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Mariana Ruhl (AWD9ZR)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161128\nDTSTART;VALUE=DATE:20161125\nUID:-sxmjcrqqptb3-ynkkeudv9rj9@airbnb.com\nDESCRIPTION:CHECKIN: 11/25/2016\nCHECKOUT: 11/28/2016\nNIGHTS: 3\nPHONE: \n +34 615 045 437\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Gabriel Jorda (WNEAHP)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161205\nDTSTART;VALUE=DATE:20161201\nUID:-sxmjcrqqptb3-50z0achg8979@airbnb.com\nDESCRIPTION:CHECKIN: 12/01/2016\nCHECKOUT: 12/05/2016\nNIGHTS: 4\nPHONE: \n +44 7514 955117\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Curro Sanchez-Barbudo Acebedo (Q4EAWB)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161208\nDTSTART;VALUE=DATE:20161205\nUID:-sxmjcrqqptb3-f2jeu0e9bq6f@airbnb.com\nDESCRIPTION:CHECKIN: 12/05/2016\nCHECKOUT: 12/08/2016\nNIGHTS: 3\nPHONE: \n +39 327 337 6373\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Sunyoung Ko (DQDCJA)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161212\nDTSTART;VALUE=DATE:20161208\nUID:-sxmjcrqqptb3-7svrwblw75jr@airbnb.com\nDESCRIPTION:CHECKIN: 12/08/2016\nCHECKOUT: 12/12/2016\nNIGHTS: 4\nPHONE: \n +33 6 41 72 11 09\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Gabriel Michel (QTMDSZ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161217\nDTSTART;VALUE=DATE:20161214\nUID:-sxmjcrqqptb3--nmy5l2l9cyqf@airbnb.com\nDESCRIPTION:CHECKIN: 12/14/2016\nCHECKOUT: 12/17/2016\nNIGHTS: 3\nPHONE: \n +34 696 411 817\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Dario Peiro Grande (MEBXKS)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161220\nDTSTART;VALUE=DATE:20161217\nUID:-sxmjcrqqptb3--515cd74apufd@airbnb.com\nDESCRIPTION:CHECKIN: 12/17/2016\nCHECKOUT: 12/20/2016\nNIGHTS: 3\nPHONE: \n +33 7 70 99 86 00\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Noemie Le Berre (K2MYTK)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20161230\nDTSTART;VALUE=DATE:20161225\nUID:-sxmjcrqqptb3--mlh511yjy48f@airbnb.com\nDESCRIPTION:CHECKIN: 12/25/2016\nCHECKOUT: 12/30/2016\nNIGHTS: 5\nPHONE: \n +43 699 1081 4278\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Andreas Kaya-Fill (RATCPK)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170106\nDTSTART;VALUE=DATE:20170103\nUID:-sxmjcrqqptb3--yjwj4siuckun@airbnb.com\nDESCRIPTION:CHECKIN: 01/03/2017\nCHECKOUT: 01/06/2017\nNIGHTS: 3\nPHONE: \n +33 6 09 81 36 82\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Judith Pilet Serra (QSXM2F)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170114\nDTSTART;VALUE=DATE:20170107\nUID:-sxmjcrqqptb3--hewrvqb8ayrf@airbnb.com\nDESCRIPTION:CHECKIN: 01/07/2017\nCHECKOUT: 01/14/2017\nNIGHTS: 7\nPHONE: \n +44 7443 638581\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Joanna Waller (XYSZB8)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170120\nDTSTART;VALUE=DATE:20170114\nUID:-sxmjcrqqptb3-9sml1lep8jgr@airbnb.com\nDESCRIPTION:CHECKIN: 01/14/2017\nCHECKOUT: 01/20/2017\nNIGHTS: 6\nPHONE: \n +44 7465 941867\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Hugues Groshens (J2B448)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170129\nDTSTART;VALUE=DATE:20170120\nUID:-sxmjcrqqptb3--h3al1sdbufn1@airbnb.com\nDESCRIPTION:CHECKIN: 01/20/2017\nCHECKOUT: 01/29/2017\nNIGHTS: 9\nPHONE: \n +1 (716) 238-2350\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:James Gawley (N4NK9K)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170207\nDTSTART;VALUE=DATE:20170131\nUID:-sxmjcrqqptb3-lne5sfiq5abh@airbnb.com\nDESCRIPTION:CHECKIN: 01/31/2017\nCHECKOUT: 02/07/2017\nNIGHTS: 7\nPHONE: \n +351 91 900 0917\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Joana Lino (Q8H8BK)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170213\nDTSTART;VALUE=DATE:20170210\nUID:-sxmjcrqqptb3-a3ds3c68nzvr@airbnb.com\nDESCRIPTION:CHECKIN: 02/10/2017\nCHECKOUT: 02/13/2017\nNIGHTS: 3\nPHONE: \n +33 6 15 01 30 08\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Deirdre Culley (9Y9JPP)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170219\nDTSTART;VALUE=DATE:20170215\nUID:-sxmjcrqqptb3-ucy5qm4jdzw5@airbnb.com\nDESCRIPTION:CHECKIN: 02/15/2017\nCHECKOUT: 02/19/2017\nNIGHTS: 4\nPHONE: \n +44 7717 738544\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Thomas Cooke (RPAJWT)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170222\nDTSTART;VALUE=DATE:20170219\nUID:-sxmjcrqqptb3--ipwzgka4p9in@airbnb.com\nDESCRIPTION:CHECKIN: 02/19/2017\nCHECKOUT: 02/22/2017\nNIGHTS: 3\nPHONE: \n +64 21 560 982\nEMAIL: (no email alias available)\nPROPERTY: Rome Design\n  Loft\n\nSUMMARY:Fred Lait (PXQPF3)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170226\nDTSTART;VALUE=DATE:20170223\nUID:-sxmjcrqqptb3-j2xybjngiysh@airbnb.com\nDESCRIPTION:CHECKIN: 02/23/2017\nCHECKOUT: 02/26/2017\nNIGHTS: 3\nPHONE: \n +49 162 1332 885\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Manuela Willenborg (D5STJJ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170305\nDTSTART;VALUE=DATE:20170302\nUID:-sxmjcrqqptb3-yiz9pqod4mbj@airbnb.com\nDESCRIPTION:CHECKIN: 03/02/2017\nCHECKOUT: 03/05/2017\nNIGHTS: 3\nPHONE: \n +39 393 429 5779\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Antonino Vella (9SHTA2)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170309\nDTSTART;VALUE=DATE:20170306\nUID:-sxmjcrqqptb3--hcxzw9jyfia1@airbnb.com\nDESCRIPTION:CHECKIN: 03/06/2017\nCHECKOUT: 03/09/2017\nNIGHTS: 3\nPHONE: \n +49 173 4978 233\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Benjamin Dreßel (D3SZKH)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170313\nDTSTART;VALUE=DATE:20170310\nUID:-sxmjcrqqptb3--o7ae0ty6l41z@airbnb.com\nDESCRIPTION:CHECKIN: 03/10/2017\nCHECKOUT: 03/13/2017\nNIGHTS: 3\nPHONE: \n +370 671 65 077\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Lina Uzkur (5W4CBD)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170316\nDTSTART;VALUE=DATE:20170313\nUID:-sxmjcrqqptb3-6t53o39apu3p@airbnb.com\nDESCRIPTION:CHECKIN: 03/13/2017\nCHECKOUT: 03/16/2017\nNIGHTS: 3\nPHONE: \n +30 697 945 1878\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Christina Perdikea (P4HE49)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170320\nDTSTART;VALUE=DATE:20170317\nUID:-sxmjcrqqptb3-9kewqvugm5t9@airbnb.com\nDESCRIPTION:CHECKIN: 03/17/2017\nCHECKOUT: 03/20/2017\nNIGHTS: 3\nPHONE: \n +39 339 312 2872\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Stefano Lombardi (2MYYS5)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170323\nDTSTART;VALUE=DATE:20170320\nUID:-sxmjcrqqptb3--9rorlv9phosj@airbnb.com\nDESCRIPTION:CHECKIN: 03/20/2017\nCHECKOUT: 03/23/2017\nNIGHTS: 3\nPHONE: \n +49 178 5866 276\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Anna-Lena Ament (9TFHC8)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170328\nDTSTART;VALUE=DATE:20170324\nUID:-sxmjcrqqptb3--oz2f5rd359k9@airbnb.com\nDESCRIPTION:CHECKIN: 03/24/2017\nCHECKOUT: 03/28/2017\nNIGHTS: 4\nPHONE: \n +49 176 8460 0306\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Deborah Rachel (TNPNEK)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170331\nDTSTART;VALUE=DATE:20170328\nUID:-sxmjcrqqptb3-pojvzxkvjfif@airbnb.com\nDESCRIPTION:CHECKIN: 03/28/2017\nCHECKOUT: 03/31/2017\nNIGHTS: 3\nPHONE: \n +1 (206) 790-6507\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Tess Perez De Tagle (XQTTYM)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170408\nDTSTART;VALUE=DATE:20170331\nUID:-sxmjcrqqptb3--pkz7hqi86d2n@airbnb.com\nDESCRIPTION:CHECKIN: 03/31/2017\nCHECKOUT: 04/08/2017\nNIGHTS: 8\nPHONE: \n +31 6 42 46 85 61\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Chiara Smit (3DX8Y3)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170413\nDTSTART;VALUE=DATE:20170410\nUID:-sxmjcrqqptb3-hg2f7gwi18mz@airbnb.com\nDESCRIPTION:CHECKIN: 04/10/2017\nCHECKOUT: 04/13/2017\nNIGHTS: 3\nPHONE: \n +54 11 2178 4338\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Horacio Martín Fahey (388RHH)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170417\nDTSTART;VALUE=DATE:20170414\nUID:-sxmjcrqqptb3--6jyvppbmm6gj@airbnb.com\nDESCRIPTION:CHECKIN: 04/14/2017\nCHECKOUT: 04/17/2017\nNIGHTS: 3\nPHONE: \n +57 313 443 7608\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Julián Londoño (TSHF8Y)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170420\nDTSTART;VALUE=DATE:20170417\nUID:-sxmjcrqqptb3-ijwomsbqo6yl@airbnb.com\nDESCRIPTION:CHECKIN: 04/17/2017\nCHECKOUT: 04/20/2017\nNIGHTS: 3\nPHONE: \n +33 6 19 02 88 56\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Judith Da Costa (QXZC3W)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170425\nDTSTART;VALUE=DATE:20170422\nUID:-sxmjcrqqptb3--qqleraoi8q7n@airbnb.com\nDESCRIPTION:CHECKIN: 04/22/2017\nCHECKOUT: 04/25/2017\nNIGHTS: 3\nPHONE: \n +39 349 716 2576\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Arianna Preite (DX4SZN)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170428\nDTSTART;VALUE=DATE:20170425\nUID:-sxmjcrqqptb3--3ibg6b5hxijj@airbnb.com\nDESCRIPTION:CHECKIN: 04/25/2017\nCHECKOUT: 04/28/2017\nNIGHTS: 3\nPHONE: \n +82 10 2833 0327\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Olym Song (JPEAKM)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170501\nDTSTART;VALUE=DATE:20170428\nUID:-sxmjcrqqptb3--g2bpt5xm1f01@airbnb.com\nDESCRIPTION:CHECKIN: 04/28/2017\nCHECKOUT: 05/01/2017\nNIGHTS: 3\nPHONE: \n +49 177 2923 734\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Patrick Lucas (8QDTAC)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170504\nDTSTART;VALUE=DATE:20170501\nUID:-sxmjcrqqptb3-6iaxi7gweian@airbnb.com\nDESCRIPTION:CHECKIN: 05/01/2017\nCHECKOUT: 05/04/2017\nNIGHTS: 3\nPHONE: \n +1 (404) 247-1726\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Breanna Saxon (HM3EWAQEMM)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170507\nDTSTART;VALUE=DATE:20170504\nUID:-sxmjcrqqptb3-lqucmn3xig0b@airbnb.com\nDESCRIPTION:CHECKIN: 05/04/2017\nCHECKOUT: 05/07/2017\nNIGHTS: 3\nPHONE: \n +351 93 180 1777\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Soraya Marques (B5FBDQ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170512\nDTSTART;VALUE=DATE:20170508\nUID:-sxmjcrqqptb3--j4dr61qnjlrv@airbnb.com\nDESCRIPTION:CHECKIN: 05/08/2017\nCHECKOUT: 05/12/2017\nNIGHTS: 4\nPHONE: \n +39 338 642 6948\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Jimmy Vince (FYSK9T)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170516\nDTSTART;VALUE=DATE:20170512\nUID:-sxmjcrqqptb3--s5xph8przh0l@airbnb.com\nDESCRIPTION:CHECKIN: 05/12/2017\nCHECKOUT: 05/16/2017\nNIGHTS: 4\nPHONE: \n +82 10 8676 0263\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:JongEuk2 Byun (JTQ5ZJ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170518\nDTSTART;VALUE=DATE:20170516\nUID:-sxmjcrqqptb3-g3ury80ua74f@airbnb.com\nDESCRIPTION:CHECKIN: 05/16/2017\nCHECKOUT: 05/18/2017\nNIGHTS: 2\nPHONE: \n +61 431 720 137\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Hannah Priebe-Clarke (HMTA243J8R)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170521\nDTSTART;VALUE=DATE:20170518\nUID:-sxmjcrqqptb3--m3wgdj2tz1ld@airbnb.com\nDESCRIPTION:CHECKIN: 05/18/2017\nCHECKOUT: 05/21/2017\nNIGHTS: 3\nPHONE: \n +33 6 07 86 86 55\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Marion Joly (HMYZ4QW8QX)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170526\nDTSTART;VALUE=DATE:20170522\nUID:-sxmjcrqqptb3--iarwkuabo7xx@airbnb.com\nDESCRIPTION:CHECKIN: 05/22/2017\nCHECKOUT: 05/26/2017\nNIGHTS: 4\nPHONE: \n +49 172 1416 344\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Luca Tschaidse (C3WRKY)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170602\nDTSTART;VALUE=DATE:20170527\nUID:-sxmjcrqqptb3--nki0eoeqo6g7@airbnb.com\nDESCRIPTION:CHECKIN: 05/27/2017\nCHECKOUT: 06/02/2017\nNIGHTS: 6\nPHONE: \n +33 6 14 80 40 77\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Marina Meaux (JZAZ3C)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170605\nDTSTART;VALUE=DATE:20170602\nUID:-sxmjcrqqptb3--82gwf4mdc2q5@airbnb.com\nDESCRIPTION:CHECKIN: 06/02/2017\nCHECKOUT: 06/05/2017\nNIGHTS: 3\nPHONE: \n +1 (239) 784-0019\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:William Colclough (2ADKNE)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170609\nDTSTART;VALUE=DATE:20170605\nUID:-sxmjcrqqptb3-7r49oomdjc7h@airbnb.com\nDESCRIPTION:CHECKIN: 06/05/2017\nCHECKOUT: 06/09/2017\nNIGHTS: 4\nPHONE: \n +44 7929 646914\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Shona Graham (3RY45Z)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170612\nDTSTART;VALUE=DATE:20170609\nUID:-sxmjcrqqptb3--2f95btln2btb@airbnb.com\nDESCRIPTION:CHECKIN: 06/09/2017\nCHECKOUT: 06/12/2017\nNIGHTS: 3\nPHONE: \n +49 151 7082 6995\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Charlotte Ottemeier (X3MAF5)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170617\nDTSTART;VALUE=DATE:20170612\nUID:-sxmjcrqqptb3-g8f7vi2y1ugz@airbnb.com\nDESCRIPTION:CHECKIN: 06/12/2017\nCHECKOUT: 06/17/2017\nNIGHTS: 5\nPHONE: \n +31 6 25 39 48 90\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Thalia Veldema (9BAAFF)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170620\nDTSTART;VALUE=DATE:20170617\nUID:-sxmjcrqqptb3-euutnv1qrc4h@airbnb.com\nDESCRIPTION:CHECKIN: 06/17/2017\nCHECKOUT: 06/20/2017\nNIGHTS: 3\nPHONE: \n +34 654 625 170\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Jen Mm (P3CWE3)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170627\nDTSTART;VALUE=DATE:20170620\nUID:-sxmjcrqqptb3-wj679lynuewd@airbnb.com\nDESCRIPTION:CHECKIN: 06/20/2017\nCHECKOUT: 06/27/2017\nNIGHTS: 7\nPHONE: \n +49 175 7342 533\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Saskia Prison (4X5K52)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170701\nDTSTART;VALUE=DATE:20170627\nUID:-sxmjcrqqptb3--gl6pvsty2cgn@airbnb.com\nDESCRIPTION:CHECKIN: 06/27/2017\nCHECKOUT: 07/01/2017\nNIGHTS: 4\nPHONE: \n +61 437 562 933\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Lauren Marc (B34M4H)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170705\nDTSTART;VALUE=DATE:20170701\nUID:-sxmjcrqqptb3--czftoogoy603@airbnb.com\nDESCRIPTION:CHECKIN: 07/01/2017\nCHECKOUT: 07/05/2017\nNIGHTS: 4\nPHONE: \n +49 151 6572 7366\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Sahand Dilmaghani (HM4EBCA54E)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170710\nDTSTART;VALUE=DATE:20170705\nUID:-sxmjcrqqptb3--31x3u52kx0px@airbnb.com\nDESCRIPTION:CHECKIN: 07/05/2017\nCHECKOUT: 07/10/2017\nNIGHTS: 5\nPHONE: \n +33 6 23 48 91 19\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Noé Cavata (HMXKR59ZTS)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170713\nDTSTART;VALUE=DATE:20170710\nUID:-sxmjcrqqptb3--ubpgvxom23op@airbnb.com\nDESCRIPTION:CHECKIN: 07/10/2017\nCHECKOUT: 07/13/2017\nNIGHTS: 3\nPHONE: \n +852 6221 9302\nEMAIL: (no email alias available)\nPROPERTY: Rome Design\n  Loft\n\nSUMMARY:Chun Tao Lau (HMA5QXPERB)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170717\nDTSTART;VALUE=DATE:20170714\nUID:-sxmjcrqqptb3--c3hbj2fccgvv@airbnb.com\nDESCRIPTION:CHECKIN: 07/14/2017\nCHECKOUT: 07/17/2017\nNIGHTS: 3\nPHONE: \n +61 400 288 415\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Ian Wright (HMEFTSEZHT)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170722\nDTSTART;VALUE=DATE:20170718\nUID:-sxmjcrqqptb3-lt81i7n2ua1n@airbnb.com\nDESCRIPTION:CHECKIN: 07/18/2017\nCHECKOUT: 07/22/2017\nNIGHTS: 4\nPHONE: \n +60 19 322 0525\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Kamilah Shahidan (HMNKX9STS9)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170729\nDTSTART;VALUE=DATE:20170722\nUID:-sxmjcrqqptb3-kuuawbuzt62t@airbnb.com\nDESCRIPTION:CHECKIN: 07/22/2017\nCHECKOUT: 07/29/2017\nNIGHTS: 7\nPHONE: \n +33 6 37 32 65 91\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Jérémy Valverde (HM5AFZ9MSQ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170802\nDTSTART;VALUE=DATE:20170730\nUID:-sxmjcrqqptb3--l7e72q16gpjf@airbnb.com\nDESCRIPTION:CHECKIN: 07/30/2017\nCHECKOUT: 08/02/2017\nNIGHTS: 3\nPHONE: \n +31 6 42 61 03 75\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Ilse Veerbeek (HMCXQDDASJ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170807\nDTSTART;VALUE=DATE:20170804\nUID:-sxmjcrqqptb3--7v0nqlek3reb@airbnb.com\nDESCRIPTION:CHECKIN: 08/04/2017\nCHECKOUT: 08/07/2017\nNIGHTS: 3\nPHONE: \n +44 7703 448664\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Kayleigh Torrie (HM9ZNDCMXQ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170810\nDTSTART;VALUE=DATE:20170807\nUID:-sxmjcrqqptb3-4xtq8m02qqhj@airbnb.com\nDESCRIPTION:CHECKIN: 08/07/2017\nCHECKOUT: 08/10/2017\nNIGHTS: 3\nPHONE: \n +49 160 9320 9137\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Martin Himmels (HM3WN3HMJH)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170816\nDTSTART;VALUE=DATE:20170811\nUID:-sxmjcrqqptb3-b8rgk5hq0eqf@airbnb.com\nDESCRIPTION:CHECKIN: 08/11/2017\nCHECKOUT: 08/16/2017\nNIGHTS: 5\nPHONE: \n +1 (514) 562-5617\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Antoine Laurier (HMXFR3ETYZ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170819\nDTSTART;VALUE=DATE:20170816\nUID:-sxmjcrqqptb3--k7bohbipc8ih@airbnb.com\nDESCRIPTION:CHECKIN: 08/16/2017\nCHECKOUT: 08/19/2017\nNIGHTS: 3\nPHONE: \n +44 7896 971011\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Rhys Gilchrist (HMS8N9M5DD)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170822\nDTSTART;VALUE=DATE:20170819\nUID:-sxmjcrqqptb3--jmkk6m7kuax@airbnb.com\nDESCRIPTION:CHECKIN: 08/19/2017\nCHECKOUT: 08/22/2017\nNIGHTS: 3\nPHONE: \n +44 7535 802220\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Rebecca Thomas (HMYN2MDDYM)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170825\nDTSTART;VALUE=DATE:20170822\nUID:-sxmjcrqqptb3-9xlryhvxfxfv@airbnb.com\nDESCRIPTION:CHECKIN: 08/22/2017\nCHECKOUT: 08/25/2017\nNIGHTS: 3\nPHONE: \n +33 6 25 10 23 97\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Celine Deliege (HM3RN3YXMB)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170830\nDTSTART;VALUE=DATE:20170825\nUID:-sxmjcrqqptb3--hbp83zherufz@airbnb.com\nDESCRIPTION:CHECKIN: 08/25/2017\nCHECKOUT: 08/30/2017\nNIGHTS: 5\nPHONE: \n +33 6 77 61 56 52\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Louis Sanguinetti (HMK24DF44D)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170902\nDTSTART;VALUE=DATE:20170830\nUID:-sxmjcrqqptb3--77qxsqfdj5ir@airbnb.com\nDESCRIPTION:CHECKIN: 08/30/2017\nCHECKOUT: 09/02/2017\nNIGHTS: 3\nPHONE: \n +44 7931 810557\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Milosz Sawczak (HMP9J4FP9S)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170907\nDTSTART;VALUE=DATE:20170904\nUID:-sxmjcrqqptb3-5v9w4hcr96m1@airbnb.com\nDESCRIPTION:CHECKIN: 09/04/2017\nCHECKOUT: 09/07/2017\nNIGHTS: 3\nPHONE: \n +1 (907) 444-1412\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Deborah Green (HMRY32BCJA)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170910\nDTSTART;VALUE=DATE:20170907\nUID:-sxmjcrqqptb3--i8ousif6cyy3@airbnb.com\nDESCRIPTION:CHECKIN: 09/07/2017\nCHECKOUT: 09/10/2017\nNIGHTS: 3\nPHONE: \n +33 6 29 42 83 62\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Camille Le Breton (HMWZ9KQJEY)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170914\nDTSTART;VALUE=DATE:20170911\nUID:-sxmjcrqqptb3--8v44n85omomr@airbnb.com\nDESCRIPTION:CHECKIN: 09/11/2017\nCHECKOUT: 09/14/2017\nNIGHTS: 3\nPHONE: \n +1 (780) 909-8017\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Kasandra Bracken (HMNAK8FYW3)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170918\nDTSTART;VALUE=DATE:20170915\nUID:-sxmjcrqqptb3-4dpdd73t20hz@airbnb.com\nDESCRIPTION:CHECKIN: 09/15/2017\nCHECKOUT: 09/18/2017\nNIGHTS: 3\nPHONE: \n +49 179 5063 756\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Katharina Menne (HMKHMNWAPR)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170923\nDTSTART;VALUE=DATE:20170920\nUID:-sxmjcrqqptb3-5noskwylx7t1@airbnb.com\nDESCRIPTION:CHECKIN: 09/20/2017\nCHECKOUT: 09/23/2017\nNIGHTS: 3\nPHONE: \n +1 (561) 400-4509\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Paulet Green (HMBWTS4THA)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170925\nDTSTART;VALUE=DATE:20170923\nUID:-sxmjcrqqptb3-avm2s3u28m7z@airbnb.com\nDESCRIPTION:CHECKIN: 09/23/2017\nCHECKOUT: 09/25/2017\nNIGHTS: 2\nPHONE: \n +41 76 430 93 93\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Andrea-Dario Markotic (HMF3T5932K)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20170928\nDTSTART;VALUE=DATE:20170925\nUID:-sxmjcrqqptb3-y7ho0nzar2w5@airbnb.com\nDESCRIPTION:CHECKIN: 09/25/2017\nCHECKOUT: 09/28/2017\nNIGHTS: 3\nPHONE: \n +41 79 565 61 84\nEMAIL: (no email alias available)\nPROPERTY: Rome Desi\n gn Loft\n\nSUMMARY:Reto Alfieri (HMHCQXES39)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171005\nDTSTART;VALUE=DATE:20171002\nUID:-sxmjcrqqptb3--j20eczkzsl55@airbnb.com\nDESCRIPTION:CHECKIN: 10/02/2017\nCHECKOUT: 10/05/2017\nNIGHTS: 3\nPHONE: \n +1 (714) 702-0401\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Tori Bromma (HM4EYRH9YW)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171008\nDTSTART;VALUE=DATE:20171005\nUID:-sxmjcrqqptb3--1tes97g1v417@airbnb.com\nDESCRIPTION:CHECKIN: 10/05/2017\nCHECKOUT: 10/08/2017\nNIGHTS: 3\nPHONE: \n +44 7516 263149\nEMAIL: (no email alias available)\nPROPERTY: Rome Desig\n n Loft\n\nSUMMARY:Megan McGarrity (HM8W9TAWTP)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171011\nDTSTART;VALUE=DATE:20171008\nUID:-sxmjcrqqptb3-t5848iq0kmff@airbnb.com\nDESCRIPTION:CHECKIN: 10/08/2017\nCHECKOUT: 10/11/2017\nNIGHTS: 3\nPHONE: \n +86 135 1033 6188\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:琳 关 (HMAFWC2HJM)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171014\nDTSTART;VALUE=DATE:20171011\nUID:-sxmjcrqqptb3-cbfi0plmr56z@airbnb.com\nDESCRIPTION:CHECKIN: 10/11/2017\nCHECKOUT: 10/14/2017\nNIGHTS: 3\nPHONE: \n +86 138 0241 1222\nEMAIL: (no email alias available)\nPROPERTY: Rome Des\n ign Loft\n\nSUMMARY:Kartik Feng (HMQTB4CHMH)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171021\nDTSTART;VALUE=DATE:20171014\nUID:-sxmjcrqqptb3--jacf8aje37zd@airbnb.com\nDESCRIPTION:CHECKIN: 10/14/2017\nCHECKOUT: 10/21/2017\nNIGHTS: 7\nPHONE: \n +44 7858 910809\nEMAIL: sarah-jfca8jdoicm0nr6x@guest.airbnb.com\nPROPERT\n Y: Rome Design Loft\n\nSUMMARY:Sarah Morrison (HMTWMCMHNE)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171028\nDTSTART;VALUE=DATE:20171025\nUID:-sxmjcrqqptb3--yl0ex15bibb9@airbnb.com\nDESCRIPTION:CHECKIN: 10/25/2017\nCHECKOUT: 10/28/2017\nNIGHTS: 3\nPHONE: \n +57 311 595 7837\nEMAIL: laura-1d4tso83j4x5s72y@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Laura Pilibossian (HMFSYDTXQQ)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171103\nDTSTART;VALUE=DATE:20171030\nUID:-sxmjcrqqptb3-9937akmf179d@airbnb.com\nDESCRIPTION:CHECKIN: 10/30/2017\nCHECKOUT: 11/03/2017\nNIGHTS: 4\nPHONE: \n +34 665 184 553\nEMAIL: flash-abr61f6caer42v1r@guest.airbnb.com\nPROPERT\n Y: Rome Design Loft\n\nSUMMARY:Flash Cooper (HM5J8PNS9P)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171107\nDTSTART;VALUE=DATE:20171103\nUID:-sxmjcrqqptb3--3iw4t1691dbt@airbnb.com\nDESCRIPTION:CHECKIN: 11/03/2017\nCHECKOUT: 11/07/2017\nNIGHTS: 4\nPHONE: \n +61 477 242 541\nEMAIL: dustin-vvxnlsiykzb3cn0c@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Dustin Duong (HMJEW9XEMP)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171113\nDTSTART;VALUE=DATE:20171110\nUID:-sxmjcrqqptb3--hw7przgsddl7@airbnb.com\nDESCRIPTION:CHECKIN: 11/10/2017\nCHECKOUT: 11/13/2017\nNIGHTS: 3\nPHONE: \n +44 7796 094134\nEMAIL: ross-okuu9nyhhmfhjos8@guest.airbnb.com\nPROPERTY\n : Rome Design Loft\n\nSUMMARY:Ross Stevens (HMQDCBPYEF)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171119\nDTSTART;VALUE=DATE:20171113\nUID:-sxmjcrqqptb3-hm8emv8rfder@airbnb.com\nDESCRIPTION:CHECKIN: 11/13/2017\nCHECKOUT: 11/19/2017\nNIGHTS: 6\nPHONE: \n +33 6 73 29 63 74\nEMAIL: angele-bqf7fuatrntge3ta@guest.airbnb.com\nPROP\n ERTY: Rome Design Loft\n\nSUMMARY:Angèle Bondi (HM4Y9K5HYR)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171125\nDTSTART;VALUE=DATE:20171122\nUID:-sxmjcrqqptb3-7v6urubyj7hz@airbnb.com\nDESCRIPTION:CHECKIN: 11/22/2017\nCHECKOUT: 11/25/2017\nNIGHTS: 3\nPHONE: \n +1 (203) 962-5219\nEMAIL: ben-bhty01mx5ry8llp0@guest.airbnb.com\nPROPERT\n Y: Rome Design Loft\n\nSUMMARY:Ben Langley (HMZNKXYMYY)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171126\nDTSTART;VALUE=DATE:20171125\nUID:-sxmjcrqqptb3--ty8so3dexw87@airbnb.com\nDESCRIPTION:CHECKIN: 11/25/2017\nCHECKOUT: 11/26/2017\nNIGHTS: 1\nPHONE: \n +39 347 336 0719\nEMAIL: paolo-ci6ah51k6n5rnaf1@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Paolo Super Host (HMJCKMBXHS)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171129\nDTSTART;VALUE=DATE:20171126\nUID:-sxmjcrqqptb3-cilfpe4mk5kf@airbnb.com\nDESCRIPTION:CHECKIN: 11/26/2017\nCHECKOUT: 11/29/2017\nNIGHTS: 3\nPHONE: \n +1 (951) 378-1127\nEMAIL: swamibob-zc5i19vgecs4l00z@guest.airbnb.com\nPR\n OPERTY: Rome Design Loft\n\nSUMMARY:Swami Bob Gnarley (HMSQ9HAE8T)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171203\nDTSTART;VALUE=DATE:20171129\nUID:-sxmjcrqqptb3--q98d60aw2ncb@airbnb.com\nDESCRIPTION:CHECKIN: 11/29/2017\nCHECKOUT: 12/03/2017\nNIGHTS: 4\nPHONE: \n +44 7871 403555\nEMAIL: peres-bfmik0d4v07oho10@guest.airbnb.com\nPROPERT\n Y: Rome Design Loft\n\nSUMMARY:Peres Kagbala (HMH5WQDSBT)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171209\nDTSTART;VALUE=DATE:20171204\nUID:-sxmjcrqqptb3-44dtqasef585@airbnb.com\nDESCRIPTION:CHECKIN: 12/04/2017\nCHECKOUT: 12/09/2017\nNIGHTS: 5\nPHONE: \n +39 335 708 6775\nEMAIL: benedetta-dsrgb40vunbbjd3l@guest.airbnb.com\nPR\n OPERTY: Rome Design Loft\n\nSUMMARY:Benedetta Francardo (HMHFPKJZHT)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171216\nDTSTART;VALUE=DATE:20171213\nUID:-sxmjcrqqptb3-khppw73s66yl@airbnb.com\nDESCRIPTION:CHECKIN: 12/13/2017\nCHECKOUT: 12/16/2017\nNIGHTS: 3\nPHONE: \n +1 (650) 922-9916\nEMAIL: jordan-whyho2nz7zwvht3n@guest.airbnb.com\nPROP\n ERTY: Rome Design Loft\n\nSUMMARY:Jordan Louie (HMMQ5MZYRS)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171225\nDTSTART;VALUE=DATE:20171218\nUID:-sxmjcrqqptb3-bqi1j5sscpgv@airbnb.com\nDESCRIPTION:CHECKIN: 12/18/2017\nCHECKOUT: 12/25/2017\nNIGHTS: 7\nPHONE: \n +7 968 841-98-94\nEMAIL: malte-oo0nf6tciqyge10m@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Malte Spengler (HMQK33NA3C)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20180105\nDTSTART;VALUE=DATE:20171227\nUID:-sxmjcrqqptb3--rrpfou1jhv4n@airbnb.com\nDESCRIPTION:CHECKIN: 12/27/2017\nCHECKOUT: 01/05/2018\nNIGHTS: 9\nPHONE: \n +31 6 28 83 50 40\nEMAIL: rene-hyobsomr1tlif4st@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Rene Leeflang (HMJHF9EFZW)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20180108\nDTSTART;VALUE=DATE:20180105\nUID:-sxmjcrqqptb3--ytuk98rb9w35@airbnb.com\nDESCRIPTION:CHECKIN: 01/05/2018\nCHECKOUT: 01/08/2018\nNIGHTS: 3\nPHONE: \n +44 7912 698759\nEMAIL: isabella-5hlqbrnoxvhrlzv1@guest.airbnb.com\nPROP\n ERTY: Rome Design Loft\n\nSUMMARY:Isabella Webster (HM3KHFCHAB)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20180122\nDTSTART;VALUE=DATE:20180118\nUID:-sxmjcrqqptb3--2qx1upgtoy31@airbnb.com\nDESCRIPTION:CHECKIN: 01/18/2018\nCHECKOUT: 01/22/2018\nNIGHTS: 4\nPHONE: \n +44 7925 175295\nEMAIL: celine-i7j15ciuq5o1xe75@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Céline Mulrean (HMFQHBBCXP)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20180209\nDTSTART;VALUE=DATE:20180204\nUID:-sxmjcrqqptb3-p5g9fxdgdnen@airbnb.com\nDESCRIPTION:CHECKIN: 02/04/2018\nCHECKOUT: 02/09/2018\nNIGHTS: 5\nPHONE: \n +32 487 52 49 86\nEMAIL: mathias-gg5f2b3o6q8i1h0j@guest.airbnb.com\nPROP\n ERTY: Rome Design Loft\n\nSUMMARY:Mathias Marchal (HMHES44KDF)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20180512\nDTSTART;VALUE=DATE:20180505\nUID:-sxmjcrqqptb3--ylmaldglch4d@airbnb.com\nDESCRIPTION:CHECKIN: 05/05/2018\nCHECKOUT: 05/12/2018\nNIGHTS: 7\nPHONE: \n +49 1520 287 3570\nEMAIL: enya-qdrumcoxyvsgvkgu@guest.airbnb.com\nPROPER\n TY: Rome Design Loft\n\nSUMMARY:Enya Baufeldt (HMCYQ4APDR)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20180530\nDTSTART;VALUE=DATE:20180516\nUID:-sxmjcrqqptb3--n1nz551465fv@airbnb.com\nDESCRIPTION:CHECKIN: 05/16/2018\nCHECKOUT: 05/30/2018\nNIGHTS: 14\nPHONE:\n  +1 (860) 576-6674\nEMAIL: sarah-5pg78bv59h6rfh81@guest.airbnb.com\nPROP\n ERTY: Rome Design Loft\n\nSUMMARY:Sarah Caldwell (HMBRCFXY5M)\nLOCATION:Rome Design Loft\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171025\nDTSTART;VALUE=DATE:20171021\nUID:f98qu9vson75-pbrombf3ktb5@airbnb.com\nSUMMARY:Not available\nEND:VEVENT\nBEGIN:VEVENT\nDTEND;VALUE=DATE:20171030\nDTSTART;VALUE=DATE:20171028\nUID:f98qu9vson75--lnrjdp0iyunz@airbnb.com\nSUMMARY:Not available\nEND:VEVENT\nEND:VCALENDAR\n";

  res.send(_h.parse(body));
  var curl = require("curl");
  var https = require('https');
  var fs = require('fs');

  var file = fs.createWriteStream("file.wav");
  var request = https.get(req.body.s, function(response) {
    console.log("POSTPOSTPOSTPOST");
    response.pipe(file);
    curl.get(req.body.s, {}, function(err, response, body) {
      res.send(_h.parse(body));
    });
  });*/
};
