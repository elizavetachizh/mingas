// import React, { useCallback, useEffect, useState } from "react";
// import { Container } from '../styles';
// import HeaderCompany from '../header_company';
// import Header from '../../../components/header';
// import Footer from '../../../components/footer';
// import {
//   Description,
//   DivAboutManagementBackground,
//   DivAboutmanagementWhiteFont,
//   DivBasicManagement,
//   DivLeadersPhotoPosition,
//   DivPhotoAndDescription,
//   FullName,
//   Position,
// } from '../managment/styles';
// import { management } from '../../../assets/data_management';
// import Leaders from '../managment/divmagement';
// import Modal from '../../../components/modalWindow';
// import ScrollToTop from 'react-scroll-up';
// import up from '../../../assets/png/up_arrow_round.png';
// import { DivText, DivTextPhoto, ImageDiv } from '../history/styles';
// import { t } from 'i18next';
// import photoHistory from '../../../assets/management/0.jpg';
// import Aos from "aos";
// import background from '../../../assets/background/подложка.png'
// export default function Structure() {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [currentLeader, setCurrentLeader] = useState({});
//   const handlerLeaderClick = useCallback((leader) => {
//     setModalVisible(true);
//     setCurrentLeader(leader);
//   }, []);
//   const handleCloseCLick = useCallback(() => {
//     setModalVisible(false);
//   }, []);
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);
//   const styleImage = {
//     backgroundImage: `url(${background})`
//   }
//   return (
//     <Container style={styleImage}>
//       <Header backgroundHeader="blue" />
//       <HeaderCompany />
//       <DivAboutManagementBackground style={styleImage}>
//         <DivAboutmanagementWhiteFont>
//           <DivBasicManagement>
//             <DivPhotoAndDescription>
//               <FullName>Генеральный директор УП «МИНГАЗ»</FullName>
//               <Position>Шолоник Вадим Евгеньевич</Position>
//               <Description>
//                 Руководство текущей деятельностью УП "Мингаз" согласно уставу осуществляет
//                 генеральный директор, избираемый Общим собранием акционеров сроком на три года.
//                 Генеральный директор подотчетен Общему собранию акционеров и Совету директоров
//                 Общества.
//               </Description>
//             </DivPhotoAndDescription>
//             <DivTextPhoto>
//               <DivText data-aos={'fade-up'}>
//                 <p>{t('history:text1')}</p>
//                 <p>{t('history:text2')}</p>
//                 <p>{t('history:text3')}</p>
//                 <p>{t('history:text4')}</p>
//               </DivText>
//               <ImageDiv data-aos={'fade-up'} src={photoHistory} />
//             </DivTextPhoto>
//           </DivBasicManagement>
//           <DivLeadersPhotoPosition>
//             {management.map((element) => (
//               <Leaders
//                 handlerLeaderClick={handlerLeaderClick}
//                 cardImg={element.cardImg}
//                 leader={element}
//                 key={element.fullName}
//                 fullName={element.fullName}
//                 position={element.position}
//                 links={element.links}
//               />
//             ))}
//           </DivLeadersPhotoPosition>
//           {isModalVisible && (
//             <Modal handleCloseCLick={handleCloseCLick} currentLeader={currentLeader} />
//           )}
//         </DivAboutmanagementWhiteFont>
//       </DivAboutManagementBackground>
//       <ScrollToTop showUnder={160}>
//         <img src={up} alt={''} />
//       </ScrollToTop>
//       <Footer />
//     </Container>
//   );
// }
