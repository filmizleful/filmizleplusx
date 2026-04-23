const FILMLER = [

{
id:"john-wick", isim:"John Wick", tur:"aksiyon", yil:"2014", puan:"7.4",
afis:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
ara:"john wick aksiyon 2014",
meta:"Aksiyon • IMDb 7.4",
ozet:"Eski suikastçının intikamı.",
hakkinda1:"Modern aksiyon klasiği.",
hakkinda2:"Stilize sahneleriyle ünlü.",
fragman:"https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
izle:"#"
},

{
id:"batman", isim:"Batman", tur:"aksiyon", yil:"2022", puan:"7.8",
afis:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
ara:"batman aksiyon",
meta:"Aksiyon • IMDb 7.8",
ozet:"Gotham’da karanlık kahraman.",
hakkinda1:"Dedektif teması güçlü.",
hakkinda2:"Atmosferik film.",
fragman:"https://www.youtube.com/watch?v=mqqft2x_Aa4",
izle:"#"
},

{
id:"madmax", isim:"Mad Max Fury Road", tur:"aksiyon", yil:"2015", puan:"8.1",
afis:"https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
ara:"mad max aksiyon",
meta:"Aksiyon • IMDb 8.1",
ozet:"Çölde kaçış hikayesi.",
hakkinda1:"Modern aksiyon zirvesi.",
hakkinda2:"Hızlı tempolu.",
fragman:"https://www.youtube.com/watch?v=hEJnMQG9ev8",
izle:"#"
},

{
id:"interstellar", isim:"Interstellar", tur:"bilimkurgu", yil:"2014", puan:"8.7",
afis:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
ara:"interstellar bilim kurgu",
meta:"Bilim Kurgu • IMDb 8.7",
ozet:"Uzay yolculuğu.",
hakkinda1:"Duygusal + bilimsel.",
hakkinda2:"Nolan filmi.",
fragman:"https://www.youtube.com/watch?v=zSWdZVtXT7E",
izle:"#"
},

{
id:"inception", isim:"Inception", tur:"bilimkurgu", yil:"2010", puan:"8.8",
afis:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
ara:"inception",
meta:"Bilim Kurgu • IMDb 8.8",
ozet:"Rüyalar içinde rüya.",
hakkinda1:"Zihin filmi.",
hakkinda2:"Efsane.",
fragman:"https://www.youtube.com/watch?v=YoHD9XEInc0",
izle:"#"
},

{
id:"matrix", isim:"Matrix", tur:"bilimkurgu", yil:"1999", puan:"8.7",
afis:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
ara:"matrix",
meta:"Bilim Kurgu • IMDb 8.7",
ozet:"Gerçeklik sorgusu.",
hakkinda1:"Kült film.",
hakkinda2:"Efsane sahneler.",
fragman:"https://www.youtube.com/watch?v=vKQi3bBA1y8",
izle:"#"
},

{
id:"it", isim:"IT", tur:"korku", yil:"2017", puan:"7.3",
afis:"https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
ara:"it korku",
meta:"Korku • IMDb 7.3",
ozet:"Pennywise geri döndü.",
hakkinda1:"Stephen King.",
hakkinda2:"Korku klasiği.",
fragman:"https://www.youtube.com/watch?v=xKJmEC5ieOk",
izle:"#"
},

{
id:"conjuring", isim:"The Conjuring", tur:"korku", yil:"2013", puan:"7.5",
afis:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
ara:"conjuring korku",
meta:"Korku • IMDb 7.5",
ozet:"Gerçek olaylar.",
hakkinda1:"Korku serisi.",
hakkinda2:"Çok sevildi.",
fragman:"https://www.youtube.com/watch?v=k10ETZ41q5o",
izle:"#"
},

{
id:"avatar", isim:"Avatar", tur:"macera", yil:"2009", puan:"7.9",
afis:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
ara:"avatar",
meta:"Macera • IMDb 7.9",
ozet:"Pandora gezegeni.",
hakkinda1:"Görsel şaheser.",
hakkinda2:"Çok ünlü.",
fragman:"https://www.youtube.com/watch?v=5PSNL1qE6VY",
izle:"#"
},

{
id:"hobbit", isim:"The Hobbit", tur:"macera", yil:"2012", puan:"7.8",
afis:"https://image.tmdb.org/t/p/w500/xgn6lZBmnYd1J6h9kz3x3kQfF1L.jpg",
ara:"hobbit",
meta:"Macera • IMDb 7.8",
ozet:"Bilbo yolculuğu.",
hakkinda1:"Fantastik.",
hakkinda2:"LOTR evreni.",
fragman:"https://www.youtube.com/watch?v=JTSoD4BBCJc",
izle:"#"
},

{
id:"gladiator", isim:"Gladiator", tur:"aksiyon", yil:"2000", puan:"8.5",
afis:"https://image.tmdb.org/t/p/w500/pRn3TJHbAqCAO7V1RXnCk6r0TzZ.jpg",
ara:"gladiator",
meta:"Aksiyon • IMDb 8.5",
ozet:"Roma’da intikam hikayesi.",
hakkinda1:"Epik film.",
hakkinda2:"Oscar kazandı.",
fragman:"https://www.youtube.com/watch?v=owK1qxDselE",
izle:"#"
},

{
id:"darkknight", isim:"The Dark Knight", tur:"aksiyon", yil:"2008", puan:"9.0",
afis:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
ara:"dark knight",
meta:"Aksiyon • IMDb 9.0",
ozet:"Batman vs Joker.",
hakkinda1:"Efsane film.",
hakkinda2:"Ledger performansı.",
fragman:"https://www.youtube.com/watch?v=EXeTwQWrcwY",
izle:"#"
},

{
id:"avengers", isim:"Avengers Endgame", tur:"aksiyon", yil:"2019", puan:"8.4",
afis:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
ara:"avengers",
meta:"Aksiyon • IMDb 8.4",
ozet:"Final savaşı.",
hakkinda1:"Marvel finali.",
hakkinda2:"Çok büyük film.",
fragman:"https://www.youtube.com/watch?v=TcMBFSGVi1c",
izle:"#"
},

{
id:"fast7", isim:"Fast & Furious 7", tur:"aksiyon", yil:"2015", puan:"7.1",
afis:"https://image.tmdb.org/t/p/w500/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
ara:"fast furious",
meta:"Aksiyon • IMDb 7.1",
ozet:"Araba aksiyonu.",
hakkinda1:"Hızlı sahneler.",
hakkinda2:"Duygusal final.",
fragman:"https://www.youtube.com/watch?v=Skpu5HaVkOc",
izle:"#"
},

{
id:"martian", isim:"The Martian", tur:"bilimkurgu", yil:"2015", puan:"8.0",
afis:"https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
ara:"martian",
meta:"Bilim Kurgu • IMDb 8.0",
ozet:"Mars’ta hayatta kalma.",
hakkinda1:"Bilimsel film.",
hakkinda2:"Çok sevildi.",
fragman:"https://www.youtube.com/watch?v=ej3ioOneTy8",
izle:"#"
},

{
id:"gravity", isim:"Gravity", tur:"bilimkurgu", yil:"2013", puan:"7.7",
afis:"https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
ara:"gravity",
meta:"Bilim Kurgu • IMDb 7.7",
ozet:"Uzayda yalnızlık.",
hakkinda1:"Oscar aldı.",
hakkinda2:"Gerilim yüksek.",
fragman:"https://www.youtube.com/watch?v=OiTiKOy59o4",
izle:"#"
},

{
id:"dune", isim:"Dune", tur:"bilimkurgu", yil:"2021", puan:"8.0",
afis:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
ara:"dune",
meta:"Bilim Kurgu • IMDb 8.0",
ozet:"Çöl gezegeni.",
hakkinda1:"Epik film.",
hakkinda2:"Yeni seri.",
fragman:"https://www.youtube.com/watch?v=8g18jFHCLXk",
izle:"#"
},

{
id:"nun", isim:"The Nun", tur:"korku", yil:"2018", puan:"5.3",
afis:"https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
ara:"nun",
meta:"Korku • IMDb 5.3",
ozet:"Rahibe laneti.",
hakkinda1:"Korku filmi.",
hakkinda2:"Conjuring evreni.",
fragman:"https://www.youtube.com/watch?v=pzD9zGcUNrw",
izle:"#"
},

{
id:"insidious", isim:"Insidious", tur:"korku", yil:"2010", puan:"6.8",
afis:"https://image.tmdb.org/t/p/w500/1egY4kDdRYwFZ3gYv9Ww3Mkk7l.jpg",
ara:"insidious",
meta:"Korku • IMDb 6.8",
ozet:"Paranormal olaylar.",
hakkinda1:"Modern korku.",
hakkinda2:"Gerilimli.",
fragman:"https://www.youtube.com/watch?v=zuZnRUcoWos",
izle:"#"
},

{
id:"pirates", isim:"Pirates of the Caribbean", tur:"macera", yil:"2003", puan:"8.1",
afis:"https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
ara:"pirates",
meta:"Macera • IMDb 8.1",
ozet:"Jack Sparrow.",
hakkinda1:"Efsane seri.",
hakkinda2:"Çok eğlenceli.",
fragman:"https://www.youtube.com/watch?v=naQr0uTrH_s",
izle:"#"
},

{
id:"junglecruise", isim:"Jungle Cruise", tur:"macera", yil:"2021", puan:"6.6",
afis:"https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
ara:"jungle cruise",
meta:"Macera • IMDb 6.6",
ozet:"Nehir yolculuğu.",
hakkinda1:"Disney macerası.",
hakkinda2:"Eğlenceli film.",
fragman:"https://www.youtube.com/watch?v=f_HvoipFcA8",
izle:"#"
},

{
id:"lordrings1", isim:"The Lord of the Rings 1", tur:"macera", yil:"2001", puan:"8.8",
afis:"https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
ara:"lord of the rings",
meta:"Macera • IMDb 8.8",
ozet:"Yüzüğün yolculuğu.",
hakkinda1:"Fantastik başyapıt.",
hakkinda2:"Çok sevilen seri.",
fragman:"https://www.youtube.com/watch?v=V75dMMIW2B4",
izle:"#"
},

{
id:"jurassicpark", isim:"Jurassic Park", tur:"macera", yil:"1993", puan:"8.2",
afis:"https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
ara:"jurassic park",
meta:"Macera • IMDb 8.2",
ozet:"Dinozor parkı felaketi.",
hakkinda1:"Kült macera filmi.",
hakkinda2:"Spielberg klasiği.",
fragman:"https://www.youtube.com/watch?v=lc0UehYemQA",
izle:"#"
},

{
id:"lifeofpi", isim:"Life of Pi", tur:"macera", yil:"2012", puan:"7.9",
afis:"https://image.tmdb.org/t/p/w500/iLgRu4hhSr6V1uManX6ukDriiSc.jpg",
ara:"life of pi",
meta:"Macera • IMDb 7.9",
ozet:"Okyanusta hayatta kalma.",
hakkinda1:"Duygusal film.",
hakkinda2:"Görsel açıdan güçlü.",
fragman:"https://www.youtube.com/watch?v=3mMN693-F3U",
izle:"#"
},

{
id:"matrix2", isim:"The Matrix Reloaded", tur:"bilimkurgu", yil:"2003", puan:"7.2",
afis:"https://image.tmdb.org/t/p/w500/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
ara:"matrix reloaded",
meta:"Bilim Kurgu • IMDb 7.2",
ozet:"Neo’nun mücadelesi sürer.",
hakkinda1:"Matrix devam filmi.",
hakkinda2:"Daha büyük evren.",
fragman:"https://www.youtube.com/watch?v=kYzz0FSgpSU",
izle:"#"
},

{
id:"alien", isim:"Alien", tur:"bilimkurgu", yil:"1979", puan:"8.5",
afis:"https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
ara:"alien",
meta:"Bilim Kurgu • IMDb 8.5",
ozet:"Uzay gemisinde yaratık.",
hakkinda1:"Bilim kurgu korku klasiği.",
hakkinda2:"Atmosferi çok güçlü.",
fragman:"https://www.youtube.com/watch?v=jQ5lPt9edzQ",
izle:"#"
},

{
id:"terminator2", isim:"Terminator 2", tur:"bilimkurgu", yil:"1991", puan:"8.6",
afis:"https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
ara:"terminator 2",
meta:"Bilim Kurgu • IMDb 8.6",
ozet:"Makineler savaşı.",
hakkinda1:"Efsane devam filmi.",
hakkinda2:"Aksiyon dolu.",
fragman:"https://www.youtube.com/watch?v=CRRlbK5w8AE",
izle:"#"
},

{
id:"hereditary", isim:"Hereditary", tur:"korku", yil:"2018", puan:"7.3",
afis:"https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg",
ara:"hereditary",
meta:"Korku • IMDb 7.3",
ozet:"Aile içi karanlık sırlar.",
hakkinda1:"Modern korku klasiği.",
hakkinda2:"Rahatsız edici film.",
fragman:"https://www.youtube.com/watch?v=V6wWKNij_1M",
izle:"#"
},

{
id:"ring", isim:"The Ring", tur:"korku", yil:"2002", puan:"7.1",
afis:"https://image.tmdb.org/t/p/w500/1HkMVBzkKllA1Y7cXcmx8q8sNQU.jpg",
ara:"the ring",
meta:"Korku • IMDb 7.1",
ozet:"Lanetli video kaseti.",
hakkinda1:"2000’ler korkusu.",
hakkinda2:"Çok ünlü film.",
fragman:"https://www.youtube.com/watch?v=yzR2GY-ew8I",
izle:"#"
},

{
id:"quietplace", isim:"A Quiet Place", tur:"korku", yil:"2018", puan:"7.5",
afis:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
ara:"a quiet place",
meta:"Korku • IMDb 7.5",
ozet:"Sessizlikte hayatta kalma.",
hakkinda1:"Farklı konsept.",
hakkinda2:"Gerilim yüksek.",
fragman:"https://www.youtube.com/watch?v=WR7cc5t7tv8",
izle:"#"
},

{
id:"fightclub", isim:"Fight Club", tur:"aksiyon", yil:"1999", puan:"8.8",
afis:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
ara:"fight club",
meta:"Aksiyon • IMDb 8.8",
ozet:"Yeraltı dövüş kulübü.",
hakkinda1:"Kült film.",
hakkinda2:"Finali efsane.",
fragman:"https://www.youtube.com/watch?v=SUXWAEX2jlg",
izle:"#"
},

{
id:"se7en", isim:"Se7en", tur:"korku", yil:"1995", puan:"8.6",
afis:"https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
ara:"se7en",
meta:"Korku • IMDb 8.6",
ozet:"7 ölümcül günah cinayetleri.",
hakkinda1:"Gerilim klasiği.",
hakkinda2:"Karanlık atmosfer.",
fragman:"https://www.youtube.com/watch?v=znmZoVkCjpI",
izle:"#"
},

{
id:"joker", isim:"Joker", tur:"aksiyon", yil:"2019", puan:"8.4",
afis:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
ara:"joker",
meta:"Aksiyon • IMDb 8.4",
ozet:"Joker’in doğuşu.",
hakkinda1:"Oscar kazandı.",
hakkinda2:"Psikolojik film.",
fragman:"https://www.youtube.com/watch?v=zAGVQLHvwOY",
izle:"#"
},

{
id:"parasite", isim:"Parasite", tur:"gerilim", yil:"2019", puan:"8.6",
afis:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
ara:"parasite",
meta:"Gerilim • IMDb 8.6",
ozet:"Zengin-fakir çatışması.",
hakkinda1:"Oscar aldı.",
hakkinda2:"Çok iyi film.",
fragman:"https://www.youtube.com/watch?v=5xH0HfJHsaY",
izle:"#"
},

{
id:"avatar2", isim:"Avatar 2", tur:"macera", yil:"2022", puan:"7.6",
afis:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
ara:"avatar 2",
meta:"Macera • IMDb 7.6",
ozet:"Pandora’ya dönüş.",
hakkinda1:"Görsel şölen.",
hakkinda2:"Devam filmi.",
fragman:"https://www.youtube.com/watch?v=d9MyW72ELq0",
izle:"#"
},

{
id:"thor", isim:"Thor Ragnarok", tur:"aksiyon", yil:"2017", puan:"7.9",
afis:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
ara:"thor",
meta:"Aksiyon • IMDb 7.9",
ozet:"Thor’un macerası.",
hakkinda1:"Renkli film.",
hakkinda2:"Eğlenceli.",
fragman:"https://www.youtube.com/watch?v=ue80QwXMRHg",
izle:"#"
},

{
id:"ironman", isim:"Iron Man", tur:"aksiyon", yil:"2008", puan:"7.9",
afis:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
ara:"iron man",
meta:"Aksiyon • IMDb 7.9",
ozet:"Tony Stark hikayesi.",
hakkinda1:"Marvel başlangıcı.",
hakkinda2:"Klasik.",
fragman:"https://www.youtube.com/watch?v=8ugaeA-nMTc",
izle:"#"
},

{
id:"spiderman", isim:"Spider Man", tur:"aksiyon", yil:"2002", puan:"7.4",
afis:"https://image.tmdb.org/t/p/w500/fwoETElxZ3pT0V0fKOm0Xr3Xr3G.jpg",
ara:"spiderman",
meta:"Aksiyon • IMDb 7.4",
ozet:"Peter Parker.",
hakkinda1:"Klasik.",
hakkinda2:"Çok sevildi.",
fragman:"https://www.youtube.com/watch?v=t06RUxPbp_c",
izle:"#"
},

{
id:"venom", isim:"Venom", tur:"aksiyon", yil:"2018", puan:"6.6",
afis:"https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
ara:"venom",
meta:"Aksiyon • IMDb 6.6",
ozet:"Anti kahraman.",
hakkinda1:"Popüler film.",
hakkinda2:"Devamı var.",
fragman:"https://www.youtube.com/watch?v=u9Mv98Gr5pY",
izle:"#"
},

{
id:"hulk", isim:"Hulk", tur:"aksiyon", yil:"2003", puan:"5.6",
afis:"https://image.tmdb.org/t/p/w500/qy7cvt9K6ZqXo8J7kUjzAm8h1Hn.jpg",
ara:"hulk",
meta:"Aksiyon • IMDb 5.6",
ozet:"Yeşil dev.",
hakkinda1:"Marvel filmi.",
hakkinda2:"Güçlü karakter.",
fragman:"https://www.youtube.com/watch?v=xbqNb2PFKKA",
izle:"#"
},

{
id:"kingarthur", isim:"King Arthur", tur:"macera", yil:"2017", puan:"6.7",
afis:"https://image.tmdb.org/t/p/w500/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
ara:"king arthur",
meta:"Macera • IMDb 6.7",
ozet:"Kral Arthur.",
hakkinda1:"Fantastik.",
hakkinda2:"Kılıç hikayesi.",
fragman:"https://www.youtube.com/watch?v=jIM4-HLtUM0",
izle:"#"
},

{
id:"troy", isim:"Troy", tur:"macera", yil:"2004", puan:"7.3",
afis:"https://image.tmdb.org/t/p/w500/a07x8x5xXwYxYvLw2PzY6Z3Y0JV.jpg",
ara:"troy",
meta:"Macera • IMDb 7.3",
ozet:"Truva savaşı.",
hakkinda1:"Epik film.",
hakkinda2:"Brad Pitt.",
fragman:"https://www.youtube.com/watch?v=znTLzRJimeY",
izle:"#"
},

{
id:"300", isim:"300", tur:"aksiyon", yil:"2006", puan:"7.6",
afis:"https://image.tmdb.org/t/p/w500/ajqFq0Qb2mYx6E7fYB4hY3FQn1W.jpg",
ara:"300",
meta:"Aksiyon • IMDb 7.6",
ozet:"Sparta savaşı.",
hakkinda1:"Stilize film.",
hakkinda2:"Efsane sahneler.",
fragman:"https://www.youtube.com/watch?v=UrIbxk7idYA",
izle:"#"
},

{
id:"worldwarz", isim:"World War Z", tur:"korku", yil:"2013", puan:"7.0",
afis:"https://image.tmdb.org/t/p/w500/ha3mFh0W2X1kR4k4L7J8Uq3t3Yd.jpg",
ara:"world war z",
meta:"Korku • IMDb 7.0",
ozet:"Zombi salgını.",
hakkinda1:"Hızlı film.",
hakkinda2:"Gerilimli.",
fragman:"https://www.youtube.com/watch?v=Md6Dvxdr0AQ",
izle:"#"
},

{
id:"trainbusan", isim:"Train to Busan", tur:"korku", yil:"2016", puan:"7.6",
afis:"https://image.tmdb.org/t/p/w500/3H1WFCuxyNRP35OiL2qqwhAXxc0.jpg",
ara:"train to busan",
meta:"Korku • IMDb 7.6",
ozet:"Trende zombi.",
hakkinda1:"Çok sevildi.",
hakkinda2:"Duygusal.",
fragman:"https://www.youtube.com/watch?v=pyWuHv2-Abk",
izle:"#"
},

{
id:"nun2", isim:"The Nun 2", tur:"korku", yil:"2023", puan:"6.0",
afis:"https://image.tmdb.org/t/p/w500/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
ara:"nun 2",
meta:"Korku • IMDb 6.0",
ozet:"Rahibe geri döndü.",
hakkinda1:"Devam filmi.",
hakkinda2:"Yeni korku.",
fragman:"https://www.youtube.com/watch?v=QF-oyCwaArU",
izle:"#"
},

{
id:"maze", isim:"Maze Runner", tur:"macera", yil:"2014", puan:"6.8",
afis:"https://image.tmdb.org/t/p/w500/odr1vC1W5V0DqA6Y0X6n2y7X3pZ.jpg",
ara:"maze runner",
meta:"Macera • IMDb 6.8",
ozet:"Labirentten kaçış.",
hakkinda1:"Gençlik filmi.",
hakkinda2:"Seri var.",
fragman:"https://www.youtube.com/watch?v=AwwbhhjQ9Xk",
izle:"#"
},

{
id:"divergent", isim:"Divergent", tur:"macera", yil:"2014", puan:"6.6",
afis:"https://image.tmdb.org/t/p/w500/6L5z4N7UQ0d9dZYkTfLZNVVRFlE.jpg",
ara:"divergent",
meta:"Macera • IMDb 6.6",
ozet:"Farklı bir toplum.",
hakkinda1:"Distopya.",
hakkinda2:"Gençlik.",
fragman:"https://www.youtube.com/watch?v=sutgWjz10sM",
izle:"#"
},

{
id:"hzsuleyman", isim:"Hz Suleyman", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-suleyman.jpg",
ara:"hz suleyman dini film",
meta:"Dini Film",
ozet:"Hz Süleyman'ın hayatını anlatır.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=TZEgcntD4Mc",
izle:"#"
},

{
id:"cagri", isim:"Cagrı", tur:"dini", yil:"1976", puan:"8.5",
afis:"resimler/cagri.jpg",
meta:"Dini • IMDb 8.5",
ozet:"İslam'ın doğuşunu anlatan klasik film.",
hakkinda1:"En bilinen dini yapım.",
hakkinda2:"Uluslararası kaliteli film.",
fragman:"https://www.youtube.com/watch?v=kp1XTsmfvsQ",
izle:"#"
},

{
id:"hzmusa", isim:"Hz Musa", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-musa.jpg",
ara:"hz musa dini film",
meta:"Dini Film",
ozet:"Hz Musa'nın hayatını anlatır.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=1i7_aQaxq2s",
izle:"#"
},

{
id:"hzmuhammet", isim:"Hz Muhamet", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-muhamet.jpg",
ara:"hz muhammet dini film",
meta:"Dini Film",
ozet:"Hz Muhammed'in hayatı.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=9DieMoGAPkk",
izle:"#"
},

{
id:"hzomer", isim:"Hz Ömerin Hayatı", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-omer.jpg",
ara:"hz omer dini film",
meta:"Dini Film",
ozet:"Hz Ömer'in hayatı.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=xZzWeOgPdfk",
izle:"#"
},

{
id:"hzyusuf", isim:"Hz Yusuf", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-yusuf.jpg",
meta:"Dini Film",
ozet:"Hz Yusuf'un hayatı.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=7loRubAeJ58",
izle:"#"
},

{
id:"hzali", isim:"Hz Alinin Hayatı", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-ali.jpg",
ara:"hz ali dini film",
meta:"Dini Film",
ozet:"Hz Ali'nin hayatı.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=zd3TM0f2bQ8",
izle:"#"
},

{
id:"hzebubekir", isim:"Hz Ebubekirin Hayatı", tur:"dini", yil:"-", puan:"-",
afis:"resimler/hz-ebubekir.jpg",
ara:"hz ebubekir dini film",
meta:"Dini Film",
ozet:"Hz Ebubekir'in hayatı.",
hakkinda1:"Dini içerik.",
hakkinda2:"Tarihi anlatım.",
fragman:"https://www.youtube.com/watch?v=KqYinYJEIx",
izle:"#"
},

{
id:"findingnemo", isim:"Finding Nemo", tur:"animasyon", yil:"2003", puan:"8.2",
afis:"https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
ara:"finding nemo animasyon",
meta:"Animasyon • IMDb 8.2",
ozet:"Kaybolan küçük balığı bulmak için çıkan büyük yolculuk.",
hakkinda1:"Pixar klasiği.",
hakkinda2:"Aile dostu çok sevilen animasyon.",
fragman:"https://www.youtube.com/watch?v=9oQ628Seb9w",
izle:"#"
},

{
id:"toystory", isim:"Toy Story", tur:"animasyon", yil:"1995", puan:"8.3",
afis:"https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
ara:"toy story animasyon",
meta:"Animasyon • IMDb 8.3",
ozet:"Oyuncakların gizli hayatı.",
hakkinda1:"Pixar klasiği.",
hakkinda2:"Çok eğlenceli.",
fragman:"https://www.youtube.com/watch?v=v-PjgYDrg70",
izle:"#"
},

{
id:"lionking", isim:"Aslan Kral", tur:"animasyon", yil:"1994", puan:"8.5",
afis:"https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
ara:"aslan kral animasyon",
meta:"Animasyon • IMDb 8.5",
ozet:"Simba'nın büyüme hikayesi.",
hakkinda1:"Disney klasiği.",
hakkinda2:"Çok sevilen animasyon.",
fragman:"https://www.youtube.com/watch?v=4sj1MT05lAA",
izle:"#"
},

{
id:"shrek", isim:"Shrek", tur:"animasyon", yil:"2001", puan:"7.9",
afis:"https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
ara:"shrek animasyon",
meta:"Animasyon • IMDb 7.9",
ozet:"Yeşil devin komik macerası.",
hakkinda1:"Komedi dolu animasyon.",
hakkinda2:"Çok popüler seri.",
fragman:"https://www.youtube.com/watch?v=CwXOrWvPBPk",
izle:"#"
},

{
id:"cars", isim:"Cars", tur:"animasyon", yil:"2006", puan:"7.2",
afis:"https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
ara:"cars animasyon",
meta:"Animasyon • IMDb 7.2",
ozet:"Yarış dünyasında geçen eğlenceli hikaye.",
hakkinda1:"Pixar filmi.",
hakkinda2:"Çocukların sevdiği animasyon.",
fragman:"https://www.youtube.com/watch?v=SbXIj2T-_uk",
izle:"#"
},

{
id:"frozen", isim:"Frozen", tur:"animasyon", yil:"2013", puan:"7.4",
afis:"https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
ara:"frozen animasyon",
meta:"Animasyon • IMDb 7.4",
ozet:"Elsa ve Anna'nın hikayesi.",
hakkinda1:"Disney yapımı.",
hakkinda2:"Çok ünlü animasyon.",
fragman:"https://www.youtube.com/watch?v=TbQm5doF_Uc",
izle:"#"
},
{
id:"findingnemo", isim:"Finding Nemo", tur:"animasyon", yil:"2003", puan:"8.2",
afis:"https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
ara:"finding nemo animasyon",
meta:"Animasyon • IMDb 8.2",
ozet:"Kaybolan küçük balığı bulmak için çıkan büyük yolculuk.",
hakkinda1:"Pixar klasiği.",
hakkinda2:"Aile dostu çok sevilen animasyon.",
fragman:"https://www.youtube.com/watch?v=9oQ628Seb9w",
izle:"#"
},

{
id:"doomsday",
isim:"Doomsday",
tur:"aksiyon",
yil:"2026",
puan:"8.5",
afis:"https://via.placeholder.com/300x450",
ara:"doomsday marvel",
meta:"Aksiyon • IMDb 8.5",
ozet:"Doctor Doom'un çoklu evreni tehdit ettiği büyük savaş.",
hakkinda1:"Avengers, X-Men ve Fantastik Dörtlü birleşiyor.",
hakkinda2:"Multiverse Saga finali.",
fragman:"https://www.youtube.com/watch?v=G1QSQkUyzjc",
izle:"#"
}
];