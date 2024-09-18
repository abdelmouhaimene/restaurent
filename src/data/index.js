import gallery1 from '../../public/images/gallery01.png';
import gallery3 from '../../public/images/gallery01.png';
import gallery2 from '../../public/images/gallery02.png';
import gallery4 from '../../public/images/gallery04.png';
import grilldish1 from '../../public/images/Menu/grilldish1.webp';
import grilldish2 from '../../public/images/Menu/grilldish2.webp';
import grilldish3 from '../../public/images/Menu/grilldish3.webp';
import grilldish4 from '../../public/images/Menu/grilldish4.webp';
import grilldish5 from '../../public/images/Menu/grilldish5.webp';
import salade1 from '../../public/images/Menu/salade1.webp';
import sea1 from '../../public/images/Menu/sea1.webp';
import sea2 from '../../public/images/Menu/sea2.webp';
import sea3 from '../../public/images/Menu/sea3.webp';
import soup1 from '../../public/images/Menu/soup1.webp';
import soup2 from '../../public/images/Menu/soup2.webp';
import soup3 from '../../public/images/Menu/soup3.webp';
import spaggeti1 from '../../public/images/Menu/spaggeti1.webp';

export const navLinks = [
    { href: "/", label: "Home", isLink: true },
    { href: "/Menu", label: "Menu", isLink: true },
    { href: "#a-propos", label: "About", isLink: false },
    { href: "#a-propos", label: "Contact Us", isLink: false },
];

export const gallery = [
    {href: '#' , imgUrl: gallery1},
    {href: '#' , imgUrl: gallery2},
    {href: '#' , imgUrl: gallery3},
    {href: '#' , imgUrl: gallery4},
    {href: '#' , imgUrl: gallery1},
    {href: '#' , imgUrl: gallery2},
    {href: '#' , imgUrl: gallery3},
    {href: '#' , imgUrl: gallery4},
]

export const categories = [
    {id: 1 , libelle: 'Salade'},
    {id: 2 , libelle: 'Soup'},
    {id: 3 , libelle: 'Grille dish'},
    {id: 4 , libelle: 'Sea dish'},
    {id: 5 , libelle: 'Spagetti'},
    {id: 6 , libelle: 'Burger'},
    {id: 7 , libelle: 'Pizza'},
    {id: 8 , libelle: 'Drinks'},
]

export const food = [
    {idCategory: 1 , libelle: 'Salade' , img : salade1},
    {idCategory: 2 , libelle: 'Soup1' , img : soup1},
    {idCategory: 2 , libelle: 'Soup2' , img : soup2},
    {idCategory: 2 , libelle: 'Soup3' , img : soup3},
    {idCategory: 3 , libelle: 'grilldish1' , img : grilldish1},
    {idCategory: 3 , libelle: 'grilldish2' , img : grilldish2},
    {idCategory: 3 , libelle: 'grilldish3' , img : grilldish3},
    {idCategory: 3 , libelle: 'grilldish4' , img : grilldish4},
    {idCategory: 3 , libelle: 'grilldish5' , img : grilldish5},
    {idCategory: 4 , libelle: 'Sea1' , img : sea1},
    {idCategory: 4 , libelle: 'Sea2' , img : sea2},
    {idCategory: 4 , libelle: 'Sea3' , img : sea3},
    {idCategory: 5 , libelle: 'Spagetti1' , img : spaggeti1},


]