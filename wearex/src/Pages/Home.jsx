import Carousel from "../HomeComponents/Carousel";
import MySimpleGrid from "../HomeComponents/SimpleGrids";
import SlickSlider from '../HomeComponents/SlickSlider'
import "./home.css"
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {Link as RouterLink} from 'react-router-dom'

export default function Home(){
    const {isAuth} = useContext(AuthContext);

    

    return <div>
        <RouterLink to='/mensproduct' ><Carousel images={AllImagesData.carouselImages.section1} /></RouterLink>
        <img  className="hover-image" src='https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg' alt='icons'/>
        <RouterLink  to='/mensproduct'><Carousel images={AllImagesData.carouselImages.section2} /></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SpecieUpYourBrandGame-SectionheaderStrip.jpg' alt='icons'/>
        <Carousel images={AllImagesData.carouselImages.section3} />
        <Carousel images={AllImagesData.carouselImages.section4} />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg" alt='name'/>
        <MySimpleGrid images={AllImagesData.MyGridImages.section1} />
        <RouterLink to='/mensproduct' ><SlickSlider images={AllImagesData.SlickSliderImages.section1} /></RouterLink>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHER-Sectionheader.jpg" alt='name'/>
        <RouterLink to='/mensproduct'><Carousel images={AllImagesData.carouselImages.section5} /></RouterLink>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-JIT-Sectionheader.jpg" alt='name'/>
        <RouterLink ><Carousel images={AllImagesData.carouselImages.section6} /></RouterLink>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-Sectionheader.jpg" alt="name" />
        <RouterLink to='/womensproduct' ><SlickSlider images={AllImagesData.SlickSliderImages.section2}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/UHP-AJIOBeauty-1440x397.jpg' alt="name" />
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-JIT-SectionHeaderStrip.jpg' alt='name' />
        <RouterLink to='/mensproduct' ><Carousel images={AllImagesData.carouselImages.section7}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-Sectionheader.jpg' alt='name' />
        <RouterLink to='/womensproduct'><SlickSlider images={AllImagesData.SlickSliderImages.section3}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHER-Sectionheader.jpg' alt='name' />
        
        <RouterLink to='mensproduct' ><Carousel images={AllImagesData.carouselImages.section8}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHIM-Sectionheader.jpg' alt='name' />
        <RouterLink to='womensproduct' ><Carousel images={AllImagesData.carouselImages.section9}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-Sectionheader.jpg' alt='name' />
        <RouterLink to='womensproduct' ><SlickSlider images={AllImagesData.SlickSliderImages.section4}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-SectionHeader.jpg' alt='name' />
        <RouterLink to='kidsproduct' ><SlickSlider images={AllImagesData.SlickSliderImages.section5}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-SectionHeader.jpg' alt='name' />
        <RouterLink to='womensproduct' ><SlickSlider images={AllImagesData.SlickSliderImages.section6}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-SectionHeader.jpg' alt='name' />
        <RouterLink to='kidsproduct' ><SlickSlider images={AllImagesData.SlickSliderImages.section7}/></RouterLink>
        <img src='https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stnkores%20(D).jpg' alt='name' />
        <Footer/>
    </div>
}





