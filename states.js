// Curated state R&D credit snapshot. Headline rates only; NOT available from any public API.
// Compiled Oct 2026 from KPMG / Aprio / CLA state R&D credit summaries. Verify with the state revenue dept before filing.
// rate = % of QREs for a startup with no base-period history; cap = $ limit on credit (if known)
window.STATE_CREDITS = {
  CA: {name:"California", rate:1.3, ascRate:3, refund:"Non-refundable; carries forward indefinitely", note:"From 2025 California offers an ASC: 1.3% of QREs with no R&D in the prior 3 years, otherwise 3% above half the 3-year average (SB 711). The 15% regular method still exists."},
  TX: {name:"Texas", rate:4.361, ascRate:8.722, refund:"Franchise-tax credit, capped at 50% of franchise tax owed; 20-report carryforward", note:"From 2026 (SB 2206): 4.361% with no prior R&D, otherwise 8.722% above half the 3-year average (higher with a university). Most startups owe little franchise tax, so expect to bank it."},
  MA: {name:"Massachusetts", rate:10, refund:"Refundable only for certified life-sciences cos.", note:"Life Sciences Tax Incentive Program can refund up to 90% of unused credit."},
  AZ: {name:"Arizona", rate:24, tierCap:2500000, rate2:15, refund:"Refundable program for <150 employees (lottery, $100K cap)", note:"24% on first $2.5M of QREs, 15% above. Refundable slots are limited and randomly selected."},
  MN: {name:"Minnesota", rate:10, cash:0.25, tierCap:2000000, rate2:2.5, refund:"Partially refundable (19.2% in 2025, 25% from 2026)", note:"10% on first $2M of QREs, 2.5% above. Refund must be elected on a timely return."},
  MI: {name:"Michigan", rate:15, baseRate:3, cash:1, cap:250000, refund:"New refundable credit for <250 employees (tax years 2025+)", note:"Under 250 employees: 3% of QREs up to your base, 15% above it, capped at $250K/yr and refundable (statewide $100M cap)."},
  CT: {name:"Connecticut", rate:6, refund:"Cash exchange: 33% standard, 90% for small biotech", note:"Incremental credit 1-6%; unused credits can be exchanged for cash."},
  NJ: {name:"New Jersey", rate:10, refund:"Non-refundable; NOL/credit sale program for tech & biotech startups", note:"Technology Business Tax Certificate Transfer Program lets startups sell NOLs/credits for cash."},
  PA: {name:"Pennsylvania", rate:10, refund:"Transferable (sell credits)", note:"Small businesses can sell credits; annual statewide cap applies."},
  GA: {name:"Georgia", rate:10, refund:"Non-refundable; payroll-tax offset available for startups", note:"Georgia lets certain R&D credits offset payroll withholding."},
  CO: {name:"Colorado", rate:3, refund:"Non-refundable", note:"Incremental credit on QREs over base."},
  UT: {name:"Utah", rate:5, refund:"Non-refundable; carries forward 14 yrs", note:"Additional credit for qualifying university research."},
  IL: {name:"Illinois", rate:6.5, refund:"Non-refundable; carries forward 5 yrs", note:"Incremental credit."},
  OH: {name:"Ohio", rate:7, refund:"Non-refundable", note:"Ohio R&D investment credit."},
  ID: {name:"Idaho", rate:5, refund:"Non-refundable; 14-yr carryforward", note:"Startups may elect a lower fixed base percentage."},
  NY: {name:"New York", rate:0, refund:"QETC credits can be refundable", note:"No general R&D credit; Qualified Emerging Technology Company (QETC) credits instead. Estimator shows $0 here."},
  WA: {name:"Washington", rate:0, refund:"B&O tax credit (small)", note:"Business & Occupation tax credit for high-tech R&D; not modeled."},
  FL: {name:"Florida", rate:0, refund:"Not modeled", note:"Corporate-tax R&D credit has a statewide cap; not modeled."},
  OK: {name:"Oklahoma", rate:5, cap:null, refund:"Rebate program, first-come first-served ($20M cap)", note:"5% rebate on QREs, not a traditional credit."},
  WY: {name:"Wyoming", rate:0, refund:"None", note:"No state income tax and no state R&D credit."},
  NV: {name:"Nevada", rate:0, refund:"None", note:"No state income tax and no state R&D credit."}
};
window.STATE_NAMES = {AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"D.C.",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};
// tile-grid map positions [col,row]
window.TILES = {AK:[0,0],ME:[10,0],VT:[9,1],NH:[10,1],WA:[0,2],ID:[1,2],MT:[2,2],ND:[3,2],MN:[4,2],IL:[5,2],WI:[5,1],MI:[6,2],NY:[8,2],MA:[10,2],OR:[0,3],NV:[1,3],WY:[2,3],SD:[3,3],IA:[4,3],IN:[5,3],OH:[6,3],PA:[7,3],NJ:[8,3],CT:[9,3],RI:[10,3],CA:[0,4],UT:[1,4],CO:[2,4],NE:[3,4],MO:[4,4],KY:[5,4],WV:[6,4],VA:[7,4],MD:[8,4],DE:[9,4],AZ:[1,5],NM:[2,5],KS:[3,5],AR:[4,5],TN:[5,5],NC:[6,5],SC:[7,5],DC:[8,5],OK:[3,6],LA:[4,6],MS:[5,6],AL:[6,6],GA:[7,6],HI:[0,7],TX:[3,7],FL:[8,7]};
