import Header from "./components/Header";
import Post, { PostProps } from "./components/Post";
import StoriesWrapper from "./components/Stories";
import Wrapper from "./components/Wrapper";
import { Story } from "react-insta-stories/dist/interfaces";
function App() {
  const posts: PostProps[] = [
    {
      user: {
        username: "grupoauje",
        avatar: "/auje.png",
      },
      post: {
        createdAt: "29/05/2022",
        location: "Chácara Shalom",
        description:
          "E foi aqui que tudo começou, dois xovens que não tinham ideia o que o futuro guardava para eles. ",
      },
      images: ["acampa/01.jpg", "acampa/02.jpg", "acampa/03.jpg"],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "24/06/2022",
        location: "Emaús",
        description:
          "Meu amor, esse encontro foi muito especial pra nós dois, foi a primeira lembrança que tenho de nós dois, quando eu reparei na sua mão no abraço mais gostoso que recebi. Eu não tinha a menor noção que estariamos aqui dois meses depois, te amo muito 💕",
      },
      images: ["ema/01.jpg", "ema/02.jpg", "ema/03.png"],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "14/08/2022",
        location: "1st date 🌹",
        description:
          "FINALMENTE, depois de uns meses de eu não me tocando que você estava afim de mim, MUITAS conversas no insta, tomei coragem de te chamar pra sair, mas enfim, foi um dia especial, açaízinho, um filme duvidos, beijinhos e um isaías pra finalizar a noite. Lembro quando te deixei em casa, fiquei com saudades 5 minutos depois, te amo muito meu amor",
      },
      images: [
        "https://fastly.4sqi.net/img/general/600x600/731019_mgnJfc2mzC5rLR-LkvIF_5da7AWkrDOuM96OZ5wMw4s.jpg",
        "https://br.web.img3.acsta.net/pictures/22/06/23/22/36/5311627.jpg",
        "https://i.imgur.com/yoRrLDP.jpeg",
      ],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "19/08/2022",
        location: "Minha casa",
        description:
          "Bem, esse rolê foi muito engraçado KKKKK, era pra ser algo bem romântico, mas infelizmente o vinho não permitiu, outra coisa, eu tava MUITO NERVOSO, queria que tudo fosse perfeito, e realmente foi. Nesse dia eu sabia que você era a pessoa certa, você é muito especial pra mim 💝",
      },
      images: [
        "https://br.web.img2.acsta.net/pictures/16/02/03/19/11/303307.jpg",
        "minha-casa/02.jpg",
        "minha-casa/03.png",
      ],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "20/08/2022",
        location: "Casa do Okura",
        description:
          "O que falar desse dia, a cara de todo mundo em CHOQUE foi impagável KKKKK. Eu não achei nenhuma fotinha nossa desse dia, mas foi muito gostoso “assistir” sandman com você 💞",
      },
      images: [
        "https://johto.legiaodosherois.com.br/wp-content/uploads/2022/08/legiao_LtcSosmAT5R9.jpg",
        "https://blog.biglar.com.br/wp-content/uploads/2021/10/typical-brazilian-dish-called-feijoada-made-with-black-beans-pork-sausage.jpg",
        "pessoas.png",
      ],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "27/08/2022",
        location: "Chácara do Nicolas",
        description:
          "Esse rolê foi bem legal, foram as nossas primeiras fotinhas de casal que eu amei 💓 Lembro que a gente ficou lá perto do lago dando várias risadas e beijos, e foi a primeira vez que conversei com sua mãe, confesso que fiquei um pouco timido, e gostei muito dela.",
      },
      images: ["nicolas/01.jpeg", "nicolas/02.jpeg"],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "01/09/2022",
        location: "Dachô 🍣",
        description:
          "Esse aqui foi especial demais, seu aniversário 🙌, eu gostei muito desse dia, lembro da gente pegando o tablet da outra mesa, e a mulher não entendendo nada KKKKK. Foi um dia muito especial pra gente 💝",
      },
      images: ["dacho/01.png", "dacho/02.png"],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "02/09/2022",
        location: "Seu niver 🎉",
        description:
          "CHEGOU O GRANDE DIA! seu niver, e serio, aquele macarrão tava absurdo de bom, esse dia eu real fiquei com MUITA vergonha KKKK. Mas nossas fotinhas ficaram muito fofas, eu te amo muito 💘",
      },
      images: ["niver/01.png", "niver/02.jpg"],
    },
    {
      user: {
        username: "jvgcunha",
        avatar: "/me.jpg",
      },
      post: {
        createdAt: "10/09/2022",
        location: "Casa na árvore 🌲",
        description:
          "Esse aqui eu só coloquei pq fico muito bonito de bolsa, te amo muito é isso",
      },
      images: [
        "us.jpg",
        "https://s2.glbimg.com/6M5HwrninFbI6wvzMpCZR6RE0us=/smart/e.glbimg.com/og/ed/f/original/2020/10/23/casa-na-arvore-tudo-o-que-voce-precisa-saber-antes-de-construir-uma-1.jpg",
      ],
    },

    {
      user: {
        username: "jvgcunha e arissanonaca",
        avatar: "us.jpg",
      },
      post: {
        createdAt: "pra sempre",
        location: "No nosso coração ❤️",
        description:
          "Daqui pra frente, quero construir todos esses momentos com você ❤️",
      },
      images: [],
    },
  ];

  const stories: Story[] = [
    {
      url: "love-u.mp4",
      type: "video",
    },
  ];

  return (
    <Wrapper>
      {/* <Header /> */}
      <StoriesWrapper />
      {posts.map((post) => (
        <Post {...post} key={post.post.createdAt} />
      ))}
    </Wrapper>
  );
}

export default App;
