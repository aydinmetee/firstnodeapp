var url ="http://localhost:5000/";

exports.anasayfa = (req,res) => {
    res.render("./anasayfa.ejs",{
        title: 'Anasayfa',
        name : 'ANASAYFA',
        link: url+'ek-sayfa'

    });
};   

exports.eksayfa = (req,res) => {
    res.render("./eksayfa.ejs",{
        title: 'Ek Sayfa',
        name : 'EK SAYFA',
        link: url

    });
};   