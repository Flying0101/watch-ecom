import APSTEEL from '../../../../public/images/audemars.png'
import APWHITE from '../../../../public/images/audemars4.png'
import APGOLD from '../../../../public/images/gold-a.png'
import OGLEATHER from '../../../../public/images/omega1.png'
import OGSTEEL from '../../../../public/images/omega2.png'
import OGBLUE from '../../../../public/images/omega3.png'
import PBLUE from '../../../../public/images/patek1.png'
import PBLACK from '../../../../public/images/patek2.png'
import PMOON from '../../../../public/images/patek3.png'
import PGOLDSTEEL from '../../../../public/images/patek4.png'
import PSTEEL from '../../../../public/images/patek5.png'
import KERMIT from '../../../../public/images/rolex-kermit.png'
import PEPSI from '../../../../public/images/rolex1.png'
import DARK from '../../../../public/images/rolex2.png'
import ROLEX from '../../../../public/images/rolex3.png'
import AQUA from '../../../../public/images/tag1.png'
import MONACO from '../../../../public/images/tag2.png'
import Fuse from 'fuse.js'

export async function GET(request: Request) {
  const mockData = {
    collection:[

        {id: 0, brand: 'Audemars Piguet', bezel: 'None', reserv:'80 Hours', dial:'Ocean dark blue with shades of silver and an tourbilion.', bracelet:'Steel', sort:'Luxury sports watch', price: 2327946, info: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', model:'Royal Oak', serie:'50th Anniversary', clasp:'Butterfly clasp', serial: '26730ST.OO.1320ST.01' , material: 'Stainless Steel', variant:'Selfwinding Flying Tourbillon', diameter:'41mm', resistance:'5 ATM', glass:'Sapphire crystal', img: APSTEEL , yr: '2021'},
        {id:1,  brand: 'Audemars Piguet', bezel: 'None', reserv:'60 Hours', dial:'White dial with silver.', bracelet:'Steel', sort:'Luxury sports watch', price: 398163, info: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', model:'Royal Oak', serie:'15500ST', clasp:'Butterfly clasp', serial: '15500ST.OO.1220ST.01' , material: 'Silver Stainless Steel', variant:'Selfwinding Automatic', diameter:'41mm', resistance:'5 ATM', glass:'Sapphire crystal', img: APWHITE , yr: '2023'},
        {id:2, brand: 'Audemars Piguet', bezel: 'None', reserv:'80 Hours', dial:'Blue dial with gold decorations.', bracelet:'18-carat pink gold', sort:'Luxury sports watch', price: 1415232, info: 'glareproofed sapphire crystal and caseback, screw-locked crown.', model:'Royal Oak',serie:'26240or', clasp:'Diver clasp', serial: '26240OR.OO.1320OR.08' , material: '18-karat pink gold', variant:'Selfwinding chronograph', diameter:'41mm', resistance:'5ATM', glass:'Sapphire crystal', img: APGOLD , yr: '2022'},
        {id:3, brand: 'OMEGA', bezel: 'ceramic bezel with Roman numerals in Ceragold™', reserv:'60 Hours', dial:'Sun-brushed blue dial with a date window at the 6 o-clock position.', bracelet:'Blue leather with rubbet linning.', sort:'Automatic chronometer', price: 332900, info: 'this timepiece is driven by the OMEGA Co-Axial Master Chronometer Calibre 8901', model:'Constellation',serie:'Constellation', clasp:'Pin buckle', serial: '131.63.41.21.03.001' , material: '18K Sedna™ gold / Leather', variant:'Selfwinding chronograph', diameter:'41mm', resistance:'5 bar', glass:'Sapphire crystal', img: OGLEATHER , yr: '2023'},
        {id:4, brand: 'OMEGA', bezel: 'Dive bezel', reserv:'55 Hours', dial:'Ceramic black bezel with a white enamel diving scale.', bracelet:'Stainless Steel', sort:'Divers', price: 783000, info: 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.', model:'Seamaster', serie:'Seamaster Professional Diver', clasp:'Deployant Clasp', serial: '210.30.42.20.01.001' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'42mm', resistance:'300ATM', glass:'Sapphire crystal', img: OGSTEEL , yr: '2023'},
        {id:5, brand: 'OMEGA', bezel: 'Dive bezel', reserv:'55 Hours', dial:'Ceramic grey bezel with a white enamel diving scale.', bracelet:'Stainless Steel', sort:'Divers', price: 783000, info: 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.', model:'Seamaster', serie:'Seamaster Professional Diver', clasp:'Deployant Clasp', serial: '210.30.42.20.01.001' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'42mm', resistance:'300ATM', glass:'Sapphire crystal', img: OGBLUE , yr: '2023'},
        {id:6, brand: 'Patek Philipe', bezel: 'None', reserv:'45 Hours', dial:'Blue dial with pattern.', bracelet:'Rubber', sort:'Modern sports watch', price: 844000, info: 'Timeless piece with an modern look for the modern man who loves sports.', model:'Aquanaut',serie:'Aquanaut', clasp:'Butterfly clasp', serial: '5168G-001' , material: 'White gold / Steel', variant:'Selfwinding chronograph', diameter:'42mm', resistance:'10ATM', glass:'Sapphire crystal', img: PBLUE , yr: '2019'},
        {id:7, brand: 'Patek Philipe', bezel: 'None', reserv:'45 Hours', dial:'Black dial with pattern.', bracelet:'Rubber', sort:'Modern sports watch', price: 844000, info: 'Timeless piece with an modern look for the modern man who loves sports.', model:'Aquanaut',serie:'Aquanaut', clasp:'Butterfly clasp', serial: '5168G-001' , material: 'White gold / Steel', variant:'Selfwinding chronograph', diameter:'42mm', resistance:'10ATM', glass:'Sapphire crystal', img: PBLACK , yr: '2019'},
        {id:8, brand: 'Patek Philipe', bezel: 'None', reserv:'70 Hours', dial:'Blue Tiffany & Co branded dial.', bracelet:'18K White Gold', sort:'Luxury Sports Watch', price: 5439962, info: 'The Patek Philippe Nautilus Perpetual Calendar is designed in a 40mm 18k white gold case and smooth satin-finished octagonal bezel.', model:'Nautilus',serie:'Nautilus', clasp:'Butterfly Clasp', serial: '5740/1G-001' , material: '18-karat White Gold', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'6ATM', glass:'Sapphire crystal', img: PMOON , yr: '2019'},
        {id:9, brand: 'Patek Philipe', bezel: 'None', reserv:'70 Hours', dial:'Blue Tiffany & Co branded dial with gold.', bracelet:'18K Pink Gold / Platina', sort:'Luxury Sports Watch', price: 5439962, info: 'The Patek Philippe Nautilus Perpetual Calendar is designed in a 40mm 18k white gold case and smooth satin-finished octagonal bezel.', model:'Nautilus',serie:'Nautilus', clasp:'Butterfly Clasp', serial: '5740/1G-001' , material: '18-karat Pink Gold', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'6ATM', glass:'Sapphire crystal', img: PGOLDSTEEL , yr: '2019'},
        {id:10, brand: 'Patek Philipe', bezel: 'None', reserv:'70 Hours', dial:'Blue with 18 K white gold.', bracelet:'Stainless Steel', sort:'Luxury Sports Watch', price: 3439962, info: 'The Patek Philippe Nautilus Perpetual Calendar is designed in a 40mm 18k white gold case and smooth satin-finished octagonal bezel.', model:'Nautilus',serie:'Nautilus', clasp:'Butterfly Clasp', serial: '5740/1G-001' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'6ATM', glass:'Sapphire crystal', img: PSTEEL , yr: '2019'},
        {id:11, brand: 'Rolex', bezel: 'GMT bezel', reserv:'48 Hours', dial:'Black dial with Rolex logo.', bracelet:'Stainless Steel', sort:'Divers', price: 170085, info: 'Rolex Submariner 16610LV.', model:'Submariner "Kermit"',serie:'Submariner', clasp:'Diver clasp', serial: '16610LV' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'30ATM', glass:'Sapphire crystal', img: KERMIT , yr: '2008'},
        {id:12, brand: 'Rolex', bezel: 'GMT bezel', reserv:'48 Hours', dial:'Black dial with Rolex logo.', bracelet:'Stainless Steel', sort:'Divers', price: 265868, info: 'Rolex Submariner 16610LV.', model:'Submariner "Pepsi"',serie:'Submariner', clasp:'Diver clasp', serial: '126710BLRO' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'30ATM', glass:'Sapphire crystal', img: PEPSI , yr: '2022'},
        {id:13, brand: 'Rolex', bezel: 'GMT bezel', reserv:'50 Hours', dial:'Blue dial with gold Rolex logo.', bracelet:'Stainless Steel', sort:'Divers', price: 137745, info: 'Rolex Submariner 16610LV.', model:'Submariner',serie:'Submariner', clasp:'Diver clasp', serial: '124060' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'30ATM', glass:'Sapphire crystal', img: DARK , yr: '20022'},
        {id:14, brand: 'Rolex', bezel: 'GMT bezel', reserv:'48 Hours', dial:'Black dial with Rolex logo.', bracelet:'Stainless Steel', sort:'Divers', price: 166968, info: 'Rolex Submariner 16610LV.', model:'Submariner "Bluesy"',serie:'Submariner', clasp:'Diver clasp', serial: '116613LB' , material: 'Stainless Steel / Gold', variant:'Selfwinding chronograph', diameter:'40mm', resistance:'30ATM', glass:'Sapphire crystal', img: ROLEX , yr: '2019'},
        {id:15, brand: 'Tag Heuer', bezel: 'Dive bezel', reserv:'50 Hours', dial:'blue dial with inspiration from the ocean.', bracelet:'Stainless Steel', sort:'Divers', price: 46050, info: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', model:'Aquaracer',serie:'', clasp:'Diver clasp', serial: 'WBP2010.BA0632' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'43mm', resistance:'300ATM', glass:'Sapphire crystal', img: AQUA , yr: '2023'},
        {id:16, brand: 'Tag Heuer', bezel: 'None', reserv:'70 Hours', dial:'Blue dial.', bracelet:'Stainless Steel', sort:'Sport Watch', price: 93300, info: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', model:'Monaco', serie:'CBL2111.BA0644', clasp:'Diver clasp', serial: 'CBL2111.BA0644' , material: 'Stainless Steel', variant:'Selfwinding chronograph', diameter:'39mm', resistance:'100ATM', glass:'Sapphire crystal', img: MONACO, yr:'2023'}
        
    ],
  };
  
  const searchIndex = Fuse.createIndex(
    ['brand'],
    mockData.collection
  )

  return Response.json({searchIndex, mockData});
}
