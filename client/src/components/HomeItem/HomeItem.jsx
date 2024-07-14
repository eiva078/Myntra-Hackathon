import React from "react";
import TextBanner from "./TextBanner";
import ImgLinkContainer from "./ImgLinkContainer";

const HomeItem = () => {
  const sections = [
    {
      title: "DEALS OF THE DAY",
      containerClass: "imgLinkContainer1",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/8c8d79e1-9e43-4130-959c-2732eaed4cb71646061287312-Clinique.jpg",
          alt: "Clinique",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/5e35dfb8-0a19-4f5a-8cd9-7c2b648764e31646061287302-Neemli.jpg",
          alt: "Neemli",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/5f9942e1-305c-4777-b81a-d272133e213e1646061304227-T-Shirts.jpg",
          alt: "T-Shirts",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/f3ed5e09-f8c2-470c-8adf-cf71e644b2c41646061304203-Lingerie.jpg",
          alt: "Lingerie",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/860f160a-91dd-4bcd-b1e5-151f2d6ca3e91646061304219-Trendy-Western-Wear.jpg",
          alt: "Trendy Western Wear",
          link: "",
        },
      ],
    },
    {
      title: "BIGGEST DEALS ON TOP BRANDS",
      containerClass: "imgLinkContainer2",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg",
          alt: "U.S. Polo Assn.",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg",
          alt: "W",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg",
          alt: "Veromodo",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
          alt: "Tommy Hilfiger",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg",
          alt: "F21",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg",
          alt: "Nike",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
          alt: "UCB",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg",
          alt: "Puma",
          link: "",
        },
      ],
    },
    {
      title: "CATEGORIES TO BAG",
      containerClass: "imgLinkContainer3",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
          alt: "Shirts",
          link: "products.html",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
          alt: "T-shirt",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
          alt: "Jeans",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
          alt: "Shorts & Trousers",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
          alt: "Casual shoes",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
          alt: "Infant Essential",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg",
          alt: "Kurtas & Kurta Sets",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg",
          alt: "Sarees",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg",
          alt: "Dresses",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg",
          alt: "Heels",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg",
          alt: "Handbags",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg",
          alt: "Shorts",
          link: "",
        },
      ],
    },
    {
      title: "EXPLORE TOP BRANDS",
      containerClass: "imgLinkContainer4",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg",
          alt: "Nike",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg",
          alt: "Levis",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg",
          alt: "Roadster",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg",
          alt: "Jack & Jones",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg",
          alt: "HRX",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg",
          alt: "Only",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg",
          alt: "Anouk",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg",
          alt: "MAC",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg",
          alt: "W",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg",
          alt: "H&M",
          link: "",
        },
      ],
    },
    {
      title: "MYNTRA LUXE",
      containerClass: "imgLinkContainer5",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/9b74665b-4512-44aa-a0b2-f7758e5eeb661637055308450-WP-PhaseEight.jpg",
          alt: "PhaseEight",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/9a1595d0-5d98-435d-be8c-b86597f068bf1637055308456-WP-Swarovski.jpg",
          alt: "Swarovski",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/77820f04-69d6-476a-b12b-c53385c4c1dc1637055409214-MP-Farah.jpg",
          alt: "Farah",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/dab46379-24d2-4825-a1d8-ab35da877cf81637055409223-MP-HUGOBoss.jpg",
          alt: "HUGO Boss",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/90da2fc5-16d3-4efd-baaa-f7019311c6351637054602799-HP-Tissot.jpg",
          alt: "Tissot",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/da3e7c00-2415-4696-a79d-8606628b82ca1637054602783-HP-POLORalphLauren.jpg",
          alt: "Polo Ralph Lauren",
          link: "",
        },
      ],
    },
    {
      title: "TRENDING IN WESTERN WEAR",
      containerClass: "imgLinkContainer6",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg",
          alt: "Vibrant Colour Blocks",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg",
          alt: "Moss",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg",
          alt: "Moda Rapido Skinny Jeans",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg",
          alt: "Preppy Red",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg",
          alt: "Superhero",
          link: "",
        },
      ],
    },
    {
      title: "TRENDING IN INDIAN WEAR",
      containerClass: "imgLinkContainer7",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg",
          alt: "Whites",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg",
          alt: "Casual Look",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg",
          alt: "Printed Kurta Set",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg",
          alt: "Everyday Kurtas",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg",
          alt: "Fashion Meet Comfort",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg",
          alt: "Print Paradise",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg",
          alt: "Mustard",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg",
          alt: "Kurtasetsbiba",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg",
          alt: "Fusion Dress",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg",
          alt: "Summer Ready Ethnic Dresses",
          link: "",
        },
      ],
    },
    {
      title: "TRENDING IN SPORTS WEAR",
      containerClass: "imgLinkContainer8",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png",
          alt: "Nike",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png",
          alt: "Proline",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png",
          alt: "Asics",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png",
          alt: "Activewear",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg",
          alt: "Nike Revolution",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png",
          alt: "Skechers",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png",
          alt: "Under Armour",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg",
          alt: "Under Armour Joggers",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg",
          alt: "Athleisure",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg",
          alt: "Running",
          link: "",
        },
      ],
    },
    {
      title: "TRENDING IN FOOTWEAR",
      containerClass: "imgLinkContainer9",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg",
          alt: "Neutral Shades",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg",
          alt: "Sneakers for Dancers",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg",
          alt: "Sneakers Men",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png",
          alt: "Outback Outdoor",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg",
          alt: "Flipflops",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg",
          alt: "Sneakers Women",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg",
          alt: "Classics",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg",
          alt: "Color Block",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/76d839cb-b561-42a5-aaa3-6d4e49d0c56f1598030134822-Content-mostselling-Footwear-Rocia.jpg",
          alt: "Rocia",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg",
          alt: "Comfort Wear",
          link: "",
        },
      ],
    },
    {
      title: "TRENDING IN ACCESSORIES",
      containerClass: "imgLinkContainer10",
      images: [
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg",
          alt: "True Wireless",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg",
          alt: "Sporty Watches",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png",
          alt: "White",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png",
          alt: "Fastrack",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png",
          alt: "Minimalist",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png",
          alt: "Imittire",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png",
          alt: "Mangalsutra",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png",
          alt: "Handcrafted Jewel",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg",
          alt: "Rose Gold Watch",
          link: "",
        },
        {
          src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png",
          alt: "White",
          link: "",
        },
      ],
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <TextBanner title={section.title} />
          <ImgLinkContainer
            images={section.images}
            containerClass={section.containerClass}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeItem;