const AllImagesData = {
    carouselImages : {
        section1 : [
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/UHP-D-clearance-flat70.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P4-Casuals-CampusSutraVeroModa-Min60Extra30.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P7-ArrowUSPA-Upto50.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P5-GantSuperdryClarks-Min50Extra35.jpg'
        ],
        section2 : [
            'https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/HSBC-1440x128.jpg'
        ],
        section3 : [
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P1-Sunglasses-LoveMoschinoISIF-Min60.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P2-MensActivewear-NikeAdidas-3050.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P3-ComfortableInnerwearLoungewear-CloviaZivame-Starting199.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P4-trends-under499.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P5-Activewear-PumaPerformax-Min50.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P7-Kids-KBTSKFFrendz-Min50.jpg'
        ],
        section4 : [
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-BankOffer-PayUpto3.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/1440x128-Paytmm.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/Mobikwik-1440x128-23.jpg'
        ],
        section5 : [
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P1-AvaasaNetplayAcai-Upto70.jpg',
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P2-Winterwear-Brands-Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P3-Azorte-Brands-Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P4-Ethnicwear-AcaiAvaasa-Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P5-WomensWesternwear-LeeCooperRio-Upto70.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P7-KidswearKGFrendzRio-Under399.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P8-trendsFootwear-paylessHiAttitude-Upto50.jpg"
        ],
        section6 : [
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P1-Brands-min50+extra30.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P2-Brands-30-50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P3-Brands-under499.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P4-Brands-Min60.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P5-Brands-Flat60.jpg"
        ],
        section7 : [
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P1-Brands-Min40.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P2-brands-Upto80.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P3-brands-Upto75.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P5-brands-min40.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/JIT-D.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P7-brands-min50.jpg"
        ],
        section8 : [
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-d-mhp-uhphim-p1-brands-min40.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-d-mhp-uhphim-p2-brands-2050.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-d-mhp-uhphim-p3-brands-min40.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-d-mhp-uhphim-p4-brands-starting699.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-d-mhp-uhphim-p4-brands-starting699.jpg",
            
        ],
        section9 : [
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-UHPwomen-p1-facescanada-organicharvest-upto50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-UHPwomen-p2-puma-fila-upto60.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-UHPwomen-p3-ritukumar-masaba-starting2499.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-UHPwomen-p4-nike-fila-min40.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-UHPwomen-p5-moschino-guess-upto80.jpg"
        ]

    },
    SlickSliderImages : {
        section1 : [
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P3-Adidas-4060.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P4-Campus-Upto60.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P5-Spykar-4070.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P6-Nike-Upto50.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P7-AX-3050.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P8-Budajeans-Starting499.jpg',
            'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P9-MnS-Min30.jpg'
        ],
        section2:[
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P1-GAP-Upto25.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P2-Produkt-Upto50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P4-Avaasa-Min30.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P5-Netplay-3060.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P6-DNMX-3070.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P7-Karigari0Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P8-JohnPlayers-Upto70.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P9-Walkstyle-min50.jpg"
        ],
        section3 : [
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P1-TopsTees-USPAPuma-Starting499.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P2-Dresses-VeroModaONLY-Starting599.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P3-LevisWrangler-JeansJegings-Starting999.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P4-Formalwear-AllenSollyBlackberrys-Starting899.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P5-ActiveLoungewear-SuperdryAsics-Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P6-MothercareAdidasKids0Starting399.jpg",
            
        ],
        section4 : [
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P1-KurtiKurtaSets-AvaasaGlamroos-Starting599.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P2-Sarees-IndiePicksHritika-Starting432.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P3-handbags-Brands-Starting499.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P4-Jewellery-Brands-Upto80.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P5-Heels-EverqupidMochi-Starting499.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P6-Mensethnicwear-Starting499.jpg"
        ],
        section5 : [
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P1-SportsCasualShoes-ReebokPuma-Starting1199.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P2-CasioFossil-Watches-Upto70.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P3-FlipFlopsSandals-AdidasCampus-Starting299.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P4-Home-GoodomesHomecentre-upto80.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P5-RedTapeFila-Sneakers-Min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P6-FormalShoes-ClarksSteveMadden-min50.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P7-Sunglasses-MoschinoPolaroid-Upto70.jpg"
        ],
        section6 : [
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P1-Trendyol-4065.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P2-Koton-3060.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P3-NA-KD-3060.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P4-WKND-Upto60.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P5-ISawitfirst-3060.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P6-LCWaikiki-3060.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P7-Grimelange-3070.jpg"
        ],
        section7 : [
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P1-Crocspuma-3060.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P2-MnSUCB-Starting559.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P3-USPAPepeJeans-Min40.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P4-HellcatToonyPort-Upto70.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P5-Teamspirit-starting179.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P6-GASKids-Min30.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P7-RioGirl-Starting199.jpg"
        ]
    },



    MyGridImages : {
        section1 : [
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Relianceone.jpg",
            "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-inviteFriends.jpg"
        ],
    }
}